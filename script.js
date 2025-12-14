document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", validateForm);

  function validateForm(event) {
    event.preventDefault(); // stop form submission

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value.trim();

    /* ---------- Full Name Validation ---------- */
    if (fullName === "" || fullName.split(" ").length < 2) {
      alert("Please enter your full name (first and last name).");
      return;
    }

    /* ---------- Email Validation ---------- */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address (example@domain.com).");
      return;
    }

    /* ---------- Password Validation ---------- */
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character."
      );
      return;
    }

    /* ---------- Confirm Password ---------- */
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    /* ---------- Age Validation ---------- */
    if (isNaN(age) || parseInt(age) < 18) {
      alert("You must be 18 or older to register.");
      return;
    }

    /* ---------- Success ---------- */
    alert("Registration successful! 🎉");
    form.reset();
  }
});