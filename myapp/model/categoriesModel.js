const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    name: { type: String, require: true },
    imageUrl:{type:String,require:true}
})

module.exports = mongoose.models.categories || mongoose.model('categories', categoriesSchema);