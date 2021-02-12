const Comments = require("./comments");

describe( 'Comments', () => {
	describe( 'getComments', () => {
		it("should return the correct data", () => {
			// TODO: mock fetch so that test can run
			// fetch = jest.fn(() => Promise.resolve(['a', 'b', 'c']));

			const comments = new Comments();
			// comments.addComments(); 
			// expect(document.querySelectorAll('[data-section="comments"]').length).toBe(1);
		});
	});
});
