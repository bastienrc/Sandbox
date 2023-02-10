function updateInventory(arr1, arr2) {

  var arr = [];

  arr2.forEach(function(elt) {
    // Console.log(elt[0] + ' - ' + elt[1]);
    var tmp = 0;
    arr1.forEach(function(elt2) {
      if (elt[1] === elt2[1]) {
        elt2[0] += elt[0];
      } else {
        tmp++;
      }
      //console.log(elt[0] + ' - ' + elt[1]);
    });

    if (tmp === 4) {
      //console.log('Ajoute le nouveau produit :: ' + elt[1]);
      arr.push(elt);
      //console.table(arr);
    }
  });

  var arr3 = arr1.concat(arr);

  if (arr3.length === 0) {
    arr3 = arr2;
    //console.log("C'est vide");
  }

  // Trie par ordre alphabétique
  arr3.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return arr3;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
