---
share: "true"
category: BPC-FY2B
---

## Soustava hmotných bodů a tuhé těleso

### Těžiště

- Při zkoumání pohybu tělesa zjistíme, že jeden z jeho bodů má význačné postavení. Pohybuje se po stejné dráze, po které by se pohyboval hmotný bod při stejném typu pohybu (např. šikmý vrh – trajektorií je parabola).

	![[../_assets/img/Pasted image 20250404012008.png|Pasted image 20250404012008.png]]

- ==💡Těžiště tělesa nebo soustavy těles je bod, který se pohybuje tak, jako by v něm byla soustředěna veškerá hmota tělesa (soustavy) a působily v něm všechny vnější síly působící na těleso (soustavu).==

#### Soustava částic

- Pro soustavu dvou částic definujeme polohu těžiště (*viz obr. a*):

	$$
	x_T = \frac{m_2}{m_1+m_2}d
	$$

	![[../_assets/img/Pasted image 20250404012418.png|Pasted image 20250404012418.png]]

- Pro soustavu dvou částic pak při obecné volbě počátku souřadné soustavy (*viz obr. b*) platí:

	$$
	x_T=\frac{m_1x_1+m_2x_2}{m_1+m_2}=\frac{m_1x_1+m_2x_2}{M}
	$$

	- $M = m_1+m_2$ je celková hmotnost soustavy

	![[../_assets/img/Pasted image 20250404012820.png|Pasted image 20250404012820.png]]

- Pro soustavu $n$ částic pak při obecné volbě počátku souřadné soustavy platí:

	$$
	x_T=\frac{1}{M}\sum\limits_{i=1}^nm_ix_i
	$$

	$$
	y_T=\frac{1}{M}\sum\limits_{i=1}^nm_iy_i
	$$

	$$
	z_T=\frac{1}{M}\sum\limits_{i=1}^nm_iz_i
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\vec{r_T}=\frac{1}{M}\sum\limits_{i=1}^nm_i\vec{r_i}
	$}
	$$

#### Tuhé těleso

- Tuhé těleso lze rozložit na nekonečný počet infinitezimálně malých elementů (částic) o hmotnosti $dm$.
- Součty v rovnicích jsou pak nahrazeny integrály a souřadnice těžiště jsou definovány vztahy:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡x_T=\frac{1}{M}\int x\,dm
	$}
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡y_T=\frac{1}{M}\int y\,dm
	$}
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡z_T=\frac{1}{M}\int z\,dm
	$}
	$$

- Je-li těleso homogenní, je $\rho=\frac{dm}{dV}=\frac{M}{V}$, pak $dm=\rho\,dV$, a proto:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡x_T=\frac{1}{V}\int x\,dV
	$}
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡y_T=\frac{1}{V}\int y\,dV
	$}
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡z_T=\frac{1}{V}\int z\,dV
	$}
	$$

- Pokud má těleso určitou symetrii, leží jeho těžiště ve středu, resp. na ose nebo rovině symetrie.
- Těžiště tělesa nemusí nutně ležet v tomto tělese.

### První impulsová věta

- Sledujeme-li srážku dvou kulečníkových koulí, z nichž jedna je zpočátku v klidu, zjistíme, že i po srážce bude soustava pokračovat v pohybu ve směru nárazu.
- Zjistíme, že existuje bod, který se stále pohybuje kupředu bez ohledu na srážku.
- Tímto bodem je těžiště soustavy těchto dvou koulí.
- Ať je srážka jakákoliv – přímá, nebo zcela obecná, těžiště se stále pohybuje kupředu, jako by srážka vůbec nenastala.

- ==💡Hybnost soustavy částic je rovna součinu její celkové hmotnosti a rychlosti jejího těžiště.==

- **První impulsová věta** se také nazývá **věta o hybnosti**.
- ==💡Časová změna celkové hybnosti soustavy hmotných bodů je rovna výslednici vnějších sil působících na tuto soustavu.==

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\frac{d\vec p}{dt}=\vec F
	$}
	$$

	- $\vec p=\sum\limits_{i=1}^n\vec{p_i}$
	- $\vec F=\sum\limits_{i=1}^n\vec{F_i}$
