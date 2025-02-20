function myFunc() {
  let x = 10;
  if (true) {
    let x = 20; // This 'x' is different from the one outside the if block
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}