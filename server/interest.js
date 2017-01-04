var mongoose = require('mongoose');

var interestSchema = new mongoose.Schema({

	name: String

});

mongoose.model('Interest', interestSchema);