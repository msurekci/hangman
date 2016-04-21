Hello World example using React
=======
This application shows a basic example of using React and some of the ecosystem CTM has currently selected to build their React Applications.

# Eco system

#### Development
[Babel] (https://babeljs.io/) - Transcompiler for ES6/ES7/React code. Required for browsers

[ Webpack ](https://webpack.github.io/) - Bundler to bundle JavaScript and CSS

#### Testing
[ Enzyme ](https://github.com/airbnb/enzyme) - Testing framework for React

# Quick Start

```bash
git clone git@github.com:ComparetheMarket/frontend.hello-world.git

npm install

npm start
```

Go to http://localhost:3000

# Running Tests and ESLint

A simple test has been created to show you how to test components using air-bnbs enzyme.

#### Run the test
```bash
npm test
```

ESLint has also been setup, so make sure the JavaScript standards are consistent between developers.

#### Running ESLint

```bash
npm run lint
```


*Note: The application was built with express generate. Simple node backend to serve up the example.*
