document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const errorMessage = document.getElementById("error-message");
  const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
  };

  try {
      const response = await fetch("/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      });

      if (response.ok) {
          const location = response.headers.get("Location");
          if (location) {
              window.location.href = location;
          }
      } else {
          const error = await response.json();
          errorMessage.innerText = error.message;
          errorMessage.style.display = "block";
      }
  } catch (err) {
      errorMessage.innerText = "An error occurred. Please try again.";
      errorMessage.style.display = "block";
  }
});


document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      country: document.getElementById("country").value,
      phone: document.getElementById("phone").value,
      company_role: document.getElementById("company_role").value,
      password: document.getElementById("password").value,
  };

  const errorMessage = document.getElementById("error-message");

  try {
      const response = await fetch("/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      });

      if (response.ok) {
          alert("Registration successful! Wait for confirmation.");
          window.location.href = "/auth/login"; // Redirect to login page after successful registration
      } else {
          const error = await response.json();
          errorMessage.innerText = error.message;
          errorMessage.style.display = "block";
      }
  } catch (err) {
      errorMessage.innerText = "An error occurred. Please try again.";
      errorMessage.style.display = "block";
  }
});