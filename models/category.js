 var mongoose = require('mongoose');

//Define a schema
var categorySchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String,
    }
});


var Category = module.exports = mongoose.model('Category',categorySchema);


//Get All categories

module.exports.getCategories = function(callback) {
    Category.find(callback);
};

//Get Category By Id

module.exports.getCategoryById = function(id, callback) {
    Category.findById(id, callback);
};

//Get Category Article 
module.exports.getArticlesByCategory = function(category, callback) {
    var query = {category : category};
    Category.find(query, callback)
};

//Create a Category

module.exports.createCategory  = function(newCategory, callback) {
    newCategory.save(callback);
};
