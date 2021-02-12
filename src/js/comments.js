/**
 * Comments class
 */
class Comments {
	constructor() {
	}

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
		}).then(function(comments) {
			let section = document.createElement('section');
			let heading = document.createElement('h1');
			let list = document.createElement('ul');
			let associatedArticles = document.querySelector('[data-section="associatedArticles"]');

			heading.textContent = `${comments.length} comments`; 

			for (let comment of comments) {
				let listItem = document.createElement('li'); 
				let html = `
					<h2>${comment.name}</h2>
					<time>${comment.date}</time>
					<span>${comment.likes} likes</span>
					<p>${comment.body}</p>
				`; 

				listItem.innerHTML = html; 
				list.appendChild(listItem); 
			}

			section.dataset.section = 'comments'; 
			section.appendChild(heading);
			section.appendChild(list); 
			associatedArticles.parentNode.insertBefore(section, associatedArticles); 
		}); 
	}
}

module.exports = Comments;
