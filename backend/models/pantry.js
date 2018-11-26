const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IngredientSchema = new Schema({
	name: String,
	quantity: Number
})


const PantrySchema = new Schema({
	username: { type : String , unique : true, min: [6, 'minimun 6 characters in username'], required:true},
	password: {type:String, min[6, 'min 6 characters in password'], required:true},
	location: Number,
	budget: Number,
	pantryitems: [IngredientSchema]
});
//pantryItems contains subdocuments -> schema objects


const Pantry = mongoose.model('Pantry',PantrySchema);
//every time this coder makes a new pantry, make it in the colletion pantry with the PantrySchema

module.exports = Pantry;
//var myPantry = new Pantry({});