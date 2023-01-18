

const MAXIMUM_FITNESS = 10
function Character(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
      };
  
 Character.prototype =  {
        get isAlive() {
          return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        },
       
      };   
  Character.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3; 
  };

  Character.prototype.walk = function () {
    this.fitness += 4; 
    this.fitness = Math.min(10, this.fitness + 4);
    
  };

  
  Character.prototype.feed = function () {
    if (!this.isAlive) {
      throw new Error("Your character is no longer alive");
    }
    this.hunger -= 3; 
    this.hunger = Math.max(0, this.hunger - 3)
  };

  Character.prototype.checkUp = function () {
    if (this.fitness <= 3){
      return ("I need a walk");
    }
    if (this.hunger >= 5){
      return("I am hungry");
    }
    if (this.hunger >= 5 && this.fitness <= 3){
      return ("I am hungry AND I need a walk ");
    } else {
        return("I feel great");
    }

  };

  const mametchi = new Character("Mametchi");

   
module.exports = Character; // export it from the file
