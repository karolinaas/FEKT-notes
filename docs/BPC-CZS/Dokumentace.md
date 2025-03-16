---
share: "true"
category: BPC-CZS
---

Dokumentace k funkcím napsaných v rámci cvičení z předmětu BPC-CZS

---

## [[./CZS cvičení č.2|Funkce z cvičení č.2]]

### add_zeros()

Pad row vector with zeros

#### Syntax

```
row_vector = add_zeros(<a>input_vector</a>, num_of_zeros)
```

#### Description

This function takes a row vector and a number of zeros for the vector to be padded with. Returns a vector padded with zeros.

The second argument must be a scalar value, a natural number and it must be greater than zero. Otherwise an error is thrown.

#### Examples

> [!example]- Pad row vector with zeros
> ```matlab
> add_zeros([1 2 3 4], 2)
> ```
> Output:
> ```
> row_vector = 
>	1 0 0 2 0 0 3 0 0 4 0 0
> ```

#### Input Arguments

> [!info]- `input_row_vector` - input row vector
> Input row vector. Must be a row vector, otherwise an error is thrown.

> [!info]- `num_of_zeros` - number of zeros
> Number of zeros for the vector to be padded with. Must be a scalar value, a natural number and must be greater than zero. Otherwise an error is thrown.

### load_music()

#### Syntax

#### Description

#### Examples

#### Input Arguments

---

### [[./CZS cvičení č.3|Funkce z cvičení č.3]]