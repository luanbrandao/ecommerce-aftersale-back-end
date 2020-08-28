import IMailProvider from '../models/IMailProvider';

// apenas anota que enviou
export default class FakeMailProviderIMailProvider implements IMailProvider {
  private messages: string[] = [];

  public async sendMail(message: string): Promise<void> {
    this.messages.push(message);
  }
}
