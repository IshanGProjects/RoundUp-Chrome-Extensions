document.getElementById("closebtn").addEventListener("click",function(){
    document.getElementById("closebtn").parentElement.remove();
})




// Get the input field
var input = document.getElementById("amount");
var input2 = document.getElementById("raised");


// Execute a function when the user releases a key on the keyboard and sets the goal
input.addEventListener("keyup", function(event) {
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    //Assign the two functions to a variable
    goal = input.value;
  }
  localStorage.setItem('goal',goal);
  console.log(localStorage.getItem('goal'))
  output.innerHTML = "Goal: " + goal;
});

// Execute a function when the user releases a key on the keyboard and sets the total amount raised
input2.addEventListener("keyup", function(event2) {
    // Number 13 is the "Enter" key on the keyboard
    if (event2.code === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      //Assign the two functions to a variable
      total = input2.value;
      total = (localStorage.getItem('goal')) - total;
      localStorage.set
      output2.innerHTML = "Amount Left to Raise: " + total;
    }
  });

// // Execute a function when the user releases a key on the keyboard and sets the total amount raised
// input2.addEventListener("keyup", function(event2) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event2.code === "Enter") {
//     // Cancel the default action, if needed
//     event2.preventDefault();
//     //Assign the two functions to a variable
//     total = input2.value;
//     amountRaised = localStorage.getItem('total') + total; 
//     localStorage.setItem('amountRaised', amountRaised);   
//     console.log("the total money left to raise is: " + (localStorage.getItem('amountRaised')))
//     output2.innerHTML = localStorage.getItem('total');
//   }
// });

document.getElementById("resetGoal").addEventListener("click",function(){
  localStorage.removeItem('goal');
  console.log("reset processed");
})



function resetButtonData(){
  localStorage.removeItem('goal');
  localStorage.removeItem('total');
  localStorage.removeItem('amountRaised');

  console.log(localStorage.getItem('goal'))
  console.log("reset processed");
}



//Function when user enters both text field changes the image being displayed to the various ones with different coins

// function changeImage(goal,total) {
//   var image = document.getElementById('myImage');
//     image.src = goalAndJar(goal,total);
// }

// function goalAndJar (goal, total){
//     if (total == 0){
//         return "/jarImages/1.png"
        
//     }
//     else if(total <= (goal* 0.2) && total > 0){
//         // path to image 1
//         return "/jarImages/2.png"
//     }
//     else if(total <= (goal * 0.4)){
//         //path to image 2
//         return "/jarImages/3.png"
//     }
//     else if(total <= (goal * 0.6)){
//         // path to image 3
//         "/jarImages/4.png"
//     }  
//     else if(total <= (goal * 0.8)){
//         "/jarImages/5.png"
//     }
//     else if(total == (goal)){
//         //Path to the image 5
//         "/jarImages/6.png"
//     }

// }
