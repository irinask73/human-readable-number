module.exports = function toReadable(number) {
  const num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 let units = Math.floor(number % 10)
 let dozens = (number % 100 - units) / 10;
 let hundreds = Math.floor(number / 100);
  // 0
  if (number === 0) return 'zero';
  //up to 19
  if (number < 20) return num[number - 1];
  //20 - 90
  if (number >= 20 && hundreds === 0 && units === 0) return numDozens[dozens - 2];
  // 21, 22 ....99
  if (number >= 20 && hundreds === 0) return `${numDozens[dozens - 2]} ${num[units - 1]}`;
  // 100,200...900
  if (number >= 100 && units === 0 && dozens === 0) return `${num[hundreds - 1]} hundred`;
  // 120, 130 ...990
  if (number >= 100 && units === 0 && dozens > 1) return `${num[hundreds - 1]} hundred ${numDozens[dozens - 2]}`;
  //101 -119 ,...901-919
  if (hundreds > 0 && hundreds < 10 && (number % 100) <= 19) return `${num[hundreds - 1]} hundred ${num[number % 100 - 1]}`;
  // 121, 122 ...999
  if (hundreds > 0 && hundreds < 10) return `${num[hundreds - 1]} hundred ${numDozens[dozens - 2]} ${num[units - 1]}`;
  if (hundreds === 10) return 'one thousand';
}