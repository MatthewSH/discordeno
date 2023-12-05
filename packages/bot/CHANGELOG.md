# Changelog

## [19.0.0](https://github.com/MatthewSH/discordeno/compare/bot-v18.0.0...bot-v19.0.0) (2023-12-05)


### ⚠ BREAKING CHANGES

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195))
* **gateway:** Remove `guildMemberChunk` shard event ([#3151](https://github.com/MatthewSH/discordeno/issues/3151))
* **rest:** Update OAuth2 to use the Basic authentication ([#3150](https://github.com/MatthewSH/discordeno/issues/3150))
* **bot:** interaction.data.guildId is useless ([#2982](https://github.com/MatthewSH/discordeno/issues/2982))
* **bot:** rename `auditLogEntryCreate` to `guildAuditLogEntryCreate` ([#2952](https://github.com/MatthewSH/discordeno/issues/2952))
* **bot,rest,types:** attachment sending ([#2917](https://github.com/MatthewSH/discordeno/issues/2917))

### Features

* add message_author_id to Message Reaction Add event ([#3101](https://github.com/MatthewSH/discordeno/issues/3101)) ([6e231b5](https://github.com/MatthewSH/discordeno/commit/6e231b527697057ae3f3eda49165108881ad910c))
* add support for more customizers ([#3139](https://github.com/MatthewSH/discordeno/issues/3139)) ([832df16](https://github.com/MatthewSH/discordeno/commit/832df1697a86fd866fddc15e977a59e41880e100))
* add support for new username system ([#3035](https://github.com/MatthewSH/discordeno/issues/3035)) ([f9a5fc1](https://github.com/MatthewSH/discordeno/commit/f9a5fc1afe54a23185c250363649b414e605faae))
* added handlers and transformers to bot package ([#2843](https://github.com/MatthewSH/discordeno/issues/2843)) ([206bae4](https://github.com/MatthewSH/discordeno/commit/206bae473b970ffbe50ed3429489501518f87d2f))
* all cjs export ([#3189](https://github.com/MatthewSH/discordeno/issues/3189)) ([1974834](https://github.com/MatthewSH/discordeno/commit/1974834b205b6f99d26c418cdb6ef6f843ba0c6b))
* api docs catchup part 1 ([#3257](https://github.com/MatthewSH/discordeno/issues/3257)) ([e47242a](https://github.com/MatthewSH/discordeno/commit/e47242a9e0ee9c173ad557f9c86b367143b8b721))
* **bot,client,types:** add role subscriptions ([#2899](https://github.com/MatthewSH/discordeno/issues/2899)) ([bfd1936](https://github.com/MatthewSH/discordeno/commit/bfd193658196b8b09a816a92ed7e5b46f6bbc932))
* **bot,rest,types:** Add support for guild onboarding ([#3260](https://github.com/MatthewSH/discordeno/issues/3260)) ([fb947f5](https://github.com/MatthewSH/discordeno/commit/fb947f5672e66c6ed0b71cbc2ada7f1281d753ae))
* **bot,types:** add `Channel.managed` ([#2897](https://github.com/MatthewSH/discordeno/issues/2897)) ([6d43ca1](https://github.com/MatthewSH/discordeno/commit/6d43ca11a763a874cd7a852afdd1d0891e42dd4a))
* **bot,types:** add `customMessage` to `AutoModerationActionMetadata` ([#2887](https://github.com/MatthewSH/discordeno/issues/2887)) ([9cfcc97](https://github.com/MatthewSH/discordeno/commit/9cfcc971cad612c8819ca9a22c6fd9be92d1013b))
* **bot,types:** add `customMessage` to `AutoModerationActionMetadata` ([#2887](https://github.com/MatthewSH/discordeno/issues/2887)) ([08c65e3](https://github.com/MatthewSH/discordeno/commit/08c65e3b11f5cebd156dcb5814461bea448705b7))
* **bot,types:** add `Guild.maxStageVideoChannelUsers` ([#2935](https://github.com/MatthewSH/discordeno/issues/2935)) ([bcfeb5b](https://github.com/MatthewSH/discordeno/commit/bcfeb5b6aee31883798a0fc83c11e419611a6ab2))
* **bot,types:** add missing automod trigger metadata ([#2973](https://github.com/MatthewSH/discordeno/issues/2973)) ([f249e58](https://github.com/MatthewSH/discordeno/commit/f249e58c68946b014a07780050245bb98afe41e4))
* **bot:** add `Interaction.data.type` for Command interactions ([#2987](https://github.com/MatthewSH/discordeno/issues/2987)) ([da05901](https://github.com/MatthewSH/discordeno/commit/da0590120f19707c3fe936d397fb867e78e815ff))
* **bot:** Add guildUnavailable event, fixes [#3028](https://github.com/MatthewSH/discordeno/issues/3028) ([#3044](https://github.com/MatthewSH/discordeno/issues/3044)) ([0d08c57](https://github.com/MatthewSH/discordeno/commit/0d08c57d568b01be9952befdd4dd4ed873c06657))
* **bot:** add more helper functions to `BaseInteraction` ([#3018](https://github.com/MatthewSH/discordeno/issues/3018)) ([37aa419](https://github.com/MatthewSH/discordeno/commit/37aa4198c203c7e4a0631f32ea036d1341473520))
* **bot:** allow passing of `applicationId` ([#2954](https://github.com/MatthewSH/discordeno/issues/2954)) ([4384457](https://github.com/MatthewSH/discordeno/commit/43844571ccd82a5b08abc8414611a4a006c467c1))
* channel, member, role with new style ([a571431](https://github.com/MatthewSH/discordeno/commit/a571431cf6cf58a586f9abbf40b7abcd7827a942))
* i interaction.respond ([7b06df4](https://github.com/MatthewSH/discordeno/commit/7b06df4b1c1c315870e62419f8db5bfa4076c530))
* Implement OAuth2 endpoints ([#3114](https://github.com/MatthewSH/discordeno/issues/3114)) ([a7d645e](https://github.com/MatthewSH/discordeno/commit/a7d645ec4b2b904a0cc70570aebb8158084b4dcf))
* interaction transformer new style ([e318e44](https://github.com/MatthewSH/discordeno/commit/e318e44752a3763080f4220bb8c0a56867e2af15))
* only require one guild delete event ([#3194](https://github.com/MatthewSH/discordeno/issues/3194)) ([8b3bc4b](https://github.com/MatthewSH/discordeno/commit/8b3bc4bad77db1cd8228d50f730e8fb12bd03124))
* transformer user new style ([b5cca2e](https://github.com/MatthewSH/discordeno/commit/b5cca2e1c9259f1ae85f1dda8fbb72dd0b0cc1e8))


### Bug Fixes

* 'INVITE_DELETE' event now uses 'handleInviteDelete' (previously used 'handleInviteCreate')  ([#3064](https://github.com/MatthewSH/discordeno/issues/3064)) ([d0db342](https://github.com/MatthewSH/discordeno/commit/d0db3420f7e9b5ae7beab1e3132acb4a94d5f7f5))
* /bot imports in bot pkg ([f2b6590](https://github.com/MatthewSH/discordeno/commit/f2b6590a72133710526d407546c0d95cb1146a1f))
* add back auditlogentrycreate event ([4a6c6b2](https://github.com/MatthewSH/discordeno/commit/4a6c6b27d7fa2ccfd345b35ebb246e4fdf8c8c62))
* add option to enable all desire props ([ea9fca1](https://github.com/MatthewSH/discordeno/commit/ea9fca102a3ff2f36926f67969736e8ae33e1a28))
* added getActiveThreads return value transformer ([#3118](https://github.com/MatthewSH/discordeno/issues/3118)) ([ceb3d4d](https://github.com/MatthewSH/discordeno/commit/ceb3d4dbe2f8ea4e0bd570674da3f0e8b53438a9))
* applicationId supports strings. Closes [#3038](https://github.com/MatthewSH/discordeno/issues/3038) ([15fd5d1](https://github.com/MatthewSH/discordeno/commit/15fd5d123c87273d3092d4bdcd150c08614a9908))
* **bot,rest,types:** attachment sending ([#2917](https://github.com/MatthewSH/discordeno/issues/2917)) ([f5abd83](https://github.com/MatthewSH/discordeno/commit/f5abd83cc5b7fa50da5aa556b20f7b7f57853ec2))
* **bot:** bug with overriding lastShardId if it's not provided in createBot() options ([#3141](https://github.com/MatthewSH/discordeno/issues/3141)) ([45c878d](https://github.com/MatthewSH/discordeno/commit/45c878d39011cff1028cde93c555267c63deb889))
* **bot:** channel transformer bitrate prop ([#3100](https://github.com/MatthewSH/discordeno/issues/3100)) ([2d0f76e](https://github.com/MatthewSH/discordeno/commit/2d0f76ec5c4f60d56c594e88fa747d5e15821ea1))
* **bot:** channel transformer managed ([69d818c](https://github.com/MatthewSH/discordeno/commit/69d818cf84431204a8d5d2963bd4331b5e33daf5))
* **bot:** missing exports of types ([#3004](https://github.com/MatthewSH/discordeno/issues/3004)) ([85ea2d9](https://github.com/MatthewSH/discordeno/commit/85ea2d9b8c474ebddbaed7cca990d19c6826e80a))
* **bot:** properly handle thread list sync event ([#3116](https://github.com/MatthewSH/discordeno/issues/3116)) ([cd29c5f](https://github.com/MatthewSH/discordeno/commit/cd29c5f0b10f3340a287c2d9bd27c926576cbb6b))
* **bot:** rename `auditLogEntryCreate` to `guildAuditLogEntryCreate` ([#2952](https://github.com/MatthewSH/discordeno/issues/2952)) ([088fd12](https://github.com/MatthewSH/discordeno/commit/088fd12513f2d39d5f08acccb31dbba27a3a6955))
* **bot:** Transform hashes correctly ([#3091](https://github.com/MatthewSH/discordeno/issues/3091)) ([1424e55](https://github.com/MatthewSH/discordeno/commit/1424e5552bf46dcc0fc7317d29da15f4c6091d7d))
* channel create guild id was missing ([987728a](https://github.com/MatthewSH/discordeno/commit/987728ab782273a29a9e826698f918d9e7cbf530))
* channel.parentId ([e2d86ea](https://github.com/MatthewSH/discordeno/commit/e2d86ea644f5167eec91d8f7c97cc95ad060fc18))
* cjs extensions for require ([#3256](https://github.com/MatthewSH/discordeno/issues/3256)) ([e7d32e4](https://github.com/MatthewSH/discordeno/commit/e7d32e4be6222a63b220407f2e7530459370e735))
* deno ws fix ([c675b45](https://github.com/MatthewSH/discordeno/commit/c675b450c134bb7a36328a27d4175381894a9603))
* docs update Closes [#3054](https://github.com/MatthewSH/discordeno/issues/3054) ([db8c464](https://github.com/MatthewSH/discordeno/commit/db8c464081ff702d242e225fcf431d26aed25492))
* esnodenext for swc ([b213c8b](https://github.com/MatthewSH/discordeno/commit/b213c8bf7547aa72a3617d7006b28f43e5d4e100))
* events need id not full shard ([822bc7a](https://github.com/MatthewSH/discordeno/commit/822bc7a92140b80adc456d753c868ca47806ab50))
* export transformers na dhandler ([#2959](https://github.com/MatthewSH/discordeno/issues/2959)) ([04d7db8](https://github.com/MatthewSH/discordeno/commit/04d7db89a5eb1aa546b5316f63cd6f1bdceaf903))
* Fixed message transformers ([#3013](https://github.com/MatthewSH/discordeno/issues/3013)) ([be14210](https://github.com/MatthewSH/discordeno/commit/be142101e9c44c931b50f9f9ee36c5ca134dffa7))
* fmt/lint bugs ([edc47da](https://github.com/MatthewSH/discordeno/commit/edc47daf9d23e90055a20020dc57c4622986dcf9))
* **gateway:** Use Deno's WebSocket ([#3030](https://github.com/MatthewSH/discordeno/issues/3030)) ([dcc121a](https://github.com/MatthewSH/discordeno/commit/dcc121af4699269a45d070600d31b96541990416))
* guild object should accept thread channels Closes [#3024](https://github.com/MatthewSH/discordeno/issues/3024) ([9de1f66](https://github.com/MatthewSH/discordeno/commit/9de1f66bcad00bdefbf146a42e90b357d77502aa))
* hack in helpers again ([#3008](https://github.com/MatthewSH/discordeno/issues/3008)) ([e54f51a](https://github.com/MatthewSH/discordeno/commit/e54f51a7afcd544c4af04000f5468d112d78a446))
* interaction.edit type ([1d232ac](https://github.com/MatthewSH/discordeno/commit/1d232ac34aed677db3b6eff116fe3cfdd23c70cf))
* interaction.respond typing ([4dd7ca7](https://github.com/MatthewSH/discordeno/commit/4dd7ca71c51aa2f642328e21468d921cf4cdc905))
* linter errors ([8ed5aed](https://github.com/MatthewSH/discordeno/commit/8ed5aed3a341e6a2ee3424f799eb4c8042f80212))
* mark acknowledged when responding ([a6c5cc4](https://github.com/MatthewSH/discordeno/commit/a6c5cc4ca9ec1fca5c57ab396586ac21e2c13c17))
* missing helpers ([b044211](https://github.com/MatthewSH/discordeno/commit/b044211b2779fec5369a876bd9ec70076a834799))
* remove private thread ([32fe8b8](https://github.com/MatthewSH/discordeno/commit/32fe8b8d88a3305b2763101e627ed3abff144a25))
* **rest:** Update OAuth2 to use the Basic authentication ([#3150](https://github.com/MatthewSH/discordeno/issues/3150)) ([f98bb9b](https://github.com/MatthewSH/discordeno/commit/f98bb9bf75b78f56b5bb04859d1e25ce726e42d5))
* return type on bot utils ([610212a](https://github.com/MatthewSH/discordeno/commit/610212a567a2d2503e3715b59b736f9dd3172c2a))
* slight code improvement ([3e88d5c](https://github.com/MatthewSH/discordeno/commit/3e88d5c9564cea671e4a44bf75b2832096f363de))
* transformer customizers for channel, member, role, user ([e19eca5](https://github.com/MatthewSH/discordeno/commit/e19eca5e804eb80950072bda1f55c86c5958e1ee))
* **transformers:** message transformer using different style ([#2916](https://github.com/MatthewSH/discordeno/issues/2916)) ([dea9d1d](https://github.com/MatthewSH/discordeno/commit/dea9d1d1521fe45633ba3734a407f1314395e6a2))
* ts errors ([39bac9f](https://github.com/MatthewSH/discordeno/commit/39bac9fe0ec377cc3a9b85f5075f9b562b301f5f))
* type error in e2e bot ([eda9a75](https://github.com/MatthewSH/discordeno/commit/eda9a75318cbdfc25a5166f2eb86c4aa2973db56))
* use esnext in swc ([e87a277](https://github.com/MatthewSH/discordeno/commit/e87a277de53a56e32598cd54bb267a9654c7196c))
* version static ([898578f](https://github.com/MatthewSH/discordeno/commit/898578f349c9a6fd148240d19255ebe066a20602))
* void return bug ([6b5d872](https://github.com/MatthewSH/discordeno/commit/6b5d872ec4aa9d323cd98424497bb1d4177919e0))


### Miscellaneous Chores

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195)) ([a62f06c](https://github.com/MatthewSH/discordeno/commit/a62f06c3e8bc2f68fc6f4feaac13a54d9af01a8c))


### Code Refactoring

* **bot:** interaction.data.guildId is useless ([#2982](https://github.com/MatthewSH/discordeno/issues/2982)) ([40eaf17](https://github.com/MatthewSH/discordeno/commit/40eaf1757c8c711b076fce4e8427a5fcaf96b2d3))
* **gateway:** Remove `guildMemberChunk` shard event ([#3151](https://github.com/MatthewSH/discordeno/issues/3151)) ([c0615a2](https://github.com/MatthewSH/discordeno/commit/c0615a29839bcf59d40a22c82bfd24311b981917))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @discordeno/gateway bumped from 19.0.0-alpha.1 to 19.0.0
    * @discordeno/rest bumped from 19.0.0-alpha.1 to 19.0.0
    * @discordeno/types bumped from 19.0.0-alpha.1 to 19.0.0
    * @discordeno/utils bumped from 19.0.0-alpha.1 to 19.0.0
