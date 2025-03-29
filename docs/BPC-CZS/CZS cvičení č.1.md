---
share: "true"
category: BPC-CZS
---

## Úvod do Matlabu, 1. část

1. [[CZS cvičení č.1#Úvod|Úvod]]
2. [[CZS cvičení č.1#Základy|Základy]]
	- [[CZS cvičení č.1#Čísla|Čísla]]
	- [[CZS cvičení č.1#Řetězce|Řetězce]]
	- [[CZS cvičení č.1#Proměnné|Proměnné]]
	- [[CZS cvičení č.1#Proměnné|Proměnné]]
	- [[CZS cvičení č.1#Operátory|Operátory]]
3. [[CZS cvičení č.1#Základní příkazy|Základní příkazy]]
4. [[CZS cvičení č.1#Vektory a matice|Vektory a matice]]
	- [[CZS cvičení č.1#Definice matice|Definice matice]]
	- [[CZS cvičení č.1#Generace zvláštních typů matic|Generace zvláštních typů matic]]
	- [[CZS cvičení č.1#Operace s maticemi|Operace s maticemi]]
	- [[CZS cvičení č.1#Výběr části matice|Výběr části matice]]
	- [[CZS cvičení č.1#Funkce s maticemi|Funkce s maticemi]]
5. [[CZS cvičení č.1#Skripty a funkce|Skripty a funkce]]
	- [[CZS cvičení č.1#Skripty|Skripty]]
	- [[CZS cvičení č.1#Funkce|Funkce]]
6. [[CZS cvičení č.1#Grafy|Grafy]]
	- [[CZS cvičení č.1#Funkce pro vykreslení grafů|Funkce pro vykreslení grafů]]
	- [[CZS cvičení č.1#Funkce pro práci s grafickými výstupy|Funkce pro práci s grafickými výstupy]]

---

### Úvod

##### Historie Matlabu

- MATLAB (Matrix Laboratory, ∼1985) – programovací prostředí a programovací jazyk
- jazyk MATLAB vychází z Fortranu (měl řešit některé jeho problémy a více zpřístupnit LINPACK a EISPACK software)
- později přepsán do jazyka C
- původně pro matematické výpočty, později rozšířen
- původní zdarma, dnes od společnosti MathWork
- klíčovou datovou strukturou jsou matice (vicedimenzionální tenzory)
- MATLAB slouží primárně pro analýzu dat, tvorbu algoritmů a modelování, nikoliv pro nasazení aplikací

##### Prostředí Matlab

- MATLAB pracuje nativně s komplexními čísly a maticemi
- je tedy vhodný pro analýzu signálů (například zvuku nebo obrazu)
- grafický subsystém – umožňuje snadné zobrazení výsledků výpočtů, grafy 2D nebo 3D, integrovaný debugging
- toolboxy – knihovny funkcí, které významně rozšiřují možnosti prostředí Matlab, např. pro zpracování signálů nebo obrazů, pro práci s neuronovými sítěmi, návrh filtrů, waveletovou transformaci atd

##### Sumarizace základů

- jak vytvářet názvy proměnných
- preference anglických názvů a způsobu zápisu
- relační a logické operátory
- základní build-in funkce

### Základy

#### Čísla

- Zápis čísel:
	- cokoliv začíná číslicí je považováno za číslo
	- desetinná tečka, nikoliv čárka (vždy): `5.6`, `565.84`
	- ze využít i symbol ‘e’ pro definici násobku $10^x$ 
		- `5e2` $= 5 \cdot 10^2 = 500$
		- `4.589e-7` $= 4.589 \cdot 10^{-7} = 0,0000004589$
	- imaginární jednotka je zadávána symbolem `j` nebo `i`:
		- `2 + 3i`
		- `3e-5i`
- Konstanty a matematické prvky:
	- `pi` - Ludolfovo číslo
		- `pi = 3.14159265358979`
	- `Inf` - nekonečno
	- `NaN` - není číslo
		- při matematicky nedefinovaných operacích
	- `eps(rozsah)` - nejmenší rozdíl mezi dvěma sousedními čísly (přesnost v daném rozsahu)
		- `eps(1)` = $2,2204 \cdot 10^{-16}$

#### Řetězce

- textový řetězec (String) je posloupnost znaků uzavřených do uvozovek
	- `'good day'`
- vnitřně jsou řetězce uloženy jako matice (pole, vektor) znaků
- řetězce mohou obsahovat jeden nebo více libovolných znaků kromě jednoduché uvozovky `'`
- pokud má řetězec obsahovat znak `'`, musíme uvozovky zdvojit
-  `"symbol 'j' znaci imaginarni konstantu"`
- k převodu čísla na řetězec lze využít funkci `num2str(5.6)`
- obráceně k převodu řetězce na číslo lze využít funkci `str2num('5.6')`
- spojování řetězců je možné provést jako spojení matic
	- `['Cau ', 'lidi']`

#### Proměnné

- pojmenování uložené hodnoty pro pozdější použití
- identifikátor musí vždy začínat písmenem (protože to, co začíná číslicí, je číslo)
- rozlišuje se velikost písmen (Case Sensitive)
- lze použít i název vestavěné funkce, ta pak ale nepůjde zavolat
- operátor přiřazení:
	- `identifikátor = 'hodnota'`

| Správné identifikátory | Nesprávné identifikátory |
| ---------------------- | ------------------------ |
| `frekvence = 16e3`     | `kmitočet`               |
| `r_rez = 60`           | `3rez`                   |
| `i5`                   |                          |

#### Operátory

##### Aritmetické operátory

- Unární operátory (s jedním operandem):
	- prefixové (před operandem)
		- `+` - unární plus, většinou se nepíše
		- `-` - unární mínus, mění znaménko následujícího prvku
	- postfixové (za operandem)
		- `'` - Hermitovské sdružení matice
		- `.'` - prostá transpozice matice
- Binární operátory (mezi dvěma operandy):
	- `+` - součet
	- `-` - rozdíl
	- `.*` - součin (po prvcích)
	- `./` - dělení zprava (po prvcích)
	- `.\` - dělení zleva (po prvcích)
	- `.^` - mocnina (po prvcích)
	- `*` - maticový součin
	- `./` - dělení matic zprava
	- `.\` - dělení matic zleva
	- `^` - umocnění matice

##### Relační a logické operátory

- Operátory porovnání:
	- `==`, `eq` - rovnost
	- `~=`, `ne` - nerovnost
	- `<`, `lt` - menší než
	- `>`, `gt` - větší než
	- `<=`, `le` - menší než nebo rovno
	- `>=`, `ge` - větší než nebo rovno
- Logické operátory:
	- `&`, `and` - logický součin
	- `|`, `or` - logický součet
	- `~`, `not` - logická negace
	- `xor` - logický exkluzivní součet

### Základní příkazy

- `clc` - vymazání příkazového okna
- `clear 'identifikátor'` - vymazání proměnné
	- `clear all`, `clear *` - vymazání všech proměnných
- `;` - ukončení příkazu a potlačení výpisu výsledku
- `...` - rozdělení dlouhého řádku

### Vektory a matice

#### Definice matice

- Vektory:
	- řádkový vektor je uzavřen v hranatých závorkách a jednotlivé prvky jsou odděleny čárkou (nebo pouze mezerou):
		- `row = [1, 2, 3, 4, 5]`
	- sloupcový vektor je uzavřen v hranatých závorkách a jednotlivé prvky jsou odděleny středníkem:
		- `column = [1; 2; 3; 4; 5]`
- Matice:
	- tvoří dvourozměrné pole, přičemž prvky v řádku jsou odděleny čárkou (nebo pouze mezerou) a jednotlivé řádky jsou odděleny středníkem:

```matlab
mat = [...
	1, 2, 3; ...
	4, 5, 6; ...
	7, 8, 9
	];
```

#### Generace zvláštních typů matic

- `zeros(k, l)`, `ones(k, l)`, `NaN(k, l)` - vytvoření matice rozměrů $k \times l$
- `eye(k)` - vytvoření jednotkové matice rozměrů $k \times k$
- `od:krok:do` - vytvoření vektoru hodnot počínaje hodnotou `od` do hodnoty `do` s krokem `krok` (bez uvedení je roven 1)
- `linspace(od, do, pocet)` - rozdělení intervalu `od`-`do` lineárně na `pocet` hodnot (pokud není uveden, bere se 100)
- `logspace(od, do, pocet)` - rozdělení intervalu $10^{\texttt{od}}$ - $10^{\texttt{do}}$ logaritmicky na `pocet` hodnot (pokud není uveden, bere se 50)

#### Operace s maticemi

##### Operace s vektory nebo maticemi

- sčítat a odčítat lze pouze matice se stejným rozměrem
- při násobení a dělení dvou matic rozměru `[k, l] * [m, n]` se musí vnitřní rozměry rovnat `l == m`, výsledná matice bude mít rozměr `[k, n]`
- u dělení rozlišujeme dělení zleva a dělení zprava:
	- `A/B = A*inv(B)` - dělení zprava
	- `A\B = inv(A)*B` - dělení zleva
- umocnit lze pouze čtvercovou matici
- všechny operace lze provádět také po prvcích, v tom případě musí mít matice stejný rozměr
	- `A.*B`
	- `A./B`
	- `A.\B`

##### Transformace matic

- `mat'` - Hermitovské sdružení matice (komplexní sdružení všech prvků a následná transpozice matice)
- `mat.'` - prostá transpozice matice
- `flipud(mat)` - inverze pořadí řádků
	- lze také `mat(end:-1:1, :)`
- `fliplr(mat)` - inverze pořadí sloupců
	- lze také `mat(:, end:-1:1)`
- `mat(:)` - vrátí sloupcový vektor složený ze sloupců matice za sebou
- `reshape(mat, k, l)` - přeuspořádá prvky matice tak, aby měla `k` řádků a `l` sloupců
- `repmat(mat, k, l)` - opakování matice `k`-krát ve směru řádků a `l`-krát ve směru sloupců

#### Výběr části matice

##### Indexování matic

- matice a vektory jsou indexovány od 1
- výběr konkrétního prvku matice: 
	- `mat(2, 3)` - prvek na druhém řádku ve třetím sloupci
- výběr podmatice:
	- `mat(2:3, [3, 7, 5])` - prvky v druhém až třetím řádku a zároveň v třetím, sedmém a pátém sloupci
- `mat(:, 2:3)` - prvky ve všech řádcích a současně ve druhém až třetím sloupci
- podobně, pokud chci poslední řádek nebo poslední sloupec, je možné zápis zkrátit nahrazením indexu symbolem `end`:
	- `mat(:, end)`
- vnitřně jsou matice v paměti uloženy jako jednotlivé sloupce za sebou, takže i matici lze indexovat jediným indexem:
	- `mat(4)`

#### Funkce s maticemi

##### Funkce pracující s prvky matice

- `[k, l] = size(mat)` - rozměr zadané matice
- `k = length(mat)` - větší z rozměrů
- `abs(mat)` - matice absolutních hodnot
- `angle(mat)` - matice fází v radiánech
- `log(mat)` - matice hodnot přirozeného logaritmu
- `exp(mat)` - matice hodnot exponenciální funkce
- `log10(mat)` - matice hodnot dekadického logaritmu
- `diag(mat)` - sloupcový vektor prvků na hlavní diagonále zadané
matice

##### Funkce pracující s celou maticí nebo sloupci (řádky)

Některé funkce zpracovávají matici jako celek:
- `inv(mat)` - inverzní matice zadané matice
- `det(mat)` - determinant zadané matice
- `eig(mat)` - sloupcový vektor vlastních čísel zadané matice

Většina ostatních funkcí zpracovává matice po sloupcích:
- `sum(mat)` -  řádkový vektor součtů prvků v jednotlivých sloupcích
- `max(mat)` - řádkový vektor maximálních prvků v jednotlivých sloupcích
- `min(mat)` - řádkový vektor minimálních prvků v jednotlivých sloupcích
- `mean(mat)` - řádkový vektor středních hodnot v jednotlivých
sloupcích

### Skripty a funkce

#### Skripty

- použití pro opětovné spuštění posloupnosti příkazů
- obsahují pouze soupis příkazů tak, jak by byly zadávány v příkazovém okně
- uloženy v textovém souboru s příponou `*.m`
- pro název souboru platí stejná pravidla jako pro identifikátory proměnných (název nesmí začínat číslicí)
- při spuštění jsou vyhledávány v aktuálním adresáři a poté ve vyhledávací cestě (příkaz `path`)
- znak procenta uvozuje komentář až do konce řádku
- pro přehlednost lze dlouhý řádek rozdělit na dva nebo více třemi tečkami na konci řádku `...`
- pracují v hlavním pracovním prostoru - proměnné definované ve skriptu jsou viditelné i v ostatních skriptech a v příkazovém okně a obráceně

#### Funkce

- opět posloupnost příkazů uložená v textovém souboru s příponou `*.m`
- na rozdíl od skriptů pracují ve vlastním pracovním prostoru – proměnné definované v jiných funkcích nebo v příkazovém okně nejsou ve funkci viditelné a naopak
- předávání hodnot mezi funkcemi nebo mezi funkcí a příkazovým oknem je možné pouze pomocí vstupních a výstupních parametrů
- `function [výstupní param.] = název(vstupní param.)`
- volání probíhá zápisem názvu funkce a místo formálních parametrů se uvedou skutečné parametry
- při volání funkce se hledá soubor, který má stejný název jako volaná funkce -> soubory pojmenovávat stejně jako funkce
- soubor může obsahovat i další funkce, které jsou však pouze lokální

### Grafy

#### Funkce pro vykreslení grafů

- `plot(x, y)` - vykreslení spojnicového 2D grafu
	- pokud je y matice, pak se jednotlivé sloupce chápou jako samostatné průběhy
- `stem(x, y)` - vykreslení stopkového 2D grafu
	- pokud je y matice, pak se jednotlivé sloupce chápou jako samostatné průběhy
- `semilogx(x, y)` - spojnicový graf s logaritmickým rozložením osy x
- `semilogy(x, y)` - spojnicový graf s logaritmickým rozložením osy y
- `loglog(x, y)` - spojnicový graf s logaritmickými osami
- `axis([xmin, xmax, ymin, ymax])` - nastavení výřezu v grafu
- `mesh(x, y, z)` - síťový 3D graf
- `surf(x, y, z)` - jako mesh, ale graf je navíc vyplněný
- `polar` - graf v polárních souřadnicích

#### Funkce pro práci s grafickými výstupy

- `figure` - otevření nového okna grafu
- `figure(2)` - otevření nebo přepnutí na okno grafu s číslem 2
- `subplot(k, l, m)` - rozdělení aktivního grafického okna na více grafů v `k` řádcích a `l` sloupcích, přepnutí do `m`-tého podgrafu
- `title('nazev')` - doplnění názvu grafu
- `xlabel('osa x')`, `ylabel('osa y')` - doplnění popisků os
- `legend('1. průběh', '2. průběh', ...)` - doplnění legendy k jednotlivým průběhům v grafu
- `grid on`, `grid off` - zapnutí nebo vypnutí mřížky v grafu
- `hold on`, `hold off` - podržení nebo zrušení držení grafického výstupu
	- další graf bude zakreslen přes stávající
