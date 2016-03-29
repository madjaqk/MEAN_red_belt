// Model

var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema(
	{
		name: { 
			type: String, 
			required: true,
			unique: true 
		},
	},
	{ timestamps: true} // This line is options for the schema, not fields
)

mongoose.model("User", UserSchema)