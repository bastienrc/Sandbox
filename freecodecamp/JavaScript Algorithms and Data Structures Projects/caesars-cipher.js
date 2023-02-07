// Caesars Cipher
// --------------

function rot13(str) { // LBH QVQ VG!
  var code = 0;
  var decryter = "";
  for (i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);


    if (code != 32 && code != 33 && code != 63 && code != 46) {
      code += 13;
    }

    // les lettres vont de 65 à 90
    // donc si superieur à 90 on retire 90
    // auquel on ajouste 64 pour se mettre au début
    // soit 26
    if (code > 90) {
      code = code - 26;
    }

    decryter += String.fromCharCode(code);

    console.log(str[i] + " => " + code + " :: " + String.fromCharCode(code));
    //console.log(str[i] + " => " + String.fromCharCode(str.charCodeAt(i)));
    //console.log(str[i] + " => " + str.charCodeAt(i));

  }
  console.log(decryter);
  return decryter;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
