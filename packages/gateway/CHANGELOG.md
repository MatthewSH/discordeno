# Changelog

## [19.0.0](https://github.com/MatthewSH/discordeno/compare/gateway-v18.0.0...gateway-v19.0.0) (2023-12-05)


### ⚠ BREAKING CHANGES

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195))
* **gateway:** Remove `guildMemberChunk` shard event ([#3151](https://github.com/MatthewSH/discordeno/issues/3151))

### Features

* all cjs export ([#3189](https://github.com/MatthewSH/discordeno/issues/3189)) ([1974834](https://github.com/MatthewSH/discordeno/commit/1974834b205b6f99d26c418cdb6ef6f843ba0c6b))
* allow for custom function to send the payload to shards ([#3149](https://github.com/MatthewSH/discordeno/issues/3149)) ([a8f9e5e](https://github.com/MatthewSH/discordeno/commit/a8f9e5ec1b887f40c8153e05ba6ffc4fd32ddd5c))
* gateway.preferSnakeCase ([eef8887](https://github.com/MatthewSH/discordeno/commit/eef8887bc394662981aa2643c71c94f00a380f24))


### Bug Fixes

* add logs and shard queue sorting ([3d12ce2](https://github.com/MatthewSH/discordeno/commit/3d12ce28530faf61c90867b920f4bec9ae45338e))
* broken nonce on large guild ids Closes [#3066](https://github.com/MatthewSH/discordeno/issues/3066) ([1c8442e](https://github.com/MatthewSH/discordeno/commit/1c8442eb39fd4785efbd45459753e50d28358f7f))
* chunk resolve bug ([b2f65c2](https://github.com/MatthewSH/discordeno/commit/b2f65c2accfcbbca413fe3b5885f53088afbfffc))
* cjs extensions for require ([#3256](https://github.com/MatthewSH/discordeno/issues/3256)) ([e7d32e4](https://github.com/MatthewSH/discordeno/commit/e7d32e4be6222a63b220407f2e7530459370e735))
* esnodenext for swc ([b213c8b](https://github.com/MatthewSH/discordeno/commit/b213c8bf7547aa72a3617d7006b28f43e5d4e100))
* **gateway:** fix deno detection for ws ([#3052](https://github.com/MatthewSH/discordeno/issues/3052)) ([c12472e](https://github.com/MatthewSH/discordeno/commit/c12472ea03218662a3030b8a0e0c4419a569ebec))
* **gateway:** lastShardId ([#3026](https://github.com/MatthewSH/discordeno/issues/3026)) ([a3e6551](https://github.com/MatthewSH/discordeno/commit/a3e6551f221611bc52f7bc835082a4021cb052ac))
* **gateway:** update deno detection ([#3092](https://github.com/MatthewSH/discordeno/issues/3092)) ([a911519](https://github.com/MatthewSH/discordeno/commit/a911519ed0376d1d9485fb1777f10fdc285c4bff))
* **gateway:** Use Deno's WebSocket ([#3030](https://github.com/MatthewSH/discordeno/issues/3030)) ([dcc121a](https://github.com/MatthewSH/discordeno/commit/dcc121af4699269a45d070600d31b96541990416))
* **gateway:** workerId calculation ([#3126](https://github.com/MatthewSH/discordeno/issues/3126)) ([bccbc73](https://github.com/MatthewSH/discordeno/commit/bccbc73f77b673ef3c1e11343919d2210ab22b6a))
* hack in helpers again ([#3008](https://github.com/MatthewSH/discordeno/issues/3008)) ([e54f51a](https://github.com/MatthewSH/discordeno/commit/e54f51a7afcd544c4af04000f5468d112d78a446))
* identify proper rate limits ([593ed9c](https://github.com/MatthewSH/discordeno/commit/593ed9c9861fac54bdddb885203fc0432090d418))
* identify requests need to go through leaky bucket ([b0c482b](https://github.com/MatthewSH/discordeno/commit/b0c482b88038e676cf2b510f775347d51a9a9d17))
* invalid sessions should identify through manager ([6ec631f](https://github.com/MatthewSH/discordeno/commit/6ec631f42b3a8e06fe61b9e137cb101ce5dcd8f0))
* linter ([580206a](https://github.com/MatthewSH/discordeno/commit/580206a6f501e6fbed52d47b61b1d2bcbba01052))
* new leaky bucket system ([bb85624](https://github.com/MatthewSH/discordeno/commit/bb85624842625331cb89a3db278340f2bc96e85e))
* prevent multiple heartbeats ([6ee061d](https://github.com/MatthewSH/discordeno/commit/6ee061d8745a270d79c382a41c68912dcbdadbfd))
* resuming url crap ([93f61ae](https://github.com/MatthewSH/discordeno/commit/93f61ae90fc8529ee1709de3a37db101ef99931b))
* use esnext in swc ([e87a277](https://github.com/MatthewSH/discordeno/commit/e87a277de53a56e32598cd54bb267a9654c7196c))
* use meisters brilliant worker id formula ([ae40e69](https://github.com/MatthewSH/discordeno/commit/ae40e69e99892e4964df45d8531d974aea07ddb4))
* version static ([898578f](https://github.com/MatthewSH/discordeno/commit/898578f349c9a6fd148240d19255ebe066a20602))


### Miscellaneous Chores

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195)) ([a62f06c](https://github.com/MatthewSH/discordeno/commit/a62f06c3e8bc2f68fc6f4feaac13a54d9af01a8c))


### Code Refactoring

* **gateway:** Remove `guildMemberChunk` shard event ([#3151](https://github.com/MatthewSH/discordeno/issues/3151)) ([c0615a2](https://github.com/MatthewSH/discordeno/commit/c0615a29839bcf59d40a22c82bfd24311b981917))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @discordeno/types bumped from 19.0.0-alpha.1 to 19.0.0
    * @discordeno/utils bumped from 19.0.0-alpha.1 to 19.0.0
