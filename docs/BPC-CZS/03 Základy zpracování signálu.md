---
share: "true"
category: BPC-CZS
---

1. [[03 Základy zpracování signálu#Vzorkování signálů|Vzorkování signálů]]
	- [[03 Základy zpracování signálu#Vzorkovací teorém|Vzorkovací teorém]]
2. [[03 Základy zpracování signálu#Generování harmonických průběhů v Matlabu|Generování harmonických průběhů v Matlabu]]
3. [[03 Základy zpracování signálu#Kvantování signálu|Kvantování signálu]]
	- [[03 Základy zpracování signálu#Kvantizační šum, odstup od kvantizačního šumu|Kvantizační šum, odstup od kvantizačního šumu]]
4. [[03 Základy zpracování signálu#Samostatné úkoly|Samostatné úkoly]]

---

## Vzorkování signálů

> Častou otázkou u státnic je prý zadefinovat rozdíl mezi spojitým signálem, diskrétním signálem a číslicovým signálem

- **Spojité signály** - osa $x$ (čas) i osa $y$ (velikost signálu) jsou spojité.
- **Diskrétní signály** – osa $x$ (čas) je diskrétní, signál je vzorkován vzorkovacím kmitočtem $f_s$. Vzorky mají časový rozestup roven vzorkovací periodě ($T_s = 1 / f_s$). Hodnoty na ose $y$ jsou odečteny z původního spojitého signálu v příslušných okamžicích.
- **Číslicové (digitální) signály** - na rozdíl od diskrétních signálů jsou odnoty na ose $y$ (vzorky) kvantovány na konečný počet kvantovacích úrovní.
- V Matlabu pracujeme vždy rovnou s číslicovými signály

### Vzorkovací teorém

- Při vzorkování musí být dodržen *Nyquistův-Shannonův teorém* definován jako $f_s > 2f_{max}$
- Při nedodržení vzorkovacího teorému dochází k tzv. *aliasingu*

## Generování harmonických průběhů v Matlabu

- Průběhy $\cos$ a $\sin$ jsou v diskrétní podobě zadefinovány jako:

	$$y_{\cos} [n] = A \cdot \cos (2 \pi f n T_s + \varphi)$$
	
	$$y_{\sin} [n] = A \cdot \sin (2 \pi f n T_s + \varphi)$$
	
	- $A$ - amplituda (maximální výchylka)
	- $f$ - frekvence signálu v Hz
	- $n$ - diskrétní index času
	- $T_s$ - vzorkovací perioda
	- $\varphi$ - počáteční fáze signálu v radiánech v intervalu $\langle - \pi ; \pi \rangle$
- V Matlabu je potřeba nejdříve zadefinovat časovou osu jako:

	<center><pre><code >t = (0:N - 1) / fs</code></pre></center>
	
	- `N` - počet vzorků
	- `fs` - vzorkovací kmitočet
- Takto zadefinovaná časová osa je vektor hodnot s rozestupem definovaným vzorkovací periodou $T_s$
- Je možné nahradit `(0:N - 1)` pomocí `(0:(duration * fs) - 1)`. Takto dostáváme časový vektor definovaný pomocí délky trvání signálu v sekundách `duration` a vzorkovacího kmitočtu `fs`.
- Poté můžeme vygenerovat signály v Matlabu jako:
<center><pre><code >y_cos = A * cos(2 * pi * f * t + phi)
y_sin = A * sin(2 * pi * f * t + phi)</code></pre></center>


## Kvantování signálu

- Pro číslicové zpracování signálu je nutné navzorkované hodnoty signálu kvantovat na konečný počet kvantizačních úrovní (hladin).
- Počet kvantizačních úrovní $L$ je dán tzv. bitovou hloubkou $B$ jako $L = 2^B$.
- V Matlabu jsou signály reprezentovány typem double a po načtení audio souborů jsou hodnoty automaticky převedeny do rozsahu $\langle −1 ; 1 \rangle$ (full scale), a tak není potřeba kvantizaci řešit. Pro názornost však můžeme kvantování nasimulovat.

### Kvantizační šum, odstup od kvantizačního šumu

- Díky kvantizaci (hodnoty signálu jsou zaokrouhlovány na nejbližší úrovně) vzniká chyba - tzv. kvantizační šum, který klesá s rostoucí bitovou hloubkou.
- Můžeme definovat SQNR (Signal to Quantization Noise Ratio) v decibelech, což je odstup užitečného signálu od kvantizačního šumu definovaný jako:

	$$SQNR_{\text{dB}} = 10 \log \left( \frac{P_{\text{signal}}}{P_{\text{noise}}} \right)$$

	- $P$ - výkon
- Výkon libovolného diskrétního signálu (i kvantizačního šumu) můžeme v praxi spočítat jako:

	$$P = \frac{1}{N} \sum^N_{n=1} x \left[ n \right]^2$$

- Pro sinusový signál je také často uváděn přibližný vztah:

	$$SQNR_{\text{dB}} \approx 6,02 \cdot B + 1,76$$

## Samostatné úkoly

1. Vyzkoušejte funkci pro kvantování signálu na načteném audio souboru (pomocí `audioread`) a výsledek kvantizace si poslechněte.
2. Pokuste se implementovat funkci s názvem `calculate_sqnr`, která bude vracet odstup signálu od kvantizačního šumu (skalární hodnota). Funkci implementujte dle vzorce z prezentace. Můžete využít built-in MATLAB funkci `mean`. Vstupními argumenty budou původní signál a signál kvantizačního šumu.
