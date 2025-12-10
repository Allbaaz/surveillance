export class DiscordObserv {
  constructor(discordClient, channelId) {
    this.client = discordClient;
    this.channelId = channelId;
  }
    notify(message) {
    const channel = this.client.channels.cache.get(this.channelId);
    if (channel) {
      channel.send(message);
    }
}
}