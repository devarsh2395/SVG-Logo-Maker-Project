const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes');
const SVG = require('./lib/SVG');
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: function(value) {
      if (value.length > 3) {
        return 'Text must be less than or equal to three characters';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal number):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Triangle', 'Circle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal number):'
  }
];

inquirer.prompt(questions).then(answers => {
  let shape;

  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      break;
  }
shape.setColor(answers.shapeColor)
const svg = new SVG()
svg.setText(answers.textColor)
svg.setShape(shape)
return writeFile("logo.svg", svg.render())

})
.then(() => console.log("logo created"))

.catch(err => console.log(err));