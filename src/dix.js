//To print a diamond pattern
function patternPrintingII(size) {
  let col = size * 2 - 1;
  var s =[];
for (let i = 1; i <= size; i++) {
  s
for (let j = 1; j <= col; j++) {
  if (j >= size + 1 - i && j <= size - 1 + i) {
    s += "*";
  } else {
    s += " ";
  }
}
}
for (let i = size - 1; i >= 1; i--) {

for (let j = 1; j <= col; j++) {
  if (j >= size + 1 - i && j <= size - 1 + i) {
    s += "*";
  } else {
    s += " ";
  }
}

}
console.log(s);
}
patternPrintingII(5);