
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  show() {
    console.log(`Width: ${this.width}; Height: ${this.height};`);
  }
}

var r1 = new Rectangle(10, 5);
var r2 = new Rectangle(12, 6);

r1.show();
r2.show();
