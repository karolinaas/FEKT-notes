---
share: "true"
category: BPC-FY2B
---

# MECHANIKA II

## Kinematika

Opakování pojmů:
- **hmotný bod**
- **trajektorie**
- **délka dráhy**
- **posunutí**

### Pohyb hmotného bodu

- **Pohyb hmotného bodu** v prostoru můžeme určit **parametrickými rovnicemi**:

	$$x = x(t)$$
	
	$$y = y(t)$$
	
	$$z = z(t)$$

- Resp. **polohovým vektorem**:

	$$\vec{r}(t) = x(t) \vec{i} + y(t) \vec{j} + z(t) \vec{k}$$

![[../_assets/img/Pasted image 20250331012220.png|Pasted image 20250331012220.png]]

### Přímočarý pohyb hmotného bodu

#### Rychlost přímočarého pohybu hmotného bodu

- V časovém intervalu $\langle t; t + \Delta t \rangle$ je přírůstek souřadnice $x$ roven $\Delta x$
- **Střední rychlost** $v_s$ přímočarého pohybu ve směru osy $x$ je:

	$$v_s = \frac{\Delta x}{\Delta t}$$

- **Okamžitá rychlost** hmotného bodu $v$ je:

	$$
	💡v = \lim_{\Delta t \rightarrow 0} \frac{\Delta x}{\Delta t} = \dot{x} = \frac{dx}{dt}
	$$

![[../_assets/img/Pasted image 20250331162816.png|Pasted image 20250331162816.png]]

##### Určení polohy z časového průběhu rychlosti $v = v(t)$

- Z definice okamžité rychlosti vyplývá pro závislost souřadnice $x$ na čase:

	$$
	💡v = \frac{dx}{dt} \Longrightarrow dx = v \, dt \Longrightarrow x = \int v \, dt
	$$

- V časovém intervalu $\langle t_1, \, t_2 \rangle$ proběhne hmotný bod **délku dráhy**:

	$$
	💡s_{1,2} = \int\limits_{s_1}^{s_2} ds =  \int\limits_{s_1}^{s_2} |v| \, dt
	$$

	- $v$ je velikost rychlosti

> [!question] Příklad
> Velikost rychlosti hmotného bodu konajícího přímočarý pohyb je dána vztahem $v = 12 \, \text{m} \cdot \text{s}^{-3} t^2 - 10 \, \text{m}  \cdot \text{s}^{-2} t + 3 \, \text{m} \cdot \text{s}^{-1}$. Vypočtěte délku dráhy, kterou urazí hmotný bod v časovém intervalu od $t_1 = 1 \, \text{s}$ do $t_2 = 4 \, \text{s}$.
>> [!success] Řešení
> > Délka dráhy v intervalu $\langle t_1, \, t_2 \rangle$ je rovna $s_{1,2} = \int\limits_{s_1}^{s_2} ds =  \int\limits_{s_1}^{s_2} |v| \, dt$, kde $v$ je velikost rychlosti.
> > Protože $v > 0$ pro libovolné $t$, platí:
> > 
> > $$s_{1,2} = \int\limits_{1 \, \text{s}}^{4 \, \text{s}} (12 \, \text{m} \cdot \text{s}^{-3} t^2 - 10 \, \text{m}  \cdot \text{s}^{-2} t + 3 \, \text{m} \cdot \text{s}^{-1}) \, dt =$$
> > 
> > $$= \left[ 12\,\text{m}\cdot\text{s}^{-3} \frac{t^3}{3} -10\,\text{m}\cdot\text{s}^{-2} \frac{t^2}{2} +3\,\text{m}\cdot\text{s}^{-1} t \right] _{1\,\text{s}}^{4\,\text{s}} =$$
> > 
> > $$= \left[ 4\,\text{m}\cdot\text{s}^{-3} t^3 -5\,\text{m}\cdot\text{s}^{-2} t^2 +3\,\text{m}\cdot\text{s}^{-1} t \right] _{1\,\text{s}}^{4\,\text{s}} =$$
> >
> > $$= (256\,\text{m} - 80\,\text{m} + 12\,\text{m}) - (4\,\text{m} - 5\,\text{m} + 3\,\text{m}) =$$
> > 
> > $$= \underline{\underline{186\,\text{m}}}$$

#### Zrychlení přímočarého pohybu hmotného bodu

