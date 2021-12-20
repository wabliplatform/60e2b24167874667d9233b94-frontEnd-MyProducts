const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'createproduct' : './javascript/createproduct.js',
	'about' : './javascript/about.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};