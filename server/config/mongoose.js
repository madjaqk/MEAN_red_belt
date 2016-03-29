var mongoose = require("mongoose")
var fs = require("fs")

mongoose.connect("mongodb://localhost/red_belt_two")

var models_path = __dirname + "/../models" // If this doesn't work, use path.join()

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") > 0) {
		require(models_path + "/" + file)
	}
})