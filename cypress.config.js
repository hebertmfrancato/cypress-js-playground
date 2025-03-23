// Carregando o dotenv para ler o arquivo .env
require('dotenv').config();

module.exports = {
  e2e: {
    // Adicionando variáveis de ambiente no bloco e2e
    env: {
      CYPRESS_USERNAME: process.env.CYPRESS_USERNAME, // Carregar do arquivo .env
      CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD, // Carregar do arquivo .env
    },
    setupNodeEvents(on, config) {
      // Se necessário, implemente listeners de eventos aqui
      return config;
    },
    baseUrl: 'https://playground.cyskills.com.br',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
};
