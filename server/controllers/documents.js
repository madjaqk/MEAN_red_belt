// Controller

var mongoose = require("mongoose")
var Document = mongoose.model("Document")

// Rather than the immediate function, it might be better to do this as a constructor function or just an object literal, but that's now how I've done it thus far.
module.exports = (function(){
	return {
		index: function(req, res){
			Document.find({}, function(err, results){
				if(err){
					res.json(err)
				} else {
					res.json(results)
				}
			})
		}
	}
})()