// const mongoose= require('mongoose')
const mongoose = require('mongoose');

const formDataSchema1 = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id:  String, 
  razorpay_signature: String, 
  name:  String,
  mail:String,
  phone: String,
  street: String, 
  add:Object,
  pin:Number,
  country:String,
  amount:String,
  adult:String,
  checkin:String,
  checkout:String,
  storedTripName:String,


  children:String,


 
});

const FormDataa = mongoose.model('atstays', formDataSchema1);

module.exports = FormDataa;