- Rychlost $v$ je obecně funkcí času.
- V časovém intervalu $\langle t,\, t + \Delta t \rangle$ se přírůstek rychlosti rovná $\Delta v$.
- **Střední zrychlení** $a_s$ v tomto časovém intervalu je:

	$$
	a_s = \frac{\Delta v}{\Delta t}
	$$

- a **okamžité zrychlení**:

	$$
	💡a = \lim_{\Delta t \rightarrow 0} \frac{\Delta v}{\Delta t} = \dot{v} = \frac{dv}{dt}
	$$

- Z definice okamžité rychlosti pak vyplývá:

	$$
	💡a = \ddot{x} = \frac{d^2 x}{dt^2}
	$$

![[../_assets/img/Pasted image 20250331181722.png|Pasted image 20250331181722.png]]

##### Určení rychlosti z časového průběhu zrychlení $a = a(t)$

- Z definice okamžitého zrychlení vyplývá

	$$
	💡a = \frac{dv}{dt} \Longrightarrow dv = a \, dt \Longrightarrow v = \int a \, dt
	$$

> [!question] Příklad
> Souřadnice $x$ hmotného bodu pohybujícího se v ose $x$ je dána funkcí $x = 3\,\text{m}\cdot\text{s}^{-3}t^3 - 5\,\text{m}\cdot\text{s}^{-2}t^2 + 10\,\text{m}$. Určete rychlost a zrychlení hmotného bodu v čase $t = 2\,\text{s}$.
> > [!success] Řešení
> > Pro rychlost hmotného bodu platí:
> >
> > $$v = \frac{dx}{dt} = 9\,\text{m}\cdot\text{s}^{-3}t^2 - 10\,\text{m}\cdot\text{s}^{-2}t$$
> >
> > Rychlost hmotného bodu v čase $t = 2\,\text{s}$ je:
> >
> > $$v(2\,\text{s}) = 9\,\text{m}\cdot\text{s}^{-3}\cdot(2\,\text{s})^2 - 10\,\text{m}\cdot\text{s}^{-2}\cdot2\,\text{s} = \underline{\underline{16\,\text{m}\cdot\text{s}^{-1}}}$$
> >
> > Pro zrychlení hmotného bodu platí:
> >
> > $$a = \frac{dv}{dt} = 18\,\text{m}\cdot\text{s}^{-3}t - 10\,\text{m}\cdot\text{s}^{-2}$$
> >
> > Zrychlení hmotného bodu v čase $t = 2\,\text{s}$ s je
> >
> > $$a(2\,\text{s}) = 18\,\text{m}\cdot\text{s}^{-3}\cdot2\,\text{s} - 10\,\text{m}\cdot\text{s}^{-2} = \underline{\underline{26\,\text{m}\cdot\text{s}^{-2}}}$$

