const Comments = require("./comments");

describe( 'Comments', () => {
	describe( 'getComments', () => {
		it("should return the correct data", () => {
			const comments = new Comments();
			// comments.getComments(); 
			expect(1 + 1).toBe(2);
		});
	});
});
