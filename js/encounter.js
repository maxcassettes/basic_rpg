function encounter() {
    unwireBattleBtns();
    badGuy = new enemy(enemyRandomizer(enemyArray));
    //character.health = 100;
    console.log('Battle Begin');
    console.log('Fighter: ' + character.health + '\n' + badGuy.name + ' HP: ' + badGuy.health);
    displayCharacter();
    displayEnemy(badGuy);
    $('#charTurn').html(badGuy.name + ' appeared!');
    $('#badTurn').html('Prepare for battle.');
    $('#header').html('XP: ' + character.xp + '</br>XP To ' + (character.lvl + 1) + ': ' + character.xpToLvlUp + '<br>Gold: ' + character.gold);
    wireBattleBtns(badGuy);
}

function hit(badGuy){

    var dmg = Math.floor(Math.random() * (character.maxDmg - character.minDmg + 1)) + character.minDmg;
    console.log('You did ' + dmg + ' damage to ' + badGuy.name);
    var html = 'You did ' + dmg + ' damage to ' + badGuy.name;
    $('#charTurn').html(html);
    badGuy.health -= dmg;
    displayEnemy(badGuy);

}

function getHit(badGuy){
    var dmg = Math.floor(Math.random() * (badGuy.maxDmg - badGuy.minDmg + 1)) + badGuy.minDmg;
    console.log(badGuy.name + ' did ' + dmg + ' damage to you.');
    var html = badGuy.name + ' did ' + dmg + ' damage to you.';
    $('#badTurn').html(html);
    character.health -= dmg;
    displayCharacter();
}

function usePotion(badGuy){
    if (character.potions > 0 ) {
        character.health += 40;
        character.potions -= 1;
        console.log('You healed 40 hitpoints');
        $('#charTurn').html('You healed 40 hitpoints');
    }
    else {
    console.log('No potions');
    $('#charTurn').html('You have no potions');
    hit(badGuy);
    }
}
