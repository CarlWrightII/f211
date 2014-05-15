var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var price = new Schema({ //The model based off the data collected
		price: Number,
		scrnsize: Number,
		harddrive: Number,
		mem: Number
});
mongoose.model("prices", price);
