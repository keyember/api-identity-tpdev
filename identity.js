const submitBtn = document.getElementById("submitBtn");

function generateIdentity() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      document.getElementById("lastname").textContent = user.name.last;
      document.getElementById("firstname").textContent = user.name.first;
      document.getElementById("streetaddress").textContent =
        user.location.street.name;
      document.getElementById("postcodeaddress").textContent =
        user.location.postcode;
      document.getElementById("cityaddress").textContent = user.location.city;
      document.getElementById("profilpicture").src = user.picture.large;
      document.getElementById("age").textContent = user.dob.age;
      document.getElementById("mail").textContent = user.email;
    })
    .catch((error) => console.error("Erreur:", error));
}

submitBtn.addEventListener("click", generateIdentity);
