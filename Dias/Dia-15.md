# Orientação a Objetos

## Conteúdo

- [Orientação a Objetos](#orientação-a-objetos)
  - [Conteúdo](#conteúdo)
    - [Compreendendo Orientação a Objetos](#compreendendo-orientação-a-objetos)
      - [Paradigmas da programação](#paradigmas-da-programação)
        - [Declarativo](#declarativo)
        - [Imperativo](#imperativo)
    - [Javascript orientada a objeto](#javascript-orientada-a-objeto)
      - [Protótipos](#protótipos)
      - [Classes](#classes)


### Compreendendo Orientação a Objetos
#### Paradigmas da programação
Os paradigmas são modelagens de escrita de código que podem ser aplicados a várias linguagens, desde que estas permitam. É possível ainda aplicar mais de um paradigma a uma mesma solução em uma linguagem previamente escolhida.

##### Declarativo
 Em que o programador meramente declara propriedades do resultado desejado, mas não como calculá-lo.

##### Imperativo
Em que o programador instrui a máquina como mudar seu estado. Nesse paradigma temos a orientada a objetos que é um modelo de análise, projeto e programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos'. Podemos ter quatro pilares que são:

- Herança: O objeto filho herda propriedades e métodos do objeto pai.
- Polimorfismo: Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.
- Encapsulamento: Cada classe tem propriedades e métodos independentes do restante  do código.
- Abstração: Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo.

### Javascript orientada a objeto
#### Protótipos
Todos os objetos Javascript herdam propriedades e métodos de um prototype.

#### Classes
Não existe classes em javascript nativamente. E sim, o Syntatic sugar que é uma sintaxe feita para facilitar a escrita. Todas as classes são objetos e a herança se dá por protótipos.

```javascript
class Meal{
  constructor (food){
    this.food = food
  }

  eat(){
    return ':)'
  }
}

```