- Tato věta platí i pro tuhé těleso.
- V případě, že je součet všech vnějších sil působících na soustavu roven nule, platí pro soustavu zákon **zachování hybnosti**:

	$$
	\vec p=\text{konst.}
	$$

### Otáčivý pohyb

- Dosud jsme se zabývali převážně **pohybem posuvným**.
- Nyní se budeme zabývat rotací tuhého tělesa kolem **pevné osy** (**osa otáčení**, **osa rotace**).
- Pro popis otáčivého pohybu budeme používat úhlové veličiny:
	- úhlová poloha $\varphi,\,[\varphi]=\text{rad}$
	- úhlová rychlost $\omega,\,[\omega]=\text{rad}\cdot\text s^{-1}$
	- úhlové zrychlení $\varepsilon,\,[\varepsilon]=\text{rad}\cdot\text s^{-2}$
- Platí:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\omega=\frac{d\varphi}{dt}
	$}
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\epsilon=\frac{d^2\varphi}{dt^2}=\frac{d\omega}{dt}
	$}
	$$

- Úhlové veličiny lze vyjádřit i jako vektory:

	$$
	\vec\omega=\frac{d\vec\varphi}{dt}
	$$

	$$
	\vec\varepsilon=\frac{d\vec\omega}{dt}
	$$

- Tyto vektory mají směr osy rotace, pro jejich orientaci platí **pravidlo pravé ruky**.
	![[../_assets/img/Pasted image 20250404020002.png|Pasted image 20250404020002.png]]

### Moment setrvačnosti

- Chceme-li určit kinetickou energii tuhého tělesa při otáčivém pohybu, nelze jednoduše použít tento vztah, ten platí pouze pro hmotný bod:

	$$
	❗E_k=\frac{1}{2}mv^2
	$$

- Považujme tuhé těleso za soustavu částic, pak platí:

	$$
	E_k=\frac{1}{2}m_1v_1^2+\frac{1}{2}m_2v_2^2+...=\sum\frac{1}{2}m_iv_i^2
	$$

- Problém je v tom, že se každá částice při otáčivém pohybu pohybuje jinou rychlostí, která závisí na její vzdálenosti od osy otáčení.
- Pro rychlost $i$-té částice pak platí:

	$$
	v_i=\omega r_i
	$$

- Pak:

	$$
	E_k=\sum\limits_{i=1}^n\frac{1}{2}m_i(\omega r_i)^2=\frac{1}{2}\left(\sum\limits_{i=1}^nm_ir_i^2\right)\omega^2
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡E_k=\frac{1}{2}J\omega^2
	$}
	$$

- Veličina $J$ se nazývá **moment setrvačnosti**:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡J=\sum\limits_{i=1}^nm_ir_i^2
	$}
	$$

- Moment setrvačnosti charakterizuje míru setrvačných vlastností tělesa.
- Je-li tuhé těleso složeno z jednotlivých částic, lze jeho moment setrvačnosti určit pomocí součtu.
- Je-li však hmota tělesa rozložena spojitě, je třeba nahradit tento součet integrálem:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡J=\int r^2\,dm
	$}
	$$

### Steinerova věta

- Známe-li moment setrvačnosti $J_T$ tělesa vzhledem k jisté ose jdoucí jeho těžištěm, můžeme vypočítat jeho moment setrvačnosti vzhledem ke každé další ose téhož směru.
- Vztah mezi oběma momenty setrvačnosti se nazývá **Steinerova věta**:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡J=J_T+mh^2
	$}
	$$

	- $m$ je hmotnost tělesa
	- $h$ je vzdálenost uvažovaných rovnoběžných os

### Moment síly

- Otáčivý účinek síly $\vec F$ na těleso závisí nejen na velikosti její tečné složky $F_t$, ale také na vzdálenosti jejího působiště (bod $P$) od bodu $O$ (průsečík osy otáčení s rovinou řezu).

	![[../_assets/img/Pasted image 20250404132146.png|Pasted image 20250404132146.png]]

