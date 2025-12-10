export class EmailObserv {
  constructor(emailClient, emailAddress) {
    this.client = emailClient;
    this.emailAddress = emailAddress;
  }
    notify(message) {
    const channel = this.client.channels.cache.get(this.channelId);
    if (channel) {
      channel.send(message);
    }
}
}