****
# Introdução a criação de websites com HTML5 e CSS3
****

## Conteúdo
****
- [Introdução a criação de websites com HTML5 e CSS3](#introdução-a-criação-de-websites-com-html5-e-css3)
  - [Conteúdo](#conteúdo)
  - [Elemento e Estrutura básica](#elemento-e-estrutura-básica)
    - [HTML](#html)
    - [HEAD](#head)
    - [BODY](#body)
  - [Entendendo o que é semântica](#entendendo-o-que-é-semântica)
    - [SECTION](#section)
    - [HEADER](#header)
    - [ARTICLE](#article)
    - [ASIDE](#aside)
    - [FOOTER](#footer)
    - [< h1>-< h6>](#-h1--h6)
  - [Usando textos e links HTML](#usando-textos-e-links-html)
  - [Como inserir imagens](#como-inserir-imagens)
  - [Como organizar listas](#como-organizar-listas)

****
## Elemento e Estrutura básica
****

Em 1991 Tim Berners-Lee criou essa linguagem de marcação para melhorar a comunicação entre ele e seus colegas de trabalho no CERN, desde então já surgiram 5 versões e o HTML se tornou a base da web.

Com o HTML definimos o significado e a estrutura do conteúdo da web e, além de texto, nossas páginas precisam de imagens, vídeos e vários outros formatos e para isso temos os elementos HTML.

Um elemento HTML é formado pela tag de abertura e seus atributos, o conteúdo e uma tag de fechamento. E mais a frente veremos que existem elementos que não tem tag de fechamento.

Um Elemento HTML:
  <p align="center">
 		<img src="figuras/fig_elemento_html.png?raw=true" alt="elemento html" width="60%" height="500%" />
  </p>

Com esses elementos podemos agrupar tipos de conteúdo, alterar tamanho e forma de fontes e adicionar diferentes mídias ao nossa página na web.

E agora podemos ver como é a estrutura básica de um arquivo HTML.

A primeira linha do documento deve ser o <! DOCTYPE html >, apesar de parecer um elemento HTML ela apenas diz ao navegador que ele está lidando com um arquivo do tipo HTML5. Os elementos HTML vem logo abaixo.

### HTML

A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

### HEAD

A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

### BODY

E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

```html
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>Jacivaldo Carvalho</title>
    </head>

    <body>
        <!-- Exemplo de uma estrutura básica de um site html. -->
        Jacivaldo Carvalho
    </body>
</html>
```
****
## Entendendo o que é semântica
****

Durante muitos anos o elemento padrão no HTML era a div, construíamos nosso conteúdo todo baseado nela, e assim nascia a sopa de divs.

Mas em 2014 saiu a quinta versão do HTML, e com ela vieram vários mudanças importantes, como performance e acessibilidade, mas nesse curso introdutório vamos focar na semântica.

A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim. E temos vários elementos para ressignificar as divs:

### SECTION

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

### HEADER

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

### ARTICLE

Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

### ASIDE

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

### FOOTER

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um < footer> são informações de autor e links relacionados.

### < h1>-< h6>

Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo < h1> o mais importante e < h6> o menos. Uma dica: use apenas um < h1> por página, pois ele representa o objetivo da sua página.

```html
<!DOCTYPE html>

<html>
    <!-- Exemplo com uso de semânticas. -->
    <head>
        <meta charset="utf-8">
        <title>Jacivaldo Carvalho</title>
    </head>

    <body>

        <header>
            <h1>Jacivaldo Carvalho</h1>
        </header>

        <section>
            <header>
                <h2>Posts</h2>
            </header>

            <article>
                <header>
                    <h3>Post #1</h3>
                </header>
            </article>
        </section>

        <footer></footer>
        
    </body>
</html>
```
****
## Usando textos e links HTML
****
A criação do HTML foi motivada pela necessidade de compartilhar textos e documentos, e mesmo depois de quase 30 anos, com toda a evolução da web, isso ainda representa uma boa parte do conteúdo da web.

Já falamos anteriormente sobre os elementos h1-h6 e, eles são essenciais para nos indicar visualmente a importância e localização de seções de texto na página, mas para textos maiores e mais densos usamos o elemento p.

O < p> representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

Um outro elemento interessante e extremamente necessário na web é o < a> - que significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.

O elemento a tem vários atributos, mas vamos focar em dois, o href e o target.

O href representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos mailto: e tel:, respectivamente.

O target neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor _blank.

```html

    <body>

        <header>
            <h1>Jacivaldo Carvalho</h1>
        </header>

        <section>
            <header>
                <h2>Posts</h2>
            </header>

            <article>
                <header>
                    <h3>Post #1</h3>
                </header>
                <p>
                    Formando em Engenharia de Telecomunicações (UFPA). Sou analista de suporte e desenvolvedor (C, Python, ...).
                    Trabalho voluntariamente com o desenvolvimento de algoritmo genético aprimorado com aplicação em eletrodinâmica computacional, utilizando o método das diferenças finitas (FDTD) em linguagem de programação C.
                    E atualmente venho me aprofundando em Full stack com React, Python e Mysql. E em Cloud com AWS, Terraform e Ansible.
                    Mais sobre: <a href="https://www.linkedin.com/in/jacivaldocarvalho/" target="_blank">linkedIn</a> 
                </p>
            </article>
        </section>  
    </body>

```
****
## Como inserir imagens
****

A web também é feita de imagens e para representá-las temos o elemento < img>, ele é um daqueles elementos sem tag de fechamento. O elemento img é bem simples, contendo apenas 2 atributos próprios, o src e o alt. O src é obrigatório e guarda o caminho para a imagem que você quer mostrar na página. O alt não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela significa.

```html
<body>
        <!-- Exemplo com inserção de imagens. -->
        <header>
            <img src="jacivaldo-carvalho.png"  alt="Meu avatar">
            <h1>Jacivaldo Carvalho</h1>
        </header>

        <section>
            <header>
                <h2>Posts</h2>
            </header>

            <article>
                <header>
                    <h3>Post #1</h3>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E16AQGGM4q1uh6qYA/profile-displaybackgroundimage-shrink_350_1400/0/1645199264572?e=2147483647&v=beta&t=_HC0lI9MDSTEyfXEvkfwhJIBBNyVgckXBxrFZijh0vs" alt="Minha apresentação">
                </header>
                <p>
                    Formando em Engenharia de Telecomunicações (UFPA). Sou analista de suporte e desenvolvedor (C, Python, ...).
                    Trabalho voluntariamente com o desenvolvimento de algoritmo genético aprimorado com aplicação em eletrodinâmica computacional, utilizando o método das diferenças finitas (FDTD) em linguagem de programação C.
                    E atualmente venho me aprofundando em Full stack com React, Python e Mysql. E em Cloud com AWS, Terraform e Ansible.
                    Mais sobre: <a href="https://www.linkedin.com/in/jacivaldocarvalho/" target="_blank">LinkedIn</a> 
                </p>
            </article>
        </section>
    </body>
```

Dica para remover dados desnecessários de uma imagem use o site [Tiny Png].

****
## Como organizar listas
****

Os últimos elementos que veremos neste módulo são os relacionados a listas: < ul>, < ol> e < li>. Listas servem para agrupar uma coleção de itens, como uma lista de ingredientes ou, como será no nosso caso, uma lista com contatos. O elemento ul cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados. O < ol> serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras. E o elemento li é um item dentro de uma dessas listas. Um < li> pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.

```html
<footer>
            <!-- Exemplo de lista. -->
            <ul>
                <li>
                    <a href="mailto:jacivaldocarvalho@gmail.com" target="_blank">Email</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jacivaldocarvalho/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/jacivaldocarvalho" target="_blank">GitHub</a>
                </li>
            </ul>
        </footer>
```

[Tiny Png]:<https://tinypng.com/>