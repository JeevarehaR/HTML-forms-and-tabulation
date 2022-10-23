var body = document.querySelector("body");
var form = document.getElementById("form");
var button = document.getElementById("submit");
var table = document.querySelector("table");
var div = document.querySelector(".container");

button.addEventListener("click", (e) => {
  e.preventDefault();
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var textarea = document.getElementById("address").value;
  var pinCode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var food1 = document.getElementById("food1");
  var food2 = document.getElementById("food2");
  var food3 = document.getElementById("food3");
  var food4 = document.getElementById("food4");
  var food5 = document.getElementById("food5");
  var checkedFood = [];
  if (food1.checked == true) {
    checkedFood.push(food1.value);
  }
  if (food2.checked == true) {
    checkedFood.push(food2.value);
  }
  if (food3.checked == true) {
    checkedFood.push(food3.value);
  }
  if (food4.checked == true) {
    checkedFood.push(food4.value);
  }
  if (food5.checked == true) {
    checkedFood.push(food5.value);
  }
  console.log(checkedFood);
  body.innerHTML = `
    <br><br>
    <h1 class="text-center bg-success" >Tabulation of details</h1>
    <br><br>
    <table style="margin:5% auto">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Gender</th>
            <th>Food</th>
            <th>State</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${textarea}</td>
            <td>${pinCode}</td>
            <td>${gender}</td>
            <td>${checkedFood}</td>
            <td>${state}</td>
            <td>${country}</td>
        </tr>
    </tbody>
    </table>
    `;
  form.reset();
});
