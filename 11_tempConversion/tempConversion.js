const convertToCelsius = function(num) {
  let celsius = (num - 32) * (5/9);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let fahrenheit = (num * (9/5)) + 32;
  return Number(fahrenheit.toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
