// function handleButtonClick(button) {
//     checkColor(button);
//   }

//   function checkColor(button) {
//     const mainColor = document.getElementById("maincolor").style.backgroundColor;
//     const buttonColor = button.style.backgroundColor;

//     if (buttonColor === mainColor) {
//       document.getElementById("result").innerHTML = "You win!";
//       colorGenerator();
//     } else {
//       document.getElementById("result").innerHTML = "Try again!";
//     }
//   }

//   function colorGenerator() {
//     const letters = "0123456789ABCDEF";

//     let blueColors = [];

//     for (let j = 0; j < 5; j++) {
//       let blueColor = "#";
//       // Generate a random shade of blue
//       for (let i = 0; i < 6; i++) {
//         if (i === 3 || i === 4 || i === 5) {
//           blueColor += letters[Math.floor(Math.random() * 4) + 8]; // More probability of getting a blue color
//         } else {
//           blueColor += "0";
//         }
//       }
//       blueColors.push(blueColor);
//     }

//     // Set button colors
//     document.querySelector('.btn1').style.backgroundColor = blueColors[0];
//     document.querySelector('.btn2').style.backgroundColor = blueColors[1];
//     document.querySelector('.btn3').style.backgroundColor = blueColors[2];
//     document.querySelector('.btn4').style.backgroundColor = blueColors[3];
//     document.querySelector('.btn5').style.backgroundColor = blueColors[4];

//     // Select a random color from the generated blue shades
//     const randomIndex = Math.floor(Math.random() * blueColors.length);
//     document.querySelector('.maincolor').style.backgroundColor = blueColors[randomIndex];
//   }
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

  let redColors = [];

  for (let j = 0; j < 5; j++) {
    let redColor = "#";
    // Generate a random shade of red
    for (let i = 0; i < 6; i++) {
      if (i === 0 || i === 1 || i === 2) {
        redColor += letters[Math.floor(Math.random() * 4)-1]; // More probability of getting a red color
      } else {
        redColor += "0";
      }
    }
    redColors.push(redColor);
  }

  return redColors;
}

// Call the redColorGenerator function to get 5 red-like colors
const colors = redColorGenerator();

// Log the generated colors to the console
console.log("Five random red-like colors:");
colors.forEach((color, index) => {
  console.log(`Color ${index + 1}: ${color}`);
});
