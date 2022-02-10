const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://vigneshk:0FUq5aupPLL3rriM@cluster0.ca6v9.mongodb.net/blog-app?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: {
			type: String,
		 	required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);
var UserInfo = mongoose.model("Users", UserSchema);
module.exports = UserInfo; 
