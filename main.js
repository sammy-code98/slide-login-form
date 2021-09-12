const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
//ADD EVENT LISTENERS
signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const email2 = document.getElementById("email2");
const pass2 = document.getElementById("pass2");

// validator constants
const nameVal = document.getElementById("nameVal");
const emailVal = document.getElementById("emailVal");
const passVal = document.getElementById("passVal");
const emailVal2 = document.getElementById("emailVal2");
const passVal2 = document.getElementById("passVal2");

// validator function
function validate() {
  if (fullName.value && email.value && password.value) {
    document.querySelector(".submitBtn").type = "submit";
  } else {
    if (fullName.value == "" || fullName == undefined) {
      nameVal.style = "display:block";
    } else if (fullName.value !== null) {
      nameVal.style = "display:none";
    }
    if (email.value == "" || email == undefined) {
      emailVal.style = "display:block";
    } else if (email.value !== null) {
      emailVal.style = "display:none";
    }
    if (password.value == "" || password == undefined) {
      passVal.style = "display:block";
    } else if (password.value != null) {
      passVal.style = "display:none";
    }
  }
}

function valid() {
  if (email2.value && pass2.value) {
    document.querySelector(".submiteBtn").type = "submit";
  } else {
    if (email2.value == "" || email2 == undefined) {
      emailVal2.style = "display:block";
    } else if (email2.value !== null) {
      emailVal2.style = "display:none";
    }
    if (pass2.value == "" || pass2 == undefined) {
      passVal2.style = "display:block";
    } else if (passVal2.value != null) {
      passVal2.style = "display:none";
    }
  }
}
