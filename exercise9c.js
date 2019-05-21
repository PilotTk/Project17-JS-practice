// Question 3: Write a function that 
// converts HEX to RGB. Then Make 
// that function auto-dect the formats 
// so that if you enter HEX color 
// format it returns RGB and if 
// you enter RGB color format it returns HEX.




//RGB to HEX
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//HEX to RGB
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))


 //automatic detection of format

var input = (prompt("Insert colour code"));


if (input.includes("#")) {
	alert("Converted to RGB " + hexToRgb(input));
	} else {
	alert("Converted too HEX " + rgbToHex(input));
}
