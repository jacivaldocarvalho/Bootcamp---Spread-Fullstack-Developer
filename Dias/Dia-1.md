# Introdução à lógica e à programação
*******

## Sumário
*******

[Entendendo o que é lógica](#entendendo-o-que-é-lógica)
[O que são algoritmos e pseudocódigo](#o-que-são-algoritmos-e-pseudocódigo)
[Fluxograma, variáveis e constantes](#fluxograma-váriaveis-e-constantes)
[Tomadas de decisão e expressões](#tomadas-de-decisão-e-expressões)
[Como utilizar concatenação](#como-utilizar-concatenação)
[Estrutura de repetição](#estrutura-de-repetição)
[O que são linguagens de programação](#o-que-são-linguagens-de-programação)
[Portugol](#portugol)
[Desvios condicionais e comentários no portugol](#desvios-condicionais-e-comentários-no-portugol)
[Laços de repetição no portugol](#laços-de-repetição-no-portugol)
[Matrizes e vetores](#matrizes-e-vetores)


## Entendendo o que é lógica:
*******
Programar é resolver problemas através de código. Entender o problema antes de programar.

- Lógica: Coerência de racicocínio de ideias. Sequência coerente, regular e necessária de acontecimentos de coisas.

- Lógica de programação: Significa apenas contextualizar a lógica na programação de computadores, visando a melhor sequ~ecnia de ações para solucionar um problema.

- Metacognição: Pensar como você pensa. É a habilidade de refletir sobre uma determinada tarefa (ler, calcular, pensar, tomar uma decisão) e sozinho selecionar e usar o melhor método para resolver essa tarefa.

- Abstração: É a habilidade de concentrar nos aspectos essenciais de um contexto qualquer, ignorando características menos importantes ou acidentais. Uma boa abstração denota um bom programador.

Importante!! realizar um mapa mental das melhores maneiras para resolver um problema.

*******
## O que são algoritmos e pseudocódigo:
*******
- Algoritmo: É uma sequência de passos que resolve um problema.

    Exemplo:

    ```
    Início-dia
        Acordei
        Levantei da cama
        Coloquei uma roupa
        Escovei os dentes
        Tomei Café
        Fui ao trabalho
    Fim-dia
    ```

    Dica: Site para iniciar treinamento em algoritmos: [studio code]

- Pseudocódigo: É uma forma genérica de escrever um algoritmo, utilizando uma linguagem simples (nativa, ou seja, em português a quem o escreve, de forma a ser entendida por qualquer pessoa).

*******
## Fluxograma, váriaveis e constantes
*******
- Fluxograma: É uma ferramenta utilizada para representar graficamente o algoritmo, ou seja, a sequência lógica e coerente do fluxo de dados.

    Exemplo:

	<p align="center">
 		<img src="figuras/fig_fluxograma.png?raw=true" alt="fluxograma" width="100%" height="70%" />
	</p>

    Exemplos de sites para criar fluxogramas:

    [diagrams]: diagrams.net/draw.io é uma pilha de tecnologia de código aberto para criar aplicativos de diagramação e o software de diagramação de usuário final baseado em navegador mais usado no mundo.
    [flowgorithm]: Flowgorithm é uma linguagem de programação gratuita para iniciantes baseada em fluxogramas gráficos simples.

- Varáveis: Uma variável é um objeto (uma posição, frequente lozalizada na memória) capaz de reter e representar um valor ou expressão.
  
    Tipos de variáveis:
    - Númericas;
    - Caracteres;
    - Alfanúmericas ou lógicas.

- Constantes: São valores imutáveis e não são alterados durante a vida útil do programa.
  
*******
## Tomadas de decisão e expressões
*******
- Expressões aritméticas: São expressões que utilizam operadores aritméticos e funções aritméticas envolvendo constantes e variáveis.

    Operadores aritméticos:

    | Operação  | Simbolo |
    | ------------- | - |
    | Soma          | + |
    | Subtração     | - |
    | Multiplicação | * |
    | Divisão       | / |
    | Potenciação   | ^ |
    | Porcentagem   | % |

- Expressões literais: São expressões com constantes e/ou variáveis  que tem como resultado valores literais. Iremos utilizar as expressões literais na atribuição de valor para uma variável ou constante.

    Exemplo:

    ```
    nome = "Jacivaldo Carvalho"
    media = (nota_1 + nota_2)/2

    ```
    Podemos observar que o nome recebe uma atribuição com nome "Jacivaldo Carvalho", e media recebe a média (operação) de uma expressão matemática.

- Operadores relacionais: São compostas por outras expressões ou variáveis numéricas com operadores relacionais. As expressões relacionais retornam valores lógicos (verdadeiro/falso).

    | Simbolo | Nome do Operador |     Exemplo  |       Significado         |
    | --------| ---------------- | ------------ | ------------------------- |
    |    >    |     Maior que    |     x > y    | x é maior que y?          | 
    |    >=   |   Maior ou igual |     x > =y   | x é maior ou igual a y?   | 
    |    <    |     Menor que    |     x < y    | x é menor que y?          |
    |    <=   |   Menor ou igual |     x<= y   | x é menor ou igual a y?    |  
    |    ==   |      Igualdade   |     x == y   | x é igual a y?            |
    |    !=   |   Diferente de   |     x != y   | x é diferente de y?       |  

- Tomadas de decisão: Quando escrevemos programas, geralmente ocorre a necessidade de decidir o que fazer dependendo de alguma condição encontrada durante a execução.
  
    Exemplo:
	<p align="center">
 		<img src="figuras/fig_tomada_decisao.png?raw=true" alt="fluxograma tomada de decisão" width="1000%" height="70%" />
	</p>


    Neste exemplo, podemos observar a tomada de decisão quando o cliente informa se tem ou não cartão, em caso de haver um cartão para compra, há uma sentença verdadeira, caso não, é exibido uma mensagem "Infelizmente só realizamos vendas por cartão de crédito".

*******
## Como utilizar concatenação
*******
Concatenação é um termo usado em computação para designar a operação de unir o conteúdo de duas strings, onde string é uma sequência de caracteres.

*******
## Estrutura de repetição
*******
Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

Exemplo:

<p align="center">
 		<img src="figuras/fig_estrutura_de_repeticao.png?raw=true" alt="fluxograma estrutura de repetição" width="100%" height="70%" />
</p>




Nesse exemplo, temos uma estrutura de repetição que simula um contador com intervalo de 1 (número) a 10 (limite), onde enquanto o número <= limite a  expressão é verdadeira, e é incrementado para o próximo valor através de número = número + 1.

*******
## O que são linguagens de programação
*******

É uma linguagem escrita e formal que especifica um conjunto de instruções e regras usadas para gerar programas (software). Um software pode ser desenvolvido para rodar em um computador, dispositivo móvel ou em qualquer equipamento que permite sua execução.

A função das linguagens de programação é servir de um meio de comunicação entre computadores e humanos.

Tipos de linguagens:

  - Alto nível: Essas são aquelas cuja sintaxe se aproxima mais da nossa linguagem e se distanciam mais da linguagem de máquina. Exemplo: C, Java, Python, dentre outros.
  
  - Baixo nível: É aquela que se aproxima mais da linguagem de máquina. Essas são as que você precisa ter o conhecimento direto da arquitetura do computador para fazer alguma coisa. Exemplo: Assembly.

- Compiladas: É uma linguagem de programação em que o código fonte é executado diretamente pelo sistema operacional ou pelo processador, após ser traduzido por meio de um processo chamado compilação. Exemplos: C, C#, Delphi, dentre outros.
   
- Interpretadas: É uma linguagem de programação em que o código fonte é executado por um programa de computador chamado interpretador que em seguida é executado pelo sistema operacional ou processador. Exemplos: Java Script, PHP, dentre outros.
*******
## Portugol
*******
Portugol é uma pseudolinguagem que permite ao leitor desenvolver algoritmos estruturados em português de forma simples e intuitiva, independentemente de linguagem de programação.

Exemplo de IDE para aprender portugol é o [portugol studio] ou [portugol studio versão web] que ajuda a dominar lógica de programação.

Exemplo de pseudolinguagem em portugol.

```
programa{
    funcao inicio(){
        escreva("Olá Mundo")
    }
}
```
Outro exemplo que calcula a média e o total de vendas de um funcionário do período de Janeiro a Abril:

```
programa {
	funcao inicio() {
		real venda_jan, venda_fev, venda_mar, venda_abr, total, media
		cadeia vendedor
		
		escreva("Digite o nome do vendedor:")
		leia(vendedor)
		
		escreva("Digite a venda de Janeiro:")
		leia(venda_jan)
		escreva("Digite a venda de Fevereiro:")
		leia(venda_fev)
		escreva("Digite a venda de Março:")
		leia(venda_mar)
		escreva("Digite a venda de Abril:")
		leia(venda_abr)
		
		total = venda_jan + venda_fev + venda_mar + venda_abr
		
		media = total/4
		
		escreva("O vendedor " +vendedor+ " obteve uma média de vendas de janeiro a abril de R$ " +media+ " de um total de R$" +total )
	}
}
```
*******
## Desvios condicionais e comentários no portugol
*******
Esxiste uma palavra reservada em portugol que é o **se**, a condição a ser testada entre parenteses e as instruções que devem ser executadas entre chaves caso o desvio seja **verdadeiro**. Agora se a condição for **falsa** um outro conjunto de comandos deve ser executado, nesse caso, o **se-nao**.

No exemplo a seguir temos desvios que verificam se um aluno foi aprovado ou reprovado. Também temos a inserção de // que denota um comentário em portugol.

```
// Desvio para verificar se o aluno é aprovado ou não.

// Se maior que 7, aluno aprovado.
se(media>=7){
    escreva("Parabéns!! Você foi aprovado!!!")
}

// Se menor que 7, aluno reprovado.
senao{
    ecreva("Infelizmente você foi reprovado!")
}
```
Pode-se também realizar um conjunto de condições **se**, onde o programa solicita uma opção do usuário e retorna a escolha do mesmo. Nota que utilizamos o \n para quebrar uma linha durante a execução do programa.

```
programa {
	funcao inicio() {
		escreva(" Escolha um APP: 1-Netflix 2-AmazonPrime 3-HBOGO 4-Sair")
		inteiro menu = 0
		
		escreva("\nSua opção:")
		leia (menu)
		
		se (menu == 1){
		    escreva("Ok!! Abrir Netflix")
		}
		
		se (menu == 2){
		    escreva("Ok!! Abrir Amazo Prime")
		}
		
		se (menu == 3){
		    escreva("Ok!! Abrir HBO GO")
		}
		
		se (menu == 4){
		    escreva("Saindo do menu ... ")
		}
	}
}

```
Outra opção para o exemplo anterior é utilizar o **caso** que é uma forma mais elegante e recomendável nesses casos.

```
programa {
	funcao inicio() {
		escreva(" Escolha um APP: 1-Netflix 2-AmazonPrime 3-HBOGO 4-Sair")
		inteiro menu = 0
		
		escreva("\nEscolha sua opção:")
		leia (menu)
		
		escolha (menu){
		    caso 1: // testa se o valor é igual a 1
		    escreva("Ok!! Abrir Netflix")
		    pare
		    
		    caso 2: // testa se o valor é igual a 2
		    escreva("Ok!! Abrir Amazo Prime")
		    pare
		    
		    caso 3: // testa se o valor é igual a 3
		    escreva("Ok!! Abrir HBO GO")
		    pare
		    
		    caso 4: // testa se o valor é igual a 4
		    escreva("Saindo do menu ... ")
		    
		    caso contrario:
		    escreva("Você deve escolher as opções de 1 a 4 ...")
		}
		
	}
}
```
*******
## Laços de repetição no portugol
*******
Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

O exemplo a seguir utiliza o laço de repetição **faca** do portugol enquanto a condição é atendida em **enquanto**.

```
programa {
	funcao inicio() {
		
		inteiro contador,limite,tabuada,resultado
		
		// inicializa as variáveis.
		contador = 0
		limite = 10
		tabuada = 0
		
		escreva ("Digite a tabuada que deseja calcula:")
		leia(tabuada)
		
		faca{
		    
		    resultado = tabuada*contador
		    escreva(tabuada + " x " + contador + " = " +resultado+ "\n")
		    
		    contador = contador + 1 // ou contador ++
		    
		}enquanto(contador <= limite)
		
	}
}
```
*******
## Matrizes e vetores
*******
Uma matriz é uma coleção de variáveis de mesmo tipo, acessíveis com um único nome e armazenados contiguamente na memória. A individualização de cada variável de um vetor é feita através de uso de índices. Os vetores são matrizes de uma só dimensão.

No primeiro exemplo, temos um código com um vetor unidimensional onde imprime na tela o vetor frutas emq ue cada índice é atribuido uma fruta.

```
\\ Exemplo 1
programa {
	funcao inicio() {
		
		cadeia frutas[4]
		inteiro contador = 0
		
		frutas[0] = "Maçã"
		frutas[1] = "Pêra"
		frutas[2] = "Uva"
		frutas[3] = "Jaca"
		
		faca{
		    
		    escreva(frutas[contador]+"\n")
		    contador ++
		    
		}enquanto(contador <= 3)
		
	}
}

```
No exemplo 2, criamos uma matriz cesta que é atribuido a cada linha uma fruta e a quantidade. O programa imprime o nome da fruta e sua quantidade na cesta.

```
\\ Exemplo 2
programa {
	funcao inicio() {
	    
	    inteiro contador = 0
		
		cadeia cesta[][]={ {"Pêra","100"}, {"Jaca","200"}, {"Maça", "1000"}, {"Uva", "80"}}
		
		faca{
		    
		    escreva("Produto: " +cesta[contador][0]+ " tem a quantidade de " +cesta[contador][1]+ " unidades.\n")
		    
		    contador ++
		    
		}enquanto(contador<=3)
		
	}
}

```
E no exemplo 3, temos o cadastro de pessoas em uma matriz cadastro com nome, local e telefone. O programa imprime os nomes cadastrados junto com o local e o telefone.

```
\\ Exemplo 3
programa {
	funcao inicio() {
	    
	    inteiro contador = 0
		
		cadeia cadastro[][]={ {"João","São Paulo", "(11) 99999-5241"}, {"Maria","Ribeirão Preto", "(16) 9999-8596"}, {"Ana", "Manaus","(92) 9999-8574"}}
		
		faca{
		    
		    escreva("Nome: " +cadastro[contador][0]+ " mora em " +cadastro[contador][1]+ " e seu telefone é " + cadastro[contador][2]+ "\n")
		    
		    contador ++
		    
		}enquanto(contador<=2)
		
	}
}

```


[studio code]: <https://studio.code.org/s/mc/lessons/1/levels/1>
[diagrams]: <https://www.diagrams.net/>
[flowgorithm]: <http://www.flowgorithm.org/>
[portugol studio]: <http://lite.acad.univali.br/portugol/>
[portugol studio versão web]: <https://portugol-webstudio.cubos.io/ide>