function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById('inputTemp').value);
    let inputUnit = document.getElementById('inputUnit').value;
    
    if (inputUnit === 'C') {
        let outputTempF = (inputTemp * 9 / 5) + 32;
        let outputTempK = inputTemp + 273.15;
        
        document.getElementById('outputTempC').innerText = `Celsius: ${inputTemp} °C`;
        document.getElementById('outputTempF').innerText = `Fahrenheit: ${outputTempF.toFixed(2)} °F`;
        document.getElementById('outputTempK').innerText = `Kelvin: ${outputTempK.toFixed(2)} K`;
    } else if (inputUnit === 'F') {
        let outputTempC = (inputTemp - 32) * 5 / 9;
        let outputTempK = (inputTemp - 32) * 5 / 9 + 273.15;
        
        document.getElementById('outputTempC').innerText = `Celsius: ${outputTempC.toFixed(2)} °C`;
        document.getElementById('outputTempF').innerText = `Fahrenheit: ${inputTemp} °F`;
        document.getElementById('outputTempK').innerText = `Kelvin: ${outputTempK.toFixed(2)} K`;
    } else if (inputUnit === 'K') {
        let outputTempC = inputTemp - 273.15;
        let outputTempF = (inputTemp - 273.15) * 9 / 5 + 32;
        
        document.getElementById('outputTempC').innerText = `Celsius: ${outputTempC.toFixed(2)} °C`;
        document.getElementById('outputTempF').innerText = `Fahrenheit: ${outputTempF.toFixed(2)} °F`;
        document.getElementById('outputTempK').innerText = `Kelvin: ${inputTemp} K`;
    }
}