> [!question] Příklad
> Zrychlení tělesa, které se pohybuje v ose $x$, je dáno vztahem $a = 8\,\text{m}\cdot\text{s}^{-2} + 12\,\text{m}\cdot\text{s}^{-4}t^2$. V čase $t = 3\,\text{s}$ se nachází těleso $100\,\text{m}$ vpravo od počátku a jeho rychlost je $100\,\text{m}\cdot\text{s}^{-1}$.
> 
> 1. Najděte vztahy pro rychlost a polohu tělesa v obecném čase $t$.
> 2. Jaká je jeho počáteční rychlost?
> 3. Jaká je jeho počáteční poloha?
>
> > [!success] Řešení
> > 1. Pro rychlost v platí:
> >
> > 	$$v = \int a\,dt = \int (8\,\text{m}\cdot\text{s}^{-2} + 12\,\text{m}\cdot\text{s}^{-4}t^2)\,dt = 8\,\text{m}\cdot\text{s}^{-2}t + 4\,\text{m}\cdot\text{s}^{-4}t^3 + C_1$$
> > 
> > 	kde $C_1$ je integrační konstanta, jejíž hodnotu určíme z podmínky $v(3\,\text{s}) = 100\,\text{m}\cdot\text{s}^{-1}$. Platí tedy:
> > 
> > 	$$v(3\,\text{s}) = 8\,\text{m}\cdot\text{s}^{-2}\cdot3\,\text{s} + 4\,\text{m}\cdot\text{s}^{-4}\cdot(3\,\text{s})^3 + C_1 = 132\,\text{m}\cdot\text{s}^{-1} + C_1 = 100\,\text{m}\cdot\text{s}^{-1}$$
> >
> > 	Odtud vyplývá, že:
> >
> >	$$C_1 = -32\,\text{m}\cdot\text{s}^{-1}$$
> >
> >	Potom se rychlost v libovolném čase $t$ rovná:
> >
> >	$$v(t) = \underline{\underline{4\,\text{m}\cdot\text{s}^{-4}t^3 + 8\,\text{m}\cdot\text{s}^{-2}t -32\,\text{m}\cdot\text{s}^{-1}}}$$
> >
> >	Souřadnici $x$ určíme podle $x = \int v \, dt$:
> >
> >	$$x = \int v \, dt = \int (4\,\text{m}\cdot\text{s}^{-4}t^3 + 8\,\text{m}\cdot\text{s}^{-2}t -32\,\text{m}\cdot\text{s}^{-1})\,dt =$$
> >
> >	$$= 1\,\text{m}\cdot\text{s}^{-4}t^4 + 4\,\text{m}\cdot\text{s}^{-2}t^2 -32\,\text{m}\cdot\text{s}^{-1}t + C_2$$
> >
> >	Integrační konstantu $C_2$ určíme z podmínky $x(3\,\text{s}) = 100\,\text{m}$. Platí tedy:
> >
> >	$$x(3\,\text{s}) = 1\,\text{m}\cdot\text{s}^{-4}\cdot(3\,\text{s})^4 + 4\,\text{m}\cdot\text{s}^{-2}\cdot(3\,\text{s})^2 -32\,\text{m}\cdot\text{s}^{-1}\cdot3\,\text{s} + C_2 = 100\,\text{m}$$
> >
> >	Odtud vyplývá, že:
> >
> >	$$C_2 = 79\,\text{m}$$
> >
> >	Pro souřadnici $x$ v libovolném čase $t$ platí vztah:
> >
> >	$$x(t)= \underline{\underline{1\,\text{m}\cdot\text{s}^{-4}t^4 + 4\,\text{m}\cdot\text{s}^{-2}t^2 -32\,\text{m}\cdot\text{s}^{-1}t + 79\,\text{m}}}$$
> >
> > 2. Počáteční rychlost je:
> >
> > 	$$v_0 = v(0\,\text{s}) = \underline{\underline {-32\,\text{m}\cdot\text{s}^{-1}}}$$
> >
> > 3. Počáteční poloha těžiště tělesa je:
> >
> > 	$$x_0 = x(0\,\text{s}) = \underline{\underline {79\,\text{m}}}$$

#### Speciální případy přímočarého pohybu hmotného bodu

##### Rovnoměrný přímočarý pohyb

- Platí:

	$$
	💡v = \text{konst.}
	$$

	$$
	💡x = \int v\,dt = vt + x_0
	$$

	- $x_0 = x(0\,\text{s})$ je integrační konstanta, která se nazývá **počáteční souřadnicí**

##### Rovnoměrně zrychlený přímočarý pohyb

- Platí:

	$$
	💡v = \int a\,dt = at + v_0
	$$

	$$
	💡x = \int v\,dt = \int(at + v_0)\,dt = \frac{1}{2}at^2 + v_0t + x_0
	$$

	- $v_0 = v(0\,\text{s})$ a $x_0 = x(0\,\text{s})$ jsou integrační konstanty
	- $v_0$ se nazývá **počáteční rychlostí**

### Křivočarý pohyb hmotného bodu

#### Rychlost křivočarého pohybu hmotného bodu

- Posune-li se v časovém intervalu $\langle t, \, t + \Delta t \rangle$ hmotný bod z bodu $M_1$ do bodu $M_2$, změní se jeho polohový vektor o přírůstek:

	$$
	\Delta\vec{r} = \vec{r}(t + \Delta t) - \vec{r}(t)
	$$

- **Střední rychlost** hmotného bodu pro jeho pohyb mezi body $M_1$ a $M_2$ je:

	$$
	\vec{v_s} = \frac{\Delta \vec r}{\Delta t}
	$$

- **Okamžitá rychlost** $\vec v$. jejíž vektorová přímka leží v tečně k trajektorii v bodě $M_1$, je:

	$$
	💡\vec v = \lim_{\Delta t \rightarrow 0} \frac{\Delta \vec r}{\Delta t} = \lim_{\Delta t \rightarrow 0} \frac{\vec{r}(t + \Delta t) - \vec{r}(t)}{\Delta t} = \frac{d \vec r}{dt}
	$$

