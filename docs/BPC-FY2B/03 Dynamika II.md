---
share: "true"
category: BPC-FY2B
---

## Dynamika hmotného bodu

### Inerciální a neinerciální vztažné soustavy

- První Newtonův zákon (**Zákon setrvačnosti**) zaručuje existenci preferovaných vztažných soustav, soustav inerciálních.
- **Inerciální vztažné soustavy** (inerciální soustavy) jsou takové, ve kterých platí první Newtonův zákon.
- Jestliže je soustava vůči jiné inerciální soustavě v klidu nebo v rovnoměrném přímočarém pohybu, je tato soustava také inerciální.
- Jestliže se soustava vůči jiné inerciální soustavě např. urychluje, zpomaluje, zatáčí nebo se otáčí, jedná se o **neinerciální vztažnou soustavu**.
- V neinerciální vztažné soustavě působí **zdánlivé síly** (nejsou to skutečné síly) - nemají původ ve zkoumané soustavě, jsou důsledkem zrychleného pohybu neinerciální vztažné soustavy, tj. jedná se o **setrvačné síly**.
- V neinerciálních vztažných soustavách neplatí první a třetí (na zdánlivé síly neexistuje reakce) Newtonův pohybový zákon.
- Druhý Newtonův pohybový zákon je nutné modifikovat započítáním zdánlivých sil.
- Obecné vyjádření setrvačných sil v neinerciální vztažné soustavě:

	$$
	\vec F^* = -m\vec{a_t}-m[\vec\omega\times(\vec\omega\times\vec r')]-2m(\vec\omega\times\vec v')-m(\vec\varepsilon\times\vec r')
	$$

	- $\vec r'$ a $\vec v'$ jsou polohový vektor a rychlost hmotného bodu v neinerciální vztažné soustavě
	- $\vec{a_t}$ je zrychlení translačního pohybu neinerciální vztažné soustavy vzhledem k inerciální vztažné soustavě
	- $\vec\omega$ a $\vec\varepsilon$ jsou úhlová rychlost a úhlové zrychlení rotačního pohybu neinerciální vztažné soustavy vzhledem k inerciální vztažné soustavě
- Jednotlivé složky setrvačné síly jsou:
	- translační setrvačná síla: $\vec{F_t}^* = -m\vec{a_t}$
	- odstředivá síla: $\vec{F_o}^* = -m[\vec\omega\times(\vec\omega\times\vec r')]$
	- Coriolisova síla: $\vec{F_C}^* = -2m(\vec\omega\times\vec v')$
	- Eulerova síla: $\vec{F_E}^* = -m(\vec\varepsilon\times\vec r')$

### Newtonovy pohybové zákony

1. ==💡Každé těleso setrvává ve stavu klidu nebo rovnoměrného přímočarého pohybu, pokud není nuceno vnějšími silami tento stav měnit.==
2. ==💡Časová změna hybnosti je úměrná vnější síle a má s ní stejný směr.==
3. ==💡Každá akce způsobuje vždy stejně velikou reakci opačného směru, čili vzájemná působení dvou těles jsou stejně veliká a opačného směru.==

#### Druhý pohybový zákon (Zákon síly) v inerciálních vztažných soustavách

- Vzájemný vztah mezi příčinou (tj. působící silou) a účinkem (tj. změnou pohybového stavu hmotného bodu) udává **druhý Newtonův pohybový zákon**:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec F = \frac{d\vec p}{dt}$}
	$$

	- $\vec p = m\vec v$ - hybnost hmotného bodu
	- $\vec F = \sum\limits^n_{k=1}\vec{F_k}$ - vektorový součet všech sil působících na hmotný bod

- Dosazením dostáváme:

	$$
	\vec F = \frac{d}{dt}(m\vec v) = \frac{dm}{dt}\vec v + m \frac{d\vec v}{dt} = \frac{dm}{dt}\vec v + m\vec a
	$$

	- $\vec a$ je zrychlení hmotného bodu, vyvolané působící silou $\vec F$
- Je-li hmotnost m nezávislá na čase, je její derivace podle času nulová a platí

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec F = m\vec a$}
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec F = m\frac{d^2\vec r}{dt^2}$}
	$$

Tato rovnice se nazývá **první pohybovou rovnicí**. Tato rovnice platí jen v **inerciálních vztažných soustavách**.

#### Druhý pohybový zákon (Zákon síly) v neinerciálních vztažných soustavách

- V **neinerciálních vztažných soustavách** zachovávají uvedené rovnice tento tvar pouze tehdy, jestliže zavedeme přídavné síly $\vec F^*$ (**setrvačné síly**), pomocí kterých respektujeme neinerciálnost vztažné soustavy.
- Tyto síly potom sečítáme se silami skutečnými.
- Je-li hybnost hmotného bodu v neinerciální soustavě $\vec p'$ a jeho zrychlení $\vec a'$, mají uvedené vztahy v neinerciálních vztažných soustavách tvar:

	$$
	\vec F' = \frac{d\vec p'}{dt}
	$$

	$$
	\vec F' = m\vec a'
	$$

	- síla $\vec F' = \vec F + \vec F^*$ je součtem všech působících skutečných sil a setrvačných sil

### Řešení pohybové rovnice

- Pohybová rovnice má tvar:

	$$
	\vec F = m \vec a
	$$

	$$
	\vec F = m \frac{d^2\vec r}{dt^2}
	$$

	- síla $\vec F = F_x\vec i + F_y\vec j + F_z \vec k$
	- pravá strana $m\vec a = ma_x\vec i + ma_y\vec j + ma_z\vec k$

- Složkové rovnice jsou:

	$$
	F_x = ma_x = m \frac{dv_x}{dt} = m \frac{d^2x}{dt^2}
	$$

	$$
	F_y = ma_y = m \frac{dv_y}{dt} = m \frac{d^2y}{dt^2}
	$$

	$$
	F_z = ma_z = m \frac{dv_z}{dt} = m \frac{d^2z}{dt^2}
	$$

	- rychlost $\vec v = v_x\vec i + v_y\vec j + v_z\vec k$
	- souřadnice $x = x(t)$, $y = y(t)$, $z = z(t)$
	- polohový vektor $\vec r = x\vec i + y\vec j + z \vec k$

#### Základní úloha dynamiky

- Tuto úlohu řešíme tehdy, pokud je zadaná některá ze tří kinematických veličin $\vec a(t)$, $\vec v(t)$, $\vec r(t)$.
- Pak můžeme určit vektor síly $\vec F = \vec F(t)$ pomocí derivace zadaných veličin.

#### Obrácená úloha dynamiky

- Jsou-li zadány síly (výslednice sil $\vec F = \vec F(t)$) působící na hmotný bod, získáme veličiny $\vec a(t)$, $\vec v(t)$, $\vec r(t)$ integrací složkových rovnic (řešení diferenciální rovnice).
- K tomu je třeba znát **počáteční podmínky** $\vec{v_0} = \vec v(t_0)$, $\vec{r_0} = \vec r(t_0)$ v čase $t_0$.

#### Příklady užití Newtonových zákonů

- Všechny dále uvedené příklady mohou být řešeny i se započítáním třecích sil $\vec{F_t}$, resp. odporových sil $\vec{F_o}$. Tíhová síla $\vec G = m\vec g$.

1. **Klouzající těleso**
2. **Zavěšené těleso**
3. **Nakloněná rovina**
4. **Kladka (dvě spojená tělesa)**

	![[../_assets/img/Pasted image 20250402231233.png|Pasted image 20250402231233.png]]
	![[../_assets/img/Pasted image 20250402231253.png|Pasted image 20250402231253.png]]

> [!question] Příklad
> Na nakloněné rovině s úhlem sklonu $\alpha$ (vzhledem k horizontální rovině) klouže těleso. Součinitel smykového tření mezi tělesem a nakloněnou rovinou je $\mu$. Stanovte zrychlení tělesa.

> [!question] Příklad
> Sestavte pohybovou rovnici pro hmotný bod o hmotnosti $m$ na pružině. Pružina působí na hmotný bod direktivní silou, která je přímo úměrná výchylce a je orientována proti této výchylce. Konstantou přímé úměrnosti je zde tuhost pružiny $k$. V čase $t = 0$ je výchylka $x(0) = x_0$ a rychlost $v(0) = 0$. Uveďte obecný tvar řešení pohybové rovnice a určete konkrétní časový průběh polohy hmotného bodu pro zadané počáteční podmínky.

> [!question] Příklad
> Na volně (bez tření) otáčivé kladce zanedbatelné hmotnosti jsou na ohebném neprotažitelném vlákně zavěšena dvě závaží o hmotnostech $m$ a $M$, přičemž $M > m$.
>
> Určete:
> 1. velikost zrychlení, se kterým se obě závaží pohybují
> 2. velikost síly, kterou je vlákno napínáno
> 3. velikost síly napínající vlákno v případě $M = m$
>
> ![[../_assets/img/Pasted image 20250402231233.png|Pasted image 20250402231233.png]]
>
> > [!success] Řešení
> > - Nejprve je třeba zjistit vzájemné souvislosti mezi zrychleními jednotlivých těles a dále také mezi tahovými silami, kterými na ně působí vlákno. Tyto souvislosti plynou ze spojení těles neprotažitelným vláknem.
> > - Obě tělesa jsou spojena neprotažitelným vláknem, budou se proto pohybovat společně, obě se stejným zrychlením o velikosti $a$. Protože se pohyb děje s použitím kladky, která způsobí změnu směru některých veličin, budou mít při tomto "souhlasném" pohybu zrychlení těles opačný směr.
> >  - Pokud zavedeme kladnou orientaci osy směrem vzhůru a uvážíme, že je $M > m$, bude se těleso s hmotností $m$ pohybovat směrem vzhůru se zrychlením $\vec{a_1} = \vec a$ a těleso s hmotností $M$ směrem dolů se zrychlením $\vec{a_2} = -\vec a$, tedy platí:
> >
> > 	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec{a_1} = -\vec{a_2} = \vec a$}$$
> >
> > 	- kde orientaci $\vec a$ volíme ($+y$).
> > - Vlákno působí na těleso $m$ tahovou silou $\vec{T_1} = \vec T$ směrem vzhůru. Podle Zákona akce a reakce působí toto těleso na vlákno silou $-\vec T$. Pokud je vlákno rovnoměrně napjaté, přenáší se tato tahová síla přes vlákno na kostku M a při uvážení otočení této síly v důsledku kladky pak vlákno působí na těleso $M$ tahovou silou $\vec{T_2} = \vec T$. Pro tahové síly působící na jednotlivá tělesa pak tedy platí:
> >
> >	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec{T_1} = \vec{T_2} = \vec T$}$$
> >
> >	- kde orientace $\vec T$ je ($+y$).
> >- Nyní sestavíme vektorové pohybové rovnice pro jednotlivá tělesa s uvážením platnosti výše uvedených vztahů. Tyto rovnice dále přepíšeme do skalárního tvaru pro souřadnice vektorů v ose $y$. Zde použijeme znaménkovou konvenci, kdy souřadnice vektorů s orientací ($+y$) budou kladné a souřadnice vektorů s orientací ($–y$) budou záporné.
> >
> > ---
> >
> > 1. Pro těleso $m$ platí:
> >
> >	$$\vec{G_1} + \vec{T_1} = m\vec{a_1}$$
> >
> >	$$\vec{G_1} + \vec{T} = m\vec{a}$$
> >
> >	$$-G_1 + T = ma$$
> >
> >	$$-mg + T = ma$$
> >
> >	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡T = mg + ma$}$$
> >
> >	Pro těleso $M$ platí:
> >
> >	$$\vec{G_2} + \vec{T_2} = M\vec{a_2}$$
> >
> >	$$\vec{G_2} + \vec{T} = M\vec{a}$$
> >
> >	$$-G_2 + T = -Ma$$
> >
> >	$$-Mg + T = -Ma$$
> >
> >	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡T = Mg - Ma$}$$
> >
> >	Porovnáme pravé strany získaných rovnic pro tahové síly působící na jednotlivá tělesa:
> >
> >	$$mg+ma=Mg-Ma$$
> >
> >	$$Ma+ma=Mg-mg$$
> >
> >	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡\underline{\underline{a=\frac{M-m}{M+m}g}}$}$$
> >
> > 2. Velikost síly $T'$ napínající vlákno je rovna velikosti tahové síly $T$ působící na tělesa (akce-reakce). Podle výše uvedené rovnice pro velikost tahové síly působící na těleso $M$ (a tím i na těleso $m$) platí:
> >
> >	$$T'=T=Mg-Ma=Mg-M\frac{M-m}{M+m}g=Mg\left( 1-\frac{M-m}{M+m} \right)$$
> >
> >	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡\underline{\underline{T'=\frac{2Mm}{M+m}g}}$}$$
> >
> > 3. Pokud $M = m$, platí pro velikost síly napínající vlákno:
> >
> >	$$\colorbox{rgba(102, 0, 0, 0.4)}{$💡\underline{\underline{T'=Mg=mg}}$}$$

### Mechanická práce (dráhový účinek síly) - obecná definice práce

- V minulém semestru jsme práci $W$ konstantní síly $\vec F$ definovali jako součin velikosti tečné složky síly $F_t = F \cos\alpha$ (tj. složky síly $\vec F$ do směru posunutí) a velikosti posunutí $\Delta r$:

	$$
	W=F_t\Delta r=F\cos\alpha\Delta r=\vec{F}\cdot\Delta\vec r
	$$

	![[../_assets/img/Pasted image 20250402235833.png|Pasted image 20250402235833.png]]

- V obecném případě působí na hmotný bod, který se pohybuje po křivočaré trajektorii, síla $\vec F$ s proměnnou velikostí tečné složky $F_t$ (funkce polohy, resp. času).
- Elementární práci $dW$ při posuvu působiště síly $\vec F$ po elementární délce dráhy $ds$ je:

	$$
	dW = F_tds=F\cos\alpha\,ds
	$$

	- $\alpha$ je úhel, který svírá vektor síly $\vec F$ s vektorem rychlosti v daném bodě
- Celková práce, kterou koná síla $\vec F$ při posuvu hmotného bodu z bodu $B_1$ do bodu $B_2$ je:

	$$
	W = \int\limits_{s_1}^{s_2}F\cos\alpha\,ds
	$$

- Elementární práce $dW$ závisí na velikosti úhlu $\alpha$:
	- kladná pro $0\le\alpha<\frac{\pi}{2}$
	- nulová pro $\alpha=\frac{\pi}{2}$
	- záporná pro $\frac{\pi}{2}<\alpha\le\pi$

![[../_assets/img/Pasted image 20250403000918.png|Pasted image 20250403000918.png]]

- Využijeme-li vztahu $ds=|d\vec r|$, můžeme vyjádřit diferenciál práce ve tvaru:

	$$
	dW=F\cos\alpha\,ds=F\cos\alpha\,|d\vec r|=\vec F\cdot d\vec r
	$$

- Celková práce pak je:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡W=\int\limits_{\vec{r_1}}^{\vec{r_2}}\vec F\,d\vec r$}
	$$

	- $\vec{r_1}$ a $\vec{r_2}$ jsou polohové vektory počátečního a koncového bodu trajektorie při posunutí hmotného bodu

- Je-li $\vec r=x\vec i + y\vec j+z\vec k$, je $d\vec r=dx\vec i + y\vec j+dz\vec k$, platí:

	$$
	\vec F\cdot d\vec r=(F_x\vec i+F_y\vec j+F_z\vec k)\cdot(dx\vec i + y\vec j+dz\vec k)=F_xdx+F_ydy+F_zdz
	$$

- Práce po dané trajektorii mezi body $B_1$ a $B_2$ je potom rovna:

	$$
	W=\int\limits_{[x_1,\,y_1,\,z_1]}^{[x_1,\,y_1,\,z_1]}(F_xdx+F_ydy+F_zdz)
	$$

- Práce síly $\vec F$ je dána součtem prací jejich jednotlivých složek ve směru příslušných os.

### Mechanický výkon

#### Střední hodnota výkonu

- Vykonala-li daná síla $\vec F$ v časovém intervalu $\langle t,\, t + \Delta t\rangle$ práci $\Delta W$, je **střední hodnota výkonu** v tomto intervalu rovna:

	$$
	P_s=\frac{\Delta W}{\Delta t}
	$$

	![[../_assets/img/Pasted image 20250403164441.png|Pasted image 20250403164441.png]]

#### Okamžitý výkon

- Definujeme okamžitou hodnotu výkonu $P$ jako limitu středního výkonu pro $\Delta t \rightarrow 0$:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡P=\lim_{\Delta t\rightarrow 0}\frac{\Delta W}{\Delta t}=\frac{dW}{dt}$}
	$$

	![[../_assets/img/Pasted image 20250403164704.png|Pasted image 20250403164704.png]]

- Známe-li časový průběh výkonu $P = P(t)$, můžeme stanovit práci, která je vykonána v časovém intervalu $\langle t_1,\, t_2 \rangle$.
- Platí:

	$$
	dW=Pdt
	$$

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡W=\int\limits_{t_1}^{t_2}P\,dt$}
	$$

- Velikost této práce je vyjádřena v příslušném měřítku plochou pod grafem funkce $P = P(t)$ v časovém intervalu $\langle t_1,\, t_2 \rangle$.

	![[../_assets/img/Pasted image 20250403165025.png|Pasted image 20250403165025.png]]

- V případě konstantního výkonu $P = \text{konst.}$ dostaneme:

	$$
	W=\int\limits_{t_1}^{t_2}P\,dt=P(t_2-t_1)
	$$

> [!question] Příklad
> Síla $\vec F=1\,\text N\cdot\text s^{-2}t^2\vec i+5\,\text N\vec j+4\,\text N\vec k$, jejíž působiště se posouvá po křivce dané polohovým vektorem $\vec r=3\,\text m\cdot\text s^{-1}t\vec i-2\,\text m\cdot\text s^{-2}t^2\vec j+15\,\text m\cdot\text s^{-1}t\vec k$, koná práci v časovém intervalu $\langle 2\,\text s,\, 10\,\text s \rangle$. 
>
> Určete časovou závislost výkonu této síly $P = P(t)$ a práci vykonanou v daném časovém intervalu.
> > [!success] Řešení
> > Z definice okamžitého výkonu vyplývá:
> >
> > $$P=\frac{dW}{dt}$$
> >
> > Elementární práce $dW$ je rovna:
> >
> > $$dW=\vec F\cdot d\vec r$$
> >
> > Diferenciál polohového vektoru $d\vec r$ určíme diferencováním vektorové funkce $\vec r=\vec r(t)$:
> >
> > $$d\vec r=\frac{d\vec r}{dt}dt=(3\,\text m\cdot\text s^{-1}\vec i-4\,\text m\cdot\text s^{-2}t\vec j+15\,\text m\cdot\text s^{-1}\vec k)dt$$
> >
> > Elementární práce $dW$ je pak rovna:
> >
> > $$dW=\vec F\cdot d\vec r=(\vec F=1\,\text N\cdot\text s^{-2}t^2\vec i+5\,\text N\vec j+4\,\text N\vec k)\cdot(3\,\text m\cdot\text s^{-1}\vec i-4\,\text m\cdot\text s^{-2}t\vec j+15\,\text m\cdot\text s^{-1}\vec k)dt =$$
> >
> > $$= (3\,\text N\cdot\text m\cdot\text s^{-3}t^2-20\,\text N\cdot\text m\cdot\text s^{-2}t+60\,\text N\cdot\text m\cdot\text s^{-1})dt$$
> >
> > Okamžitý výkon je:
> >
> > $$P=\frac{dW}{dt}=\underline{\underline{3\,\text W\cdot\text s^{-2}t^2-20\,\text W\cdot\text s^{-1}t+60\,\text W}}$$
> >
> > Práce vykonaná v časovém intervalu $2\,\text s$ až $10\,\text s$ je rovna:
> >
> > $$W=\int\limits_{t_1}^{t_2}P\,dt=\int\limits_{2\,\text s}^{10\,\text s}(3\,\text W\cdot\text s^{-2}t^2-20\,\text W\cdot\text s^{-1}t+60\,\text W)\,dt=$$
> >
> > $$=\left[ 1\,\text W\cdot\text s^{-2}t^3-10\,\text W\cdot\text s^{-1}t^2+60\,\text W\,t \right]_{2\,\text s}^{10\,\text s}=\underline{\underline{512\,\text J}}$$

### Mechanická energie

#### Kinetická energie

- Zvolíme stav, v němž má hmotný bod v dané souřadnicové soustavě rychlost $v = 0$ za základní a přiřadíme mu hodnotu kinetické energie $E_{k0}=0$.
- Kinetická energie stavu s rychlostí $v$ je pak dána prací **výsledné síly** $\vec F$ působící na *HB*.
- Pro elementární práci $dW$ platí:

	$$
	dW=F_tds=ma_tds=m\frac{dv}{dt}ds=m\frac{ds}{dt}dv=mvdv
	$$

	- $F_t$ je tečná složka síly $\vec F$
	- $a_t$ je tečné zrychlení
	- $ds$ je elementární délka dráhy
	- $m$ je hmotnost hmotného bodu
	- $v$ je velikost okamžité rychlosti
- Celková vykonaná práce pro počáteční rychlost $v_1 = 0$ a koncovou rychlost $v_2 = v$ je potom rovna:

	$$
	W=\int\limits_{v_1}^{v_2}mv\,dv=m\left[\frac{v^2}{2}\right]_{v_1}^{v_2}=\frac{1}{2},v_2^2-\frac{1}{2}mv_1^1=\frac{1}{2}mv^2
	$$

- Platí tedy:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡E_k = W = \frac{1}{2}mv^2$}
	$$

- Kinetická energie tělesa závisí na volbě vztažné souřadnicové soustavy (různé rychlosti).

#### Potenciální energie

- Zvolme potenciální energii hmotného bodu v silovém poli vektoru $\vec{F_i}$ v bodě daném polohovým vektorem $\vec{r_0}$ rovnu $E_{p0} = 0$.
- Potom je potenciální energie hmotného bodu v bodě o polohovém vektoru $\vec r$ dána prací $W$ síly $-\vec{F_i}$ po zvolené libovolné trajektorii mezi těmito body.
- Je-li vnější síla $\vec{F_v}$ stále v rovnováze s vnitřní silou $\vec{F_i}$, tj. $\vec{F_v}=-\vec{F_i}$, je změna kinetické energie hmotného bodu nulová (výslednice $\vec{F}$ působící na hmotný bod je nulová) a práce síly $\vec{F_v}$ tedy udává pouze potenciální energii.

$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡E_p(\vec{r})=W=\int\limits_{\vec{r_0}}^{\vec r}\left(-\vec{F_i}\right)\,d\vec r=\int\limits_{\vec{r}}^{\vec r_0}\vec{F_i}\,d\vec r=\int\limits_{\vec{r_0}}^{\vec r}\vec{F_v}\,d\vec r$}
$$

