// Controller

var mongoose = require("mongoose")
var User = mongoose.model("User")

// Rather than the immediate function, it might be better to do this as a constructor function or just an object literal, but that's now how I've done it thus far.
module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, results){
				if(err){
					res.json(err)
				} else {
					res.json(results)
				}
			})
		},
		create: function(req, res){
			User.findOneAndUpdate({name: req.body.name}, {name: req.body.name}, {upsert: true, new: true}, function(err, results){
				if(err){
					console.log("users.create findOneAndUpdate error", err)
					res.json(err)
					return
				}
			})
			User.findOne({name: req.body.name}, function(err, results){
				if(err){
					console.log("users.create findOne error", err)
					res.json(err)
					return
				} else {
					res.json(results)
				}
			})
		}
	}
})()