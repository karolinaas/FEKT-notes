---
share: "true"
category: BPC-CZS
---

### Druhá přednáška z předmětu BPC-CZS

- Zkouška potenciálně v elearningu formou ABCD (ne úplně triviální)
	- Příklady, např. spočítat korelaci a vybrat správnou odpověď z 8 možností
- V matlabu pozor, indexujeme od jedničky, ne od nuly
- $\omega = 2 \pi f$
- Šipka označuje první index (počátek signálu)
- Diskrétní signály - základní operace (slide č.15)
	- součet
	- součin
	- zpoždění - když odečítáme, signál se v časové ose posouvá doprava
	- předsunutí - opak zpoždění, přičítáme -> signál se v časové ose posouvá doleva
- Základní diskrétní signály
	- Jednotkový impuls - realizovatelná verze Diracova impulsu, jednotková velikost, slovní definice "jednička v nule, nula všude jinde"¨
	- Harmonický diskrétní signál - má obálku ve tvaru funkce sinus
	- Exponenciální diskrétní signál - $s [n] = a^n$
		- a je reálné číslo, případně komplexní
		- v komplexním případě využíváme Eulerova vztahu $e^{j \theta} = \cos \theta + j \cdot \sin \theta$ 
	- Rampová posloupnost
- Klasifikace jednorozměrných diskrétních signálů
	- Energie signálu
	
	$$E = \sum_{n = - \infty}^{n} |s[n]|^2$$
	
	- Střední hodnota výkonu
	
	$$P = \lim_{n \to \infty} \frac{1}{2 N + 1} \sum_{n = - \infty}^{n} |s[n]|^2$$
	
		- Na testu se může vyskytnout příklad, kde bude potřeba spočítat limitu
	- Periodický signál (periodicita)
		- periodicita harmonických funkcí je vázána na celistvé násobky $2 \pi$
	- Symetrie