function Player(name) {
  this.name = name;
  this.totalScore = 0;

  this.start = function () {
    console.log(`${name} is in the game`);
  };

  this.stop = function () {
    console.log(`${name} left the game`);
  };

  this.pause = function () {
    console.log(`${name} stopped the game`);
  };

  this.add_score = function (score) {
    this.totalScore += score;
  };

  this.show_score = function () {
    console.log(this.totalScore);
  };
}

const p1 = new Player("Ataberk");

p1.start();
p1.stop();
p1.add_score(100);
p1.pause();
p1.show_score();
