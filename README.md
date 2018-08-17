# warsawjs-workshop-23-shopping-cart
App created for training purposes on the WarsawJS Workshop #23 - End-to-end testing

Demo: http://warsawjs-workshop-23-shopping-cart.surge.sh

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

Prerequisites
-
* Code editor (Webstorm is a good choice)
* Web browser (Chrome)
* Node.js min. version 8.11.3 and NPM min. version 5.6.0
* Git (commandline or Github Desktop)

Getting Started
-
1. Fork the project on Github
2. Clone the repository using Github Desktop or from commandline
```
git clone git@github.com:YOUR_GITHUB_USERNAME/warsawjs-workshop-23-shopping-cart.git
```
3. Enter the project directory
```
cd warsawjs-workshop-23-shopping-cart/
```
4. Install required dependencies

using Yarn
```
yarn
```
or NPM
```
npm i
```
5. Run development server
```
yarn start
```
or
```
npm run start
```
6. Open the url http://localhost:3000/ in the browser and check if the project works correctly (it should look exactly like on [demo](http://warsawjs-workshop-23-shopping-cart.surge.sh))
7. Get familiar with the app
8. Happy coding!

Testing
-
As a testing tool, the project uses [Cypress](https://www.cypress.io).
All the testing libraries do pretty much the same job and have very similar syntax.
The reasons behind choosing Cypress are:
* modern, easy to use and easy to start with
* well-written documentation which leads you through the whole process, from creating your first test to running on the CI environment
* nice gui tool with time travelling feature allowing you to follow exactly the same steps the test runner took. This way you can spot mistakes and debug failures easily
* fast and reliable
* supports asynchronous operations automatically

Running tests
-
Run the following command from the console

if you are using Yarn:
```
yarn test
```
or NPM
```
npm run test
```

Warmup
-
1. Create a test which finds a text on the page (for example a product name)
2. Create a failing test (check for something that doesn't exist on the page) and see what happens

Tasks to complete
-
Think of possible happy and unhappy paths user can take to complete shopping process. What can go wrong? Are there any errors worth checking?

0. If you notice that some elements are not possible to grab using css selectors feel free to add `data-test-id` attributes.
1. Create test scenario for a happy path:
* add item to basket
* proceed to the cart by clicking link in the header menu
* check if the item you added exists in the cart
* proceed to the next step
* fill the delivery address form and go to the next step
* select preferred delivery method and submit your order
* check if the order has been placed (message should be visible)
2. Create a test which adds multiple items to the cart and check if they're all shown
3. Test increasing quantity in the cart and check if the price increases
4. Create a test scenario for validation errors in the address delivery form
5. Check if total price on the order summary page includes delivery fee

Extra tasks
-
1. Setup Continuous Integration for your project ([Travis CI](http://travis-ci.org))
2. Setup a deployment stage on the CI ([surge.sh](http://surge.sh) works good with Travis)

Author
-
Mateusz Sojda - http://github.com/msojda
