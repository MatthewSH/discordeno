# Changelog

## [19.0.0](https://github.com/MatthewSH/discordeno/compare/utils-v18.0.0...utils-v19.0.0) (2023-12-05)


### ⚠ BREAKING CHANGES

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195))
* **utils:** remove unused files utility ([#2945](https://github.com/MatthewSH/discordeno/issues/2945))

### Features

* add support for new username system ([#3035](https://github.com/MatthewSH/discordeno/issues/3035)) ([f9a5fc1](https://github.com/MatthewSH/discordeno/commit/f9a5fc1afe54a23185c250363649b414e605faae))
* all cjs export ([#3189](https://github.com/MatthewSH/discordeno/issues/3189)) ([1974834](https://github.com/MatthewSH/discordeno/commit/1974834b205b6f99d26c418cdb6ef6f843ba0c6b))
* api docs catchup part 1 ([#3257](https://github.com/MatthewSH/discordeno/issues/3257)) ([e47242a](https://github.com/MatthewSH/discordeno/commit/e47242a9e0ee9c173ad557f9c86b367143b8b721))
* commandOptionsParser util ([#2961](https://github.com/MatthewSH/discordeno/issues/2961)) ([f8afb94](https://github.com/MatthewSH/discordeno/commit/f8afb94aa0b8c29be00ead3465b2bb9e51f96a7f))
* Implement OAuth2 endpoints ([#3114](https://github.com/MatthewSH/discordeno/issues/3114)) ([a7d645e](https://github.com/MatthewSH/discordeno/commit/a7d645ec4b2b904a0cc70570aebb8158084b4dcf))
* **utils:** add embed builder ([#3145](https://github.com/MatthewSH/discordeno/issues/3145)) ([9f5e3ab](https://github.com/MatthewSH/discordeno/commit/9f5e3ab9ffa3a2731bb62eecdae6477b75551860))


### Bug Fixes

* /bot imports in bot pkg ([f2b6590](https://github.com/MatthewSH/discordeno/commit/f2b6590a72133710526d407546c0d95cb1146a1f))
* add logs and shard queue sorting ([3d12ce2](https://github.com/MatthewSH/discordeno/commit/3d12ce28530faf61c90867b920f4bec9ae45338e))
* client.connect() issues ([25ac315](https://github.com/MatthewSH/discordeno/commit/25ac315230af5b34493bf70aea572a1661b44e51))
* esnodenext for swc ([b213c8b](https://github.com/MatthewSH/discordeno/commit/b213c8bf7547aa72a3617d7006b28f43e5d4e100))
* finish bucket file coverage ([#2968](https://github.com/MatthewSH/discordeno/issues/2968)) ([3127531](https://github.com/MatthewSH/discordeno/commit/3127531a46fa7e755dd933c5efe40f9821b09557))
* identify proper rate limits ([593ed9c](https://github.com/MatthewSH/discordeno/commit/593ed9c9861fac54bdddb885203fc0432090d418))
* increase util test coverage ([7152bbe](https://github.com/MatthewSH/discordeno/commit/7152bbe9b28c5fb9ca152b39dcc72134da9fa881))
* linter ([580206a](https://github.com/MatthewSH/discordeno/commit/580206a6f501e6fbed52d47b61b1d2bcbba01052))
* logger weird bug ([2faeab1](https://github.com/MatthewSH/discordeno/commit/2faeab1a6caebf4a39298191cc2e867d48cf438e))
* more unit tests coverage for utils ([3b01ea1](https://github.com/MatthewSH/discordeno/commit/3b01ea12e63f9fb7180739bc1b23eeccdd4a0b0b))
* new leaky bucket system ([bb85624](https://github.com/MatthewSH/discordeno/commit/bb85624842625331cb89a3db278340f2bc96e85e))
* **rest,utils:** reverse "refactor: use node-fetch" 6a6a334 ([#2995](https://github.com/MatthewSH/discordeno/issues/2995)) ([dda4d75](https://github.com/MatthewSH/discordeno/commit/dda4d75de1ff30ffe6579067b7d1d637a4b9a405))
* some fixes to bucket ([848efd7](https://github.com/MatthewSH/discordeno/commit/848efd7b511f188220748bf21e64ec63c07d4394))
* ts errors ([39bac9f](https://github.com/MatthewSH/discordeno/commit/39bac9fe0ec377cc3a9b85f5075f9b562b301f5f))
* use esnext in swc ([e87a277](https://github.com/MatthewSH/discordeno/commit/e87a277de53a56e32598cd54bb267a9654c7196c))
* use new website url ([b29fe1c](https://github.com/MatthewSH/discordeno/commit/b29fe1c11cc40ad72354e06cb386f73483ffb99a))
* **utils:** Add missing export for interactions.ts ([#3123](https://github.com/MatthewSH/discordeno/issues/3123)) ([940ef8d](https://github.com/MatthewSH/discordeno/commit/940ef8dc3964a46a914dfe29f344b85fda2c2403))
* **utils:** leaky bucket slow refill test ([#2907](https://github.com/MatthewSH/discordeno/issues/2907)) ([4fe621e](https://github.com/MatthewSH/discordeno/commit/4fe621ef76f705e9030fb12e26f0130125db9d43))
* version static ([898578f](https://github.com/MatthewSH/discordeno/commit/898578f349c9a6fd148240d19255ebe066a20602))
* **website:** move to new url ([#2914](https://github.com/MatthewSH/discordeno/issues/2914)) ([1093bef](https://github.com/MatthewSH/discordeno/commit/1093befcad305748ae2cedec33a610925cdac692))


### Miscellaneous Chores

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195)) ([a62f06c](https://github.com/MatthewSH/discordeno/commit/a62f06c3e8bc2f68fc6f4feaac13a54d9af01a8c))


### Code Refactoring

* **utils:** remove unused files utility ([#2945](https://github.com/MatthewSH/discordeno/issues/2945)) ([66869ce](https://github.com/MatthewSH/discordeno/commit/66869ce00ba18439307bf638ff8922448c4dc7a9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @discordeno/types bumped from 19.0.0-alpha.1 to 19.0.0
