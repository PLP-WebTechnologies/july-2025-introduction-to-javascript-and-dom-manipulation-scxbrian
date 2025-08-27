// =============================
// Part 1: Basics — Variables, Conditionals
// =============================
let age = 20;

if (age >= 18) {
  document.getElementById("conditional-output").textContent =
    "You are an adult.";
} else {
  document.getElementById("conditional-output").textContent =
    "You are a minor.";
}

// =============================
// Part 2: Functions
// =============================

// Function 1: Greeting
function greetUser(name) {
  document.getElementById("greet-output").textContent = "Hello, " + name + "!";
}

// Function 2: Simple Calculator (sum of two numbers)
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum of 5 and 10 is:", addNumbers(5, 10));

// =============================
// Part 3: Loops
// =============================

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop number:", i);
}

// Loop 2: While loop + DOM output
let n = 1;
let loopOutput = document.getElementById("loop-output");
while (n <= 5) {
  let li = document.createElement("li");
  li.textContent = "Number " + n;
  loopOutput.appendChild(li);
  n++;
}

// =============================
// Part 4: DOM Manipulation
// =============================

// Example 1: Toggle text content
document.getElementById("toggle-btn").addEventListener("click", () => {
  let p = document.getElementById("toggle-text");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
});

// Example 2: Change background color on click
document.body.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "lightblue";
});

// Example 3: Create new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created dynamically with JS.";
document.body.appendChild(newPara);
