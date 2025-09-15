const toggle = document.getElementById("themeToggle");
console.log(toggle);

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  toggle.checked = true; // checkbox sync
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    //documentElement => represent root <html> element
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
