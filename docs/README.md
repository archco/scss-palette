# scss-palette

The color palette for SCSS.

## Concepts

This color palette package provides colors to help for SASS [Color & Theming]. The Colors refers to [Color Topics](#color-topics) such as [List of colors by shade] in wikipedia.

Also, It provides useful [Functions](#functions) in SCSS.

## [Color Topics](color-topics.md)

- [Achromatic colors](color-topics.md#achromatic-colors): black, white, gray.
- [Primary colors](color-topics.md#primary-colors): red, green, blue.
- [Secondary colors](color-topics.md#secondary-colors): yellow, cyan, magenta.
- [Tertiary colors](color-topics.md#tertiary-colors): orange, violet, purple.
- [Others](color-topics.md#others): brown, pink.

## [Functions](functions.md)

### Palette Functions

- [#palette](functions.md#palette): Get color from scss-palette.
- [#palette-mix](functions.md#palette-mix): Mix two palette colors.

### Color Functions

- [#color-lightness](functions.md#color-lightness): Custom `lightness()` function.
- [#get-contrast-color](functions.md#get-contrast-color): Get contrast color.
- [#rgba-to-rgb](functions.md#rgba-to-rgb): Convert RGBA color to RGB color.
- [#weaken](functions.md#weaken): Makes a color weaker. If color is light, then color to darker.
- [#strongen](functions.md#strongen): Makes a color stronger. If color is dark, then color to more darker.

### Helper Functions

- [#strip-unit](functions.md#strip-unit): Remove the unit of a length.

[Color & Theming]: http://sass-lang.com/styleguide/color
[List of colors by shade]: https://en.wikipedia.org/wiki/List_of_colors_by_shade
