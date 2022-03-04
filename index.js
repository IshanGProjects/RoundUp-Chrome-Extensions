// Get the input field
var input = document.getElementById("amount");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    console.log("it worked")
  // Number 13 is the "Enter" key on the keyboard
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    donateAmnt = donateAmount(input.value)
    var output = document.getElementById("output");
    output.innerHTML = "Amount: " + donateAmnt
  }
});


//Round Function
function donateAmount(amount) {
    round = Math.ceil(amount);
    donate = round - amount;
    donate = donate.toPrecision(2);
    return donate;
}