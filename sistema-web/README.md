
## Pré-Requisitos

- NPM
- Node
- Yarn (pf não use NPM)

[Grande Tutorialzão para iniciar com Windows (não precisa criar outro projeto)](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329 "Grande Tutorialzão para iniciar com Windows (não precisa criar outro projeto)")

[Grande Tutorialzão para instalar no Linux  (tem que instalar o Yarn dps)](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/ "Grande Tutorialzão para instalar no Linux  (tem que instalar o Yarn dps)")

## Instalação

```bash
git clone https://github.com/lucca180/bd-ufrj.git
cd bd-ufrj
cd sistema-web
yarn
```
Se não houver ***yarn*** pode usar ***npm i*** mas eu vou ficar chateado :(

## Rodando Localmente

```bash
yarn start
```
Se não houver ***yarn*** pode usar ***npm start*** mas eu vou ficar chateado também :(

## Explicando minimamente as estruturas
**Primeiro, ignore tudo que está fora da pasta "/src"**

**Segundo, dentro da pasta "/src", ignore tudo que não está nas pastas "screens", "components" e "assets"**

- */assets* - pasta para colocar todas as imagens e outras mídias que o sistema web vai utilizar sem buscar da internet
- */components* - pasta com os componentes reutilizáveis (são tipo funções que geram elementos da interface)
- */screens* - pasta com as telas do sistema web propriamente dito.

Dentro de */components*  e */screens* há outras pastas e cada uma delas possui arquivos chamados **index.js** e **style.css**

- *index.js* - possui toda a logica e a programação do componente/tela.
- *style.css* - possui todas as regras de estilos em CSS da tela ou do componente.


## Alguns Guias de React / JS
- https://pt-br.reactjs.org/docs/introducing-jsx.html (e o resto da documentação)
- https://willianjusten.com.br/fundamentos-javascript-antes-de-aprender-react/
- https://tableless.com.br/criando-sua-primeira-aplicacao-web-com-react/
- https://braziljs.org/artigos/react-do-basico-ao-avancado-parte-1/

