# GitHub API - Searching users whit fetch

> Status do Projeto: concluído

>Link para o [Deploy](https://victoraamlima.github.io/perfil-gitHub/)

>Link para o [Repositório](https://github.com/victoraamlima/perfil-gitHub)

## Linguagens

- [HTML](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)

## Tópicos

- [Descrição do projeto](#descrição-do-projeto)

- [Implementação](#implementação)

- [Como rodar a aplicação](#como-rodar-a-aplicação)

## Descrição do projeto

Este projeto utiliza a API do GitHub para recuperar informações sobre um usuário no GitHub. Ao inserir o nome de usuário na caixa de pesquisa, as seguintes informações são exibidas:

- Nome de usuário
- Foto de perfil
- Bio
- Seguidores
- Seguindo

### Eventos

- Nome do repositório do evento
- Tipo de evento

### Repositórios

- Nome do repositório
- Número de Forks
- Número de Estrelas
- Número de visualizações
- Linguagem mais usada

## Implementação

Este projeto utiliza a API do GitHub para recuperar dados sobre o perfil, repositórios e eventos de um usuário. A solicitação à API é feita usando o método `fetch()` em JavaScript para consultar o endpoint da API do GitHub. Depois que os dados são recuperados, eles são analisados e exibidos na página da Web usando HTML e CSS.

Para recuperar as informações do perfil do usuário, é utilizado o endpoint `/users/{username}`. Esse endpoint retorna informações sobre o usuário, como o nome de usuário, foto de perfil e bio.

Para recuperar as informações do repositório do usuário, é utilizado o endpoint `/users/{username}/repos`. Esse endpoint retorna informações sobre os repositórios do usuário, como o nome do repositório, número de forks, número de estrelas, número de visualizações e a linguagem mais usada.

Para recuperar as informações de eventos do usuário, é utilizado o endpoint `/users/{username}/events`. Esse endpoint retorna informações sobre os eventos do usuário, como o nome do repositório do evento e o tipo de evento.

## Como rodar a aplicação

No terminal, clone o projeto:

```
git clone https://github.com/victoraamlima/perfil-gitHub.git
```

## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/62892816?v=4" width=115><br><sub>Victor Meireles</sub>](https://github.com/victoraamlima)
