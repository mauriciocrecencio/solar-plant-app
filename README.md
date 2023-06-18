<h1 align="center">Welcome to Plant Data App 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/mauriciocrecencio/solar-plant-app#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/mauriciocrecencio/solar-plant-app/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/mauriciocrecencio/solar-plant-app/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/mauriciocrecencio/Plant Data App" />
  </a>
</p>

> Um aplicativo para você visualizar como está sua usina solar! ☀️🏭

Plant Data App fornece ao usuário uma forma muito agradável de visualizar as informações a respeito de uma Usina Solar.
De forma muito intuitiva e prática, o usuário tem acesso a informações importantes, como por exemplo:

- Minha Usina está gerando hoje?
- Visualizar dados de acordo com o período desejado.
- Como está a geração de CO2 diário/semanal/mensal/anual?
- A geração de energia está atingiu o esperado daquele período?

Para esse projeto, pude conhecer e trabalhar em conjunto com duas bibliotecas fantásticas, **Zustand** para gerenciamento de estado da aplicação e **React-Query** que nos fornece diversos Hooks para manusear dados vindo de uma API.

Falando de UI e UX, utilizei **styled-components** para lidar com os estilos e **react-native-chart-kit** (a qual nunca tinha utilizado antes) para os gráficos. Esta última é uma biblioteca bem completa e que se conhecer bem dela, poderá explorar muito bem seus componentes de gráficos que ela fornece e desenvolver algo bem customizável para sua aplicação.

## Futuras implementações

- Algum switch que permita o usuário definir qual tipo de gráfico ele gostaria de visualizar em específico naquele período (barras, pizza, linear)
- Opção de visualizar o valor exato gerado naquele ponto do gráfico.

## Dificuldades

A maior dificuldade nesse projeto foi na exibição do gráfico diário. A tela do celular tem uma largura menor, e por se tratar de 30 índices no eixo X, pensei em diversas ideias. A que eu gostaria de ter implementado, é um gráfico que pudesse rolar para os lados, porém, para essa primeira versão, preferi padronizar os gráficos e implementar esse componente Scrollable futuramente.

## Observações

- Talvez você ache estranho o mês de Maio de 2023 estar com a barra verde, indicando que naquele período foi gerado o kWh esperado. Porém, no retorno da API, o **expected** não está retornando a mesma quantidade do **generation**. Sei que isso deveria ser tratado em um projeto real, mas imagino que só foi um descuide da API para o teste.
- Em geral, tenho noção de que para um projeto real, muitas melhorias deveriam ser feitas, como: tipagem mais completa e robusta, maior cobertura de testes, componentes e uma aplicação mais resilientes, um padrão de commits e um fluxo de trabalho (git flow) e etc...

### 🏠 [Homepage](https://github.com/mauriciocrecencio/solar-plant-app)

## Install

Garanta que você tenha o Node instalado em sua máquina.

```sh
yarn install
```

## Usage

Como o projeto utiliza o Expo, basta rodar o comando abaixo e abrir algum dos emuladores no computador, ou scanear o QR Code com seu celular utilizando o aplicativo Expo Go.

```sh
yarn start
```

## Author

👤 **Mauricio Crecencio**

- Github: [@mauriciocrecencio](https://github.com/mauriciocrecencio)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/mauricio-crecencio\/](https://linkedin.com/in/https://www.linkedin.com/in/mauricio-crecencio/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mauriciocrecencio/solar-plant-app/issues). You can also take a look at the [contributing guide](https://github.com/mauriciocrecencio/solar-plant-app/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Mauricio Crecencio](https://github.com/mauriciocrecencio).<br />
This project is [MIT](https://github.com/mauriciocrecencio/solar-plant-app/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
