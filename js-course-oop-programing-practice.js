class Animal {
    constructor (color='yellow', energy=5) {
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if (this.energy > 0){
            this.energy -= this.energy;
            console.log('Energy is decreasing, currently at:', this.energy);
        } else {
            this.sleep();
        }

    }
    sleep(){
        this.energy += this.energy;
        console.log(this.energy);
    }
    getColor(){
        console.log(this.color);
    }

}

class Cat extends Animal {
    constructor(sound='meow', canJumpHigh=true, canClimbTrees=true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        // Cat sound.
        console.log(this.sound);
    }

}
class Housecat extends Cat {
    constructor(houseCatSound='wao', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if (!option){
            super.makeSound();
        } else {
            // Housecat sound.
            console.log(this.houseCatSound);
        }
    }
}
class Tiger extends Cat {
    constructor(tigerSound='grr', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if (!option){
            super.makeSound();
        } else {
            // Tiger sound.
            console.log(this.tigerSound);
        }
    }
}
class Bird extends Animal {
    constructor(sound='chip-chip', canFly=true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Parrot extends Bird {
    constructor(canTalk, sound, canFly, color, energy){
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if (option){
            super.makeSound();
        } 
        if (this.canTalk) {
            // Talk sound.
            console.log('Talking.');
        }
        if (!option) {
            console.log('This is silent bird.');
        }
    }
    
}
console.log('New Bird:')
var parrot1 = new Parrot(true);
parrot1.makeSound(true);

console.log('New House Cat:');
var ken = new Housecat();
ken.makeSound(true);

console.log('End of my js file...!');