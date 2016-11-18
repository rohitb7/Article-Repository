 var mongoose = require('mongoose');

//Define a schema
var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


var Article = module.exports = mongoose.model('Article',articleSchema);


//Get All Articles

module.exports.getArticles = function(callback) {
    
    Article.find(callback);

}

//Get Article By Id

module.exports.getArticleById = function(id, callback) {
    Article.findById(id, callback);
}

//Get Category Article 
module.exports.getArticlesByCategory = function(category, callback) {
    var query = {Category: category};
    Article.find(query, callback)
}

//Create Article
module.exports.createArticle  = function(newArticle, callback) {
	newArticle.save(callback);
}

//update Article
module.exports.updateArticle  = function(id,data,callback) {
	var title = data.title;
	var body = data.body;
	var category = data.category;

	var query = {_id: id};

	Article.findById(id, function(err, article){
		if(!article){
			return next(new Error('Could not load article'));
		}
		else{
			//Update
			article.title = title;
			article.body = body;
			article.category = category;
			article.save(callback);
		}	
	});
}

//remove article
module.exports.removeArticle  = function(id,callback) {
	Article.findById({_id:id}).remove(callback);

}





