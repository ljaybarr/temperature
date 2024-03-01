// Enter student info (name, grade101, grade102) and calculate and display the GPA
// ** grades are from 0-4

function getGPA(){

    let studentName=prompt("Enter your name");
    let grade101=Number(prompt("Enter your grade 101"));
    let grade102=Number(prompt("Enter your grade 102"));

    let gpa=(grade101+grade102)/2;

    document.getElementById("grades").innerHTML+=`<div>
        <p class="item>${studentName}<p>
        <p>${gpa}<p>
    </div>`;
}


// create a function where the user enters a product name, price and the quantity and display the prodicts on the HTML (use a button to trigger the function)
let total=0;

function getProduct(){

    let productName=prompt("Enter the product name");
    let price=Number(prompt("Enter the price"));
    let quantity=Number(prompt("Enter the quantity"));
    let subtotal = price*quantity;

    total=total+subtotal;
    document.getElementById("productList").innerHTML+=`
    <li class="item">${productName} - ${price.toFixed(2)} * ${quantity} = $${subtotal.toFixed(2)}</li>
    `;
    document.getElementById("total").innerHTML=total.toFixed(2);

}
