var mongoose = require('mongoose'),
Prices = mongoose.model('prices');
var price = require('../models/objectprice.js');
exports.carts = function(req, res){
	Prices.find({price: 1000.00}, function(err, prices)
		var comp = [];

		for(var i = 0; i < prices.length; i++)
		{
			var newpc = {}
			newpc.spec = function(price, scrnsize, harddrive, mem){
				this.price = price;
				this.scrnsize = scrnsize;
				this.harddrive = harddrive;
				this.mem = mem;
			}
			newpc.spec(prices[i].price, prices[i].scrnsize,prices[i].harddrive,prices[i]);
			comp.push(newpc);


		}
		res.render('cart', {comps:comp});
	});
}