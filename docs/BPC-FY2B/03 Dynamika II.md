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

1. 💡Každé těleso setrvává ve stavu klidu nebo rovnoměrného přímočarého pohybu, pokud není nuceno vnějšími silami tento stav měnit.
2. 💡Časová změna hybnosti je úměrná vnější síle a má s ní stejný směr.
3. 💡Každá akce způsobuje vždy stejně velikou reakci opačného směru, čili vzájemná působení dvou těles jsou stejně veliká a opačného směru.

#### Druhý pohybový zákon (Zákon síly) v inerciálních vztažných soustavách

- Vzájemný vztah mezi příčinou (tj. působící silou) a účinkem (tj. změnou pohybového stavu hmotného bodu) udává **druhý Newtonův pohybový zákon**:

	$$
	💡\vec F = \frac{d\vec p}{dt}
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
	💡\vec F = m\vec a
	$$

	$$
	💡\vec F = m\frac{d^2\vec r}{dt^2}
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
> > 	$$💡\vec{a_1} = -\vec{a_2} = \vec a$$
> >
> > 	- kde orientaci $\vec a$ volíme ($+y$).
> > - Vlákno působí na těleso $m$ tahovou silou $\vec{T_1} = \vec T$ směrem vzhůru. Podle Zákona akce a reakce působí toto těleso na vlákno silou $-\vec T$. Pokud je vlákno rovnoměrně napjaté, přenáší se tato tahová síla přes vlákno na kostku M a při uvážení otočení této síly v důsledku kladky pak vlákno působí na těleso $M$ tahovou silou $\vec{T_2} = \vec T$. Pro tahové síly působící na jednotlivá tělesa pak tedy platí:
> >
> >	$$💡\vec{T_1} = \vec{T_2} = \vec T$$
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
> >	$$💡T = mg + ma$$
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
> >	$$💡T = Mg - Ma$$
> >
> >	Porovnáme pravé strany získaných rovnic pro tahové síly působící na jednotlivá tělesa:
> >
> >	$$mg+ma=Mg-Ma$$
> >
> >	$$Ma+ma=Mg-mg$$
> >
> >	$$💡\underline{\underline{a=\frac{M-m}{M+m}g}}$$
> >
> > 2. Velikost síly $T'$ napínající vlákno je rovna velikosti tahové síly $T$ působící na tělesa (akce-reakce). Podle výše uvedené rovnice pro velikost tahové síly působící na těleso $M$ (a tím i na těleso $m$) platí:
> >
> >	$$T'=T=Mg-Ma=Mg-M\frac{M-m}{M+m}g=Mg\left( 1-\frac{M-m}{M+m} \right)$$
> >
> >	$$💡\underline{\underline{T'=\frac{2Mm}{M+m}g}}$$
> >
> > 3. Pokud $M = m$, platí pro velikost síly napínající vlákno:
> >
> >	$$💡\underline{\underline{T'=Mg=mg}}$$

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
	W=\int\limits_{\vec{r_1}}^{\vec{r_2}}\vec F\,d\vec r
	$$