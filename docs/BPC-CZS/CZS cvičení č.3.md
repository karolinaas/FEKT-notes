---
share: "true"
category: BPC-CZS
---

## Třetí cvičení z předmětu BPC-CZS

**Body cvičení:**
1. [Vzorkování signálů](CZS%20cvi%C4%8Den%C3%AD%20%C4%8D.3.md#vzorkování-signálů)
	- [Vzorkovací teorém](CZS%20cvi%C4%8Den%C3%AD%20%C4%8D.3.md#vzorkovací-teorém)
2. [Generování harmonických průběhů v Matlabu](CZS%20cvi%C4%8Den%C3%AD%20%C4%8D.3.md#generování-harmonických-průběhů-v-matlabu)
3. [Kvantování signálu](CZS%20cvi%C4%8Den%C3%AD%20%C4%8D.3.md#kvantování-signálu)
	- [Kvantizační šum, odstup od kvantizačního šumu](CZS%20cvi%C4%8Den%C3%AD%20%C4%8D.3.md#kvantizační-šum,-odstup-od-kvantizačního-šumu)
4. [Samostatné úkoly](CZS%20cvi%C4%8Den%C3%AD%20%C4%8D.3.md#samostatné-úkoly)

### Vzorkování signálů

> Častou otázkou u státnic je prý zadefinovat rozdíl mezi spojitým signálem, diskrétním signálem a číslicovým signálem

- **Spojité signály** - osa $x$ (čas) i osa $y$ (velikost signálu) jsou spojité.
- **Diskrétní signály** – osa $x$ (čas) je diskrétní, signál je vzorkován vzorkovacím kmitočtem $f_s$. Vzorky mají časový rozestup roven vzorkovací periodě ($T_s = 1 / f_s$). Hodnoty na ose $y$ jsou odečteny z původního spojitého signálu v příslušných okamžicích.
- **Číslicové (digitální) signály** - na rozdíl od diskrétních signálů jsou odnoty na ose $y$ (vzorky) kvantovány na konečný počet kvantovacích úrovní.
- V Matlabu pracujeme vždy rovnou s číslicovými signály

#### Vzorkovací teorém

- Při vzorkování musí být dodržen *Nyquistův-Shannonův teorém* definován jako $f_s > 2f_{max}$
- Při nedodržení vzorkovacího teorému dochází k tzv. *aliasingu*

### Generování harmonických průběhů v Matlabu

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


### Kvantování signálu



#### Kvantizační šum, odstup od kvantizačního šumu



### Samostatné úkoly