var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var price = mongoose.model("prices", new Schema({ //The model based off the data collected
		price: Number,
		scrnsize: Number,
		harddrive: Number,
		mem: Number
});
module.exports = mongoose.model("prices", price);
