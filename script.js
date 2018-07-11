const commission = [6, 6, 6, 7, 8, 5, 10, 9 ,8 ,5]; // change commission here for new results
const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkArray = () => {
  if (!Array.isArray(commission)) {
    return "Not array";
  }
}
checkArray();

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const checkStartValue = commission.reduce(reducer);

const howToPay = (commission, coins) => {

  if (checkStartValue <= 55) {
    return "Wrong number!";
  }

  let howNeedToPay = [];
  let newNum = 0;
  let numberLoopU = 0;
  
  const checkEqually = () => {
    for(let i = 0; i <= commission.length - 1; i++) {
      let commissionCost = commission[i];
        
      if (coins.indexOf(commissionCost)!= -1) {
        howNeedToPay.push(commissionCost);
        coins.splice(coins.indexOf(commissionCost), 1);
      }
      else {
        howNeedToPay.push(0);
      }
    }
  }
  checkEqually();
  
  const checkOther = () => {
    for (let j = 0; j < howNeedToPay.length; j++ ) {
      let zero = howNeedToPay[j];

      if (zero == 0) {
        let indexComm = commission[howNeedToPay.indexOf(zero)];
        for (let u = 0; u <= coins.length - 1; u++) {
          let checkSmaller = indexComm - coins[u];
            if ((checkSmaller < newNum && checkSmaller > 0) || newNum == 0) {
              newNum = checkSmaller;
              numberLoopU = u;
            }   
          }
        howNeedToPay.splice(howNeedToPay.indexOf(zero), 1, coins[numberLoopU]);
        coins.splice(coins.indexOf(coins[numberLoopU]), 1);
        newNum = 0;
        j--; 
      }
    } 
  }
  checkOther();

  return howNeedToPay;
}

console.log(howToPay(commission, coins));