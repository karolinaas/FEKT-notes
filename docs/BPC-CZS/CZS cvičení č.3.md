---
share: "true"
category: BPC-CZS
---

## Třetí cvičení z předmětu BPC-CZS

**Body cvičení:**
1. [[CZS cvičení č.3#Vzorkování signálů|Vzorkování signálů]]
	- [[CZS cvičení č.3#Vzorkovací teorém|Vzorkovací teorém]]
2. [[CZS cvičení č.3#Generování harmonických průběhů v Matlabu|Generování harmonických průběhů v Matlabu]]
3. [[CZS cvičení č.3#Kvantování signálu|Kvantování signálu]]
	- [[CZS cvičení č.3#Kvantizační šum, odstup od kvantizačního šumu|Kvantizační šum, odstup od kvantizačního šumu]]
4. [[CZS cvičení č.3#Samostatné úkoly|Samostatné úkoly]]

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
	```matlab
	<center>t = (0:N -1) / fs</center>
	```
	- `N` - počet vzorků
	- `fs` - vzorkovací kmitočet
- Takto zadefinovaná časová osa je vektor hodnot s rozestupem definovaným vzorkovací periodou $T_s$
- Je možné nahradit `(0:N-1)` pomocí `(0:(duration*fs)-1)`. Takto dostáváme časový vektor definovaný pomocí délky trvání signálu v sekundách `duration` a vzorkovacího kmitočtu `fs`.
- v Matlabu můžeme vygenerovat signály jako: 
  `y_cos = A * cos(2 * pi`

### Kvantování signálu



#### Kvantizační šum, odstup od kvantizačního šumu



### Samostatné úkoly