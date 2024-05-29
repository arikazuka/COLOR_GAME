function handleButtonClick(button) {
  checkColor(button);
}

function checkColor(button) {
  const mainColor = document.getElementById("maincolor").style.backgroundColor;
  const buttonColor = button.style.backgroundColor;

  if (buttonColor === mainColor) {
    document.getElementById("result").innerHTML = "You win!";
    colorGenerator();
  } else {
    document.getElementById("result").innerHTML = "Try again!";
  }
}

function colorGenerator() {
  const letters = "0123456789ABCDEF";
  
  let color1 = "#";
  let color2 = "#";
  let color3 = "#";
  let color4 = "#";
  let color5 = "#";

  for (let i = 0; i < 6; i++) {
    color1 += letters[Math.floor(Math.random() * 16)];
    color2 += letters[Math.floor(Math.random() * 16)];
    color3 += letters[Math.floor(Math.random() * 16)];
    color4 += letters[Math.floor(Math.random() * 16)];
    color5 += letters[Math.floor(Math.random() * 16)];
  }

  document.querySelector('.btn1').style.backgroundColor = color1;
  document.querySelector('.btn2').style.backgroundColor = color2;
  document.querySelector('.btn3').style.backgroundColor = color3;
  document.querySelector('.btn4').style.backgroundColor = color4;
  document.querySelector('.btn5').style.backgroundColor = color5;

  const arr = [color1, color2, color3, color4, color5];

  // Generate a random index between 0 and 4
  const randomIndex = Math.floor(Math.random() * arr.length);
  
  // Set the background color of .maincolor to the color at the randomly selected index
  document.querySelector('.maincolor').style.backgroundColor = arr[randomIndex];

  
}


// Call colorGenerator initially to set initial button colors



// function changeColor(button) {
//   const letters = '0123456789ABCDEF';
//   let color = "#";

//   // Generate a random color code
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   // Apply the random color to the button's background color
//   button.style.backgroundColor = color;
// }
