require('@babel/register')(); // permet d'écrire du ES6
require('ignore-styles'); // permet d'ignorer les fichiers de style etc...
const enzyme = require('enzyme'); // Mise en place de enzyme
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');

enzyme.configure({ adapter: new Adapter() });
