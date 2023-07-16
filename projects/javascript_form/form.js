const form = document.getElementById("project");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});
function validation() {
    console.log("namedisplay");
    const namevalue = document.getElementById("name");


    function clearError(input) {

        const clearClass = input.parentElement;
        console.log(clearClass);

        const clearMsg = clearClass.querySelector("span");
        clearMsg.innerText = " ";

        clearClass.className = "error";
    }
    if (namevalue.value.length == 0) {

        const error_class = namevalue.parentElement;

        const enter_msg = error_class.querySelector("span");
        enter_msg.innerText = "Enter Name";
        console.log(enter_msg);

        error_class.className = "error";

    }
    else {
        clearError(namevalue);
    }
    const addressvalue = document.getElementById("address");

    if (addressvalue.value.length > 10) {
        const error_class = addressvalue.parentElement;

        const enter_msg = error_class.querySelector("span");
        enter_msg.innerText = "Enter limitted words";
        console.log(enter_msg);

        error_class.className = "error";
    }
    const zipcodevalue = document.getElementById("zip_code");

    if (zipcodevalue.value.length != 6) {
        const error_class = zipcodevalue.parentElement;

        const enter_msg = error_class.querySelector("span");
        enter_msg.innerText = "Enter limitted character";
        console.log(enter_msg);

        error_class.className = "error";
    }
    else {
        clearError(zipcodevalue);
    }

    const emailvalue = document.getElementById("email");
    if (emailvalue.value.length == 0) {
        const error_class = emailvalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "email should be proper";
        console.log(enter_msg);

        error_class.className = "error";

    }
    else {
        clearError(emailvalue);
    }
    const passwordvalue = document.getElementById("password");
    if (passwordvalue.value.length == 0) {
        const error_class = passwordvalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "password should not be empty";
        console.log(enter_msg);

        error_class.className = "error";

    }
    else {
        clearError(passwordvalue);
    }
    const verifypasswordvalue = document.getElementById("verify");
    if (verifypasswordvalue.value.length == 0) {

        const error_class = verifypasswordvalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "password should not be empty";
        console.log(enter_msg);


        error_class.className = "error";

    }
    else if (verifypasswordvalue.value != passwordvalue.value) {
        const error_class = verifypasswordvalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "verify password must be same as password";
        console.log(enter_msg);


        error_class.className = "error";

    }
    else {
        clearError(verifypasswordvalue);
    }
    const phonevalue = document.getElementById("phone");
    if (phonevalue.value.length == 0) {
        const error_class = phonevalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "should not be empty";
        console.log(enter_msg);

        error_class.className = "error";


    }
    else if (phonevalue.value.length != 10) {
        const error_class = phonevalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "10 number";
        console.log(enter_msg);

        error_class.className = "error";

    }
    else {
        clearError(phonevalue);
    }
    const countryvalue = document.getElementById("select_country");
    if (countryvalue.value == "Please_select") {
        const error_class = countryvalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "10 number";
        console.log(enter_msg);

        error_class.className = "error";

    }
    else {
        clearError(countryvalue);
    }
    const malevalue = document.getElementById("male");
    const femalevalue = document.getElementById("female");
    if (malevalue.checked == false && femalevalue.checked == false) {
        const error_class = malevalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "enter any one";
        console.log(enter_msg);

        error_class.className = "error";

    }
    else {
        clearError(malevalue);
    }
    let gendervalue;
    if (malevalue.checked == true) {
        gendervalue = malevalue.value;
    }
    else {
        gendervalue = femalevalue.value;
    }
    const Redvalue = document.getElementById("Red");
    const Greenvalue = document.getElementById("Green");
    const Bluevalue = document.getElementById("Blue");
    let Array = []
    let i = 0;
    if (Redvalue.checked == true) {
        Array[i++] = Redvalue.value;

    }
    else if (Greenvalue.checked == true) {
        Array[i++] = Greenvalue.value;
    }
    else {
        Array[i++] = Bluevalue.value;
    }


    if (Redvalue.checked == false && Greenvalue == false && Bluevalue == false) {
        const error_class = Redvalue.parentElement;

        const enter_msg = error_class.querySelector("span");

        enter_msg.innerText = "enter any one";
        console.log(enter_msg);

        error_class.className = "error";
    }
    else {
        clearError(redvalue);
    }
    let object = {
        name: namevalue.value,
        address: addressvalue.value,
        zipcode: zipcodevalue.value,
        email: emailvalue.value,
        password: passwordvalue.value,
        phone: phonevalue,
        country: countryvalue.value,
        gender: gendervalue.value,
        preference: Array,
    };
    console.log(object);

}