- Veličina, která bere v úvahu oba tyto vlivy, se nazývá **moment síly** $M$ vzhledem k ose otáčení. Pro moment síly platí:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\vec M=\vec r\times\vec F
	$}
	$$

	- $\vec r$ je polohový vektor bodu $P$ vůči bodu $O$
- Jednotkou momentu síly je $\text{N}\cdot\text{m}$.

### Moment hybnosti

- Veličinou analogickou k hybnosti při posuvném pohybu je při otáčivém pohybu **moment hybnosti**.
- Moment hybnosti $L$ částice vzhledem k počátku $O$ je vektorová veličina definovaná vztahem:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\vec L=\vec r\times\vec p=m(\vec r\times\vec v)
	$}
	$$

	- $\vec r$ je polohový vektor částice vzhledem k bodu $O$
- Orientaci vektoru $\vec L$ určíme pomocí **pravidla pravé ruky**.

	![[../_assets/img/Pasted image 20250404132837.png|Pasted image 20250404132837.png]]

- Pro moment hybnosti platí:

	$$
	\vec L=J\vec\omega
	$$

	- $\omega$ je **úhlová rychlost** rotačního pohybu
	- $J$ je moment setrvačnosti tělesa k dané ose

### Práce, energie a výkon při otáčivém pohybu

- Síla $\vec F$ roztáčí tuhé těleso tvořené jedinou částicí o hmotnosti $m$ připevněnou na konci tyče, jejíž hmotnost je zanedbatelná.

	![[../_assets/img/Pasted image 20250404133431.png|Pasted image 20250404133431.png]]

- Při elementárním otočení tělesa o úhel $d\theta$ se částice posune podél své kruhové trajektorie o vzdálenost $ds$.
- Práci síly $\vec F$ při tomto posunutí vyjádříme jako:

	$$
	W=\int\limits_{\theta_i}^{\theta_f}M\,d\theta
	$$

	- Tento vztah je obdobou vztahu $W=\int\limits_{x_i}^{x_f}F\,dx$.
- Výkon síly při rotačním pohybu pak je:

	$$
	P=\frac{dW}{dt}=\frac{d\theta}{dt}=M\omega
	$$

	- Tento vztah je obdobou vztahu $P=Fv$ pro posuvný pohyb.

### Druhá impulsová věta

- **Druhou impulsovou větu** (**věta o momentu hybnosti**) lze vyjádřit ve tvaru:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\frac{d\vec L}{dt}=\vec M
	$}
	$$

- ==💡Časová změna momentu hybnosti částice je rovna vektorovému součtu momentů všech sil na ni působících.==
- Jedná se o obdobu druhého Newtonova zákona pro částici. $\frac{d\vec p}{dt}= \vec F$.
- Druhá impulsová věta platí i pro soustavu částic i pro tuhé těleso.
- Dále platí:

	$$
	\vec M=\frac{d\vec L}{dt}=\frac{d(J\vec\omega)}{dt}=J\frac{d\vec\omega}{dt}=J\vec\varepsilon
	$$

	tedy

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\vec M=J\vec\varepsilon
	$}
	$$

	- Tento vztah je obdobou vztahu $\vec F = m\vec a$ pro částici a je základem pro sestavení **pohybové rovnice** pro těleso při otáčivém pohybu.

### Obecný pohyb

- Obecný pohyb tuhého tělesa můžeme považovat za složení postupného (translačního) pohybu hmotného středu tělesa a otáčivého (rotačního) pohybu tělesa podle osy procházející jeho hmotným středem.
- Kinetická energie tuhé soustavy, resp. tuhého tělesa je při obecném pohybu:

	$$
	E_k = \frac{1}{2}mv^2+\frac{1}{2}J\omega^2
	$$

	- $\vec v$ je rychlost hmotného středu soustavy
	- $J$ je moment setrvačnosti soustavy nebo tělesa vzhledem k ose, kolem níž se pohyb v daném okamžiku děje
- Příkladem obecného pohybu může být **valení** (pohyb kola při pohybu po silnici).
- Zde hraje roli jak smykové tření, tak i valivý odpor podložky.
- Valení však může být popsáno i jako čistě otáčivý pohyb podle vhodně zvolené osy.

