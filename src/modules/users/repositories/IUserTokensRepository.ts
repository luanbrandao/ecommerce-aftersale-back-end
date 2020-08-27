export default interface IUserTokensRepository {
  generate(id: string): Promise<any>;
  findByToken(token: string): Promise<any | undefined>;
}
