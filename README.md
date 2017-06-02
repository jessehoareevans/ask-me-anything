# ask-me-anything

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/jessehoareevans/ask-me-anything.git>`
* `cd ask-me-anything`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Planning

1. Configuration/dependencies
  * All dependencies can be found and are located in the package.json and the bower.json files at the top level of this project.
  * Ember CLI is the main tool used in this application, for more information about the commands available, in the terminal type "ember --help" to see a full list.

2. Specs
  * Can a user ask a question and will this question be displayed?
  * Will the attributes of author, content and notes be applied to the question that was asked?
  * Can a user answer a question and will the answer be displayed within that question specifically?
  * Will the attributes of author and content be applied to an answered question?
  * Will every question be displayed on the homepage displaying only the question and the author?
  * Can the user click a question and be routed to a specific page to view more details?
  * Can one question have more than one answer?

3. Integration
  * Initial routes will be a landing, contact and about page.
  * Template/html page for the entire app, header and navbar on each page
  * Template/html page for asking and answering a question
  * Template/html page for each individual question
  * Display all question on the index page
  * Integrate feature that allows more than one answer to a question

4. UX/UI
  * Include and modify style of the page to make the app more appealing to the user.
  * Develop custom style

5. Polish
  * Refactor minor portion of any redundant work
  * Delete unused code
  * Make README awesome

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
