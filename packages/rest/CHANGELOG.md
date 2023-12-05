# Changelog

## [19.0.0](https://github.com/MatthewSH/discordeno/compare/rest-v18.0.0...rest-v19.0.0) (2023-12-05)


### ⚠ BREAKING CHANGES

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195))
* **rest:** Update OAuth2 to use the Basic authentication ([#3150](https://github.com/MatthewSH/discordeno/issues/3150))
* **rest:** make invalid bucket lazy ([#2967](https://github.com/MatthewSH/discordeno/issues/2967))
* **rest:** improve `sendRequest` ([#2956](https://github.com/MatthewSH/discordeno/issues/2956))
* **rest:** move routes to their own creator function ([#2950](https://github.com/MatthewSH/discordeno/issues/2950))
* **rest:** remove falsy token check ([#2949](https://github.com/MatthewSH/discordeno/issues/2949))
* **rest, types:** support auditlog reason ([#2940](https://github.com/MatthewSH/discordeno/issues/2940))
* **bot,rest,types:** attachment sending ([#2917](https://github.com/MatthewSH/discordeno/issues/2917))
* **rest:** `improve RestManager.createRequest` ([#2906](https://github.com/MatthewSH/discordeno/issues/2906))

### Features

* all cjs export ([#3189](https://github.com/MatthewSH/discordeno/issues/3189)) ([1974834](https://github.com/MatthewSH/discordeno/commit/1974834b205b6f99d26c418cdb6ef6f843ba0c6b))
* api docs catchup part 1 ([#3257](https://github.com/MatthewSH/discordeno/issues/3257)) ([e47242a](https://github.com/MatthewSH/discordeno/commit/e47242a9e0ee9c173ad557f9c86b367143b8b721))
* **bot,rest,types:** Add support for guild onboarding ([#3260](https://github.com/MatthewSH/discordeno/issues/3260)) ([fb947f5](https://github.com/MatthewSH/discordeno/commit/fb947f5672e66c6ed0b71cbc2ada7f1281d753ae))
* **client,rest,types:** add `GetAuditLog.after` ([#2898](https://github.com/MatthewSH/discordeno/issues/2898)) ([a715140](https://github.com/MatthewSH/discordeno/commit/a715140df60c06e68ccc83af26fdff4b671991ab))
* Implement OAuth2 endpoints ([#3114](https://github.com/MatthewSH/discordeno/issues/3114)) ([a7d645e](https://github.com/MatthewSH/discordeno/commit/a7d645ec4b2b904a0cc70570aebb8158084b4dcf))
* rest header injection  ([#3122](https://github.com/MatthewSH/discordeno/issues/3122)) ([f3a568c](https://github.com/MatthewSH/discordeno/commit/f3a568c4db8603af684dabf6d415abc425025c3c))
* **rest:** add `isProxied` ([#2957](https://github.com/MatthewSH/discordeno/issues/2957)) ([7f9459b](https://github.com/MatthewSH/discordeno/commit/7f9459b4353a2357b4376b6bd0caf53ec64318c3))
* **rest:** easily enable or disable snake case ([73c9788](https://github.com/MatthewSH/discordeno/commit/73c97880656e30e814bb9d19a74cff515447015f))


### Bug Fixes

* add a file attachment test ([fbeec89](https://github.com/MatthewSH/discordeno/commit/fbeec8920cd90577e2585102208400e9527d7691))
* add authorization prop to rest for proxy ([103310a](https://github.com/MatthewSH/discordeno/commit/103310a8f4d7188aaf381cc98fabe20d1af7e0fa))
* apply the camelized types for docs improvements ([8bb91fa](https://github.com/MatthewSH/discordeno/commit/8bb91fa6f7ae783541c9275557e7b940076c3607))
* being in a loop is not a good sign ([b496f4c](https://github.com/MatthewSH/discordeno/commit/b496f4c1ac3f0942e4dca5f4fc3aaf1b4ea70c53))
* **bot,rest,types:** attachment sending ([#2917](https://github.com/MatthewSH/discordeno/issues/2917)) ([f5abd83](https://github.com/MatthewSH/discordeno/commit/f5abd83cc5b7fa50da5aa556b20f7b7f57853ec2))
* bug with rest manager passing a timestamp instead of milliseconds in setTimeout ([#3125](https://github.com/MatthewSH/discordeno/issues/3125)) ([f34c0c3](https://github.com/MatthewSH/discordeno/commit/f34c0c3bc03ec24b00730faacbd9a1069ce3d5e1))
* cjs extensions for require ([#3256](https://github.com/MatthewSH/discordeno/issues/3256)) ([e7d32e4](https://github.com/MatthewSH/discordeno/commit/e7d32e4be6222a63b220407f2e7530459370e735))
* createRestManager unit test bug ([5b2fcd1](https://github.com/MatthewSH/discordeno/commit/5b2fcd18a1e5ec908c0a15e65508f4d0b9a198f7))
* deploy to npm ([199af86](https://github.com/MatthewSH/discordeno/commit/199af86c4ec249b14621b83872ae71978a662e77))
* docs update Closes [#3054](https://github.com/MatthewSH/discordeno/issues/3054) ([db8c464](https://github.com/MatthewSH/discordeno/commit/db8c464081ff702d242e225fcf431d26aed25492))
* eslint no async error ([#2947](https://github.com/MatthewSH/discordeno/issues/2947)) ([5e1e561](https://github.com/MatthewSH/discordeno/commit/5e1e56146ee75ea04f2c644257f46a2ce04e6f15))
* esnodenext for swc ([b213c8b](https://github.com/MatthewSH/discordeno/commit/b213c8bf7547aa72a3617d7006b28f43e5d4e100))
* exit on rest e2e and more tests ([922b31b](https://github.com/MatthewSH/discordeno/commit/922b31b308ced7fc709e097db1796229e8be04a5))
* hack in helpers again ([#3008](https://github.com/MatthewSH/discordeno/issues/3008)) ([e54f51a](https://github.com/MatthewSH/discordeno/commit/e54f51a7afcd544c4af04000f5468d112d78a446))
* handle completed request marking behavior bug ([06f3c93](https://github.com/MatthewSH/discordeno/commit/06f3c9379057f420db63fa9213827ffc7c46b14c))
* interaction.edit type ([1d232ac](https://github.com/MatthewSH/discordeno/commit/1d232ac34aed677db3b6eff116fe3cfdd23c70cf))
* localization snake case bug ([5edfbb7](https://github.com/MatthewSH/discordeno/commit/5edfbb7efb74ddff24c830d8a92007bd21507d1b))
* more docs & remove logs for unit tests ([0a44962](https://github.com/MatthewSH/discordeno/commit/0a44962422eb55ebf9e081f97ba4f015f53baa5c))
* more props that need permission transforming ([#2804](https://github.com/MatthewSH/discordeno/issues/2804)) ([4bb34c9](https://github.com/MatthewSH/discordeno/commit/4bb34c9087e2ba1a2ad7c36212d958b595c9d93b))
* remove slash command test for now to fix tests ([#3102](https://github.com/MatthewSH/discordeno/issues/3102)) ([db2c400](https://github.com/MatthewSH/discordeno/commit/db2c4001b2445d6636576aca3672fc64b71bf63d))
* **rest, types:** support auditlog reason ([#2940](https://github.com/MatthewSH/discordeno/issues/2940)) ([17a52fe](https://github.com/MatthewSH/discordeno/commit/17a52fec1bb37fa2f9105ee4c495368cc6d1a568))
* **rest,utils:** reverse "refactor: use node-fetch" 6a6a334 ([#2995](https://github.com/MatthewSH/discordeno/issues/2995)) ([dda4d75](https://github.com/MatthewSH/discordeno/commit/dda4d75de1ff30ffe6579067b7d1d637a4b9a405))
* **rest:** `oauth2Application` route ([#3002](https://github.com/MatthewSH/discordeno/issues/3002)) ([e9c011e](https://github.com/MatthewSH/discordeno/commit/e9c011eef54aa3279c337d5ad53115764ff73461))
* **rest:** add missing files for editMessage ([#3087](https://github.com/MatthewSH/discordeno/issues/3087)) ([fe00a6f](https://github.com/MatthewSH/discordeno/commit/fe00a6f3e3981c9ee8ccdc521e36fc4ac5714fbb))
* **rest:** bug with trying to pass string values in calculateBits() if object is already in Discord format in changeToDiscordFormat() ([#3099](https://github.com/MatthewSH/discordeno/issues/3099)) ([0aeadbb](https://github.com/MatthewSH/discordeno/commit/0aeadbb27558d223c0631f854c982ad181a82d5a))
* **rest:** does not need to set the absolute url ([#2966](https://github.com/MatthewSH/discordeno/issues/2966)) ([e3549a8](https://github.com/MatthewSH/discordeno/commit/e3549a8675d62667b21012cbc1f69a397cd4b5ac))
* **rest:** only calculate bits if not undefined ([#3000](https://github.com/MatthewSH/discordeno/issues/3000)) ([8ee3b59](https://github.com/MatthewSH/discordeno/commit/8ee3b59d90fe326743fd425fe07ccfbf6bb0ae50))
* **rest:** set the correct auth header when using proxy ([#2969](https://github.com/MatthewSH/discordeno/issues/2969)) ([927ee42](https://github.com/MatthewSH/discordeno/commit/927ee42ce0def98cceaf40726129a9784c337883))
* **rest:** Update OAuth2 to use the Basic authentication ([#3150](https://github.com/MatthewSH/discordeno/issues/3150)) ([f98bb9b](https://github.com/MatthewSH/discordeno/commit/f98bb9bf75b78f56b5bb04859d1e25ce726e42d5))
* rework tests and add reaction tests ([f15ef49](https://github.com/MatthewSH/discordeno/commit/f15ef497a599884f5c78bee454d18e1823f903d9))
* some improvements to invalid bucket ([250f524](https://github.com/MatthewSH/discordeno/commit/250f52488516e9b19a74a383478cc78c68c0c283))
* test coverage change with few test ([147327b](https://github.com/MatthewSH/discordeno/commit/147327b239aefdc57ec45e903d3f0123257b1804))
* ts errors ([39bac9f](https://github.com/MatthewSH/discordeno/commit/39bac9fe0ec377cc3a9b85f5075f9b562b301f5f))
* type errors ([dc33b65](https://github.com/MatthewSH/discordeno/commit/dc33b65a352f2ed797b79e2e47ef1d837ca1cd2e))
* use esnext in swc ([e87a277](https://github.com/MatthewSH/discordeno/commit/e87a277de53a56e32598cd54bb267a9654c7196c))
* version static ([898578f](https://github.com/MatthewSH/discordeno/commit/898578f349c9a6fd148240d19255ebe066a20602))


### Performance Improvements

* **rest:** remove regex check from `RestManager.simplifyUrl` ([#2910](https://github.com/MatthewSH/discordeno/issues/2910)) ([d757773](https://github.com/MatthewSH/discordeno/commit/d757773e95c18d1e250ce194c7ae50d499d4025a))


### Miscellaneous Chores

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195)) ([a62f06c](https://github.com/MatthewSH/discordeno/commit/a62f06c3e8bc2f68fc6f4feaac13a54d9af01a8c))


### Code Refactoring

* **rest:** `improve RestManager.createRequest` ([#2906](https://github.com/MatthewSH/discordeno/issues/2906)) ([fdf0d53](https://github.com/MatthewSH/discordeno/commit/fdf0d53f9eb5cf32d0c6d8eae314890afadb446b))
* **rest:** improve `sendRequest` ([#2956](https://github.com/MatthewSH/discordeno/issues/2956)) ([50282f9](https://github.com/MatthewSH/discordeno/commit/50282f91901344dae5f0b7137887a33cc0bca04e))
* **rest:** make invalid bucket lazy ([#2967](https://github.com/MatthewSH/discordeno/issues/2967)) ([8c9c3d5](https://github.com/MatthewSH/discordeno/commit/8c9c3d53bf9ee2a8e9c6fc241a06ffb39f93459d))
* **rest:** move routes to their own creator function ([#2950](https://github.com/MatthewSH/discordeno/issues/2950)) ([fd357ae](https://github.com/MatthewSH/discordeno/commit/fd357aeace24c721d929c6b7b6304d89d5d94be1))
* **rest:** remove falsy token check ([#2949](https://github.com/MatthewSH/discordeno/issues/2949)) ([7c031df](https://github.com/MatthewSH/discordeno/commit/7c031df875c536b489c05e1ff2b5057da7a65751))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @discordeno/types bumped from 19.0.0-alpha.1 to 19.0.0
    * @discordeno/utils bumped from 19.0.0-alpha.1 to 19.0.0
