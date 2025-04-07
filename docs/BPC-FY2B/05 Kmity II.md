---
share: "true"
category: BPC-FY2B
---

# KMITY II

## Pohybová rovnice pro těleso na pružině (bez tření)

### Harmonický oscilátor

- Pružina působí na těleso **direktivní elastickou silou** (síla pružnosti).
- Předpokládejme, že nepůsobí třecí síly ani odporové síly prostředí.
- Svislá složka tíhové síly je vykompenzována reakcí podložky.
- Jakmile poněkud vychýlíme těleso na stranu a poté je uvolníme, vznikne harmonický pohyb v ose $x$ (lineární pohyb).
- Při sestavení pohybové rovnice budeme respektovat pro průměty jednotlivých veličin znaménkovou konvenci, kdy souřadnice vektorů s orientací ($+x$) budou kladné a souřadnice vektorů s orientací ($-x$) budou záporné.

![[../_assets/img/Pasted image 20250330190635.png|Pasted image 20250330190635.png]]

#### Sestavení pohybové rovnice

- Z **2. Newtonova zákona** platí:

	$$
	\vec{F_d} = m \vec{a}
	$$

- Protože síla je přímo úměrná výchylce a opačně orientovaná, platí:

	$$
	F_d = -kx
	$$

	- $k$ - konstanta úměrnosti (u pružiny se nazývá **tuhost pružiny**, $[k] = \text{N} \cdot \text{m}^{-1}$)
- Porovnáním obou rovnic s využitím definičního vztahu pro zrychlení $a = \frac{d^2 x}{dt^2}$ dostáváme:

	$$
	ma = -kx \Longrightarrow ma + kx = 0 \Longrightarrow m \frac{d^2 x}{dt^2} + kx = 0 \Longrightarrow \underline{\underline{\frac{d^2 x}{dt^2} + \frac{k}{m} x = 0}}
	$$

	- resp.  označíme $\omega^2 = \frac{k}{m}$:

	$$
	\underline{\underline{\frac{d^2 x}{dt^2} + \omega^2 x = 0}}
	$$

- Jedná se o p**ohybovou rovnici pro netlumené harmonické kmity - lineární diferenciální rovnice** 2. řádu s konstantními koeficienty a nulovou pravou stranou.
- Řešeními jsou harmonické funkce času.
- Systémy popsané takovouto rovnicí nazýváme **lineární harmonické oscilátory**.

#### Řešení pohybové rovnice

- Hledáme funkce $x = x(t)$, které vyhovují pohybové rovnici.
- K tomu určíme nejprve kořeny $\lambda_1$, $\lambda_2$ tzv. charakteristické rovnice, kterou přiřadíme k řešené diferenciální rovnici ($\frac{d^2x}{dt^2} \rightarrow \lambda^2$, $\frac{dx}{dt} \rightarrow \lambda^1$. $x \rightarrow \lambda^0$):

	$$
	\lambda^2 + \omega^2 = 0
	$$

- Jedná se o kvadratickou rovnici, jejíž kořeny jsou

	$$
	\lambda_{1,2} = \pm i \omega
	$$

- Obecné řešení diferenciální rovnice pak lze zapsat ve tvaru:

	$$
	\underline{\underline{x(t) = C_1e^{\lambda_1t} + C_2e^{\lambda_2t} = C_1e^{i \omega t} + C_2e^{- i \omega t}}}
	$$

	- $C_1$ a $C_2$ jsou obecně komplexní konstanty.

- Řešením diferenciální rovnice je tedy nekonečně mnoho různých funkcí pro libovolné hodnoty konstant $C_1$ a $C_2$.
- Konkrétní hledané řešení pro danou situaci nalezneme dosazením dvou **počátečních podmínek** - obvykle počáteční výchylka a počáteční rychlost.
- Použitím **Eulerova vztahu** a úpravou dostaneme:

	$$
	x(t) = C_1 \left[ \cos (\omega t) + i \cdot \sin (\omega t) \right] + C_2 \left[ \cos (\omega t) - i \cdot \sin (\omega t) \right]
	$$
	
	$$
	x(t) = (C_1 + C_2) \cos (\omega t) + i \cdot (C_1 - C_2) \sin (\omega t)
	$$
	
	$$
	x(t) = K_1 \cos (\omega t) + K_2 sin(\omega t)
	$$

	- kde jsme označili $K_1 = C_1 + C_2$, $K_2 = i \cdot (C_1 - C_2)$

- Pokud hledáme řešení ve tvaru reálných funkcí, můžeme konstanty vyjádřit např. jako:

	$$
	K_1 = x_m \sin (\varphi_0)
	$$
	
	$$
	K_2 = x_m \cos (\varphi_0)
	$$

	- kde $x_m$ a $\varphi_0$ jsou reálné konstanty

- Po dosazení dostáváme:

	$$
	x(t) = x_m \sin (varphi_0) \cos (\omega t) + x_m \cos (\varphi_0) \sin (\omega t)
	$$

- Aplikací součtového vzorce $\sin (\alpha + \beta) = \sin \alpha \cos \beta + \cos \alpha \sin \beta$ dostáváme vztah pro **okamžitou výchylku** harmonického oscilátoru:

	$$
	\underline{\underline{x(t) = x_m \sin (\omega t + \varphi_0)}}
	$$

	- $x_m$ - amplituda výchylky
	- $\varphi_0$ - počáteční fáze

- **Úhlová frekvence** kmitavého pohybu tělesa na pružině pak je:

	$$
	\omega = \sqrt{\frac{k}{m}}
	$$

- Odpovídající **frekvence** je:

	$$
	f = \frac{1}{2 \pi} \sqrt{\frac{k}{m}}
	$$

- Pro **periodu** kmitavého pohybu pak platí:

	$$
	T = 2 \pi \sqrt{\frac{m}{k}}
	$$