### Valení tělesa

- Mějme homogenní válec s poloměrem $R$ a hmotností $m$, který se valí směrem dolů podél nakloněné roviny. Předpokládáme, že nedochází k prokluzování válce, tj. že mezi válcem a rovinou je dostatečně velký statický součinitel smykového tření. Současně však musíme započítat i valivý odpor. Jednou z možností by bylo využít pohybové rovnice pro posuvný a otáčivý pohyb. My však odvození provedeme na základě zákona zachování energie.

	![[../_assets/img/Pasted image 20250404141906.png|Pasted image 20250404141906.png]]

- Těleso je uvolněno na nakloněné rovině v místě o souřadnici $x = 0$. V libovolném místě o souřadnici $x$ lze celkovou kinetickou energii válce, jehož těžiště (resp. osa) se pohybuje okamžitou rychlostí o velikosti $v$, vyjádřit jako součet kinetických energií posuvného a otáčivého pohybu:

	$$
	🔴E_k = \frac{1}{2} mv^2 + \frac{1}{2} J \omega^2 = \frac{1}{2} mv^2 + \frac{1}{2} \cdot \frac{1}{2} mR^2 \frac{v^2}{R^2} = \frac{3}{4} mv^2
	$$

- Zde jsme využili skutečnosti, že pokud nedochází k prokluzování válce, tj. jedná se pouze o valivý pohyb, pak je obvodová rychlost otáčivého pohybu válce vzhledem k jeho těžišti (resp. ose) stejná, jako je velikost posuvného pohybu těžiště válce, tedy $v$. Díky tomu jsme mohli úhlovou rychlost otáčivého pohybu válce vyjádřit jako:

	$$
	\omega = \frac{v}{R}
	$$

- Veličina $J$ zde dále značí moment setrvačnosti, který je pro válec vzhledem k ose procházející středy podstav, dán jako:

	$$
	J = \frac{1}{2}mR^2
	$$

- Z výsledného vztahu je zřejmé, že pokud se dvě tělesa o stejné hmotnosti pohybují jedno pouze posuvným a druhé valivým pohybem, pak má druhé těleso větší kinetickou energii. Nebo naopak, pokud mají obě tělesa stejnou kinetickou energii, musí mít druhé těleso menší rychlost.
- Při valení tělesa dochází ke vzniku valivého odporu, tedy odporové síly, pro jejíž velikost platí:

	$$
	F_v=\frac{\xi}{R}N
	$$

	- $R$ je poloměr válce
	- $N$ je velikost normálové síly, kterou působí podložka (nakloněná rovina) na válec
	- $\xi$ je **rameno valivého odporu** (dříve součinitel valivého tření, jednotkou je metr, tato veličina závisí především na dvojici materiálů tělesa a podložky, hodnoty pro typické dvojice lze hledat v tabulkách)
- Protože předpokládáme, že je velikost odporové síly v průběhu valení válce podél celé nakloněné roviny konstantní (hodnoty veličin $\xi$, $R$, $N$ se nemění), pak práci, kterou vykoná odporová síla od okamžiku uvolnění válce až do místa o souřadnici $x$ (tj. na dráze $x$), lze vyjádřit jako (síla působí ve směru pohybu):

	$$
	🟠W_v = F_v \cdot x = \frac{\xi}{R} N \cdot x = \frac{\xi}{R} G_y \cdot x = \frac{\xi}{R} mg \cos \alpha \cdot x
	$$

	- $G_y = mg\cos\alpha$ je průmět tíhové síly $\vec G$ do osy $y$
	- $g=9,81\,\text m\cdot\text s^{-2}$ je tíhové zrychlení
- Velikost normálové síly je:

	$$
	N=G_y=mg\cos\alpha
	$$

- Podle zákona zachování energie musí platit:

	$$
	E_k+W_v=E_p \Longrightarrow 🟡E_k=Ep-W_v
	$$

	- $E_p = E_{p0}-E_{px} = mgh$ je rozdíl potenciálních energií tělesa (válce) v místě o souřadnici $x = 0$ a v místě o souřadnici $x$
	- $h = x\sin\alpha$ je rozdíl výšek obou míst
