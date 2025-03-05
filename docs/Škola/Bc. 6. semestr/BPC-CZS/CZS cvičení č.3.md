---
share: "true"
---
## Třetí cvičení z předmětu BPC-CZS

Dnešní témata:
1. Vzorkování signálu
2. Generování harmonických průběhů v Matlabu
3. Kvantování signálu
4. Samostatné úkoly
#### Vzorkování signálů
- **Číslicové signály** - narozdíl od diskrétních signálů jsou vzorky kvantovány na konečný počet kvantovacích úrovní
- V Matlabu pracujeme vždy rovnou s číslicovými signály
##### Vzorkovací teorém
- musí být dodržen *Nyquistův-Shannonův teorém* definován jako $f_s > 2f_{max}$
- Při nedodržení vzorkovacího teorému dochází k tzv. *aliasingu*
#### Generování harmonických průběhů v Matlabu
- Průběhy *cos* a *sin* jsou v diskrétní podobě zadefinovány jako
- sfd
- asdf
- adsf
- asdf
- v Matlabu můžeme vygenerovat signály jako:
  `y_cos = A * cos(2 * pi`