---
share: "true"
category: BPC-CZS
---

1. [[05 Operace se signály a transformace#Základní operace se signály|Základní operace se signály]]
	- [[05 Operace se signály a transformace#Sčítání harmonických signálů|Sčítání harmonických signálů]]
	- [[05 Operace se signály a transformace#Modulace signálu|Modulace signálu]]
2. [[05 Operace se signály a transformace#$ mathcal{Z}$-transformace|Z-transformace]]
	- [[05 Operace se signály a transformace#Důvody používání $ mathcal{Z}$-transformace|Důvody používání Z-transformace]]
	- [[05 Operace se signály a transformace#Základní vlastnosti a operace $ mathcal{Z}$-transformace|Základní vlastnosti a operace Z-transformace]]
	- [[05 Operace se signály a transformace#^671192|Přenosová funkce systému]]
	- [[05 Operace se signály a transformace#^671192|Nuly a póly systému]]
	- [[05 Operace se signály a transformace#^671192|Kmitočtová charakteristika systému]]
3. [[05 Operace se signály a transformace#Samostatné úkoly|Samostatné úkoly]]

---
## Základní operace se signály

### Sčítání harmonických signálů

- Pomocí sčítání harmonických signálů můžeme generovat různé průběhy.
- Sčítání můžeme demonstrovat např. pomocí rovnic pro obdélníkový, pilový nebo trojúhelníkový signál:
	- *Obdélníkový signál*

		$$
		x[n] = \frac{4}{\pi}\sum\limits_{k=1}^\infty\frac{1}{2k-1}\sin\left(2\pi f(2k-1)nT_s\right)
		$$

	- *Pilový signál*

		$$
		x[n] = -\frac{2}{\pi}\sum\limits_{k=1}^\infty\frac{(-1)^k}{k}\sin\left(2\pi flnT_s\right)
		$$

	- *Trojúhelníkový signál*

		$$
		x[n] = -\frac8{\pi^2}\sum\limits_{k=1}^\infty\frac{(-1)^k}{(2k-1)^2}\sin\left(2\pi f(2k-1)nT_s\right)
		$$

- Proměnná $k$ v rovnicích značí pořadí harmonické složky (násobek základní frekvence $f$). Pro teoretický průběh bychom museli sečíst nekonečno harmonických, ale v Matlabu pro demonstraci sčítáme pouze konečný počet.

### Modulace signálu

#### Amplitudová modulace signálu

- Amplitudová modulace je v zásadě násobení dvou signálů a definujeme ji jako:

	$$
	y_{am}[n]=(1+mx_m[n])x_c[n]
	$$

	$$
	y_{am}[n]=(1+m\sin(2\pi f_mnT_s))A_c\cos(2\pi f_cnT_s)
	$$

	- $x_c[n]$ - modulovaný signál (nosná)
	- $x_m[n]$ - je modulační signál
	- $m$ - modulační index v intervalu $\langle0;\,1\rangle$
- Pokud chceme zachovat původní velikost signálu $x_c[n]$, můžeme jej vydělit výrazem $(1+m)$, tedy $\frac{A_c\cos(2\pi f_cnT_s)}{(1+m)}$ a teprve poté jej násobit modulačním signálem.

#### Frekvenční modulace signálu

- U frekvenční modulace měníme periodicky frekvenci nosného signálu v určitém rozsahu $\Delta f$ (frekvenční zdvih). Známe-li frekvenční zdvih a frekvenci modulačního signálu, můžeme spočítat modulační index jako $m=\frac{\Delta f}{f_m}$.
- Samotnou frekvenční modulaci poté definujeme jako:

	$$
	y_{fm}[n]=A_c\cos(2\pi f_cnT_s+\sin(2\pi f_mnT_s))
	$$

- Příklad - máme signál o frekvenci $1000\,\text{Hz}$, modulujeme jej signálem o frekvenci $3\,\text{Hz}$ a $\Delta f$ bude $50\,\text{Hz}$. Výstupem bude signál, jehož frekvence se bude měnit v intervalu $\langle 950;\, 1050\rangle\,\text{Hz}$ třikrát za sekundu.

## $\mathcal{Z}$-transformace

### Důvody používání $\mathcal{Z}$-transformace

- Získání **přenosové funkce systému**
	- poskytuje důležité informace o tom, jak systém zpracovává signál.
- Získání **kmitočtové charakteristiky**
	-  jak daný systém (např. filtr) zesiluje nebo potlačuje různá kmitočtová pásma
- Analýza **stability systému**
	- můžeme zjistit, zda je daný systém stabilní nebo ne
- Umožňuje intuitivnější návrh číslicových filtrů

### Základní vlastnosti a operace $\mathcal{Z}$-transformace

- Definice:

	$$
	X(z)=\sum\limits_{n=-\infty}^\infty x[n]z^{-n}
	$$

	- $z=re^{j\phi}=r(\cos\phi+j\sin\phi)$
	- $z$ - komplexní číslo
	- $r = |z|$ - modul tohoto komplexního čísla
	- $\phi$ - uhel v radiánech
- Základní operace:
	- Linearita

		$$
		\mathcal Z\left\{ ax_1[n]+bx_2[n] \right\} = aX_1(z) + bX_2(z)
		$$

	- Zpoždění

		$$
		\mathcal Z\left\{ x[n-m] \right\} = z^{-m}X(z)
		$$

	- Předsunutí

		$$
		\mathcal Z\left\{ x[n+m] \right\} = z^mX(z) - \sum\limits_{i=0}^{m-1}x[i]z^{m-i}
		$$

	- Konvoluce

		$$
		\mathcal Z\left\{ x[n]\,*\,h[n] \right\} =X(z)\cdot H(z)
		$$

> [!question] Příklad
>  Systém je popsán diferenční rovnicí $y[n]=0,5x[n]+0,5x[n-1]$.
>
> Po aplikaci $\mathcal Z$-transformace dostaneme $Y(z)=0,5X(z)+0,5z^{-1}X(z)$.
>
> > [!tip] Přenosová funkce systému
> > Přenosová funkce je podíl výstupu systému ku vstupu:
> >
> > $$\colorbox{rgba(102, 0, 0, 0.4)}{$💡H(z)=\frac{Y(z)}{X(z)}$}$$
> > 
> > 1. Vytkneme $X(z)$ a dostaneme $Y(z)=X(z)(0,5+0,5z^{-1})$.
> > 2. Celou rovnici vydělíme výrazem $X(z)$ a dostáváme $\underline{\underline{H(z)=0,5+0,5z^{-1}}}$.
> 
> > [!tip] Nuly a póly systému
> > Pro získání tzv. nul a pólů systému vždy násobíme obě strany přenosové funkce číslem $z$ umocněným opačnou mocninou vůči $z$ s nejmenší mocninou ve výrazu.
> > 
> >  V tomto případě je to $z^{−1}$, a tak celou rovnici vynásobíme číslem $z$.
> >
> > 3. Upravíme $H(z)=0,5+0,5z^{-1}$ a dostaneme $zH(z)=z0,5+0,5$ a následně $H(z)=\frac{0,5z+0,5}{z}$.
> > 4. Nuly získáme, když položíme čitatel roven nule jako $0,5z+0,5=0 \Longrightarrow z+1=0$, tedy $z=-1$. $\underline{\underline{\text{Nula se nachází v čísle }-1}}$.
> > 5. Póly získáme, když položíme jmenovatel roven nule jako $z=0$. V tomto případě rovnou vidíme, že $\underline{\underline{\text{pól se nachází v čísle }0}}$.
> 
> > [!tip] Kmitočtová charakteristika systému
> > Z přenosové funkce můžeme snadno získat tzv. kmitočtovou charakteristiku systému.
> > 
> > Za každé $z$ v přenosové funkci $H(z)=0,5+0,5z^{-1}$ dosadíme $e^{j\omega}$, kde $\omega$ je úhlová frekvence (typicky v intervalu $\langle -\pi;\,\pi \rangle$).
> >
> > V Matlabu můžeme pro výpočet kmitočtové charakteristiky použít funkci `freqz(b, a)` na základě znalosti čitatele a jmenovatele přenosové funkce systému.
> >
> > 6. Zadefinujeme koeficienty přenosové funkce v Matlabu:
> > 	- Čitatel - `b = [0.5 0.5]`
> > 	- Jmenovatel je roven $1$, tak můžeme zapsat `a = [1]`

^671192

## Samostatné úkoly
1. Rozšiřte funkci `oscillator` o generování trojúhelníkového a obdélníkového průběhu dle rovnic z prezentace.
2. Implementujte frekvenční modulaci na základě definice z prezentace.
3. Vypočítejte přenosovou funkci systému $y[n]=0,5x[n]+0,5y[n-1]$ a zobrazte modulovou a fázovou kmitočtovou charakteristiku s využitím MATLAB funkce `freqz`.
