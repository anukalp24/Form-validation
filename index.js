let btn = document.getElementById("btn");
let email = document.getElementById("email");
let confirm = document.getElementById("confirm");
let result = document.getElementById("successful")
let password = document.getElementById("password");
let firstname = document.getElementById("name");
let surname = document.getElementById("surname");
let emailchecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regexx =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let box = document.getElementById("box");
let refresh = document.getElementById("refresh");
let successfulbox = document.getElementById("successful-box")

 

function namechecker() {
  let kk = document.getElementById("error");
  if (kk) {
    kk.remove();
  }


  if (firstname.value === "") {
    let create = document.createElement("div");
    create.id = "error";
    create.innerHTML = "Name is Required";
    create.style.color = "red";
    firstname.after(create);
    return false;
  }




  if (surname.value === "") {
    create = document.createElement("div");
    create.id = "error";
    create.innerHTML = "Surname is Required";
    create.style.color = "red";
    surname.after(create);
    return false;
  } 
  
  else {
    return true;
  }
}


function emaill() {
  let create = document.getElementById("error");
  if (create) {
    create.remove();
  }

  if (email.value === "") {
    create = document.createElement("div");
    create.id = "error";
    create.style.color = "red";
    create.innerHTML = "Email is empty";
    email.after(create);
    return false;
  }

  if (!emailchecker.test(email.value)) {
    create = document.createElement("div");
    create.id = "error";
    create.style.color = "red";

    create.innerHTML = "email is incorrect. kindly enter the correct email";
    email.after(create);
    return false;
  } 
  
  else {
    return true;
  }
}


function passwordd() {
  let create = document.getElementById("error");
  if (create) { 
    create.remove();
  }

  if (password.value === "") {
    create = document.createElement("div");
    create.id = "error";
    create.innerHTML = "Password is Required";
    create.style.color = "red";
    password.after(create);
    return false;
  }

  if (password.value.length < 8) {
    create = document.createElement("div");
    create.id = "error";
    create.innerHTML = "Password should be of atleast 8 digits";
    create.style.color = "red";
    password.after(create);
    return false;
  }

  if (!regexx.test(password.value)) {
    create = document.createElement("div");
    create.id = "error";
    create.innerHTML = "Make a strong password";
    create.style.color = "red";
    password.after(create);
    return false;
  } 
  
  else {
    return true;
  }
}


function confirmm() {
  let create = document.getElementById("error");
  if (create) {
    create.remove();
  }

  if(confirm.value === ""){
    create = document.createElement("div")
    create.id = "error"
    create.innerHTML = "confirm your password"
     create.style.color = "red";
    confirm.after(create);
    return false
  }

  
  if (password.value !== confirm.value) {
    create = document.createElement("div");
    create.id = "error";
    create.innerHTML = "Wrong password";
    create.style.color = "red";
    confirm.after(create);
    return false;
  } else {
    return true;
  }
}


function successful() {
  let create = document.getElementById("error");
  if (create) {
    create.remove();
  }
 document.querySelectorAll(".inp").forEach((input) => {
    input.value = "";
  });
  successfulbox.style.display = "block"
 
}

function validate() {
  if (!namechecker()) return;
  if (!emaill()) return;
  if (!passwordd()) return;
  if (!confirmm()) return;
  successful();
}




btn.addEventListener("click", () => {
  validate();
});

document.addEventListener("keyup", (k) => {
  if (k.key === "Enter") {
   
    validate();
    k.preventDefault();
  }
});



refresh.addEventListener("click", (e) => {
  e.preventDefault(); 

  document.querySelectorAll(".inp").forEach((input) => {
    input.value = "";
  });

  const error = document.getElementById("error");
  if (error) error.remove();

  if (successfulbox) successfulbox.style.display = "none";
});

