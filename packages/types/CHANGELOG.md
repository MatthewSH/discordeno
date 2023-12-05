# Changelog

## [19.0.0](https://github.com/MatthewSH/discordeno/compare/types-v18.0.0...types-v19.0.0) (2023-12-05)


### ⚠ BREAKING CHANGES

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195))
* **rest:** Update OAuth2 to use the Basic authentication ([#3150](https://github.com/MatthewSH/discordeno/issues/3150))
* **types:** remove `PRIVATE_THREADS` guild feature ([#2974](https://github.com/MatthewSH/discordeno/issues/2974))
* **types:** update intents ([#2951](https://github.com/MatthewSH/discordeno/issues/2951))
* **rest, types:** support auditlog reason ([#2940](https://github.com/MatthewSH/discordeno/issues/2940))
* **types:** add guild expression & view monetization permissions ([#2934](https://github.com/MatthewSH/discordeno/issues/2934))
* **bot,rest,types:** attachment sending ([#2917](https://github.com/MatthewSH/discordeno/issues/2917))

### Features

* add message_author_id to Message Reaction Add event ([#3101](https://github.com/MatthewSH/discordeno/issues/3101)) ([6e231b5](https://github.com/MatthewSH/discordeno/commit/6e231b527697057ae3f3eda49165108881ad910c))
* add support for new username system ([#3035](https://github.com/MatthewSH/discordeno/issues/3035)) ([f9a5fc1](https://github.com/MatthewSH/discordeno/commit/f9a5fc1afe54a23185c250363649b414e605faae))
* all cjs export ([#3189](https://github.com/MatthewSH/discordeno/issues/3189)) ([1974834](https://github.com/MatthewSH/discordeno/commit/1974834b205b6f99d26c418cdb6ef6f843ba0c6b))
* api docs catchup part 1 ([#3257](https://github.com/MatthewSH/discordeno/issues/3257)) ([e47242a](https://github.com/MatthewSH/discordeno/commit/e47242a9e0ee9c173ad557f9c86b367143b8b721))
* **bot,client,types:** add role subscriptions ([#2899](https://github.com/MatthewSH/discordeno/issues/2899)) ([bfd1936](https://github.com/MatthewSH/discordeno/commit/bfd193658196b8b09a816a92ed7e5b46f6bbc932))
* **bot,rest,types:** Add support for guild onboarding ([#3260](https://github.com/MatthewSH/discordeno/issues/3260)) ([fb947f5](https://github.com/MatthewSH/discordeno/commit/fb947f5672e66c6ed0b71cbc2ada7f1281d753ae))
* **bot,types:** add `Channel.managed` ([#2897](https://github.com/MatthewSH/discordeno/issues/2897)) ([6d43ca1](https://github.com/MatthewSH/discordeno/commit/6d43ca11a763a874cd7a852afdd1d0891e42dd4a))
* **bot,types:** add `customMessage` to `AutoModerationActionMetadata` ([#2887](https://github.com/MatthewSH/discordeno/issues/2887)) ([9cfcc97](https://github.com/MatthewSH/discordeno/commit/9cfcc971cad612c8819ca9a22c6fd9be92d1013b))
* **bot,types:** add `customMessage` to `AutoModerationActionMetadata` ([#2887](https://github.com/MatthewSH/discordeno/issues/2887)) ([08c65e3](https://github.com/MatthewSH/discordeno/commit/08c65e3b11f5cebd156dcb5814461bea448705b7))
* **bot,types:** add `Guild.maxStageVideoChannelUsers` ([#2935](https://github.com/MatthewSH/discordeno/issues/2935)) ([bcfeb5b](https://github.com/MatthewSH/discordeno/commit/bcfeb5b6aee31883798a0fc83c11e419611a6ab2))
* **bot,types:** add missing automod trigger metadata ([#2973](https://github.com/MatthewSH/discordeno/issues/2973)) ([f249e58](https://github.com/MatthewSH/discordeno/commit/f249e58c68946b014a07780050245bb98afe41e4))
* **client,rest,types:** add `GetAuditLog.after` ([#2898](https://github.com/MatthewSH/discordeno/issues/2898)) ([a715140](https://github.com/MatthewSH/discordeno/commit/a715140df60c06e68ccc83af26fdff4b671991ab))
* **client,types:** add `FormLayout` enum ([#2900](https://github.com/MatthewSH/discordeno/issues/2900)) ([08fb3fc](https://github.com/MatthewSH/discordeno/commit/08fb3fc5b566c7dd6d0848f31b0471d46594e9f1))
* Implement OAuth2 endpoints ([#3114](https://github.com/MatthewSH/discordeno/issues/3114)) ([a7d645e](https://github.com/MatthewSH/discordeno/commit/a7d645ec4b2b904a0cc70570aebb8158084b4dcf))
* transformer user new style ([b5cca2e](https://github.com/MatthewSH/discordeno/commit/b5cca2e1c9259f1ae85f1dda8fbb72dd0b0cc1e8))
* **types:** add `ApplicationFlags.ApplicationAutoModerationRuleCreateBadge` ([#2921](https://github.com/MatthewSH/discordeno/issues/2921)) ([f6a9d96](https://github.com/MatthewSH/discordeno/commit/f6a9d96ab25c2b96fccc5e00e87e35bb8f5875c3))
* **types:** add guild expression & view monetization permissions ([#2934](https://github.com/MatthewSH/discordeno/issues/2934)) ([6890b34](https://github.com/MatthewSH/discordeno/commit/6890b34d845f0b4d360d7db75819c380abdf5a9f))


### Bug Fixes

* apply the camelized types for docs improvements ([8bb91fa](https://github.com/MatthewSH/discordeno/commit/8bb91fa6f7ae783541c9275557e7b940076c3607))
* **bot,rest,types:** attachment sending ([#2917](https://github.com/MatthewSH/discordeno/issues/2917)) ([f5abd83](https://github.com/MatthewSH/discordeno/commit/f5abd83cc5b7fa50da5aa556b20f7b7f57853ec2))
* docs update Closes [#3054](https://github.com/MatthewSH/discordeno/issues/3054) ([db8c464](https://github.com/MatthewSH/discordeno/commit/db8c464081ff702d242e225fcf431d26aed25492))
* **docs:** set ListGuildMembers options.limit default to 1 ([#3065](https://github.com/MatthewSH/discordeno/issues/3065)) ([3445211](https://github.com/MatthewSH/discordeno/commit/3445211091d77785879ef412bace7611173d91af))
* esnodenext for swc ([b213c8b](https://github.com/MatthewSH/discordeno/commit/b213c8bf7547aa72a3617d7006b28f43e5d4e100))
* export transformers na dhandler ([#2959](https://github.com/MatthewSH/discordeno/issues/2959)) ([04d7db8](https://github.com/MatthewSH/discordeno/commit/04d7db89a5eb1aa546b5316f63cd6f1bdceaf903))
* hack in helpers again ([#3008](https://github.com/MatthewSH/discordeno/issues/3008)) ([e54f51a](https://github.com/MatthewSH/discordeno/commit/e54f51a7afcd544c4af04000f5468d112d78a446))
* **rest, types:** support auditlog reason ([#2940](https://github.com/MatthewSH/discordeno/issues/2940)) ([17a52fe](https://github.com/MatthewSH/discordeno/commit/17a52fec1bb37fa2f9105ee4c495368cc6d1a568))
* **rest:** add missing files for editMessage ([#3087](https://github.com/MatthewSH/discordeno/issues/3087)) ([fe00a6f](https://github.com/MatthewSH/discordeno/commit/fe00a6f3e3981c9ee8ccdc521e36fc4ac5714fbb))
* **rest:** Update OAuth2 to use the Basic authentication ([#3150](https://github.com/MatthewSH/discordeno/issues/3150)) ([f98bb9b](https://github.com/MatthewSH/discordeno/commit/f98bb9bf75b78f56b5bb04859d1e25ce726e42d5))
* some work hacking docs fix ([a379022](https://github.com/MatthewSH/discordeno/commit/a379022d03f8aef24175f346009effd152e361ac))
* ts errors ([39bac9f](https://github.com/MatthewSH/discordeno/commit/39bac9fe0ec377cc3a9b85f5075f9b562b301f5f))
* **types:** `DiscordCreateApplicationCommand.description` is optional ([#2986](https://github.com/MatthewSH/discordeno/issues/2986)) ([dfb7f93](https://github.com/MatthewSH/discordeno/commit/dfb7f93dd8fdcbb393cb549c38c2d7ead392d326))
* **types:** change communicationDisabledUntil to string or null ([#3120](https://github.com/MatthewSH/discordeno/issues/3120)) ([e69d39c](https://github.com/MatthewSH/discordeno/commit/e69d39ce6a65f356678a526b8677db03b7481a40))
* **types:** MessageActivityTypes.JoinRequest ([#3007](https://github.com/MatthewSH/discordeno/issues/3007)) ([e70bfc3](https://github.com/MatthewSH/discordeno/commit/e70bfc3a814bf043cc53ccc13817ac226f6b9aa4))
* update message type with new types ([bb57e39](https://github.com/MatthewSH/discordeno/commit/bb57e39fed1d28dce7ec16a6f1b0a75180b9d184))
* update message type with new types ([a5a77de](https://github.com/MatthewSH/discordeno/commit/a5a77de2730037093165d7ff6d0fa3b6c46e85d9))
* use esnext in swc ([e87a277](https://github.com/MatthewSH/discordeno/commit/e87a277de53a56e32598cd54bb267a9654c7196c))
* use new website url ([b29fe1c](https://github.com/MatthewSH/discordeno/commit/b29fe1c11cc40ad72354e06cb386f73483ffb99a))
* version static ([898578f](https://github.com/MatthewSH/discordeno/commit/898578f349c9a6fd148240d19255ebe066a20602))
* **website:** move to new url ([#2914](https://github.com/MatthewSH/discordeno/issues/2914)) ([1093bef](https://github.com/MatthewSH/discordeno/commit/1093befcad305748ae2cedec33a610925cdac692))


### Documentation

* **types:** update intents ([#2951](https://github.com/MatthewSH/discordeno/issues/2951)) ([da74ea7](https://github.com/MatthewSH/discordeno/commit/da74ea7e55c1beda1d1b2b22a18d106c2586a291))


### Miscellaneous Chores

* **deps:** upgrade all deps to new major versions ([#3195](https://github.com/MatthewSH/discordeno/issues/3195)) ([a62f06c](https://github.com/MatthewSH/discordeno/commit/a62f06c3e8bc2f68fc6f4feaac13a54d9af01a8c))


### Code Refactoring

* **types:** remove `PRIVATE_THREADS` guild feature ([#2974](https://github.com/MatthewSH/discordeno/issues/2974)) ([60d1c2d](https://github.com/MatthewSH/discordeno/commit/60d1c2d3ebb69afc3eba44c6e8ea0815e86bbd52))
