const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
require('jest-styled-components');

Enzyme.configure({ adapter: new EnzymeAdapter() })
