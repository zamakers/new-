const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const allExtraTexts = document.querySelectorAll(".extra-text");
    const allButtons = document.querySelectorAll(".toggle-btn");

    // sab text hide aur button show karo
    allExtraTexts.forEach(text => text.style.display = "none");
    allButtons.forEach(b => b.style.display = "inline-block");

    const extraText = btn.nextElementSibling;

    // is div ka text show karo aur is button ko hide karo
    extraText.style.display = "block";
    btn.style.display = "none";
  });
});
