let plus_5 = document.getElementById("plus");
let minus_5 = document.getElementById("minus");

  
 count = 0;
 function add() {
    
     count++;
    if(count <= 5) {
      plus_5.innerHTML = "Click me: " + count;
      
 } else {
    count = 0;
 }
 
}


count2 = 6;
function minus() {

count2--;
if( count2 >= 1 ) {
    minus_5.innerHTML = "Click me: " + count2;
 
 } else {
    count2 = 6;
 }

}