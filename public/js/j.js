const createContactForm = document.getElementById("contactForm");

createContactForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const id = document.getElementById("id").value;

  const formData = new FormData(this);

  try {
    let url = `http://localhost:3000/api/contacts/update/${id}`;

    const response = await fetch(url, {
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      window.location.href = "/createContact";
    }

    if (!response.ok) {
      // alert massage
    }
  } catch (error) {}
});
