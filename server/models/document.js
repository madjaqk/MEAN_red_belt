// Model

var mongoose = require("mongoose")

var DocumentSchema = new mongoose.Schema(
	{
		field: { 
			type: String, 
			required: true,
			minlength: 4, 
			unique: true 
		},
	},
	{ timestamps: true} // This line is options for the schema, not fields
)

mongoose.model("Document", DocumentSchema)