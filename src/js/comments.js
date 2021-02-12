/**
 * Comments class
 */
class Comments {
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
			let section = document.createElement('section'),
					heading = document.createElement('h1'),
					list_comments = document.createElement('ul'),
					list_sort = document.createElement('ul'),
					sort = document.createElement('div'),
					sortHead = document.createElement('h3'),
					sortItems = ['likes', 'newest'],
					associatedArticles = document.querySelector('[data-section="associatedArticles"]');

			for (let sortItem of sortItems) {
				let listItem = document.createElement('li'); 
				let anchor = document.createElement('a'); 

				anchor.href = sortItem; 
				anchor.textContent = sortItem; 
				listItem.appendChild(anchor);
				list_sort.appendChild(listItem); 
			}

			for (let comment of comments) {
				let listItem = document.createElement('li'); 
				let html = `
					<p class="comments__item__header">${comment.name}</p>
					<time class="comments__item__date">${comment.date}</time>
					<span class="comments__item__likes">${comment.likes} likes</span>
					<p class="comments__item__body">${comment.body}</p>
				`; 

				listItem.className = 'comments__item'; 
				listItem.innerHTML = html;
				list_comments.appendChild(listItem); 
			}

			sortHead.textContent = 'Sort';
			heading.textContent = `${comments.length} comments`;
			heading.className = 'comments__heading'; 
			section.dataset.section = 'comments';
			section.className = 'comments'; 
			sort.className = 'comments__sort'; 
			header.className = 'comments__header'; 
			sort.appendChild(sortHead);
			sort.appendChild(list_sort);
			section.appendChild(heading);
			section.appendChild(sort);
			section.appendChild(list_comments);
			associatedArticles.parentNode.insertBefore(section, associatedArticles); 
		}); 
	}
}

module.exports = Comments;
