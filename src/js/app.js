const Utils = require('./utils');
const Comments = require('./comments'); 
const comments = new Comments();

new Utils();

document.addEventListener('DOMContentLoaded', function() {
	comments.addComments();
}); 
