# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

also see [Releases](https://github.com/archco/scss-palette/releases) page.

## [Unreleased]

## [0.5.1] - 2018-03-04

### Changed

- Rename function name `brightness()` to `color-brightness()`. Because `brightness()` function using already in the [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) property.

## [0.5.0] - 2018-02-27

### Added

- Blues: `ice-blue`,  `delft-blue`, `duck-blue`, `crayola-navy-blue`, `peacoat`, `purple-navy`, `persian-indigo`, `star-command-blue` and `cadet`.
- Cyan: `turquoise-blue`.
- Green: `unt-green`, `green-earth`, `chartreuse-yellow`, `pear`, `spring-bud`, `pistachio`, `kombu-green`, `lime`, `caribbean-green` and `mint`.
- Indigo: `indigo-dye`.
- Orange: `butterscotch`.
- Purple: `pale-purple`, `amethyst` and `twilight-lavender`.
- Violet: `ultra-violet`.
- Yellow: `metallic-gold` and `golden-yellow`.

### Changed

- [**Important**] Changes case of color name to `kebab-case`. #19
- Rename `navy` to `navy-blue` in Blue.
- Rename `paleturquoise` to `light-turquoise` in Cyan.
- Rename `chartreuse` to `chartreuse-green` in Green.
- Rename `lime` to `x11-lime` in Green.
- Rename function name `color-lightness()` to `brightness()`. #16

### Deprecated

- `noir` in black is deprecated. use instead `outer-space`.
- `celtic-blue` in blue is deprecated. It's removed.
- `office-green` in green is deprecated. same as `green`.
- `shrek` in green is deprecated. same as `asparagus`.
- `color-wheel-orange` in orange is deprecated. same as `orange`.

### Removed

- Removes web-colors that not included in the color-topics. #21
- Removes deprecated colors. `desire`, `lust`, `ecru` and `tromboneyellow`. #18

## [0.4.1] - 2017-12-12

### Added

- Add functions "weaken()" and "strongen()". #14
- Add [documents](https://github.com/archco/scss-palette/blob/master/docs/README.md).

## [0.4.0] - 2017-10-29

### Added

- Add color topics: Indigo, Violet and Magenta. #13

### Changed

- Update colors. (414 -> 458 colors)

### Deprecated

- Red: `desire`, `lust`
- White: `ecru`
- Yellow: `tromboneyellow`

## [0.3.3] - 2017-06-21

### Added

- Publishing package to bower. #12

## [0.3.2] - 2017-04-30

### Changed

- Update colors. (396 -> 414 colors)

## [0.3.0] - 2017-04-19

### Changed

- Lint job on source files. #9
- Change function name to "hyphenated lowercase (kebab style)". #9

## [0.2.1] - 2017-03-28

### Added

- Added CHANGELOG.md file.
- Add "rgbaToRgb()" and "stripUnit()" to functions.scss #7

## [0.2.0] - 2017-02-22

### Changed

- Changed build tool to "npm-scripts".

[Unreleased]: https://github.com/archco/scss-palette/compare/v0.5.1...master
[0.5.1]: https://github.com/archco/scss-palette/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/archco/scss-palette/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/archco/scss-palette/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/archco/scss-palette/compare/v0.3.3...v0.4.0
[0.3.3]: https://github.com/archco/scss-palette/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/archco/scss-palette/compare/v0.3.0...v0.3.2
[0.3.0]: https://github.com/archco/scss-palette/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/archco/scss-palette/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/archco/scss-palette/compare/v0.1.3...v0.2.0
