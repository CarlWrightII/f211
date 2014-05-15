<<<<<<< HEAD
var mongoose = require('mongoose'),
prices = mongoose.model('prices');

=======
/*var mongoose = require('mongoose'),
Prices = mongoose.model('prices');

var mongoose = require('mongoose'),
Prices = mongoose.model('prices');*/
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801
exports.carts = function(req, res)
{
	res.render('LTstore', {intro: 'Computer Configurations'});	
}

exports.Order = function(req, res){
	var price = req.body['price'];
	var scrnsize = req.body['scrnsize'];
	var harddrive = req.body['harddrive '];
	var memsize = req.body['memsize'];
	
	var Computer = new Computer({
		price: price,
		scrnsize: scrnsize,
		harddrive: harddrive,
		mem: mem

	});
	Computer.save(function(err, prices){
		if(err) {
			return console.log(err);
		}
	});

}