// ===== Navbar Active Link Highlight =====
const navLinks = document.querySelectorAll(".acher a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll(".acher a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===== CV Button =====
const cvBtn = document.querySelector(".cv-btn");
cvBtn.addEventListener("click", () => {
  alert("Your CV will start downloading...");
  // Example: If you have CV file
  // window.location.href = "ZainAli-CV.pdf";
});

// ===== Contact Form Validation =====
const form = document.querySelector(".contact form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default submit
  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address!");
  } else {
    alert("Thank you " + name + "! Your message has been sent.");
    form.reset();
  }
});

// ===== Dark / Light Mode Toggle =====
const footer = document.querySelector("footer");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.marginTop = "15px";
footer.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// second



