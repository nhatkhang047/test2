// JavaScript cho xử lý đăng nhập, đăng ký và quên mật khẩu

// Lấy các tham chiếu đến các trường biểu mẫu và nút
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Lắng nghe sự kiện để thêm lớp right-panel-active
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Xử lý đăng ký (Sign Up)
document.getElementById("signUpForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Lưu thông tin người dùng vào localStorage
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Sign-up successful!");
});

// Xử lý đăng nhập (Sign In)
document.getElementById("signInForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  // Lấy thông tin người dùng đã lưu trong localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    // Đăng nhập thành công, chuyển hướng đến trang home.html

    window.location.href = "/html/home.html"; // Chuyển hướng đến trang home.html
  } else {
    alert("Incorrect email or password.");
  }
});
