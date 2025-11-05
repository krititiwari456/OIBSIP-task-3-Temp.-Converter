const calculateTemp= () =>{
    const inputTemp = parseFloat(document.getElementById('temp').value);
    const tempSelected = document.getElementById('difftemp');
    const valueTemp = difftemp.options[tempSelected.selectedIndex].value;
    const toConvert = document.getElementById('tempconv');
    const convertValue = tempconv.options[toConvert.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 1.8)+ 32).toFixed(3)*1;
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        let celcius = ((fah - 32) / 1.8).toFixed(3)*1;
        return celcius;
    }
    const celToKel = (cel) => {
        let kelvin = (cel +273.15).toFixed(3)*1;
        return kelvin; 
    }
    const fahToKel = (fah) => {
        let kelvin = ((fah - 32)/1.8 +273.15).toFixed(3)*1;
        return kelvin;
    }
    const kelToCel = (kel) => {
        let celcius = (kel - 273.15).toFixed(3)*1;
        return celcius;
    }
    const kelToFah = (kel) => {
        let fahrenheit = ((kel - 273.15)*1.8 +32).toFixed(3)*1;
        return fahrenheit;
    }
    if((valueTemp =='cel') && (convertValue =='fah')){
        document.getElementById("result").innerHTML = celToFah
        (inputTemp) + "&#176; Fahrenheit";
    }
    else if((valueTemp =='kel') && (convertValue =='fah')){
        document.getElementById("result").innerHTML = kelToFah
        (inputTemp) + "&#176; Fahrenheit";
    }
    else if((valueTemp =='fah') && (convertValue =='cel')){
        document.getElementById("result").innerHTML = fahToCel
        (inputTemp) + "&#176; Celcius";
    }
    else if((valueTemp =='fah') && (convertValue =='kel')){
        document.getElementById("result").innerHTML = fahToKel
        (inputTemp) + " Kelvin";
    }
    else if((valueTemp =='kel') && (convertValue =='cel')){
        document.getElementById("result").innerHTML = kelToCel
        (inputTemp) + "&#176; Celcius";
    }
    else{
        document.getElementById("result").innerHTML = celToKel
        (inputTemp) + " Kelvin";
    }
}