![[../_assets/img/Pasted image 20250331214311.png|Pasted image 20250331214311.png]]

- Rychlost můžeme vyjádřit jako:

	$$
	\vec v = \frac{d \vec r}{dt} = \frac{d x}{dt} \vec i + \frac{d y}{dt} \vec j + \frac{d z}{dt} \vec k = v_x \vec i +  v_y \vec j +  v_z \vec k  
	$$

- **Velikost rychlosti** je:

	$$
	v = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{\left( \frac{dx}{dt} \right)^2 + \left( \frac{dy}{dt} \right)^2 + \left( \frac{dz}{dt} \right)^2}
	$$

	- $\frac{dx}{dt} = v_x$
	- $\frac{dy}{dt} = v_y$
	- $\frac{dz}{dt} = v_z$

- **Určení souřadnic z časového průběhu rychlosti** $\vec v = \vec v(t)$

	$$
	x = \int v_x \, dt
	$$

	$$
	y = \int v_y \, dt
	$$

	$$
	z = \int v_z \, dt
	$$

- **Přírůstek délky dráhy** $s_{1,2}$ v časovém intervalu $\langle t_1,\,t_2\rangle$ můžeme určit vztahem:

	$$
	💡s_{1,2} = \int\limits_{s_1}^{s_2}ds = \int\limits_{t_1}^{t_2}v\,dt
	$$

#### Zrychlení křivočarého pohybu hmotného bodu

- **Střední zrychlení** v časovém intervalu $\langle t,\,t + \Delta t \rangle$ je:

	$$
	\vec{a_s} = \frac{\Delta \vec v}{\Delta t}
	$$

- **Okamžité zrychlení** $\vec a$ je:

	$$
	💡\vec a = \lim_{\Delta t \rightarrow 0} \frac{\Delta \vec v}{\Delta t} = \frac{d \vec v}{d t}
	$$

- Dosazením ze vztahu pro rychlost dostáváme:

	$$
	💡\vec a = \frac{d^2 \vec r}{dt^2}
	$$

![[../_assets/img/Pasted image 20250331221645.png|Pasted image 20250331221645.png]]

- Zrychlení můžeme vyjádřit vztahem:

	$$
	\vec a = \frac{d \vec v}{dt} = \frac{d v_x}{dt} \vec i + \frac{d v_y}{dt} \vec j + \frac{d v_z}{dt} \vec k = \frac{d^2 x}{dt^2} \vec i + \frac{d^2 y}{dt^2} \vec j + \frac{d^2 z}{dt^2} \vec k = a_x \vec i +  a_y \vec j +  a_z \vec k
	$$

	- $\frac{d^2 x}{dt^2} = a_x$
	- $\frac{d^2 y}{dt^2} = a_y$
	- $\frac{d^2 z}{dt^2} = a_z$

- Veličiny $a_x$, $a_y$, $a_z$ jsou **souřadnice vektoru zrychlení**.
- **Určení rychlosti z časového průběhu zrychlení** $\vec a = \vec a (t)$

	$$
	v_x = \int a_x \, dt
	$$

	$$
	v_y = \int a_y \, dt
	$$

	$$
	v_z = \int a_z \, dt
	$$

