let form = document.querySelector('form');
let body = document.querySelector('body');



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    submitInTable();
})

const submitInTable = ()=>{
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.getElementById('gender').value;
    var foods = document.getElementsByName('food');
    var allfood = [];
    for (var food of foods){
        if(food.checked){allfood.push(' '+food.value);}
    }
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    body.innerHTML = "";
    
    body.innerHTML +=`
    <h1>Tabulation of details</h1>
    <table>
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Address</td>
            <td>Pincode</td>
            <td>Gender</td>
            <td>Food</td>
            <td>State</td>
            <td>Country</td>
        </tr>
        <tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${allfood}</td>
            <td>${state}</td>
            <td>${country}</td>
        </tr>
    </table>
    `

}