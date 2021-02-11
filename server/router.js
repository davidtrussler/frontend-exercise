const express = require('express');
const article = require('./content/article.json'); 
const router = express.Router();

router.get('/', (req, res) => {
	res.render('home', {
		meta: req.app.get('meta')
	});
});

router.get(/\/article\//, (req, res) => {
	let articleName = req.url.split('/')[2]; // this isn't used at the minute
	let data = {article: article};

	res.render('article', data); 
});

module.exports = router;
