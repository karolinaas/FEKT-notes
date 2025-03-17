---
share: "true"
category: BPC-STE
---
## Druhá přednáška z předmětu BPC-STE
[Záznam přednášky](https://vutbr-my.sharepoint.com/:v:/g/personal/schimmel_vutbr_cz/EfM3PiZ0YV1KtaBuFtbFP2QBPcGpvXzY3PR0bloe4aUcEg?e=iRq9Gj)
### Konektory (slide 20)
- #### Symetrické vedení
	- **Canon XLR** (AES14):
		- Vstupy vždy zdířky
		- Výstupy vždy vidlice
		- má tři piny:
			1. ground - pravý, černá
			2. hot - levý, červená
			3. cold - spodní, modrá
		- Stereo varianta s 5 piny - ani Schimmel na ni nikdy nenarazil
		- Mini XLR (AES66) - lavalier mikrofony
	- **1/4" TRS** (Tip-Ring-Sleeve)
		- Tip - hot
		- Ring - cold
		- Sleeve - ground
- #### Nesymetrické vedení
	- **Phono RCA** (Cinch)
		- kabely vždy osazené vidlicemi
		- tip - hot, sleeve - cold
	- **1/4" TS** (Tip-Sleeve, mono jack 6,3mm)
		- kabely vždy osazené vidlicemi
- #### Reproduktorové úrovně
	- konektor **speakON** (AES45)
		- 2, 4 a 8 pinové provedení, 8 pin je vzácný
		- páry pinů jsou označovány 1+/1-, 2+/2-,...
		- kabely vždy osazené vidlicemi
		- musí snést velké proudové zatížení, minimálně 30A
		- 2pin konektor lze zasunout do 4pin zásuvky, obráceně ne
	- obdobný konektor **PowerCON** (3-pinový)
		- používaný pro napájení zařízení
		- nelze zaměnit se speakON
		- 2 nekompatibilní typy
			- modrý pro zdroj
			- šedý pro spotřebič
### Propojení konektory speakON (slide 24)
- dvoukanálové
- stereofonní
- můstkové
- dvoupásmové
### Kombinované konektory
- **vstupní konektory combo**
	- kombinace konektoru XLR a TRS
		- s možností rozpojovacích kontaktů na konektoru TRS
			- provedení zemnícího kontaktu:
				1. společná zem
				2. samostatné země
				3. odpojovaná zem
	- **výstupní konektory speakON combo**
		- kombinace konektoru speakON a TS
### Konektory s rozpojovacími kontakty
- **TS/TRS, Combo**
	- rozpojovací kontakty jsou spojeny s piny pokud není zapojena zástrčka
### Převod mezi symetrickým a nesymetrickým propojením
 - #### **Konektory TS - XLR**
	 1. Sym. výstup na nesym. vstup - propojí se aktivní póly (hot) a póly s nulovým potenciálem, aktivní pól (cold) bude nezapojen
	 2. Nesym. výstup na sym. vstup - cold je spojen s pólem s nulovým potenciálem
		 - cold nesmí zůstat ve vzduchu, jinak se chová jako anténa a zesák ve vstupu bude zesilovat šum
		 - správný postup je použít dvoužilový kabel a spojit cold se zemí až v TS konektoru, aby se naindukovaný šum  odečetl a zachovala se výhoda symetrického vedení
	    $u_2 = (u_1 + u_n) - (0 + u_n) = u_1$
 - #### Konektory TS - TRS
	 - Při kombinaci 3-pólového a 2-pólového konektoru a zdířky dojde k uzemnění pólu s obrácenou polaritou
### Napájení zařízení po signálovém vodiči
- Přivedení napájecího stejnosměrného napětí pomocí symetrického signálového kabelu na pinech 2 a 3 (hot a cold)
1. **Napájení T (A-B)** - dnes se již nepoužívá kvůli pronikání šumu
2. **Fantomové napájení** - kromě 48V existuje i 12V a 24V
### Zásady používání fantomového napájení
1. fantom. napájení vypínat/zapínat při ztlumených výstupech nebo odpojených repro/sluchátkách
2. při zapnutém fantom. nevyměňovat kapse mikrofonu, resp. ani nepřipojovat/odpojovat mikrofony
3. dynamickým mikrofonům nevadí, napájení typu T však vadí
### Přenos vícekanálových zvukových signálů
#### Multipárové kabely
- **multipair, multicore, snake** (v češtině *párák*)- několik párů se společným stíněním v jediném kabelu
- Zakončení:
	- konektory XLR, TRS, TS
	- patchbay
	- multipin konektory
	- stagebox, stage snake
#### Stereofonní zvuk
- Pořadí stop:
	- lichý kanál -> levý
	- sudý kanál -> pravý
- Konektory TRS:
	- levý kanál -> Tip
	- pravý kanál -> Ring
- Konektory Cinch:
	- levý kanál (vstup) -> bílý
	- pravý kanál (vstup) -> červený
	- levý kanál (výstup) -> modrý
	- pravý kanál (výstup) -> žlutý
#### Surroundový zvuk
1. Left
2. Right
3. Center
4. Low-frequency
5. Left surround
6. Right surround
7. volné využití
8. volné využití
### Distribuce zvukového signálu v elektrické soustavě
#### Distribuční systémy s vysokým napětím
- Nižší proud, snížená výkonových ztrát v kabelu
- Zvýšení napětí výstupu pomocí step-up trafa (nejčastěji 100V), snížení zpět pomocí step-down trafa
- Využití hlavně pro trvalé instalace
- Paralelní zapojení reproduktorů s dlouhými přívodními kabely
#### Bezdrátový přenos
- Analogový (FM, AM už moc ne)
- Digitální (FSK, spread spectrum) 
##### "Finty co umí bezdrátovej přenos:"
- ###### Komprese a expanze:
	- kvůli šumu je signál komprimován (snížením dynamiky) na vysílači a na přijímači je znovu expandován
- ###### Pre-emfáze a de-emfáze:
	- redukce šumu pomocí zesílení vysokých kmitočtů na vysílači a zeslabení na přijímači
- ###### Funkce Squelch:
	- mute signálu pokud úroveň klesne pod určitý threshold
##### Diverzitní příjem
- Využívá dvou antén v určitě vzdálenosti (1/4 vlnové délky)
#### Mechanický přepojovač - patchbay
- Čtveřice TS (nesymetrický patchbay) nebo TRS konektorů
	- 2 konektory na přední straně
	- 2 na zadní straně
- obvykle do 19" racku, výška 1U
- Audio Normalling
#### DI box
- Direct Injection
- Zařízení pro
	- přizpůsobení impedance
	- typu vedení (sym./nesym.)
	- přizpůsobení úrovně
	- galvanické oddělení
##### Pasivní DR box
- trafo pro symetrizaci, přizpůsobení úrovně a impedance
##### Aktivní DI box
- předzesák s vysokou vstupní impedancí
- napájení z baterie nebo fantomem
#### Rozbočovač (Splitter)
- nevýhody přímého spojení
	- zemní smyčky
	- propojení fantomového napájení
	- snížení zatěžovací impedance
- Pasivní splitter:
	- galvanické oddělení trafem
	- možnost realizace jako kabel
- Aktivní splitter

## Zvuková zařízení
### Parametry zvukových zařízení
#### Impedance
 - **vstupní impedance** - měřená mezi vstupními svorkami
 - **výstupní impedance** - měřená mezi výstupními svorkami
 - **jmenovitá impedance zdroje** - typická impedance zdroje připojeného na vstup zařízení
 - **jmenovitá zatěžovací impedance** - impedance, kterou může být zařízení zatíženo 
#### Kmitočtová odezva
- **Zesílení** - gain, poměr výstupního a vstupního napětí
- **Kmitočtoví odezva** - závislost zesílení na kmitočtu
- **Relativní modulová kmitočtová odezva** - kmitočtová závislost zesílení relativně k hodnotě zesílení na specifikovaném kmitočtu
- **Efektivní kmitočtový rozsah** (effective frequency range) - kmitočtový rozsah, kde odchylka od požadované odezvy nepřekročí definované hranice (+-3dB)
#### Šum
- **Výstupní šumové napětí** $U_{2EIN}$ - efektivní hodnota výstupního napětí generována vlastním šumem při 0V
- **Ekvivalentní vstupní šumové napětí** (Equivalent Input Noise) $U_{1EIN}$ - napětí sinusového signálu, které by na výstupu zesilovače vytvořilo výstupní šumové napětí $$U_{1EIN} = \frac{U_2}{A}$$
#### Harmonické zkreslení
- **Celkové harmonické zkreslení** THD
	- poměr součtu efektivních hodnot vyšších harmonických složek
	- udává se v % nebo v dB
$$THD = \frac{\sqrt{\sum^\infty_{n=2}U^2_{2,n}}}{U_{2,1}} \cdot 100 \, [\%]$$
$$L_{THD} = 20 \log\frac{\sqrt{\sum^\infty_{n=2}U^2_{2,n}}}{U_{2,1}} \, [dB]$$
#### SINAD
- **Signal to Noise And Distortion**
- měřítko kvality zvuku používané u zařízení s nízkým poměrem signálu k šumu
- je to převrácená hodnota THD+N
$$SINAD = 20 \log \frac{U_2}{\sum^\infty_{n=2}U^2_{2,n}} \, [dB]$$
#### Vstupní a výstupní napětí
- **Maximální výstupní napětí** - $U_{2max}$
- **Maximální vstupní napětí** - $U_{1max}$
- **Minimální vstupní napětí** - $U_{1min}$
- **Jmenovité výstupní napětí** - $U_{2rated}$
- **Jmenovité vstupní napětí** - $U_{1rated}$
#### Limitace zvukového signálu
- horní hranice použitelnosti přístroje je dána zkreslením
#### Dynamický rozsah a dynamická odezva
- **Poměr signálu a šumu** - Signal to Noise Ratio - SNR
$$SNR = 20 \log \frac{U_{2rated}}{U_{2EIN}} \, [dB]$$
- **Dynamický rozsah** - Dynamic Range
$$DR = 20 \log \frac{U_{1max}}{U_{1EIN}} \, [dB]$$
- **Dynamická rezerva** - Dynamic Headroom
$$DH = 20 \log \frac{U_{1max}}{U_{1rated}} \, [dB]$$
#### Další parametry
- **Míra potlačení souhlasných signálů** - Common-Mode Rejection Ration - CMRR
- **Přeslechy mezi kanály, separace kanálů** - Crosstalk, Channel Separation