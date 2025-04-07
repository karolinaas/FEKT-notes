---
share: "true"
category: BPC-CZS
---

1. [[08 Spektrum a STFT#Motivace|Motivace]]
2. [[08 Spektrum a STFT#Definice|Definice]]
3. [[08 Spektrum a STFT#Vliv parametrů|Vliv parametrů]]
4. [[08 Spektrum a STFT#Zdroje|Zdroje]]

---

## Motivace

### Motivace pro zavedení STFT

- Fourierova transformace je nástrojem pro *stacionární signály*
	- dobré rozlišení ve frekvenční doméně podle délky signálu
	- v případě nestacionárního signálu však nevíme, kdy frekvenční složka nastala
- potřebujeme nástroj, který nám umožní lokalizovat frekvenční složky signálu v čase
- krátkodová Fourierova transformace (**Short-Time Fourier Transform**)

## Definice

### Diskrétní případ STFT

- vztah pro Fourierovu transformaci diskrétních signálů:

	$$
	X[k]=\frac{1}{N}\sum\limits_{n=0}^{N-1}x[n]\,e^{-i\frac{2\pi kn}{N}},\ k=0,\ ...,\ N-1
	$$
	
- diskrétní krátkodobá Fourierova transformace:

	$$
	X[k,\,m]=\frac{1}{N}\sum_{n=0}^{N-1}w[n-m]\,x[n]\,e^{-i\frac{2\pi kn}{N}},\ k=0,\ ...,\ N-1
	$$

- STFT realizuje výpočet spektra po malých částech, takže můžeme zjistit, kdy se frekvenční složka v signále objevila
- má však své limitace v rozlišení (čas vs. frekvence)

## Vliv parametrů

- délka okna
	- určuje rozlišení na frekvenční a časové ose transformace
	- prodloužením okna dosáhneme většího rozlišení na frekvenční ose, ale menšího na časové -> **Heisenbergův princip neurčitosti**

	![[../_assets/img/Pasted image 20250407085636.png|Pasted image 20250407085636.png]]

- tvar okna
	- součin signálu s oknem provádí operaci, která je ekvivalentní konvoluci v jednom daném bodě
	- okno je tedy nutno vnímat jako FIR filtr s odpovídající kmitočtovou charakteristikou

	![[../_assets/img/Pasted image 20250407085805.png|Pasted image 20250407085805.png]]

## Zdroje

### Příklady zdrojů pro implementaci FFT/STFT

- https://www.audiolabs-erlangen.de/resources/MIR/FMP/C2/C2_STFT-Basic.html
- https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.stft.html
- https://pyfar.readthedocs.io/en/v0.2.0/pyfar.dsp.fft.html
- https://ltfat.org/
