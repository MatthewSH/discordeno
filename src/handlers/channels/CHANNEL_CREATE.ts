import type { Channel } from "../../types/channels/channel.ts";
import type { DiscordGatewayPayload } from "../../types/gateway/gateway_payload.ts";
import { SnakeCasedPropertiesDeep } from "../../types/util.ts";

import { Bot } from "../../bot.ts";

export async function handleChannelCreate(bot: Bot, payload: SnakeCasedPropertiesDeep<DiscordGatewayPayload>) {
  const channel = bot.transformers.channel(bot, { channel: payload.d as SnakeCasedPropertiesDeep<Channel> });
  await bot.cache.channels.set(channel.id, channel);

  bot.events.channelCreate(bot, channel);
}
