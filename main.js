var sliderOneValue = sliderTwoValue = sliderThreeValue = 0;
function showValue(newValue, resultDiv) {
    document.getElementById(resultDiv).innerHTML = newValue;
    updateSum();
    rgbToHex(sliderOneValue, sliderTwoValue, sliderThreeValue);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function updateSum() {
    sliderOneValue = +document.getElementById('redslider').value;
    sliderTwoValue = +document.getElementById('greenslider').value;
    sliderThreeValue = +document.getElementById('blueslider').value;
    var color = 'rgb';
    color += "(" + sliderOneValue + "," + sliderTwoValue + "," + sliderThreeValue + ")";
    document.getElementById('rgb').innerHTML = color;
    //document.getElementById('sum').innerHTML = sliderOneValue + sliderTwoValue + sliderThreeValue;
    //document.getElementById('hex').innerHTML = "#" + componentToHex(sliderOneValue) + componentToHex(sliderTwoValue) + componentToHex(sliderThreeValue);
}

function rgbToHex(sliderOneValue, sliderTwoValue, sliderThreeValue) {
    var finalColor = "#" + componentToHex(sliderOneValue) + componentToHex(sliderTwoValue) + componentToHex(sliderThreeValue);
    document.getElementById('hex').innerHTML = finalColor;
    document.getElementById('rect').style.backgroundColor = finalColor;

}