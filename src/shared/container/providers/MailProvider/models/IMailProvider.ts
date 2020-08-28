export default interface IMailProvider {
  sendMail(data: any): Promise<void>;
}
