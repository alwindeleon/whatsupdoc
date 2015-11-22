var express = require('express');
var router = express.Router();
//get services
var DoctorServices = require('../services/doctor');

//render home page
 router.get('/',function(req,res,next){
 	return res.render('home');
 });

//search endpoint with tags
 router.post('/search',function(req, res, next){
 	console.log(req.body);
 	if(req.body == null) return res.json({error: "no match"});

 	console.log("TAG IS: " + req.body.tags);
 	DoctorServices.searchMatches(req.body.tags.split(','), function(err, results){
 		console.log(results);
 		if(err) console.log(err);
 		console.log(results);
 		return res.render("results-page",{results: results});
 	});
 });

//go to doctor page
router.get('/doctor/:name', function(req,res, next){
	DoctorServices.getDoctor(req.params.name, function(err, doctor){
		if(err) console.log(err);
		if(!doctor) res.send("NO DOCTOR WITH THAT NAME DOC");
		return res.render("doctor",{doctor:doctor});
	});
});

//add review
router.post('/reviews/:name',function(req,res,next){
	req.body.name = req.params.name;
	console.log(req.body);
	DoctorServices.addReview(req.body,function(){
		console.log("SAVED!");
		return res.redirect("/doctor/"+req.params.name);

	})

});




module.exports = router;