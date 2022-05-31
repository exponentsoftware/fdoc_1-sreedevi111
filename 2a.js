//Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:

let string = "";
for (let i = 0; i <= 7; i++) {
  for (let n = 0; n < i; n++) {
    string += "#";
  }
  string += "\n";
}

console.log(string);
