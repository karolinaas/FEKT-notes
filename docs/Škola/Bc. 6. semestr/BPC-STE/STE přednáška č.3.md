---
share: "true"
---
## Druhá přednáška z předmětu BPC-STE
### Digitální zvukové signály
#### Analogově-digitální převod zvukových signálů
##### Vzorkování
- **Vzorkovací teorém** - $f_s > 2f_{MAX}$
	- při nedodržení vzniká aliasingové zkreslení
	- nutnost použití antialiasingové dolní propusti
##### Vznik aliasingového zkreslení
- opakující se složky spektra se překrývají
##### Antialiasingová dolní propust
- **Ideální DP** - mezní kmitočet 20kHz
	- nelze realizovat
- **Reálná DP**
	- má určitou šířku přechodového pásma
	- maximální zvlnění
	- minimální potlačení v nepropustném pásmu
- ###### Vlastnosti antialiasingové dolní propusti
	- Šířka přechodového pásma
		- pásmo, kde signál musí klesnou na požadovanou hodnotu (-3dB, resp. -6dB)
	- Potlačení v nepropustném pásmu
		- čím větší potlačení, tím více budou potlačeny aliasingové složky (mm yes the floor here is made out of floor)
- vyšší řád IIR filtru -> větší zvlnění fázové char. -> delší odezva na jednotkový skok -> tvarové zkreslení transientů (v audiu)
- Vyšší vzorkovací kmitočet -> větší šířka přechodového pásma -> lze použít menší strmost AA filtru -> nižší řád filtru
##### Kvantování
- převod spojitých úrovní vzorků na diskrétní úrovně
- používá se bitová hloubka 16, 20, 24 i 32 bitů
	- nejvýznamnější bit je použit jako znaménkový
- **kvantovací šum** - rozdíl nakvantované a původní úrovně
- SNR signálu nakvantovaného na $n$ bitů: $$SNR = 20 \log \frac{1}{Q} = 20 \log (2^n - 1) \approx 20 \log (2^n) \approx 6n \, [\text{dB}]$$
	- $Q = 1 / (2^n - 1)$ - kvantovací krok
- zvýšení rozlišení převodníku o 1 bit -> snížení efektivní hodnoty kvantovacího šumu o cca. 6dB -> zvýšení SNR o 6dB
- nutné pamatovat na dynamickou rezervu pro špičky signálu, alespoň extra 3dB
##### Sigma-delta převodník
- synchronní převodník
- jádrem je integrátor a komparátor, který generuje sled pulzů
- střední hodnota počtu pulzů za určitý interval odpovídá výstupnímu napětí
- střední hodnota se získá MA filtrem (Moving Average)
- Bit off topic -> kdysi existovalo Super Audio CD od Sony (SACD) - nikdy se neuchytilo
- potlačuje kvantovací šum
- ###### Sigma-delta převodník s tvarováním šumu
	- některé převodníky používají *noise-shaping*
	- dále potlačuje šum tím, že ho rozprostře do širšího pásma, tj. velká část šumu se ořeže
##### Kódování
- převod vzorků, které jsou diskrétní v čase i úrovni na číslo (fyzikální veličinu na informaci)
- používají se výhradně lineární kvantovací hladiny -> LPCM (Linear PCM)
##### Formáty vyjádření čísel
- ###### Pevná řádová čárka (fixed-point)
	- číslo je vyjádřeno na pevný počet bitů
	- řádová čárka je pevně umístěna (v audiu před nejvýznamnějším bitem)
- ###### Plovoucí řádová čárka (floating-point)
	- vyjádření se skládá ze znaménkového bitu (S), exponentu (E) a mantisy (M)
##### Hladina digitálního signálu
- udává se v jednotce dBFS (dB Full Scale - dB plného rozsahu) $$L = 20 \log \frac{x}{x_0} \, [\text{dBFS}]$$
	- $x_0$ - referenční hodnota napětí A/D a D/A převodníku
##### Vztah mezi hladinou analogového a digitálního signálu
- stanovují normy
	- evropská norma - 18dBU
	- americká norma - 24dBU
