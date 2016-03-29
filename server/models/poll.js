// Model

var mongoose = require("mongoose")

var OptionSchema = new mongoose.Schema(
	{
		option: { 
			type: String, 
			required: true,
			minlength: 3, 
		},
		votes: {
			type: Number,
			default: 0
		}
	}
)

var PollSchema = new mongoose.Schema(
	{
		question: { 
			type: String, 
			required: true,
			minlength: 8, 
		},
		_asker: {
			type: mongoose.Schema.Types.ObjectId, 
			ref: "User"
		},
		options: [OptionSchema]
	},
	{ timestamps: true} // This line is options for the schema, not fields
)

mongoose.model("Poll", PollSchema)