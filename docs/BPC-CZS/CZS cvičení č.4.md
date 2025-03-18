---
share: "true"
category: BPC-CZS
---

Čtvrté cvičení z předmětu [[./index|BPC-CZS]]

## Vlastnosti systémů a konvoluce

1. [[CZS cvičení č.4#Klíčové pojmy|Klíčové pojmy]]
2. [[CZS cvičení č.4#Zjištění linearity systému|Zjištění linearity systému]]
3. [[CZS cvičení č.4#Diskrétní lineární konvoluce|Diskrétní lineární konvoluce]]
4. [[CZS cvičení č.4#Samostatné úkoly|Samostatné úkoly]]
	1. [[CZS cvičení č.4#Linearita|Linearita]]
	2. [[CZS cvičení č.4#Časová variance|Časová variance]]
	3. [[CZS cvičení č.4#Kauzalita|Kauzalita]]

### Klíčové pojmy

- **Linearita systémů**
- **Časová invariance/variance**
	- zda se systém změní při posunutí časové osy
- **Kauzalita**
	- zda systém závisí i na budoucích vzorcích systému
- **Stabilita systému**
	- póly uvnitř jednotkové kružnice
	- omezený vstup -> omezený výstup
- **Lineární diskrétní konvoluce**
	- představuje odezvu LTI (Lineárně časově invariantní) systému na vstupní signál
- **Korelace** (křížová korelace a autokorelace)
	- podobnost dvou signálů nebo časově posunuté verze stejného signálu

### Zjištění linearity systému

```mermaid
---
config:
  forceLegacyMathML: true
---

graph LR

TEST[test]

x1@{shape: text, label: "$$x_1[n]$$"}
x2@{shape: text, label: "$$x_2[n]$$"}
a1@{shape: text, label: "$$a_1$$"}
a2@{shape: text, label: "$$a_2$$"}
sum(("$$\sum$$"))
trans["$$\mathcal{T} \{ \}$$"]
y@{shape: text, label: "$$y[n]$$"}

x1 --> a1 --> sum
x2 --> a2 --> sum
sum ---|"$$a_1 x_1[n] + a_2 x_2[n]$$"| trans
trans --> y

style x1 color:#f9f
style TEST color:#f9f
```

```mermaid
graph LR

x1@{shape: text, label: "$$x_1[n]$$"}
x2@{shape: text, label: "$$x_2[n]$$"}
a1@{shape: text, label: "$$a_1$$"}
a2@{shape: text, label: "$$a_2$$"}
sum(("$$\sum$$"))
trans1["$$\mathcal{T} \{ \}$$"]
trans2["$$\mathcal{T} \{ \}$$"]
y@{shape: text, label: "$$y[n]$$"}

x1 --> trans1 -->|"$$y_1[n]$$"| a1 --> sum --> y
x2 --> trans2 -->|"$$y_2[n]$$"| a2 --> sum

```

### Diskrétní lineární konvoluce

- Definice:

	$$y = x * h$$

	$$y[m] = \sum^\infty_{n=-\infty} x[n] \cdot h[m - n]$$

- pokud vstupní signál $x$ bude mít délku $N$ a impulsní charakteristika $h$ délku $M$, pak výstupní signál bude mít délku $N + M − 1$
- Matlab funkce:
	- `y = conv(x, h)`
	- `Y = conv2(X, H)`

### Samostatné úkoly

#### Linearita



#### Časová variance



#### Kauzalita


