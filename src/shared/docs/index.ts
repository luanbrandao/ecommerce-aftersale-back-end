import paths from './paths';
import schemas from './schemas';
import components from './components';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Api Ecommerce ',
    description: 'API desenvolvida por Luan Brandão utilizando NODE.js',
    version: '1.0.0',
    contact: {
      name: 'Luan Brandão',
      email: 'luanbrandao4@gmail.com',
      url: 'http://linkedin.com/in/lb4',
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    },
  },
  servers: [
    {
      url: '/',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'User',
      description: 'APIs relacionadas ao usuário',
    },
    {
      name: 'Favorites',
      description:
        'APIs relacionadas aos produtos salvos do usuário, **Precisa passar o AUTHORIZE no formato -> Bearer token_do_usuario**',
    },
  ],
  paths,
  schemas,
  components,
};
