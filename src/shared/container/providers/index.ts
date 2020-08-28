import { container } from 'tsyringe';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementarions/EtherealMailProvider';

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider(),
);
