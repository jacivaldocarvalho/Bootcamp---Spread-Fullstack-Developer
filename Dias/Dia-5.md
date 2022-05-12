# Posicionando elementos com Flexbox em CSS

## Conteúdo

- [Posicionando elementos com Flexbox em CSS](#posicionando-elementos-com-flexbox-em-css)
	- [Conteúdo](#conteúdo)
	- [Introdução ao Flex Box](#introdução-ao-flex-box)
		- [Flex Container](#flex-container)
		- [Flex Item](#flex-item)
	- [Fundamentos do Flexbox (Parte 1)](#fundamentos-do-flexbox-parte-1)
		- [Display: flex](#display-flex)
		- [Flex-direction](#flex-direction)
		- [Flex-wrap](#flex-wrap)
		- [Flex-flow](#flex-flow)
		- [Justify Content](#justify-content)
		- [Align-items](#align-items)
		- [Align-content](#align-content)
	- [Fundamentos do Flexbox (Parte 2)](#fundamentos-do-flexbox-parte-2)
		- [Flex-grow](#flex-grow)
		- [Flex-basis](#flex-basis)
		- [flex-shrink](#flex-shrink)
	- [flex](#flex)
	- [Order](#order)
	- [Align-self](#align-self)


## Introdução ao Flex Box

Foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.

### Flex Container

É a tag que envolve os itens, será nela que iremos aplicar a propriedade **"display:flex"**. Transforma todos os seus itens filhos em flex itens.

  <p align="center">
 		<img src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg?raw=true" alt="flex container" width="60%" height="50%" />
  </p>

Propriedades relacionadas:
- **Display**: Inicializador do container;
- **Flex-direction**: Realiza o direcionamento dos itens;
- **Flex-wrap**: Aplica-se a quebra de linha;
- **Flex-flow**: Abreviação para o direction e o wrap;
- **Justify-content**: Alinha os itens do container de acordo com sua direção;
- **Align-items**: Alinha os itens de acordo com o eixo do container;
- **Align-content**: Alinha as linha de um container.

### Flex Item

São elementos filhos diretos do flex Container. E também podem se tornar Flex Container.

  <p align="center">
 		<img src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg?raw=true" alt="flex item" width="60%" height="50%" />
  </p>

Propriedades relacionadas:
- **Flex-grow**: Definie o fator de crescimento;
- **Flex-basis**: Define o fator inicial do item antes da distribuição do espaço restante dentro do container;
- **flex-shrink**: Define a capacidade de redução;
- **flex**: Abreviação das propriedades grow, basis e shrink;
- **order**: Ordem e distribuição das listagem dos itens;
- **align-self**: Alinhamento de um item especifico dentro de um container.
  
## Fundamentos do Flexbox (Parte 1)

### Display: flex
Define o elemento como um flex container, tornando os seus filhos flex-itens.

```css
/*Torna o elemento um flex container automaticamente transformando todos os seus filhos diretos em flex itens.*/
.flex {
	display: flex;
}
```

### Flex-direction

Define a direção dos flex itens. Por padrão ele é row (linha), por isso quando o display: flex; é adicionado, os elementos ficam em linha, um do lado do outro.

A mudança de row para column geralmente acontece quando estamos definindo os estilos em media queries para o mobile. Assim você garante que o conteúdo seja apresentado em coluna única.

```css
/* Os itens ficam em linha*/
.row{
	flex-direction: row;
}

/*Os itens ficam em linha reversa, ou seja 3, 2, 1.*/
.row-reverse {
	flex-direction: row-reverse;
}
/*Os itens ficam em uma única coluna, um embaixo do outro.*/
.column {
	flex-direction: column;
}
/*Os itens ficam em uma única coluna, um embaixo do outro, porém em ordem reversa: 3, 2 e 1.*/
.column-reverse {
	flex-direction: column-reverse;
}

```
### Flex-wrap
Define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

Essa é geralmente uma propriedade que é quase sempre definida como flex-wrap: wrap; Pois assim quando um dos flex itens atinge o limite do conteúdo, o último item passa para a coluna debaixo e assim por diante.

```css
/*Valor padrão, não permite a quebra de linha.*/
.nowrap {
	flex-wrap: nowrap;
}
/*Quebra a linha assim que um dos flex itens não puder mais ser compactado.*/
.wrap {
	flex-wrap: wrap;
}
/* Quebra a linha assim que um dos flex itens não puder mais ser compactado. A quebra é na direção contrária, ou seja para a linha acima.*/
.wrap-reverse {
	flex-wrap: wrap-reverse;
}

```

### Flex-flow
O flex-flow é um atalho para as propriedades flex-direction e flex-wrap. Você não verá muito o seu uso, pois geralmente quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap. E quando mudamos o flex-wrap para wrap, mantemos o padrão do flex-direction que é row.

```css
/*Coloca o conteúdo em linha e não permite a quebra de linha.*/
.row-nowrap {
	flex-flow: row nowrap;
}
/*Coloca o conteúdo em coluna e não permite a quebra de linha.*/
.column-nowrap {
	flex-flow: column nowrap;
}
/*Coloca o conteúdo em linha e permite a quebra de linha.*/
.row-wrap {
	flex-flow: row wrap;
}

```

### Justify Content

Alinha os itens flex no container de acordo com a direção. A propriedade só funciona se os itens atuais não ocuparem todo o container. Isso significa que ao definir flex: 1; ou algo similar nos itens, a propriedade não terá mais função

Excelente propriedade para ser usada em casos que você deseja alinhar um item na ponta esquerda e outro na direita, como em um simples header com marca e navegação.

```css
/*Alinha os itens ao início do container.*/
.flex-start {
	justify-content: flex-start;
}
/*Alinha os itens ao final do container.*/
.flex-end {
	justify-content: flex-end;
}
/*Alinha os itens ao centro do container.*/
.center {
	justify-content: center;
}
/*Cria um espaçamento igual entre os elementos. Mantendo o primeiro grudado no início e o último no final.*/
.space-between {
	justify-content: space-between;
}
/*Cria um espaçamento entre os elementos. Os espaçamentos do meio são duas vezes maiores que o inicial e final.*/
.space-around {
	justify-content: space-around;
}

```

### Align-items
O align-items alinha os flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas. Essa propriedade permite o tão sonhado alinhamento central no eixo vertical, algo que antes só era possível com diferentes hacks.

```css
/*Valor padrão, ele que faz com que os flex itens cresçam igualmente.*/
.stretch {
	align-items: stretch;
}
/*Alinha os itens ao início.*/
.flex-start {
	align-items: flex-start;
}
/*Alinha os itens ao final.*/
.flex-end {
	align-items: flex-end;
}
/*Alinha os itens ao centro.*/
.center {
	align-items: center;
}
/*Alinha os itens de acordo com a linha base da tipografia.*/
.baseline {
	align-items: baseline;
}

```
### Align-content
Alinha as linhas do container em relação ao eixo vertical. A propriedade só funciona se existir mais de uma linha de flex-itens. Para isso o flex-wrap precisa ser wrap. Além disso o efeito dela apenas será visualizado caso o container seja maior que a soma das linhas dos itens. Isso significa que se você não definir height para o container, a propriedade não influencia no layout.

```css
/*Valor padrão, ele que faz com que os flex itens cresçam igualmente na vertical.*/
.stretch {
	align-content: stretch;
}
/*Alinha todas as linhas de itens ao início.*/
.flex-start {
	align-content: flex-start;
}
/*Alinha todas as linhas de itens ao final.*/
.flex-end {
	align-content: flex-end;
}
/*Alinha todas as linhas de itens ao centro.*/
.center {
	align-content: center;
}
/*Cria um espaçamento igual entre as linhas. Mantendo a primeira grudada no topo e a última no bottom.*/
.space-between {
	align-content: space-between;
}
/*Cria um espaçamento entre as linhas. Os espaçamentos do meio são duas vezes maiores que o top e bottom.*/
.space-around {
	align-content: space-around;
}

```

## Fundamentos do Flexbox (Parte 2)

### Flex-grow
Define a habilidade de um flex item crescer. Por padrão o valor é zero, assim os flex itens ocupam um tamanho máximo relacionado o conteúdo interno deles ou ao width definido. Ao definir 1 para todos os Flex Itens, eles tentarão ter a mesma largura e vão ocupar 100% do container. Digo tentarão pois caso um elemento possua um conteúdo muito largo, ele irá respeitar o mesmo. Se você tiver uma linha com quatro itens, onde três são flex-grow: 1 e um flex-grow: 2, o flex-grow: 2 tentará ocupar 2 vezes mais espaço extra do que os outros elementos.

OBS: justify-content não funciona em items com flex-grow definido

```css
/* Os itens não se expandem para ocupar o container. */
.grow0 {
	flex-grow: 0;
}

/* Os itens se expandem igualmente para ocupar o container. Utilizando apenas o flex-grow, o crescimento é distribuído igualmente antes e depois do conteúdo de cada elemento. (pois por padrão o flex-basis é auto) */
.grow1 {
	flex-grow: 1;
}

/* Os itens se expandem duas vezes mais que aqueles com flex-grow: 1; */
.grow2 {
	flex-grow: 2;
}
```

### Flex-basis
Indica o tamanho inicial do flex item antes da distribuição do espaço restante. Quando definimos o flex-grow: 1; e possuímos auto no basis, o valor restante para ocupar o container é distribuído ao redor do conteúdo do flex-item.

```css
/* Esse é o padrão, ele faz com que a largura da base seja igual a do item. Se o item não tiver tamanho especificado, o tamanho será de acordo com o conteúdo.*/
flex-basis: auto;
/* Pode ser em %, em, px e etc.*/
flex-basis: unidade;
/* Se o grow for igual ou maior que 1, ele irá tentar manter todos os elementos com a mesma largura, independente do conteúdo (por isso 0 é o valor mais comum do flex-basis). Caso contrário o item terá a largura do seu conteúdo.*/
flex-basis: 0;

```
### flex-shrink
Define a capacidade de redução de tamanho do item.

```css
/*Valor padrão, permite que os itens tenham os seus tamanhos (seja esse tamanho definido a partir de width ou flex-basis) reduzidos para caber no container.*/
flex-shrink: 1;

/*Não permite a diminuição dos itens, assim um item com flex-basis: 300px; nunca diminuirá menos do que 300px, mesmo que o conteúdo não ocupe todo esse espaço.*/
flex-shrink: 0;

/*Um item com shrink: 3 diminuirá 3 vezes mais que um item com 1.*/
flex-shrink: número;
```

## flex
Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados. Para melhor consistência entre os browsers, é recomendado utilizar a propriedade flex ao invés de cada propriedade separada. No exemplo é possível ver as mesmas configurações do exemplo do flex-basis porém agora utilizando apenas a propriedade flex.

```css
/*Define flex-grow: 1; flex-shrink: 1; e flex-basis: 0; (em alguns browsers define como 0%, pois estes ignoram valores sem unidades, porém a função de 0 e 0% é a mesma.)*/
flex: 1;

/*Esse é o padrão, se você não definir nenhum valor de flex ou para as outras propriedades separadas, o normal será flex-grow: 0, flex-shrink: 1 e flex-basis: auto.*/
flex: 0 1 auto;

/*Define exatamente da mesma forma que o flex: 1; porém neste caso o flex-grow será de 2, o flex-shrink continuará 1 e o flex-basis 0.*/
flex: 2;

/*flex-grow: 3, flex-shrink: 2 e flex-basis: 300px;*/
flex: 3 2 300px;

```

## Order
Modifica a ordem dos flex itens. Sempre do menor para o maior, assim order: 1, aparece na frente de order: 5.

```css
/*Número para modificar a ordem padrão. Pode ser negativo.*/
order: número;

/*0 é o valor padrão e isso significa que a ordem dos itens será a ordem apresentada no HTML. Se você quiser colocar um item do meio da lista no início da mesma, sem modificar os demais, o ideal é utilizar um valor negativo para este item, já que todos os outros são 0.*/
order: 0;

```

## Align-self
O align-self serve para definirmos o alinhamento específico de um único flex item dentro do nosso container. Caso um valor seja atribuído, ele passara por cima do que for atribuído no align-items do container. Vale lembrar que o alinhamento acontece tanto em linha quanto em colunas. Por exemplo o flex-start quando os itens estão em linhas, alinha o item ao topo da sua linha. Quando em colunas, alinha o item ao início (esquerda) da coluna.

```css
/*Valor inicial padrão. Vai respeitar o que for definido pelo align-items no flex-container.*/
align-self: auto;

/*Alinha o item ao início.*/
align-self: flex-start;

/*Alinha o item ao final.*/
align-self: flex-end;

/*Alinha o item ao centro.*/
align-self: center;

/*Alinha o item a linha de base.*/
align-self: baseline;

/*Estica o item.*/
align-self: stretch;

```

