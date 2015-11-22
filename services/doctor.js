var Doctor= require('../models/doctor');



exports.getDoctor= function(name,callback,errback){
  Doctor.findOne({name: name},callback);
};


exports.addReview = function(info, callback){
  console.log(info.name);
  Doctor.findOne({name:info.name},function(err,doc){
    console.log(err);
    console.log(doc.rating)
    console.log("info rating:" +info.rating)
    doc.rating = (doc.rating+Number(info.rating))/2;
    console.log("new doc.rating:" +doc.rating);
    doc.reviews.push(info.info);
    doc.save();
    callback();
  });
};

exports.searchMatches = function(tags, callback){
  Doctor.find({tags:{$all:tags}}, callback);
};

// exports.saveDoctor= function(info, callback, errback){
//    var rawTags = info.tags.split(',');
//    var rawCoordinates = info.coordinates.split(',');
//   Doctor.findOne({name: info.name},function(err,doctor){
//     if(err) console.log(err);
    
//     if(!doctor){
//       Doctor.create({
//         name: info.name,
//         specialty: info.specialty,
//         rating: 0,
//         contact: info.contact
//       }, function(err, doctorQ){
//         Doctor.update({name:doctorQ.name},
//           {$pushAll: {tags:rawTags},{location:rawCoordinates}},{upsert:true},
//           function(err){
//             if(err){
//               console.log(err);
//             }else{
//               console.log("successfully added");
//               return callback(true);
//             }
//           })
        
//       });
//     }else{
//       return callback(false);
//     }
    
//   })
// };

// exports.saveDoctor = function(info, callback){
//   Charity.findOne({username: info.username},function(err,charity){
//     if(err) console.log(err);
//     if(!charity){
//       Charity.create({
//         name: info.name,
//         username: info.username,
//         password: info.password,
//         about: info.about,
//         email: info.email,
//         link: info.link
//       }, function(err, charityQ){
//         var rawTags = info.tags.split(',');
//         Charity.update({name:charityQ.name},
//           {$pushAll: {tags:rawTags}},{upsert:true},
//           function(err){
//             if(err){
//               console.log(err);
//             }else{
//               console.log("successfully added");
              
//             }
//           })
//         console.log("successfully saved:" + charity);

//         var rawNeeds = info.needs.split(',');
//         Charity.update({name:charityQ.name},
//           {$pushAll: {needs:rawNeeds}},{upsert:true},
//           function(err){
//             if(err){
//               console.log(err);
//             }else{
//               console.log("successfully added");
//               return callback(true);
//             }
//           })
        
//       });
//     }else{
//       return callback(false);
//     }
    
//   })
  
// };
