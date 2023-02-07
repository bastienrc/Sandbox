// Roman Numeral Converter
// -----------------------

function convertToRoman(num) {
  var numRoman = "";

  console.log("Le nombre de départ est : " + num);

  while (num >= 1000) {
    num -= 1000;
    numRoman += 'M';
    //console.log("-1000, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 900) {
    num -= 900;
    numRoman += 'CM';
    //console.log("-900, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 600) {
    num -= 600;
    numRoman += 'DC';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 500) {
    num -= 500;
    numRoman += 'D';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 400) {
    num -= 400;
    numRoman += 'CD';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 100) {
    num -= 100;
    numRoman += 'C';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 90) {
    num -= 90;
    numRoman += 'XC';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 60) {
    num -= 60;
    numRoman += 'LX';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 50) {
    num -= 50;
    numRoman += 'L';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 40) {
    num -= 40;
    numRoman += 'XL';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 10) {
    num -= 10;
    numRoman += 'X';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 9) {
    num -= 9;
    numRoman += 'IX';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 5) {
    num -= 5;
    numRoman += 'V';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 4) {
    num -= 4;
    numRoman += 'IV';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  while (num >= 1) {
    num -= 1;
    numRoman += 'I';
    //console.log("-500, num = " + num + " et numRoman = " + numRoman);
  }

  console.log("Le nombre d'arrivé est : " + num);
  console.log("numRoman : " + numRoman);
  return numRoman;
}

// convertToRoman(36);

