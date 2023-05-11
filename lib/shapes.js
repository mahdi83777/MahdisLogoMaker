// Shape class using constructor which will have a color
class Shape {
    constructor() {
      this.color = "";
    }
    // setColor function for the Shape class
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Triangle class using inheritance from Shape class
  class Triangle extends Shape {
    render() {
      // Returns polygon with color input
      return `<polygon points="155, 20 246, 184 58, 184" fill="${this.color}" />`;
    }
  }
  
  // Square class using inheritance from Shape class
  class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="75" y="42" width="165" height="165" fill="${this.color}" />`;
    }
  }
  
  // Circle class using inheritance from Shape class
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="160" cy="120" r="90" fill="${this.color}" />`;
    }
  }
  
  // Export classes
  module.exports = { Triangle, Square, Circle };
  