// Node package manager import
const inquirer = require("inquirer");

// File system module import
const fs = require("fs");

// Import classes from shapes
const { Triangle, Square, Circle } = require("./lib/shapes");

// This functions writes the SVG file using user inputs
function writeToFile(fileName, answers) {
  // Initialize empty string file
  let svgStr = "";
  // Set width and height of logo container
  svgStr =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag to wrap the text tag
  svgStr += "<g>";
  // Insert shape from users answers to the string
  svgStr += `${answers.shape}`;

  // Conditinal if statement to determine the shape depending on users answer
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgStr += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgStr += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Circle"){
    shapeChoice = new Circle();
    svgStr += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
  }

  // Insert the text and its color
  svgStr += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Close </g> tag
  svgStr += "</g>";
  // Close </svg> tag
  svgStr += "</svg>";

  // Generate svg file using fs by taking filename given in promptUser function below and the svgStr, then if successful print Generated logo.svg  
  fs.writeFile(fileName, svgStr, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Function using inquirer to get answers from user in command line
function promptUser() {
  inquirer
    .prompt([
      {
        // Text
        type: "input",
        message:
          "Enter the text you would like your logo to display? (3 characters max)",
        name: "text",
      },
      // Text color
      {
        type: "input",
        message:
          "Enter the color of your text (color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      // Shape choice
      {
        type: "list",
        message: "Which shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Shape color
      {
        type: "input",
        message:
          "Enter the color of your shape (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      // Make sure no more than 3 characters is inserted
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Write the file to generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// promptUser function is called to initially run it
promptUser();