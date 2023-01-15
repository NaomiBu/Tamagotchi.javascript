

function Character(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
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
    }
    else {
        return("I feel great");
    }

  };

  Character.prototype.isAlive = function () {
    if (!this.isAlive) {
      throw new Error("Your character is no longer alive");
    }
    if (this.fitness <= 0){
      return false;
    }
    if (this.hunger >= 10){
      return false;
    }
    if (this.age >= 30){
      return false;
    }
    else {
      return true
    }
  };



  const mametchi = new Character("Mametchi");
  const gozarutchi = new Character("Gozarutchi");

  gozarutchi.growUp = function () {
    this.age += 5;
  }; 
   
module.exports = Character; // export it from the file
