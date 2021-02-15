# Responsive News Article

This is an app designed to create a responsive news article to match supplied designs.

It runs on an [express](https://expressjs.com/) server and uses 
- [webpack](https://webpack.js.org/) for JavaScript compilation
- [PostCSS](https://postcss.org/) for CSS concatenation
- [handlebars](https://handlebarsjs.com/guide/) for templating
- [Jest](https://jestjs.io/) for unit testing

The article and related posts are implemented server-side and comments are implemented client-side and injected with JavaScript once the DOM is ready. 

## Prerequisites

- [NodeJS](https://nodejs.org/)

## Set up

- Clone the project lcoally with `git clone https://github.com/davidtrussler/responsive-news-article.git`
- `cd responsive-news-article`
- Install packages with `npm install`
- create the CSS and JS bundles and watch for changes with `npm run watch`
- Start a local server with `npm run dev`
- Point your browser at [http://localhost:3000/](http://localhost:3000/)
- Run tests with `npm run test`

## Reading articles

Articles are served from a URL in the form [http://localhost:3000/article/name-of-the-article](http://localhost:3000/article/name-of-the-article)

## TODO

- [ ] Parse timestamps into human readable form and utilise semantic parts of the `<time>` element
- [ ] Add the meta data attributes
- [ ] Improve routing so that the same article is not always fetched regardless of URL
- [ ] Mock the fetch method in Jest to test that articles are being dealt with correctly when received
- [ ] Add full suite of tests for comments
- [ ] Tidy up variable use of createElement and back-tick string creation
- [ ] Deal with the width of the hero image better
- [ ] Add `<title>` element to `<head>`
- [ ] Add styles for responsiveness on larger viewports
- [ ] Add sort functionality
- [ ] Review/improve colour contrasts for A11Y
- [ ] Review/improve keyboard access for tabbing/focus styles etc.
- [ ] Review/improve screen reader semantics including addition of aria values
