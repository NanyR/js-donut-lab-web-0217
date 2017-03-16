//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
function DonutCounter(){
  var guests= parseInt(prompt("How many guests?"));
  var donuts= parseInt(prompt("How many donuts?"));

if(guests <= donuts){
  donutsPerGuests= Math.floor(donuts/guests);
  alert(`There are ${donutsPerGuests} donut(s) for each guest`);
}
else {
  alert("There aren't enough donuts per guest");
}
}
DonutCounter();
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
