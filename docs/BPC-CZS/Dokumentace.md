---
share: "true"
category: BPC-CZS
---

Dokumentace k funkcím napsaných v rámci CZS cvičení

---


## [[./02 Úvod do Matlabu, 2. část|Funkce z cvičení č.2]]


### add_zeros

Pad row vector with zeros

#### Syntax

<pre><code>row_vector = add_zeros(input_vector, num_of_zeros)</code></pre>

#### Description

This function takes a row vector and a number of zeros for the vector to be padded with. Returns a vector padded with zeros.

The second argument must be a scalar value, a natural number and it must be greater than zero. Otherwise an error is thrown.

#### Examples

> [!example]+ Pad row vector with zeros
> ```matlab
> add_zeros([1 2 3 4], 2)
> ```
> 
> Output:
> 
> ```
> row_vector =
> 
>        1    0    0    2    0    0    3    0    0    4    0    0
> ```

#### Input Arguments

> [!info]+ `input_row_vector` - input row vector
> Input row vector. Must be a row vector, otherwise an error is thrown.

> [!info]+ `num_of_zeros` - number of zeros
> Number of zeros for the vector to be padded with. Must be a scalar value, a natural number and must be greater than zero. Otherwise an error is thrown.

### load_music

Get sample rate and duration of audio file

#### Syntax

<pre><code>[sample_rate, duration] = load_music(path_to_wave_file)</code></pre>

#### Description

This function takes path to audio file and return the audio file's sample rate in Herz and duration in seconds. It then also plots the waveform of the file.

#### Examples

> [!example]+ Get sample rate and duration of audio file
> ```matlab
> [sample_rate, duration] = load_music("audio_files/czs/zv_cz.wav")
> ```
>
> Output:
> ```matlab
> sample_rate =
> 
>        16000
>
>duration =
>
>        2.8198
> ```

#### Input Arguments

> [!info]+ `path_to_wave_file` - path to the file to be loaded
> Must be a string, otherwise an error is thrown.

---

## [[./03 Základy zpracování signálu|Funkce z cvičení č.3]]

### generate_sine

Generate sinusoidal signal

#### Syntax

<pre><code>[t, y] = generate_sine(duration, A, phi, fs, f)</code></pre>

#### Description

This function takes signal duration, amplitude, initial phase, sample rate and signal frequency to generate a sinusoidal signal.

Returns signal timescale and sample data.

The function uses the following formula:

$$y_{\sin} [n] = A \cdot \sin (2 \pi f n T_s + \varphi)$$

For more information refer to [[./03 Základy zpracování signálu#Generování harmonických průběhů v Matlabu|relevant notes]].

#### Examples

> [!example]+ Generate sinusoidal signal
> ```matlab
> duration = 1;
> A = 1;
> phi = 0;
> fs_continuous = 192000;
> f = 10;
>
> [t_continuous, y_continuous] = generate_sine(duration, A, phi, fs_continuous, f);
> ```

#### Input Arguments

> [!info]+ `duration` - signal duration
> Duration of the signal in seconds.

> [!info]+ `A` - amplitude ($A$)
> Amplitude (maximum deviation) of the signal.

> [!info]+ `phi` - initial phase ($\varphi$)
> Initial phase of the signal in radians.

> [!info]+ `fs` - sample rate ($f_s$)
> Sampling frequency of the signal in Hertz.

> [!info]+ `f` - signal frequency ($f$)
> Frequency of the signal itself in Hertz.

### quantize_signal

Quantize a signal

#### Syntax

<pre><code>[y_quantized, quant_levels] = quantize_signal(x, B, quant_type)</code></pre>

#### Description

This function takes a signal to be quantized, bit depth and quantization type to be used and returns quantized signal together with quantization levels.

Two quantization types are supported:
- Mid-Rise
- Mid-Tread

#### Examples

> [!example]+ Quantize a signal a using Mid-Rise method
> ```matlab
> [y_midrise, ~] = quantize_signal(x_quant, bits, "mid_rise");
> ```

> [!example]+ Quantize a signal a using Mid-Tread method
> ```matlab
> [y_midtread, ~] = quantize_signal(x_quant, bits, "mid_tread");
> ```

#### Input Arguments

> [!info]+ `x` - input signal
> Signal before quantization.

> [!info]+ `B` - bit depth
> Finite number of quantization levels.

> [!info]+ `quant_type` - type of quantization
> Can be either `mid_rise` or `mid_tread`.

### calculate_sqnr

Calculate Signal to Quantization Noise Ratio

#### Syntax

<pre><code>sqnr = calculate_sqnr(signal, noise)</code></pre>

#### Description

This function takes a signal and quantization noise signal. It then calculates and returns Signal to Quantization Noise Ratio ($SQNR$) in decibels (dB).

The following formulae are used:

$$SQNR_{\text{dB}} = 10 \log \left( \frac{P_{\text{signal}}}{P_{\text{noise}}} \right)$$

$$P = \frac{1}{N} \sum^N_{n=1} x \left[ n \right]^2$$

Signal power $P$ is calculated using `mean` Matlab function.

#### Examples

> [!example]+ Calculate $SQNR_{\text{dB}}$
> ```matlab
> sqnr = calculate_sqnr(y_sine, noise)
> ```

#### Input Arguments

> [!info]+ `signal` - input signal
> Sampled input signal.

> [!info]+ `noise` - input noise signal
> Sampled quantization noise of the input signal.
