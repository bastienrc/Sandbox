
var Person = function(firstAndLast) {

  // FirstName et lastName
  var arr = firstAndLast.split(' ');
  var firstName = arr[0];
  var lastName = arr[1];

  // Complete the method below and implement the others similarly
  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(firstAndLast) {
    arr = firstAndLast.split(' ');
    firstName = arr[0];
    lastName = arr[1];
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
