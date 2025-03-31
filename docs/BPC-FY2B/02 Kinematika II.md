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

#### Určení polohy z časového průběhu rychlosti $v = v(t)$

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

#### Určení rychlosti z časového průběhu zrychlení $a = a(t)$

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

