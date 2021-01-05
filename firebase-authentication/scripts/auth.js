auth.onAuthStateChanged(currentUser => {
  console.log("[auth.onAuthStateChanged]");
  console.log(currentUser);
  
  const user = document.querySelector("#currentUser strong");
  if (currentUser) {  
    user.innerHTML = currentUser.email;
  } else {
    user.innerHTML = "";
  }
});

// signup
const signupForm = document.querySelector("#signup>form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm["signupEmail"].value;
  const password = signupForm["signupPassword"].value;
  const name = signupForm["signupName"].value;

  console.log(email, password, name);
  auth.createUserWithEmailAndPassword(email, password)
    .then(credential => {
      console.log(credential);
      signupForm.reset();

      // const currentUser = auth.currentUser;
      // console.log(currentUser);
      // if (currentUser) {
      //   const user = document.querySelector("#currentUser strong");
      //   user.innerHTML = currentUser.email;
      // }
    });
})

// signin
const signinForm = document.querySelector("#signin>form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signinForm["signinEmail"].value;
  const password = signinForm["signinPassword"].value;

  console.log(email, password);
  auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log("result");
      console.log(result);
      
      console.log("currentUser");
      signinForm.reset();

      // const currentUser = auth.currentUser;
      // console.log(currentUser);
      // if (currentUser) {
      //   const user = document.querySelector("#currentUser strong");
      //   user.innerHTML = currentUser.email;
      // }
    });
})

// signout
const signoutBtn = document.querySelector("#signout>button");
signoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    // const user = document.querySelector("#currentUser strong");
    // user.innerHTML = "";
    alert("Sign out!!")
  });
});