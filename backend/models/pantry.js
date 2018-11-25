const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IngredientSchema = new Schema({
	title: String
})


const PantrySchema = new Schema({
	username: String,
	pantryitems: [IngredientSchema]
});



const Pantry = mongoose.model('pantry',PantrySchema);
//every time this coder makes a new pantry, make it in the colletion pantry with the PantrySchema

module.exports = Pantry;
//var myPantry = new Pantry({});