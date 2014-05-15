var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

<<<<<<< HEAD
var price = new Schema({ //The model based off the data collected
=======
var price = mongoose.model("prices", new Schema({ //The model based off the data collected
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801
		price: Number,
		scrnsize: Number,
		harddrive: Number,
		mem: Number
});
<<<<<<< HEAD
mongoose.model("prices", price);
=======
module.exports = mongoose.model("prices", price);
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801
