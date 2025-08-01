// @ts-check
/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (xCoord, yCoord) {
  this.x = xCoord;
  this.y = yCoord;
}

export class ProgramWindow {
  constructor() {
    // Always create with fixed screenSize and default size/position
    this.screenSize = new Size(800, 600);
    this.size = new Size(); // Creates Size with default width=80, height=60
    this.position = new Position(); // Creates Position with default x=0, y=0
  }

  resize(s) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    this.size.width = Math.max(1, Math.min(s.width, maxWidth));
    this.size.height = Math.max(1, Math.min(s.height, maxHeight));
  }

  move(p) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    this.position.x = Math.max(0, Math.min(p.x, maxX));
    this.position.y = Math.max(0, Math.min(p.y, maxY));
  }
}

export function changeWindow(pw) {
  const [width, height, x, y] = [400, 300, 100, 150];
  
  // First resize to minimum to allow movement
  pw.resize(new Size(1, 1));
  // Then move to desired position
  pw.move(new Position(x, y));
  // Finally resize to desired size
  pw.resize(new Size(width, height));
  
  return pw; // The exercise says to return the modified window
}