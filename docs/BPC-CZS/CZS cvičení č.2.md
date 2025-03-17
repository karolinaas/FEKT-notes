---
share: "true"
category: BPC-CZS
---

## Druhé cvičení z předmětu BPC-CZS

### Úvod do Matlabu, 2. část

#### Lambda funkce

- anonymní funkce
- nemá samostatná .m soubor
- je tzv. jednořádková (to není nutně pravda, ale říká se jí tak)
- definuje se tam, kde se volá
- kus kódu, o kterém já vím, že ho budu volat víckrát
- předem stanovené vstupní parametry a výstupní parametry
- pokud je funkce jednoduchá, tak může výt vhodné udělat z ní anonymní (lambda funkci) pokud není nutný samostatný .m soubor
- značí se zavináčem @(), v závorce jsou vstupní parametry
- 
#### Funkce

- v Matlabu je definována jako nový .m file
- důležité je, že, že jméno funkce se shoduje s názvem souboru
- výstupní argumenty musí být definovány někde uvnitř těla funkce

---

Pro alokaci matic budeme používat `zeros()`, t.j. alokace pomocí nul. Ne vždy (v některých specifických příkladech) to však může být vhodné, takže je možné alokovat i pomocí něčeho jiného (na tento případ pravděpodobně nenarazíme).

Tento for loop zapíše vždycky `i` na diagonálu:

```matlab
A = zeros(3, 3) % nulová matice s rozměrem 3x3

for i = 1:length(A)
	A(i, i) = i;
	disp(i);
end
```

Pokud matice mění velikost, tak se alokuje nulami (v podstatě pomocí funkce `zeros()`)
Matici je potřeba alokovat dřív než s ní budeme v cyklu pracovat
- může se stát, že budeme přistupovat k nealokované paměti a cyklus crashne
- z důvodu rychlosti - přístup do již alokované paměti je mnohem, mnohem rychlejší než alokace nové paměti

Znak `:` v matlabu znamená *pro všechna* nebo *všechna*, t.j. *všechny řádky* nebo *všechny sloupce*

Tento loop bude vždy přepisovat `A` (o rozměru 1x1) novou hodnotou `i`:

```matlab
% Matice A není alokovaná

for i = 1:3
	A(:, :) = i; % dvojtečky v indexech matice
	disp(i);
end
```

Tento loop má již alokovanou matici, kterou rozšíří o další řádek a prvek na souřadnici 2x2 (neustále se odkazuje na stejnou souřadnici) bude přepisovat na hodnotu indexu `i`:

```
A = [1 2 3];

for i = 1:3
	A(2, 2) = i;
end
```

Funkce `size()` v tomto případě vrací dvě hodnoty.
For cyklus sečte všechny řádky do jednoho.

```matlab
A = [1 1 1; 2 2 2; 3 3 3];
f = [100; 200; 300];

[M, N] = size(A);

Z = zeros(1, lenght(N));

for i = 1:N
	Z(:, i) = A(1, i) + A(2, i) + A(3, i);
end
```

V každém sloupci `Z` se sečtou všechny sloupce `A`.

```matlab
A = [1 1 1; 2 2 2; 3 3 3];
f = [100; 200; 300];

[M, N] = size(A);

% Z = zeros(1, lenght(N));

for i = 1:N
	Z(:, i) = A(:, i) + A(:, i) + A(:, i);
end
```

Někdy je vhodné alokovat matici pomocí funkce `NaN()`, za účelem debugu - je vidět, které hodnoty matice nebyly přepsány.

**While loop** - výraz se vyhodnotí a tělo smyčky se opakuje dokud podmínka nevrátí `false`.
Syntaxe: 

```matlab
while expression
	statements
end
```

Dokud je `n` menší než 3 tak se vypíše `n`.
Kdyby ve `while` loopu nebyla aktualizace podmínky, tak cyklus bude nekonečný.
V tom případě zabijeme program pomocí `CTRL+C`.

```matlab
n = 0;
while v < 3
	disp(n)
	n = n + 1;
```

**Podmínky** - nutno dávat pozor na pořadí
Syntaxe podmínek:

```matlab
if expression1
	statements
elseif expression2
	statements
else
	statements
end
```

**Switch**
Syntaxe:
```matlab
switch variable
	case value1
		statements
	case value2
		statements
	otherwise
		statements
end	
```

**Anonymní funkce**
```matlab
sqr = @(x) x.^2;
```

**Funkce**
- lze použít příkaz `>> help custom_function` pro nápovědu
- výstupní parametry se píší do hranatých závorek stejně jako proměnné
- pokud funkce vrací více proměnných, lze použít `~` pro omitting:
```matlab
[a, ~] = my_func(1, 2)
```

---

#### Dobrovolné zadání 1

Vytvořte funkci, která na vstupu dostane řádkový vektor a jako druhý argument kladný integer, který reprezentuje počet nul, které vloží za každou hodnotu vektoru.

**Prototyp:**
	Vstup: `add_zeros([1 2 3 4], 2)`
	Výstup: `1 0 0 2 0 0 3 0 0 4 0 0`
	
- ověřit, že se jedná o řádkový vektor pomocí funkce error:

```matlab
if ~isrow(input_vector)
	error("První argument musí být řádkový vektor!")
end
```

- Druhý argument musí být skalár, nesmí být vektor (v matlabu existuje funkce pro ověření, najít pomocí help) a zároveň musí být větší než nula.
- Řešit pomocí for cyklu

#### Dobrovolné zadání 2

Vytvořte funkci load_music, jejiž vstupní argument je cesta k nahrávce (.wav soubor) a výstupními argumenty jsou: vzorkovací frekvence a délka trvání nahrávky v sekundách. Funkce také zobrazí graf (Figure 1) hodnoty vzorků v čase (tzv. waveform).