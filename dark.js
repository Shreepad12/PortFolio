function change() {
    let theme = document.getElementById("theme");
let lightTheme = "light.css";
let darkTheme = "style.css";
// Checking what stylesheet the link tag has.
if (theme.getAttribute("href") == darkTheme) {
  theme.href = lightTheme;
} else {
  theme.href = darkTheme;
}
    
}