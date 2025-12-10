export class LogObserv {
  constructor(logClient, logFilePath) {
    this.client = logClient;
    this.logFilePath = logFilePath;
  }
    notify(message) {
    const channel = this.client.channels.cache.get(this.channelId);
    if (channel) {
      channel.send(message);
    }
}
}