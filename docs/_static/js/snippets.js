//apply code font on numbers for wiki table admonition

const admonition = document.querySelectorAll(".admonition.wiki table td");
admonition.forEach((item) => {
	if (item.textContent.match(/^\d+$/)) {
		item.style.fontFamily = "var(--md-code-font)";
	}
});

// Set Mermaid theme
mermaid-custom.initialize({
	securityLevel: 'loose',
	theme: 'base',
	themeVariables: {
		primaryColor: '#BB2528',
		primaryTextColor: '#fff',
		primaryBorderColor: '#7C0000',
		lineColor: '#F8B229',
		secondaryColor: '#006100',
		tertiaryColor: '#fff'
	}
});
