// Controller

var mongoose = require("mongoose")
var Poll = mongoose.model("Poll")

// Rather than the immediate function, it might be better to do this as a constructor function or just an object literal, but that's now how I've done it thus far.
module.exports = (function(){
	return {
		index: function(req, res){
			Poll.find({}).populate("_asker").exec(function(err, results){
				if(err){
					res.json(err)
				} else {
					res.json(results)
				}
			})
		},

		show: function(req, res){
			Poll.findOne({_id: req.params.id}, function(err, question){
				if(err){
					console.log("polls.show error", err)
					res.json(err)
				} else {
					res.json(question)
				}
			})
		},

		create: function(req, res){
			var question = new Poll(req.body)
			question.save(function(err){
				if(err){
					console.log("polls.create error", err)
					res.json({status: "error", error: err})
				} else {
					res.json({status: "OK"})
				}
			})
		},

		update: function(req, res){
			Poll.findOne({_id: req.params.id})
				.then(function(poll){
					poll.options[req.body.choice].votes++
					poll.save(function(err){
						if(err){
							console.log("polls.update error", err)
							res.json(err)
						} else {
							res.json(poll)
						}
					})
				})
		},

		destroy: function(req, res){
			Poll.remove({_id: req.params.id}, function(err){
				if(err){
					console.log("polls.destroy error", err)
					res.json(err)
				} else {
					res.json({})
				}
			})
		}
	}
})()