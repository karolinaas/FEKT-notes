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

![[../../_assets/img/Pasted image 20250331012220.png|Pasted image 20250331012220.png]]

### Přímočarý pohyb hmotného bodu

#### Rychlost přímočarého pohybu hmotného bodu

- V časovém intervalu $\langle t; t + \Delta t \rangle$ je přírůstek souřadnice $x$ roven $\Delta x$
- **Střední rychlost** $v_s$ přímočarého pohybu ve směru osy $x$ je:

	$$v_s = \frac{\Delta x}{\Delta t}$$

- **Okamžitá rychlost** hmotného bodu $v$ je:

	$$
	v = \lim_{\Delta t \rightarrow 0} \frac{\Delta x}{\Delta t} = \dot{x} = \frac{dx}{dt}
	$$

![[../../_assets/img/Pasted image 20250331162816.png|Pasted image 20250331162816.png]]

#### Určení polohy z časového průběhu rychlosti $v = v(t)$

- Z definice okamžité rychlosti vyplývá pro závislost souřadnice $x$ na čase:

	$$
	v = \frac{dx}{dt} \Longrightarrow dx = v \, dt \Longrightarrow x = \int v \, dt
	$$

- V časovém intervalu $\langle t_1, \, t_2 \rangle$ proběhne hmotný bod **délku dráhy**:

> $$s_{1,2} = \int\limits_{s_1}^{s_2} ds =  \int\limits_{s_1}^{s_2} |v| \, dt$$
> - $v$ -  velikost rychlosti

> [!question] Příklad
> Velikost rychlosti hmotného bodu konajícího přímočarý pohyb je dána vztahem $v = 12 \, \text{m} \cdot \text{s}^{-3} t^2 - 10 \, \text{m}  \cdot \text{s}^{-2} t + 3 \, \text{m} \cdot \text{s}^{-1}$. Vypočtěte délku dráhy, kterou urazí hmotný bod v časovém intervalu od $t_1 = 1 \, \text{s}$ do $t_2 = 4 \, \text{s}$.
> > [!success]- Řešení
> > Délka dráhy v intervalu $\langle t_1, \, t_2 \rangle$ je rovna $s_{1,2} = \int\limits_{s_1}^{s_2} ds =  \int\limits_{s_1}^{s_2} |v| \, dt$, kde $v$ je velikost rychlosti.
> > Protože $v > 0$ pro libovolné $t$, platí:
> > $$s_{1,2} = \int\limits_{1 \, \text{s}}^{4 \, \text{s}} (12 \, \text{m} \cdot \text{s}^{-3} t^2 - 10 \, \text{m}  \cdot \text{s}^{-2} t + 3 \, \text{m} \cdot \text{s}^{-1}) \, dt =$$
> > $$s_{1,2} = \int\limits_{1 \, \text{s}}^{4 \, \text{s}} (12 \, \text{m} \cdot \text{s}^{-3} t^2 - 10 \, \text{m}  \cdot \text{s}^{-2} t + 3 \, \text{m} \cdot \text{s}^{-1}) \, dt =$$
> > $$= \left[ 12\,\text{m}\cdot\text{s}^{-3} \frac{t^3}{3} -10\,\text{m}\cdot\text{s}^{-2} \frac{t^2}{2} +3\,\text{m}\cdot\text{s}^{-1} t \right] _{1\,\text{s}}^{4\,\text{s}} =$$
> > $$= \left[ 4\,\text{m}\cdot\text{s}^{-3} t^3 -5\,\text{m}\cdot\text{s}^{-2} t^2 +3\,\text{m}\cdot\text{s}^{-1} t \right] _{1\,\text{s}}^{4\,\text{s}} =$$
> > $$= (256\,\text{m} - 80\,\text{m} + 12\,\text{m}) - (4\,\text{m} - 5\,\text{m} + 3\,\text{m}) =$$
> > $$= \underline{\underline{186\,\text{m}}}$$