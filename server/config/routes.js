var users = require("./../controllers/users.js")
var polls = require("./../controllers/polls.js")

module.exports = function(app){
	app.get("/users/index", users.index) // No apostrophes after lines
	app.post("/users", users.create)
	app.get("/polls/index", polls.index)
	app.get("/polls/:id", polls.show)
	app.post("/polls/", polls.create)
	app.patch("/polls/:id", polls.update)
	app.delete("/polls/:id", polls.destroy)
}