const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')
const Mine = require('./mine')
const Booty = require('./booty')
const P5 = require('./p5');

class LevelLibrary{
  level(id){
    switch(id) {
    case 1:
        return this.level1;
        break;
    case 2:
        break;
    case 3:
        break;
     }

  }

  get level1(){
    var mines = [(new Mine(new Vector(100,0,0), 20, 15))];
    var booty = [];
    return { mines: mines, booty: booty }
  }
}

module.exports = LevelLibrary;