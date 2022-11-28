# unocss-preset-astro

This preset is a combination of [preset-uno](https://github.com/unocss/unocss/tree/main/packages/preset-uno) and [unocss-preset-extra](https://github.com/MoomFE/unocss-preset-extra) with colors from [AstroUXDS Design Tokens](https://github.com/RocketCommunicationsInc/astro-design-tokens)

__NOTE:__ The darkblue, brightblue, & grey color palettes were modified to go from 50, 100, 200, ... to 900 like tailwind's color palette.

[UnoCSS](https://github.com/unocss/unocss)

[![npm](https://img.shields.io/npm/v/unocss-preset-astro.svg)](https://www.npmjs.com/package/unocss-preset-astro)
[![Downloads](https://img.shields.io/npm/dm/unocss-preset-astro.svg)](https://www.npmjs.com/package/unocss-preset-astro)

<br>

## Rules

<details>
  <summary>size - `width` `height`</summary>
  <br>

```html
<div class="size-auto" />
<div class="size-full" />
<div class="min-size-1/2" />
<div class="min-size-xs" />
<div class="max-size-1" />
<div class="max-size-[1px]" />
```

will generate

```css
.size-auto { width: auto; height: auto }
.size-full { width: 100%; height: 100% }
.min-size-1\/2 { min-width: 50%; min-height: 50% }
.min-size-xs { min-width: 20rem; min-height: 20rem }
.max-size-1 { max-width: 0.25rem; max-height: 0.25rem }
.max-size-\[1px\] { max-width: 1px; max-height: 1px }
```

  <br>
</details>

<details>
  <summary>elevation - Vuetify</summary>
  <br>

>  1. `elevation` `el`
>  2. `shadow-`
>  3. `(el|elevation)-(op|opacity)-(0~100)` 或 `shadow-(op|opacity)-(0~100)`

```html
<div class="el-1" />
<div class="elevation-2" />
<div class="shadow-el-3" />
<div class="shadow-elevation-4" />
<div class="el-5 el-op-50" />
<div class="el-6 shadow-op-50" />
```

[Attributify Mode](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)

```html
<div el="1 op-50" />
<div elevation="1 op-50" />
<div shadow-elevation="1 op-50" />
```

  <br>
</details>

<details>
  <summary>animated - <a href="https://animate.style" target="_blank">animate.css</a></summary>
  <br>

```html
<div class="animated animated-bounce" />
<div class="animated animated-fade-in" />
<div class="animated animated-fade-out" />
<div class="animated animated-bounce animated-infinite" />
<div class="animated animated-bounce animated-repeat-6" /> 
<div class="animated animated-bounce animated-repeat-666" /> 

<div class="animated animated-bounce animated-delay-6" /> 
<div class="animated animated-bounce animated-delay-6s" /> 
<div class="animated animated-bounce animated-delay-6ms" /> 

<div class="animated animated-bounce animated-fast" /> 
<div class="animated animated-bounce animated-faster" /> 
<div class="animated animated-bounce animated-slow" /> 
<div class="animated animated-bounce animated-slower" />
<div class="animated animated-bounce animated-duration-6" /> 
<div class="animated animated-bounce animated-duration-6s" /> 
<div class="animated animated-bounce animated-duration-6ms" /> 
```

[Attributify Mode](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)

```html
<div animated="~ bounce infinite" />
<div animated="~ bounce faster delay-6s" />
```

</details>

<br>

## Install

```bash
npm install unocss-preset-astro -D
```

<br>

## Config

```js
// unocss.config.ts
import { defineConfig, presetAttributify } from 'unocss';
import { presetAstro } from 'unocss-preset-astro';

export default defineConfig({
  presets: [
    presetAstro(),
    presetAttributify(),
  ],
});
```

<br>

## License

unocss-preset-astro is licensed under a [MIT License](./LICENSE).
