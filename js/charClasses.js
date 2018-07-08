// Character Classes

//FIGHTER
//////////////////////////////////////////////////////////////

var fighterClass = {
    className: 'Fighter',
    lvl: 1, 
    health: 400,
    maxHealth: 400, 
    attack: 10,  
    hpOnLvlUp: 25,
    attLvlUp: 2,
    xp: 0,  
    xpToLvlUp: 300,
    potions: 3,
    damage: "", 
    calcXpToLvlUp: function(){
        this.xpToLvlUp += (this.lvl*100)*(this.lvl/2);
        return this; 
    },
    maxDmg:20, 
    minDmg: 15, 
    lvlUp: function(){
        this.lvl = ++this.lvl;
        this.maxHealth = this.maxHealth + this.hpOnLvlUp;
        this.health += this.hpOnLvlUp; 
        this.attack = this.attack + this.attLvlUp;  
        this.dmgCalcOnLvl();   
        this.dmgForDisplay();
        alert('You have reached lvl ' + this.lvl + '\nMax Health: ' + this.maxHealth + '\n Damage: ' + this.minDmg + ' - ' + this.maxDmg);
        return this; 
    }, 
    dmgCalcOnLvl: function(){
        this.maxDmg += this.lvl; 
        this.minDmg += this.lvl; 
    }, 
    dmgForDisplay: function(){
      this.damage = this.minDmg + ' - ' + this.maxDmg;
    } 
    
}; 

//ROGUE
////////////////////////////////////////////////////////////////////

var rogueClass = {
    health: 60, 
    attack: 5, 
    speed:10
};

//MAGE
////////////////////////////////////////////////////////////////////

var mageClass = {
    className: 'Mage', 
    health: 400,
    maxHealth: 400, 
    hpOnLvlUp: 40,  
    attack: 8, 
    magic: 50,
    maxMagic: 50,
    mpOnLvlUp: 10,
    xp:0, 
    xpToLvlUp: 300,
    calcXpToLvlUp: function(){
        this.xpToLvlUp += (this.lvl*100)*(this.lvl/2);
        return this;},
    lvlUp: function(){
        this.lvl = ++this.lvl;
        this.maxHealth = this.maxHealth + this.hpOnLvlUp;
        this.health = this.maxHealth; 
        this.maxMagic = this.maxMagic + this.mpOnLvlUp;
        this.magic = this.maxMagic;   
        if (this.lvl %2 == 0) {
            this.speed = this.speed + this.speedLvlUp; 
        }   
     
        alert('You have reached lvl ' + this.lvl);
        return this;
    },    
    spells: {
        missile: {
                name: 'missile', 
                dmg: 40, 
                cost: 10, 
                cast: function(){
                return this.dmg; 
            }
        },  
        sleep: {
            name: 'sleep', 
            dmg: 0, 
            cost: 10, 
            cast: function(){
            console.log(orc.name + ' is asleep.'); 
                }
        }
    }
};

function displayCharacter(){
    statsOutput = "";
$('#stats').innerHTML = statsOutput;
Object.keys(character).forEach(function(key) {
  //var check = typeof(fighterClass[key]);
  //console.log(check);
  if(key == 'health' || key == 'damage'|| key == 'className' || key == 'lvl') {
    if(key != 'className'){
  statsOutput += key + ': ' + character[key] + '</br>';
    }
    else if (key == 'className') {
      statsOutput += character[key] + '</br>';
    } 
  }
});
$('#stats').html(statsOutput);
}