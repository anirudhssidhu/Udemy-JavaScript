const ATTACK_VALUE = 10;

const MONSTER_ATTACK_VALUE = 15;

let chosenMaxLife = 10;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost!");
  }
  else if(currentMonsterHealth <=0 && currentPlayerHealth <=0){
    alert('You have a DRAW!!')
  }
}
attackBtn.addEventListener("click", attackHandler);