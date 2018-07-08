function wireBattleBtns(badGuy){
  var heroIsDead = false;
  var enemyIsDead = false; 
  $('#btnAttack').on('click', function() {

      if(!heroIsDead){
          hit(badGuy); 
          enemyIsDead = isHeDead(badGuy);
      }
      else if(heroIsDead) {
          //heroDeath();
      }
    
      if(!enemyIsDead){
          getHit(badGuy)
          heroIsDead = amIDead();
          if(heroIsDead) { heroDeath();} 
      }
      else if(enemyIsDead) {
          enemyDeath(badGuy); 
      }
          console.log('Fighter: ' + character.health + '\n' + badGuy.name + ' HP: ' + badGuy.health);   
      });

      $('#btnHeal').on('click', function() {
          if(character.health > 0) {
          usePotion(badGuy);
          }
          if(badGuy.health > 0){
          getHit(badGuy);
          console.log('Fighter: ' + character.health + '\n' + badGuy.name + ' HP: ' + badGuy.health);
          }       
      });
  }

  function unwireBattleBtns(){
      $('#btnAttack').prop('onclick',null).off('click');
      $('#btnHeal').prop('onclick',null).off('click');
  }