function convertTemperatureRange(){

    let startValue = prompt("Enter a start number");
    let endValue = prompt("Enter an end number");
    let scale = prompt("Enter a scale: 1)F 2)C");

    for(let i=startValue;i<=endValue;i++)
    if(scale==1){
        let fahrenheit = i;
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("temperature").innerHTML+=`
        <p>The conversion of Fahrenheit ${fahrenheit}° to Celsius is ${celsius}°</p>
        `;
    }
    for(let i=startValue;i<=endValue;i++)
    if(scale==2){
        let celsius = i;
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("temperature").innerHTML+=`
        <p>The conversion of Celsius ${celsius}° to Fahrenheit is ${fahrenheit}°</p>
        `;
    }
}