- ==💡Potenciální energie hmotného bodu v daném místě silového pole je dána prací vnější síly, která je stále v rovnováze s vnitřní silou, při posuvu hmotného bodu po dané trajektorii z místa nulové potenciální energie do daného bodu.==
- ==💡Potenciální energie hmotného bodu v daném místě silového pole je dána prací vnitřní síly (silového pole) při posuvu hmotného bodu z daného místa do místa nulové potenciální energie po zvolené trajektorii.==

### Impulz síly (časový účinek síly) - obecná definice

- Působí-li na hmotný bod výsledná síla $\vec F$, dojde ke změně jeho pohybového stavu.
- Tato změna se projeví změnou jeho polohy a rychlosti a tedy i hybnosti.
- Změna hybnosti závisí nejen na síle $\vec F$, ale i na době, po kterou síla $\vec F$ působila.
- Působením síly $\vec F$ na hmotný bod o hmotnosti $m$ v časovém intervalu $dt$ dochází podle druhého Newtonova pohybového zákona $\vec F=\frac{d\vec p}{dt}$ ke změně hybnosti:

	$$
	d\vec p=\vec F\,dt
	$$

- Změna hybnosti v časovém intervalu $\langle t_1,\, t_2\rangle$ potom bude:

	$$
	\Delta\vec p=\vec{p_2}-\vec{p_1}=\int\limits_{\vec{p_1}}^{\vec{p_2}}d\vec{p}=\int\limits_{t_1}^{t_2}\vec F\,dt=\vec I\Longrightarrow\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec I=\Delta\vec p$}
	$$

- Kde **impulz síly** $\vec I$ je definován jako:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$💡\vec I=\int\limits_{t_1}^{t_2}\vec F\,dt$}
	$$

- ==💡Impulz síly působící na hmotný bod v časovém intervalu $\langle t_1,\, t_2\rangle$ je roven změně jeho hybnosti v tomto časovém intervalu.==

### Nárazové síly

- Časový průběh **nárazových sil** je obecně složitou funkcí polohy a rychlostí těles před nárazem a po nárazu a fyzikálních vlastností povrchu a tím i složitou funkcí času.

	![[../_assets/img/Pasted image 20250403203627.png|Pasted image 20250403203627.png]]

- Často časový průběh nárazové síly nahrazujeme střední nárazovou silou:

	$$
	\colorbox{rgba(102, 0, 0, 0.4)}{$
	💡\vec{F_s}=\frac{1}{\tau}\int\limits_t^{t+\tau}\vec F(t)\,dt
	$}
	$$
