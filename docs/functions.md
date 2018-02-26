# Functions

## Palette Functions

### palette

Get color from scss-palette.

- Syntax
  ``` scss
  $color: palette($name, $default: null);
  ```
- Param `String` $name - color name
- Param `Color` $default - fallback color
- Return `Color`

### palette-mix

Mix two palette colors.

- Syntax
  ``` scss
  $color: palette-mix($name1, $name2, $weight: 50%);
  ```
- Param `String` $name1
- Param `String` $name2
- Param `Number` $weight - $name1 <- 0 ~ 100% -> $name2
- Return `Color`

## Color Functions

### color-lightness

Custom `lightness()` function. see [color-contrast](https://www.w3.org/TR/AERT#color-contrast)

- Syntax
  ``` scss
  $number: color-lightness($color);
  ```
- Param `Color` $color
- Return `Number` 0~255

### get-contrast-color

Get contrast color.

- Syntax
  ``` scss
  $color: get-contrast-color($color, $dark: #000, $light: #fff);
  ```
- Param `Color` $color
- Param `Color` $dark - Returns this color if contrast color is dark.
- Param `Color` $light - Return this color if contrast color is light.
- Return `Color` $dark|$light

### rgba-to-rgb

Convert RGBA color to RGB color.

- Syntax
  ``` scss
  $color: rgba-to-rgb($rgba, $base: #fff);
  ```
- Param `Color` $rgba - RGBA color.
- Param `Color` $base - Base background-color.
- Return `Color` RGB color.

### weaken

Makes a color weaker. If color is light, then color to darker.

- Syntax
  ``` scss
  $color: weaken($color, $amount);
  ```
- Param `Color` $color
- Param `Number` $amount - 0%-100%
- Return `Color`

### strongen

Makes a color stronger. If color is dark, then color to more darker.

- Syntax
  ``` scss
  $color: strongen($color, $amount);
  ```
- Param `Color` $color
- Param `Number` $amount - 0%-100%
- Return `Color`

## Helper Functions

### strip-unit

Remove the unit of a length.

- Syntax
  ``` scss
  $number: strip-unit($number);
  ```
- Param `Number` $number - Number to remove unit from.
- Return `Number` Unitless number.
