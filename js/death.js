    function amIDead(){
        if(character.health <= 0) {
            return true; 
        } else {
            return false; 
        }
    }

    function heroDeath(){
            console.log('You died.');
            $('#charTurn').html = 'You died';
            $('badTurn').html = 'Game over.'; 
            $('#fightControls').fadeOut('slow');
            $('#btnStart').attr('disabled', true);
    }

    function isHeDead(badGuy){
        if(badGuy.health <= 0){
            return true; 
        }
        else {
            return false; 
        }
    }

    function enemyDeath(badGuy){
            console.log('Enemy died'); 
            document.getElementById('charTurn').innerHTML = 'You defeated the ' + badGuy.name;
            document.getElementById('badTurn').innerHTML = 'Earned ' + badGuy.xp + ' experience and ' + badGuy.gold + ' Gold!'; 
            character.xp = character.xp + badGuy.xp;
            character.gold += badGuy.gold;
            if(character.xp >= character.xpToLvlUp){ 
                character.lvlUp(); 
                character.calcXpToLvlUp();
                displayCharacter();
            }
            $('#header').html('XP: ' + character.xp + '</br>XP To ' + (character.lvl + 1) + ': ' + character.xpToLvlUp + '<br>Gold: ' + character.gold);
            $('#fightControls').fadeOut('slow');  
    }