#### Digitálně-analogový převod zvukových signálů
##### Digitálně analogový převod
- většinou jsou používány 1bit sigma-delta převodníky
##### Redukce bitového rozlišení
- kvantovací chyba
- projevuje se jako nerovnoměrný kvantovací šum
- řeší se ditheringem
##### Dithering
- přičtení náhodného čísla (dither) k nejnižším bitům, které budou useknuty
- kvantovací šum je pak konstantní
- nemusí být bílý šum, dither (signál, který se k tomu připočítává) může být libovolný náhodný signál
- nejlepší řešení je použití ditheru, který kopíruje křivku práhu slyšení lidského ucha (noise shaping)
- **noise shaping** - filtrace signálu ditheru za účelem zvýšení výkonu kvantovacího šumu v kmitočtových oblastech, kde má sluch nižší citlivost
- nepoužívají se jen šumy, některé firmy (Apogee) používají i harmonický signál, ale není to tak dobrý
- dithering musí být úplně poslední proces, který aplikujeme (přidává šum)
##### Jitter
- fázový šum způsobený nestabilitou vzorkovacího kmitočtu
- při nesynchronizovaných A/D a D/A převodnících způsobuje zkreslení signálu
- závisí na kmitočtu signálu
##### Fázový závěs
- pro opravu jitteru
- **Phase-Locked Loop** (PLL) -> stabiizace jitteru
	- porovnává fázi vstupního signálu s fází signálu oscilátoru, jehož kmitočet upravuje, aby se fáze shodovaly -> budou shodné i kmitočty
#### Základní operace s digitálním zvukovým signálem
##### Zpracování v systému s pevnou řádovou čárkou
- musí mít vyšší rozlišení než vstupní číslicový signál
##### Zpracování v systému s plovoucí řádovou čárkou
- nedochází k přetečení ani zaokrouhlování hodnot
##### Číslicové zesílení signálu
- násobení signálu konstantou
##### Normalizace číslicového signálu
- Vynásobení všech vzorků signálu konstantou $$k = \frac{x}{max(|x[]n|)} = \frac{x_0 10^{L/20}}{max(|x[]n|)}$$
	- $x$ - hodnota
	- $L$ - úroveň v dB, na kterou chceme signál normalizovat
	- $x_0$ - referenční hodnota napětí
##### Změna vzorkovacího kmitočtu
- lze provádět pouze v poměru celého čísla
- Nadvzorkování (zvýšení $f_{vz}$) v poměru celého čísla $L$
	- proložení nulami -> doplnění $L–1$ nulových vzorků mezi každé dva vzorky původního signálu
	- periodizované kmitočtové složky se musí odstranit antialiasingovým filtrem s mezním kmitočtem $f_{VZ}/2L$
- Podvzorkování (snížení $f_{vz}$) v poměru celého čísla $M$
	- výběrem každého $M$-tého vzorku
	- před podvzorkováním je nutné omezit kmitočtové spektrum dolní propustí s mezním kmitočtem $f_VZ/2M$
##### Převzorkování 
- Změna vzorkovacího kmitočtu (převzorkování) v poměru racionálního čísla $L/M$
	- nejprve nadvzorkujeme, poté podvzorkujeme
	- vyšší výpočetní náročnost
	- nutná dvojí AA filtrace
---
### Měření a zobrazení vlastností zvukových signálů
##### Vlastnosti zvukových signálů
- jednokanálové (mono) signály
	- efektivní a špičková úroveň
	- hlasitost
	- časový průběh
	- amplitudová obálka
	- spektrum
- stereofonní signály
	- fáze mezi kanály
	- panorama
	- vektorskop
- surroundové formáty
#### Indikace úrovně
##### Plovoucí odhad efektivní hodnoty signálu
- Jedna časová konstanta (stejná pro náběh i pokles)
- Dvoucestný usměrňovač, za který je zapojen integrační článek
##### Plovoucí odhad špičkové hodnoty signálu
- Dvě časové konstanty (různá pro náběh a pokles)
- Dvoucestný usměrňovač, za který je zapojen integrační článek s různou dobou nabíjení a vybíjení
##### Zobrazení úrovně zvukového signálu
- původně byly používány VU metry
	- spojitá indikace
	- magnetoelektrický měřící přístroj
- Jednobodová indikace
	- je vidět jen tečka (jedna ledka)
	- LED připojená na výstup napěťového komparátoru
- Vícebodová indikace:
	- dvoubarevná LED
	- komparátory připojené na vstupy demultiplexeru
- Sloupcová indikace
	- sada diod LED seřazených většinou nad sebou připojených na výstupy napěťových komparátorů
- LCD zobrazovač
	- jemnější dělení stupnice
	- zobrazení krátkodobého a dlouhodobého maxima
	- přepínání různých zobrazení
	- současné zobrazování více veličin
##### Stupnice indikátoru
- Relativní pozice bodů na stupnici odpovídajících určitým úrovním signálu

Skončili jsme na slidu č. 10