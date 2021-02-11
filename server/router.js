const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('home', {
		meta: req.app.get('meta')
	});
});

router.get(/\/article\//, (req, res) => {
	let articleName = req.url.split('/')[2]; 

	console.log('articleName: ', articleName); 

	res.render('article'); 
});

module.exports = router;
