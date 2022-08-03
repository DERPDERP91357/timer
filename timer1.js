let input = process.argv.slice(2);


for (let i = 0; i < input.length; i++) {
  let delay = input[i]*1000;
  if (!delay && delay !== 0) {
    continue;
  }
  if (delay < 0){
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay)
};

// for (each of input) {
//   let delay = Number(input[each])*1000;
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, delay)
// };