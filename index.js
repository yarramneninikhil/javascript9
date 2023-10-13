const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
  };
  const username = document.querySelector("#name").value;
  localStorage.setItem(`user_${username}`, JSON.stringify(formdata));
});
let res = localStorage.getItem("data");
res = JSON.parse(res);
console.log(typeof res.email);
