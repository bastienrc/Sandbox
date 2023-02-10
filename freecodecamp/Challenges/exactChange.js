function checkCashRegister(price, cash, cid) {

  // Convertion en pennies
  price *= 100; cash *= 100;

  // Really we're just trying to get the coins for cash-price
  var vals = [1,5,10,25,100,500,1000,2000,10000]; // How much each denomation is worth (in pennies)
  var cidHave = cid.map(x=>Math.round(x[1]*100)); // Convert each denomination we have into pennies (e.g. $1.05 in nickels to 105)
  var cidAmts = cidHave.map((x,i)=>Math.floor(x/vals[i])); // e.g. 105 pennies worth in nickels to 21 nickels or 20000 pennies worth in quarters to 80 quarters
  var best = [[0,0,0,0,0,0,0,0,0]]; // Start with $0.00 = 0 of each coin
  var bestScoreList = [0]; // # of coins for $0.00 is 0
  for (var i = 1; i <= cash-price; i++) { // For $0.00 to amt
    best[i] = [...Array(cid.length)].map(x=>0); // Empty array of denominations
    var bestScore = i+1; // Start just above the max amount in coins (all pennies + 1)
    for (var c = 0; c < cid.length; c++) { // For each denomination
      if (vals[c] > i || best[i-vals[c]][c] >= cidAmts[c]) continue; // If denomination is too high or we don't have enough, continue
      var bestIndex = i-vals[c]; // Index in "best" of the lower coin we're accessing. (e.g. dime and $0.25 would give $0.15 or index 15)
      var score = 0;
      if (bestScoreList[bestIndex] != 0 || bestIndex == 0) { // Make sure we don't have bestScore[bestIndex] being 0 coins AND bestIndex not being $0.00
        score = bestScoreList[bestIndex]+1; // We're adding a coin... this denomation
      }
      if (score < bestScore) { // Better score than another denomation? Heck yeah, change it!
        bestScore = score;
        best[i] = best[bestIndex].slice(0);
        best[i][c] += 1;
      }
    }
    bestScoreList[i] = bestScore; // Set best score and continue to next iteration
  }
  // "finish" converts it to the correct format (name and into dollars) in highest to lowerest denomination, e.g. [["QUARTER", 1.25], ["DIME", 0.3]]
  var finish = best[cash-price].map((x,i)=>{ return [cid[i][0], x*vals[i]/100]; }).filter(x=>x[1]!=0).reverse();
  if (!finish.length) return 'Insufficient Funds'; // Make sure we have coins
  else if (finish.reduce((a,b)=>a+b[1],0) == cidHave.reduce((a,b)=>a+b/100, 0)) return 'Closed'; // Can't be left with no coins (for some reason, I didn't design the problem)
  else return finish; // Yes!!
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
