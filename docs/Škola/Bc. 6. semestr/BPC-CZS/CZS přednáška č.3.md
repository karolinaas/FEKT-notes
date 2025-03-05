---
share: "true"
---

## Třetí přednáška z předmětu BPC-CZS
### Pokračování minulé přednášky - [[./CZS přednáška č.2|CZS přednáška č.2]]
#### Vícerozměrné diskrétní signály
- Jednotkový impuls
	- $\delta [m,n] = 1$   pro $m = n = 0$
	- $\delta [m,n] = 0$   pro ostatní $m,n$
- Jednotkový skok
	- $u [m,n] = 1$   pro $m \ge n \ge 0$
	- $u [m,n] = 0$   pro ostatní $m,n$
- Lineární kombinace $s[m,n]$ s jednotkovým impulsem
$$s [m,n] = \sum^\infty_{i=-\infty} \sum^\infty_{j=-\infty} s [i,j] \delta [m-i,n-j]$$
#### Oddělitelný dvojrozměrný signál
- Rozložitelnost na součin jednorozměrných signálů
$$s [m,n] = s_1 [m] \cdot s_2 [n]$$
- Dvojrozměrný harmonický signál - oddělitelná signál
$$s [m,n] = C \cdot \cos [\omega_1 m + \varphi_1] \cdot \cos [\omega_1 m + \varphi_1]$$
$$\omega_1 = \frac{2 \cdot \pi}{T_1}$$ $$\omega_2 = \frac{2 \cdot \pi}{T_2}$$
### Organizace testu ve cvičení
- minimálně tři termíny a budou plné
- Proběhne v šestý týden semestru
- Možné termíny:
	- pondělí večer
	- středa večer
	- pátek kolem 11h

### Prezentace č.2: Korelace, převodní funkce, klasifikace signálů
#### Korelace diskrétních signálů
- určení podobnosti signálů
- v úlohách rozpoznávání řeči, obrazů, atd.
- hlavními prostředky jsou funkce korelace a autokorelace
#### Korelační funkce
$$r_{xy} [m] = \sum^\infty_{n=-\infty} x [n] \cdot y [n-m] = \sum^\infty_{n=-\infty} x [n + m] \cdot y [n], m = \pm 0, \pm 1, \pm 2, ... $$
$$r_{yx} [m] = \sum^\infty_{n=-\infty} y [n] \cdot x [n-m] = \sum^\infty_{n=-\infty} y [n + m] \cdot x [n], m = \pm 0, \pm 1, \pm 2, ... $$
- pod sumou si představujeme for cyklus
- Nejčastěji se používá ta první varianta
- Korelační fce není komutativní, záleží na pořadí signálů $r_{xy} [m] = r_{yx} [-m]$
- Konvoluce je relativně podobná operace
#### Autokorelační funkce
$$r_{xx} [m] = \sum^\infty_{n=-\infty} x[n] \cdot x[n-m] = \sum^\infty_{n=-\infty} x[n+m] \cdot x[n]$$
#### Diskrétní systémy
- Diskrétní systém transformuje signál $x[n]$ na $y[n]$
- Transformace $\mathcal{T}_1 \{x[n]\}$ je převodní funkce
#### Počáteční podmínky