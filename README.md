# Jogo da Vida

![image_game](https://github.com/thalessn/gameOfLife/blob/main/game.gif?raw=true)

Este jogo foi desenvolvido utilizando as bibliotecas [React](https://reactjs.org/) e [StyledComponents](https://styled-components.com/).


## História

O jogo da vida é um autómato celular desenvolvido pelo matemático britânico John Horton Conway em 1970.
O autor teve a intenção de reproduzir, através de regras simples, as alterações e mudanças em grupos de seres vivos, tendo aplicações em diversas áreas da ciência. Para conhecer um pouco mais sobre a história do jogo clique [aqui](https://pt.wikipedia.org/wiki/Jogo_da_vida).

#### Regras

As regras são simples:

1. Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
2. Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
3. Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.
4. Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.


### Como Jogar

#### - Demo Online

Inserir link

#### - Localmente

Clone o projeto em sua máquina, e execute o seguinte comando na pasta do projeto (Ao iniciar pela primeira vez para baixar as dependências):

```
 npm install
```

Para iniciar o projeto, execute o comando:

```
 npm start
```

Se caso você venha utilizar o gerenciador de Pacotes **Yarn**, basta alterar os comandos anteriores para:

```
 yarn
 yarn start
```

Ao executar os comandos acima, será aberto uma janela no navagador padrão com o link [http://localhost:3000](http://localhost:3000), onde o jogo poderá ser acessado.


### Créditos
 - Ben Awad, pelo css utilizado na grid, abordado em seu canal no [Youtube](https://www.youtube.com/watch?v=DvVt11mPuM0).

 - UIGradients, degradê [Cool Blues](https://uigradients.com/#CoolBlues) utilizando como background do Jogo.
    
