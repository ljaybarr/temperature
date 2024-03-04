function convertTemperature(){

    let scale = prompt("Enter a scale: 1)F 2)C");

    if(scale==1){
        let fahrenheit = Number(prompt("Enter a number"));
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("temperature").innerHTML+=`
        <p>The conversion of Fahrenheit ${fahrenheit}° to Celsius is ${celsius}°</p>
        `;
    }
    if(scale==2){
        let celsius = Number(prompt("Enter a number"));
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("temperature").innerHTML+=`
        <p>The conversion of Celsius ${celsius}° to Fahrenheit is ${fahrenheit}°</p>
        `;
    }
}