// Palindrome Checker
// ------------------

function palindrome(str) {
  // Conversion de str en minuscule
  str = str.toLowerCase();

  // Suppression des carracteres non alphanumerique
  var regex = /[^A-Za-z0-9]/g;
  str = str.replace(regex, "");
  //console.log(str);

  var strReverse = str.split('').reverse().join('');
  console.log(strReverse);
  if (str === strReverse) {
    return true;
  }
  else {
    return false;
  }
}

// palindrome("eye");