- Pro rozdíl potenciálních energií tedy platí:

	$$
	🟢E_p = mgh = mg\,x\,\sin\alpha
	$$

- Po dosazení 🔴, 🟠, 🟢 do 🟡je:

	$$
	\frac{3}{4} mv^2 = mg \, x \sin \alpha - \frac{\xi}{R} mg \cos \alpha \cdot x
	$$

- A po úpravě pak pro rychlost pohybu těžiště válce platí:

	$$
	v = \sqrt{\frac{4}{3} g \left( \sin \alpha - \frac{\xi}{R} \cos \alpha \right) x}
	$$

- Rychlost válce je tedy funkcí souřadnice polohy x, která je však funkcí času.
- Zrychlení je derivací rychlosti podle času. Derivujeme tedy předchozí funkci podle času. Nesmíme však zapomenout, že souřadnice $x$ je také funkci času. Platí:

	$$
	a = \frac{dv}{dt} = \frac{1}{2} \cdot \frac{1}{\sqrt{\frac{4}{3} g \left( \sin \alpha - \frac{\xi}{R} \cos \alpha \right) x}} \cdot \frac{4}{3}g \left( \sin \alpha - \frac{\xi}{R} \cos \alpha \right) \frac{dx}{dt}
	$$

- V tomto výrazu má člen $\frac{dx}{dt}$ význam rychlosti pohybu válce $v$, tj. $v=\frac{dx}{dt}$. Rychlost $v$ však máme vyjádřenou výše uvedeným vztahem. Do vztahu pro zrychlení tedy dosadíme za $\frac{dx}{dt}$ ze vztahu pro rychlost a po jednoduché úpravě dostáváme pro zrychlení válce:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡a=\frac{2}{3}g\left(\sin\alpha-\frac{\xi}{R}\cos\alpha\right)
	$}
	$$

> [!note] Poznámka
> Porovnejme výsledný vztah pro zrychlení válce při valení podél nakloněné roviny
>
> $$a=\frac{2}{3}g\left(\sin\alpha-\frac{\xi}{R}\cos\alpha\right)$$
>
> se vztahem pro zrychlení při klouzání tělesa podél nakloněné roviny (uplatní se smykové tření)
>
> $$a = \frac{G_x - F_t}{m} = \frac{mg \sin \alpha - \mu\, mg \cos \alpha}{m} = g \sin \alpha - \mu\, g \cos \alpha = g (\sin \alpha - \mu \cos \alpha)$$
>

### Rovnováha

- **Posuvný (translační) pohyb** tělesa se řídí větou o hybnosti neboli první impulzovou větou, která vyjadřuje pro těleso totéž, co druhý Newtonův zákon pro hmotný bod:

	$$
	\sum\vec F=\frac{d\vec p}{dt}
	$$

	- Když je těleso v rovnováze pro posuvný pohyb, tj. když je $\vec p$ konstantní, pak je $\frac{d\vec p}{dt}=0$ a platí vztah pro rovnováhu sil:
	
		$$
		\colorbox{rgba(102, 0, 0, 0.4)}{$
		💡\sum\vec F=0
		$}
		$$

- **Otáčivý (rotační) pohyb** tělesa se řídí větou o momentu hybnosti neboli druhou impulzovou větou, která vyjadřuje pro otáčení to, co předchozí rovnice pro posuvný pohyb:

	$$
	\sum\vec M = \frac{d\vec L}{dt}
	$$

	- Když je těleso v rovnováze pro otáčivý pohyb, tj. když je $\vec L$ konstantní, pak $\frac{d\vec L}{dt} = 0$ a platí vztah pro rovnováhu momentů sil:

		$$
		\colorbox{rgba(102, 0, 0, 0.4)}{$
		💡\sum\vec M=0
		$}
		$$

> [!tip] V rovnováze musí být roven nule
> 1. vektorový součet všech vnějších sil působících na těleso
> 2. vektorový součet všech momentů vnějších sil působících na těleso

> [!tip] Ve statické rovnováze musí být také rovny nule
> 3. úhrnná hybnost tělesa
> 4. úhrnný moment hybnosti tělesa

