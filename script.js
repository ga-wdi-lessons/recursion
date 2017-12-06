let string = 'hello'
let newString = ''
for (let i = string.length - 1; i > -1; i -= 1) {
  newString += string[i]
}

let string = "hello";
let newString = "";
let i = string.length-1
while(i > -1) {
  newString += string[i];
  i -= 1;
}
