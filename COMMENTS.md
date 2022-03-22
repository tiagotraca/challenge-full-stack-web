# Decisão da arquitetura utilizada

Para essa este dsafio decidi pela arquitetura MVC que possui estrutura "mais simples".Essa decisão foi tomada pelo fato dessa arquitetura possuir caracteristcas interessantes para desafios rapidos como:

- Ser facil de implementar.
- Processo de desenvolvimento rapido.

Adicionar outros padrões arquiteturais podem melhorar a qualidade do codigo. Mas podem adicionar um pouco de verbosidade, tornado o desenvolvimento mais lento.

Também optei por utilizar sequelize para acelerar o desenvovimento do backend. E por fim dockerizei a o backend para facilitar o setup.

O front-end foi feito utilizando um projeto padrão do do vue cli.

# Lista de bibliotecas de terceiros utilizadas

## Front

- [axios](https://reactnavigation.org/) cliente HTTP.
- [vuetify](https://ramdajs.com/) ui lib.
- [vuex](https://ramdajs.com/) gerenciamento de estados.
- [vuelidate](https://ramdajs.com/) Para validar os formularios.

## Back

- [@sequelize/core](https://reactnavigation.org/) ORM baseado em promises.
- [cors](https://ramdajs.com/) é um pacote que fornece middleware para habilitar cors.
- [sequelize](https://ramdajs.com/) ORM baseado em promises.
- [nodemon](https://ramdajs.com/) para aplicar mudanças dinamicamente no código durante o desnvolvimento.
- [supertest](https://ramdajs.com/) Para testar as rotas.

# O que você melhoraria se tivesse mais tempo

- A arquitetura. Faria uma Clean Architecture pois ela favorece a reusabilidade e torna o codigo agnostico a tecnologia, em outras palavras seria mais facil trocar me ORM em caso de necessidade.

- Criaria mais testes para o backend, mais detalhados, criaria o ambiente de teste no docker.
- Poria mais pensamento na divião dos components no front.
- Melhoraria a organização do store no front.
- Poria mais pensamento no design do front.
- poderia ter menssagens mais precisa para erros.

# Quais requisitos obrigatórios que não foram entregues

- acredito que todos foram atendidos