> [!question] Příklad
> Částice o hmotnosti $m = 1,0\,\text{kg}$ se pohybuje v rovině $(x,\,y)$. Její poloha v závislosti na čase je $x = -2\,\text{m} + 0,3\,\text{m}\cdot\text{s}^{-2}t(t+1\,\text{s})$, $y=2\,\text m-3\text m \cdot \text s^{-1}t+0,2\,\text m \cdot\text s^{-3}t^3$.
> 
> V časovém okamžiku $t = 1\,\text s$ vypočtěte:
> 1. polohový vektor $\vec r$, vektor okamžité rychlosti $\vec v$ a jejich velikosti $r$, $v$
> 2. velikost síly $F$, která působí na částici
> 3. načrtněte pravoúhlou mřížku a v ní znázorněte polohový vektor $\vec r$ a vektor rychlosti $\vec v$
> 
> > [!success] Řešení
> > 1. $$\vec r = x\vec i+y\vec j=[-2\,\text{m} + 0,3\,\text{m}\cdot\text{s}^{-2}t(t+1\,\text{s})]\vec i + [2\,\text m-3\text m \cdot \text s^{-1}t+0,2\,\text m \cdot\text s^{-3}t^3]\vec j =$$
> >
> > 	$$=(-2\,\text{m} + 0,3\,\text{m}\cdot\text{s}^{-1}t+ 0,3\,\text{m}\cdot\text{s}^{-2}t^2)\vec i+(2\,\text m-3\text m \cdot \text s^{-1}t+0,2\,\text m \cdot\text s^{-3}t^3)\vec j$$
> >
> > 	$$r = |\vec r| = \sqrt{(-2\,\text{m} + 0,3\,\text{m}\cdot\text{s}^{-1}t+ 0,3\,\text{m}\cdot\text{s}^{-2}t^2)^2+(2\,\text m-3\text m \cdot \text s^{-1}t+0,2\,\text m \cdot\text s^{-3}t^3)^2}$$
> >
> > 	$$\vec r(1\,\text s) = \underline{\underline{(-1,4\vec i-0,8\vec j)\,\text m}}$$
> >
> > 	$$r(1\,\text s) = \sqrt{1,4^2+0,8^2}\,\text m=\underline{\underline{1,61\,\text m}}$$
> >
> > 	$$\vec v \frac{d \vec r}{dt} = (0,3\,\text{m}\cdot\text{s}^{-1}+0,6\,\text{m}\cdot\text{s}^{-2}t)\vec i+(-3\,\text{m}\cdot\text{s}^{-1}+0,6\,\text{m}\cdot\text{s}^{-3}t^2)\vec j$$
> >
> > 	$$v = |\vec v| = \sqrt{(0,3\,\text{m}\cdot\text{s}^{-1}+0,6\,\text{m}\cdot\text{s}^{-2}t)^2+(-3\,\text{m}\cdot\text{s}^{-1}+0,6\,\text{m}\cdot\text{s}^{-3}t^2)^2}$$
> >
> > 	$$\vec v(1\,\text s) = \underline{\underline{(0,9\vec i-2,4\vec j)\,\text m\cdot\text s^{-1}}}$$
> >
> > 	$$v(1\,\text s) = \sqrt{0,9^2-2,4^2}\,\text m\cdot\text s^{-1} = \underline{\underline{2,56\,\text m\cdot\text s^{-1}}}$$
> >
> > 2. $$\vec a = \frac{d \vec v}{dt} = 0,6\,\text m \cdot\text s^{-2}\vec i + 1,2\,\text m\cdot\text s^{-3}t\vec j$$
> >
> >	$$a = |\vec a| = \sqrt{(0,6\,\text m \cdot\text s^{-2})^2 + (1,2\,\text m\cdot\text s^{-3}t)^2}$$
> >
> >	$$\vec a(1\,\text s) = (0,6\vec i-1,2\vec j)\,\text m\cdot\text s^{-2}$$
> >
> >	$$a(1\,\text s) = \sqrt{0,6^2-1,2^2)}\,\text m\cdot\text s^{-2} = 1,34\,\text m\cdot\text s^{-2}$$
> >
> >	$$\vec F = m\vec a = m(0,6\,\text m \cdot\text s^{-2}\vec i + 1,2\,\text m\cdot\text s^{-3}t\vec j)$$
> >
> >	$$\vec F (1\,\text s) = m(0,6\vec i-1,2\vec j)\,\text m\cdot\text s^{-2} = (0,6\vec i-1,2\vec j)\,\text N$$
> >
> >	$$F(1\,\text s) = ma(1\,\text s) = \underline{\underline{1,34\,\text N}}$$
> >
> > 3. ![[../_assets/img/Pasted image 20250401084237.png|Pasted image 20250401084237.png]]

### Pohyb po kružnici

- **Úhlová souřadnice** $\varphi$
- **Úhlová rychlost**

	$$
	💡\omega = \frac{d\varphi}{dt}
	$$

- **Úhlové zrychlení**

	$$
	💡\varepsilon = \frac{d^2\varphi}{dt^2} = \frac{d\omega}{dt}
	$$

![[../_assets/img/Pasted image 20250401085045.png|Pasted image 20250401085045.png]]

