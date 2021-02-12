/**
 * Comments class
 */
class Comments {
	constructor() {
		// let _this = this; 
		// this.params = Object.assign({
		// 	homePagePath: '/'
		// }, params);
	}

	/**	
	 * Adds the comments to the DOM
	 */
	// addComments() {
	// 	let _this = this; 

	// 	return new Promise((resolve, reject) => {
	// 		_this.getComments().then(comments => {
	// 			console.log('comments: ', comments); 
	// 		}) 
	// 	})
	// }

	/**
	 * get all the comments from 
	 * https://my-json-server.typicode.com/telegraph/frontend-exercise/comments
	 */
	addComments() {
		const url = 'https://my-json-server.typicode.com/telegraph/frontend-exercise/comments'; 

		fetch(url).then(response => {
			if (!response.ok) {
				console.error(`Failed to get the comments: ${response.status}`); 
			}

			return response.json();
		}).then(function(data) {
			console.log('data: ', data);
			// return data; 
		}); 
	}
}

module.exports = Comments;
