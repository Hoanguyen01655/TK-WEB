function validateLogin(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password match the required values
  if (username === "0123" && password === "12345") {
    // Redirect to a new page if credentials are correct
    window.location.href = "/web/tienich.html";
  } else {
    // Show an alert if credentials are incorrect
    alert("Tài khoản hoặc mật khẩu không đúng!");
  }
}