- **Polohový vektor** $\vec r$ hmotného bodu vyjádříme pomocí průvodiče $r$ a úhlu $\varphi$
- Platí:

	$$
	\vec r = x\vec i+y\vec j = r \cos\varphi\vec i+r\sin\varphi\vec j
	$$

- Pro **rychlost** $\vec v$ platí:

	$$
	\vec v = \frac{d\vec r}{dt} = -r\frac{d\varphi}{dt}\sin\varphi\vec i + r\frac{d\varphi}{dt}\cos\varphi\vec j
	$$

- Vektor $\vec v$ leží v tečně k trajektorii v daném bodě
- Pro **velikost rychlosti** platí:

	$$
	💡v = \sqrt{v_x^2+v_y^2} = \sqrt{(-r\omega\sin\varphi)^2+(r\omega\cos\varphi)^2} = r|\omega|
	$$

- **Zrychlení** $\vec a$ hmotného bodu při kruhovém pohybu určíme jako:

	$$
	\vec a = \frac{d\vec v}{dt} = -r \left[ \frac{d^2\varphi}{dt^2}\sin\varphi+ \left( \frac{d\varphi}{dt} \right)^2\cos\varphi \right] \vec i + r \left[ \frac{d^2\varphi}{dt^2}\cos\varphi+ \left( \frac{d\varphi}{dt} \right)^2\sin\varphi \right] \vec j
	$$

- Pomocí definičních vztahů pro úhlovou rychlost a zrychlení můžeme vyjádřit $\vec a$ vztahem:

	$$
	\vec a = -r(\varepsilon\sin\varphi+\omega^2\cos\varphi)\vec i + r(\varepsilon\cos\varphi+\omega^2\sin\varphi)\vec j
	$$

- Zrychlení $\vec a$ lze rozložit na **složku tečnou** $\vec{a_t}$ **normálovou** $\vec{a_n}$:

	$$
	\vec a = \vec{a_t} +\vec{a_n} = \vec{a_t}\vec v^0 + \vec{a_n}\vec n^0
	$$

	- $a_t$, $a_n$ jsou souřadnice vektorů tečného a normálového zrychlení
	- $\vec v^0$, $\vec n^0$ jsou jednotkové vektory ve směru vektoru rychlosti a normály
- Pro tečnou složku zrychlení platí při uvážení pro velikost rychlosti:

	$$
	💡a_t = \frac{dv}{dt} = \frac{d}{dt}(r|\omega|) = \pm r\varepsilon
	$$

	- horní znaménko platí tehdy, je-li $\omega > 0$
	- dolní znaménko platí při $\omega < 0$
- Pro souřadnici $a_n$ platí:

	$$
	a_n = \frac{v^2}{r} = \frac{r^2\omega^2}{r} = r\omega^2
	$$

- Z předchozích rovnic vyplývá, že **velikost zrychlení** $a$ je:

	$$
	a = \sqrt{a_t^2+a_n^2} = r \sqrt{\varepsilon^2+\omega^4}
	$$

![[../_assets/img/Pasted image 20250401101207.png|Pasted image 20250401101207.png]]

##### Vyjádření úhlových veličin pomocí vektorů

$$
💡\vec\omega = \frac{d\vec\varphi}{dt}
$$

$$
💡\vec\varepsilon = \frac{d\vec\omega}{dt}
$$

$$
\vec v = \vec\omega\times\vec r
$$

$$
\vec{a_t} = \vec\varepsilon\times\vec r
$$

$$
\vec{a_n} = \vec\omega\times\vec v
$$

![[../_assets/img/Pasted image 20250401101844.png|Pasted image 20250401101844.png]]

> [!question] Příklad
> Těleso rotuje kolem pevné osy úhlovou rychlostí $\omega = 10\,\text{rad}\cdot\text s^{-1} + 2\,\text{rad}\cdot\text{s}^{-2}t$.
> 
> Pro bod tělesa ve vzdálenosti $r = 0,2\,\text{m}$ od osy určete:
> 1. Počáteční úhlovou rychlost.
> 2. Úhlové zrychlení.
> 3. Úhel otočení v intervalu $t \in \langle 0,\,5\,\text{s} \rangle$.
> 4. Obvodovou rychlost v čase $5\,\text s$.
> 5. Tečné zrychlení v čase $5\,\text s$.
> 6. Normálové zrychlení v čase $5\,\text s$.