var enemyArray =[];
enemyArray[0] = {name: 'Goblin', health:50, attack: 7, maxDmg: 20, minDmg: 10, xp:100, gold: 50};
enemyArray[1]  = {name: 'Orc', health:80, attack:9, maxDmg: 25, minDmg: 10,xp:120, gold: 40};
enemyArray[2]= {name: 'Wolf', health: 30, attack: 12, maxDmg: 25, minDmg: 10,xp:110, gold:10};

function enemy({name, health,attack, maxDmg, minDmg, xp, gold}) {
    this.name = name;
    this.health = parseInt(health); 
    this.attack = parseInt(attack);  
    this.maxDmg = parseInt(maxDmg);
    this.minDmg = parseInt(minDmg) 
    this.xp = parseInt(xp); 
    this.gold = parseInt(gold);  
    }

function enemyRandomizer(array){
    var randomEnemy = array[Math.floor(Math.random() * array.length)];
    return randomEnemy; 
}

function displayEnemy(e) {
    var enemyStats = "";
    Object.keys(e).forEach(function(key){
        if(key == 'name' || key == 'health' || key == 'attack') {
          if(key != 'name') {
            enemyStats += key + ": " + e[key] + '</br>';  
          }
          else if(key == 'name') {
            enemyStats += e[key] + '<br>';
          }
        }
    });
    $('#enemy').html(enemyStats);
}