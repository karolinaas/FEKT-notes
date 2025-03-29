---
share: "true"
category: BPC-STE
---
## Čtvrtá přednáška z předmětu BPC-STE
##### Standard Volume Indicator (SVI), Volume Unit meter (VU)
##### Peak Program Meter (PPM)
##### Zobrazení amplitudové obálky
- popisuje jak se mění amplituda signálu v čase
- harmonický signál $s(t)$ s časově proměnnou amplitudou lze pomocí amplitudové obálky popsat jako: $$s(t) = E(t) \, s_0(t)$$
	- $E(t)$ - amplitudová obálka
	- $s_0(t)$ - nemodulovaný signál s konstantní amplitudou
- Amplitudovou obálku lze vypočítat z
	- koeficientů Fourierovy transformace v komplexním tvaru
	- Hilbertovou transformací
- Výpočetně náročné, proto se dělá jen odhad pomocí špičkových napětí
- Stejný princip jako odhad špičkové hodnoty u PPM
##### Indikace přebuzení digitálního zvukového signálu
- Digital Peak Indicator
	- sleduje, jestli několik vzorků po sobě dosáhlo 0 dBFS
##### Měření skutečné špičkové hodnoty
- Skutečná špičková hodnota uváděna v dBTP (dB True Peak)
- získá se pomocí upsamplingu - převzorkování signálu
#### Měření hlasitosti
#### Indikace stereofonní a surroundové signály
##### Phase Meter
- měří shodu levého a pravého kanálu
- ukazuje kosinus fázového rozdílu
- pokud je hodnota mezi 0 a 1 tak je všechno v pořádku
##### Pan Meter
- ukazuje rozdíl špičkových a efektivních hodnot
- zdá se, že ukazuje vpravo i vlevo, ale to je pouze doběh
##### Goniometr (Vector scope)
- chceme úzký obrazec jinak je problém s fází
---
### Mixážní pult
##### Kategorie mixážních pultů
- analogové mixážních pulty
	- velký problém, nemá paměť
- analogové mixážní pulty s digitálním řízením
	- potenciometry neovládají přímo úrovně, ale DA převodníky
	- je to drahý oproti analogovýmu pultu
- digitální mixážní pulty s analogovými vstupy a výstupy
- digitální mixážní pulty
##### Připojení periferních zařízení
- kanály jsou řazeny do sloupečků (channel strips)
- hlavní výstup je stereo
- 