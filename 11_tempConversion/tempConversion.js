const convertToCelsius = function(fTemp) {
  const converted = Math.round(((fTemp -32) * 5/9)*10)/10;
  return converted;
};

const convertToFahrenheit = function(cTemp) {
  const converted = Math.round((cTemp * 9/5 + 32)*10)/10;
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
