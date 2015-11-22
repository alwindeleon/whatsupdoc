var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
  name : {type: String, required:true},
  specialty: {type :String, required:true},
  tags: [{type :String}],
  reviews: [{type :String}],
  rating: {type :Number, required:true},
  location: [{type :Number}],
  contact: {type:String,required:true},
  email: {type :String, required: true}
});
var Doctor = mongoose.model("doctor",doctorSchema);

module.exports = Doctor;
