class character {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 150;

    this.position = {
      x: 1,
      y: gameHeight - this.height - 10,
    };
  }

  draw(ctx) {}
}
