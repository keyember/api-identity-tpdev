const submitBtn = document.getElementById("submitBtn");

function generateIdentity() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      document.getElementById("lastname").textContent = user.name.last;
      document.getElementById("firstname").textContent = user.name.first;
      ((document.getElementById("address").textContent =
        user.location.street.number),
        user.location.street.name,
        user.location.city,
        user.location.postcode,
        user.location.state,
        user.location.country);
      document.getElementById("profilpicture").src = user.picture.medium;
      document.getElementById("age").textContent = user.dob.age;
      document.getElementById("mail").textContent = user.email;
    })
    .catch((error) => console.error("Erreur:", error));
}

submitBtn.addEventListener("click", generateIdentity);
