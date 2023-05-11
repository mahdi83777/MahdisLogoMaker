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
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class using inheritance from Shape class
  class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class using inheritance from Shape class
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Export classes
  module.exports = { Triangle, Square, Circle };
  