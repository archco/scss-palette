# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

also see [Releases](https://github.com/archco/scss-palette/releases) page.

## [Unreleased]

### Added

#### Blue

- [Add sapphire colors](https://en.wikipedia.org/wiki/Sapphire_(color)): `sapphire`, `sapphire-blue`, `crayola-sapphire`, `bedazzled-blue`, `blue-sapphire`, `dark-sapphire`

#### Brown

- [Add beige colors](https://en.wikipedia.org/wiki/Beige): `cosmic-latte`, `unbleached-silk`, `tuscan`, `ecru`, `light-french-beige`, `french-beige`, `mode-beige`.
- [Add desert-sand colors](https://en.wikipedia.org/wiki/Desert_sand_(color)): `earth-yellow`, `sand`, `desert`, `sand-dune`, `field-drab`.
- [Add tan colors](https://en.wikipedia.org/wiki/Tan_(color)): `sandy-tan`, `tan-orange`, `windsor-tan`, `tuscan-tan`.
- [Add taupe colors](https://en.wikipedia.org/wiki/taupe): `light-taupe`, `mauve-taupe`,  `rose-taupe`, `sandy-taupe`, `taupe-gray`, `deep-taupe`, `taupe-brown`.
- [Add coffee colors](https://en.wikipedia.org/wiki/Coffee_(color)): `coffee`, `latte`, `black-coffee`(same as `cafe-noir`).

#### Cyan

- [Add air force blue colors](https://en.wikipedia.org/wiki/Air_Force_blue): `raf-blue`, `usaf-blue`, `usaf-academy-blue`, `aero`, `wild-blue-yonder`, `air-superiority-blue`, `blue-yonder`.
- [Add sky blue colors](https://en.wikipedia.org/wiki/Sky_blue): `sky-blue`, `light-sky-blue`, `vivid-sky-blue`, `neon-blue`, `deep-sky-blue`, `french-sky-blue`, `spanish-sky-blue`, `dark-sky-blue`.
- [Add cerulean colors](https://en.wikipedia.org/wiki/Cerulean): `cerulean-blue`, `pale-cerulean`, `bright-cerulean`, `cerulean-frost`.
- [Add electric blue colors](https://en.wikipedia.org/wiki/Electric_blue_(color)): `deep-electric-blue`, `iridescent-electric-blue`, `medium-electric-blue`, `dark-electric-blue`.

#### Gray

- Changed `dark-gray` to `dark-medium-gray`.
- [Add blue gary colors](https://en.wikipedia.org/wiki/Blue-gray): `iceberg`, `slate-blue`, `blue-bell`, `steel-blue`, `air-force-blue`, `shadow-blue`, `dark-blue-gray`, `roman-silver`, `rhythm`, `paynes-gray`.

#### Green

- [Add jungle green color](https://en.wikipedia.org/wiki/Jungle_green): `tropical-rainforest`, `amazon`, `deep-jungle-green`, `medium-jungle-green`, `dark-jungle-green`.
- Add spring green color: `magic-mint`, `cambridge-blue`, `mountain-meadow,` `zomp`.

#### Magenta

- Add color `garnet`.
- [Add red-violet colors](https://en.wikipedia.org/wiki/Red-violet): `kobi`,`pale-red-violet`,`violet-red`,`red-purple`,`blush`,`smitten`,`crayola-red-violet`,`fandango`,`flirt`,`jazzberry-jam`,`wine`,`eggplant`.

#### Orange

- Add color `safety-orange`, `aerospace-orange`, `golden-gate-bridge`, `syracuse-orange`.
- [Add vermilion colors](https://en.wikipedia.org/wiki/Vermilion): `red-orange`, `medium-vermilion`, `chinese-red`.

#### Pink

- [Add pink colors](https://en.wikipedia.org/wiki/Rose_(color)): `rose`, `tea-rose`, `rose-bonbon`, `french-rose`, `razzmatazz`, `fuchsia-rose`, `rose-red`, `dogwood-rose`, `raspberry-rose`, `china-rose`, `rose-vale`, `cordovan`, `rose-ebony`, `rosewood`.

#### Red

- [Add scarlet colors](https://en.wikipedia.org/wiki/Scarlet_(color)): `web-scarlet`, `crayola-scarlet`, `frame`, `boston-university-scarlet`.
- [Add ruby colors](https://en.wikipedia.org/wiki/Ruby_(color)): `rubine-red`, `ruber`, `crayola-ruby`, `ruby-red`, `big-dip-o-ruby`, `antique-ruby`, `deep-ruby`.
- [Add wine colors](https://en.wikipedia.org/wiki/Wine_(color)): `wine`, `claret`, `burgundy`, `wine-dregs`.

#### White

- Add color `parchment`, `alabaster`.

#### Yellow

- [Add lemon colors](https://en.wikipedia.org/wiki/Lemon_(color)): `lemon-meringue`, `luis-lemon`, `laser-lemon`(same as `unmellow-yellow`), `lemon-yellow`, `bitter-lemon`, `citron`, `lemon-curry`, `deep-lemon`.
- [Add gold colors](https://en.wikipedia.org/wiki/Gold_(color)): `old-gold`, `golden-poppy`, `pale-gold`, `sunglow`, `harvest-gold`, `vegas-gold`, `satin-sheen-gold`, `golden-brown`.

### Removed

- Removed `noir` in black. use instead `outer-space`.
- Removed `celtic-blue` in blue. It's removed.
- Removed `office-green` in green. same as `green`.
- Removed `shrek` in green. same as `asparagus`.
- Removed `color-wheel-orange` in orange. same as `orange`.

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
