//apply code font on numbers for wiki table admonition

const admonition = document.querySelectorAll(".admonition.wiki table td");
admonition.forEach((item) => {
	if (item.textContent.match(/^\d+$/)) {
		item.style.fontFamily = "var(--md-code-font)";
	}
});

// https://mkdocs-mermaid2.readthedocs.io/en/latest/tips/#material-theme-switching-on-the-fly-between-light-and-dark-mode
var paletteSwitcher1 = document.getElementById("__palette_0");
var paletteSwitcher2 = document.getElementById("__palette_1");

paletteSwitcher0.addEventListener("change", function () {
  location.reload();
});

paletteSwitcher1.addEventListener("change", function () {
  location.reload();
});
