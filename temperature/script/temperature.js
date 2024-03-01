function convertCtoF(){

    let celsius=Number(prompt("Enter Celsius Temperature"));
    
    let temperature=((celsius*9/5)+32);
    
    document.getElementById("temperature").innerHTML+=`
    <p>The conversion of Celsius ${celsius}° to Fahrenheit is ${temperature}°</p>
    `;
}