*******
# Primeiros passos para desenvolvimento web
*******

## Sumário
*******
- [Primeiros passos para desenvolvimento web](#primeiros-passos-para-desenvolvimento-web)
  - [Sumário](#sumário)
  - [O que é internet e história](#o-que-é-internet-e-história)
  - [Como funciona a internet](#como-funciona-a-internet)
  - [TCP/IP, portas, roteadores, switches e modems](#tcpip-portas-roteadores-switches-e-modems)
    - [TCP/IP](#tcpip)
    - [Quais são as diferenças entre TCP e IP?](#quais-são-as-diferenças-entre-tcp-e-ip)
    - [Camadas do modelo TCP/IP](#camadas-do-modelo-tcpip)
      - [Camada de enlace de dados](#camada-de-enlace-de-dados)
      - [Camada da internet](#camada-da-internet)
        - [IP](#ip)
      - [Camada de transporte](#camada-de-transporte)
        - [TCP](#tcp)
        - [UDP](#udp)
        - [Diferença entre TCP e UDP](#diferença-entre-tcp-e-udp)
      - [Camada de aplicativo](#camada-de-aplicativo)
    - [Portas](#portas)
    - [Roteadores, switches e modems](#roteadores-switches-e-modems)
      - [Modem](#modem)
      - [Roteador](#roteador)
      - [Switch](#switch)
  - [Celular, Internet e outros dispositivos](#celular-internet-e-outros-dispositivos)
    - [Dados móveis](#dados-móveis)
    - [WI-FI](#wi-fi)
    - [Bluetooth](#bluetooth)
  - [Browser, sites, aplicativos e webserver](#browser-sites-aplicativos-e-webserver)
    - [Browser](#browser)
      - [Página estática X dinâmica](#página-estática-x-dinâmica)
    - [Site, aplicativo e e-commerce](#site-aplicativo-e-e-commerce)
      - [Site](#site)
      - [Aplicativo](#aplicativo)
      - [E-commerce](#e-commerce)
    - [Web-server](#web-server)
      - [Estático](#estático)
      - [Dinâmico](#dinâmico)
      - [Web-service](#web-service)
  - [O que são Stacks](#o-que-são-stacks)
    - [Stacks](#stacks)
    - [Definição de Front-end, Back-end e Fullstack](#definição-de-front-end-back-end-e-fullstack)
      - [Front-end](#front-end)
      - [Back-end](#back-end)
      - [Fullstack](#fullstack)
  - [LPs e termos](#lps-e-termos)
    - [Principais linguagens](#principais-linguagens)
    - [termos comuns](#termos-comuns)
  - [Projeto Prático](#projeto-prático)
  - [Links para treinamento](#links-para-treinamento)

*******
## O que é internet e história
*******
A Internet é um sistema global de redes de computadores interligadas que utilizam um conjunto próprio de protocolos (Internet Protocol Suite ou TCP/IP) com o propósito de servir progressivamente usuários no mundo inteiro. É uma rede de várias outras redes, que consiste de milhões de empresas privadas, públicas, acadêmicas e de governo, com alcance local e global e que está ligada por uma ampla variedade de tecnologias de rede eletrônica, sem fio e ópticas.

- História:
  - 1969: EUA, Arpanet. Departamento de defesa. Guerra fria. Interligar laboratórios. Primeiro e-mail.
  - 1982: Universidades. Holanda, Dinamarca e Suécia.
  - 1987: Liberado o uso comercial nos EUA.
  - 1992: CERN cria a World Wide Web (www). Dados acessíveis a qualquer pessoa com acesso á internet.
- História no Brasil:
  - 1988: FAPESP, UFRJ, LNCC.
  - 1994: Uso comercial. Embratel.
  - Conexão discada.
  - 2000: banda larga.
  
Curiosidades:
> Qual o primeiro domínio criado?
  R - O primeiro nome de domínio registrado na história da internet foi o [Symbolics].

> Qual o primeiro blog?
  R - O primeiro blog da internet foi criado por um brasileiro. Em 1994, o cientista do MIT Media Lab, Claudio Pinhanez, criou um site chamado “Open Diary”.

>Qual a primeira compra feita pela internet?
  R - Em 11 de agosto de 1994, um amigo de Dan Kohn, uma das primeiras pessoas a usar a internet, comprou um CD do Sting pela internet.
> Qual o site mais antigo em atividade?
  R - [Symbolics]

Podemos conhecer alguns termos usados na internet através desse documento: [Dicionário de termos-chave](/Dias/documento-extras/termos-chave.md).

*******
## Como funciona a internet
*******
Rede: Conjunto de dois ou mais dispositivos eletrônicos de computação (ou módulos processadores ou nós da rede) interligados por um sistema de comunicação digital (ou link de dados), guiados por um conjunto de regras (protocolo de rede) para compartilhar entre si informação, serviços e, recursos físicos e lógicos.

Backbone: Pode ser definido pelas principais rotas de dados entre grandes redes de computadores estrategicamente interconectadas e roteadores centrais da Internet .

Provedor de Acesso :  É uma organização que fornece serviços para acessar, usar ou participar da Internet . Os provedores de serviços de Internet podem ser organizados de várias formas, como comercial, de propriedade da comunidade , sem fins lucrativos ou de propriedade privada .

*******
## TCP/IP, portas, roteadores, switches e modems
*******

### TCP/IP

Significa protocolo de controle de transmissão/protocolo da internet (Transmission Control Protocol/Internet Protocol).

### Quais são as diferenças entre TCP e IP?
TCP e IP são dois protocolos de rede de computadores separados. IP é a parte que obtém o endereço para o qual os dados são enviados. TCP é responsável pela entrega dos dados assim que o endereço IP for encontrado. É possível separá-los, mas não faz sentido diferenciar entre TCP e IP. Como são usados juntos com frequência, “TCP/IP” e o “modelo TCP/IP” é terminologia reconhecida agora.

### Camadas do modelo TCP/IP
TCP/IP é um protocolo de enlace de dados (datalink) usado na internet. Seu modelo é dividido em quatro camadas distintas. Quando usadas em conjunto, também podem ser chamadas de um conjunto de protocolos.

#### Camada de enlace de dados
A camada de enlace de dados (também chamada de camada de link, camada de interface de rede ou camada física) é aquela que lida com as partes físicas de envio e recebimento de dados usando o cabo Ethernet, rede sem fio, placa de interface de rede, driver de dispositivo no computador e assim por diante.

#### Camada da internet
A camada da internet (também chamada de camada de rede) controla o movimento de pacotes pela rede. Nessa cama que temos o protocolo IP.

##### IP
Endereço IP é um endereço exclusivo que identifica um dispositivo na Internet ou em uma rede local. IP vem do inglês "Internet Protocol" (protocolo de rede) que consiste em um conjunto de regras que regem o formato de dados enviados pela Internet ou por uma rede local.

Basicamente, o endereço IP é o identificador que permite que as informações sejam enviadas entre dispositivos em uma rede: ele contém as informações de localização e torna o dispositivo acessível para comunicação. A Internet precisa de um meio de distinguir diferentes computadores, roteadores e sites. O endereço IP providencia isso, além de ser uma parte essencial do funcionamento da Internet.

#### Camada de transporte
A camada de transporte fornece uma conexão de dados confiável entre dois dispositivos. Ela divide os dados em pacotes, reconhece os pacotes que recebeu do outro dispositivo e garante que o outro dispositivo reconheça os pacotes que recebe.
Nessa camada temos dois protocolos que são o TCP e UDP.

##### TCP
O Transmission Control Protocol (TCP) é orientado à conexão, o que significa que uma vez que uma conexão foi estabelecida, os dados podem ser transmitidos em duas direções. O TCP possui sistemas integrados para verificar erros e garantir que os dados sejam entregues na ordem em que foram enviados, tornando-o o protocolo perfeito para transferir informações como imagens estáticas, arquivos de dados e páginas da web.

##### UDP
O User Datagram Protocol (UDP) é um protocolo de Internet mais simples e sem conexão, no qual os serviços de verificação de erros e recuperação não são necessários. Com o UDP, não há sobrecarga para abrir uma conexão, manter uma conexão ou encerrar uma conexão; os dados são enviados continuamente ao destinatário, quer ele os receba ou não.

##### Diferença entre TCP e UDP

O TCP é um protocolo orientado à conexão, enquanto o UDP é um protocolo sem conexão. Uma diferença fundamental entre o TCP e o UDP é a velocidade, pois o TCP é comparativamente mais lento que o UDP. No geral, o UDP é um protocolo muito mais rápido, simples e eficiente, no entanto, a retransmissão de pacotes de dados perdidos só é possível com o TCP. 

Outra discrepância notável com TCP vs UDP é que o TCP fornece uma entrega ordenada de dados do usuário para o servidor (e vice-versa), enquanto o UDP não é dedicado a comunicações de ponta a ponta, nem verifica a prontidão do receptor (exigindo menos despesas gerais e ocupando menos espaço). 

#### Camada de aplicativo
A camada de aplicativo é o grupo de aplicativos que requerem comunicação em rede. O usuário normalmente interage com essa camada, como no e-mail e mensagens. Como as camadas inferiores lidam com os detalhes da comunicação, os aplicativos não precisam se preocupar com isso.

### Portas
Porta é um ponto de extremidade de comunicação. No nível do software, dentro de um sistema operacional , uma porta é uma construção lógica que identifica um processo específico ou um tipo de serviço de rede . Uma porta é identificada para cada protocolo de transporte e combinação de endereços por um número sem sinal de 16 bits , conhecido como número da porta . Os protocolos de transporte mais comuns que usam números de porta são o Transmission Control Protocol (TCP) e o User Datagram Protocol (UDP).

Um número de porta está sempre associado a um endereço IP de um host e ao tipo de protocolo de transporte usado para comunicação. Ele completa o endereço de rede de destino ou origem de uma mensagem. Números de porta específicos são reservados para identificar serviços específicos para que um pacote de chegada possa ser facilmente encaminhado para um aplicativo em execução. Para isso, números de porta inferiores a 1024 identificam os serviços historicamente mais usados ​​e são chamados de números de porta conhecidos . Portas com números mais altos estão disponíveis para uso geral por aplicativos e são conhecidas como portas efêmeras .

As portas fornecem um serviço de multiplexação para vários serviços ou várias sessões de comunicação em um endereço de rede. No modelo de arquitetura de aplicativo cliente-servidor , várias sessões de comunicação simultâneas podem ser iniciadas para o mesmo serviço.

Exemplos de portas:
- 20: Transferência de dados do protocolo de transferência de arquivos (FTP);
- 22: Secure Shell (SSH) Login seguro;
- 80: Hypertext Transfer Protocol (HTTP) usado na World Wide Web;
- 443: HTTP Seguro (HTTPS) HTTP sobre TLS/SSL.

O Gmail usa portas próprias diferentemente das padrões, ou seja, para SMTP usa a porta 587 e a POP3 é a porta 995. Já o MySql utiliza a porta 3306 e o servidor web apache a porta 8080.

### Roteadores, switches e modems

#### Modem
Um modulador-demodulador ou modem é um dispositivo de hardware de computador que converte dados de um formato digital em um formato adequado para um meio de transmissão analógico , como telefone ou rádio. Um modem transmite dados modulando um ou mais sinais de onda portadora para codificar a informação digital , enquanto o receptor demodula o sinal para recriar a informação digital original. O objetivo é produzir um sinal que possa ser transmitido facilmente e decodificado de forma confiável. Os modems podem ser usados ​​com quase todos os meios de transmissão de sinais analógicos, desde diodos emissores de luz até rádio.

#### Roteador
Um roteador é um dispositivo de rede que encaminha pacotes de dados entre redes de computadores . Os roteadores executam as funções de direcionamento de tráfego na Internet . Os dados enviados pela Internet, como uma página da Web ou e- mail , estão na forma de pacotes de dados. Um pacote é normalmente encaminhado de um roteador para outro roteador através das redes que constituem uma rede (por exemplo, a Internet) até atingir seu nó de destino .

Um roteador está conectado a duas ou mais linhas de dados de diferentes redes IP . Quando um pacote de dados chega em uma das linhas, o roteador lê as informações de endereço de rede no cabeçalho do pacote para determinar o destino final. Em seguida, usando informações em sua tabela de roteamento ou política de roteamento , ele direciona o pacote para a próxima rede em sua jornada.

#### Switch
Um switch de rede (também chamado de hub de comutação, hub de ponte e, pelo IEEE , ponte MAC) é um hardware de rede que conecta dispositivos em uma rede de computadores usando comutação de pacotes para receber e encaminhar dados para o dispositivo de destino.

Um switch de rede é uma ponte de rede multiportas que usa endereços MAC para encaminhar dados na camada de enlace de dados (camada 2) do modelo OSI . Alguns switches também podem encaminhar dados na camada de rede (camada 3) incorporando adicionalmente a funcionalidade de roteamento . Esses comutadores são comumente conhecidos como comutadores de camada 3 ou comutadores multicamadas.

*******
## Celular, Internet e outros dispositivos
*******
### Dados móveis
- 1G (analógico): 10Kbps
- 2G (digital) ( Global System for Mobile Commubication - GSM): 97 Kbps
- GPRS (General Packet Radio Service)/"2,5G": 32-80 Kbps - dados e voz
- EDGE (Enhanced Data Rates for GSM Evolution) / "2,75G": 128-236 Kbps
- 3G (7Mbps), 4G (22,1 Mbps), 5G (10 Gbps)

### WI-FI
Wi-Fi é uma família de protocolos de rede sem fio , baseados na família de padrões IEEE 802.11 , que são comumente usados ​​para redes locais de dispositivos e acesso à Internet , permitindo dispositivos digitais próximos para trocar dados por ondas de rádio . Estas são as redes de computadores mais usadas no mundo, usadas globalmente em redes domésticas e de pequenos escritórios para conectar computadores desktop e laptop , computadores tablet ,smartphones , TVs inteligentes , impressoras e alto-falantes inteligentes juntos e a um roteador sem fio para conectá-los à Internet e em pontos de acesso sem fio em locais públicos como cafés, hotéis, bibliotecas e aeroportos para fornecer acesso público à Internet para dispositivos móveis.

### Bluetooth
Bluetooth é um padrão de tecnologia sem fio de curto alcance que é usado para troca de dados entre dispositivos fixos e móveis em curtas distâncias usando ondas de rádio UHF nas bandas ISM , de 2,402 GHz a 2,48 GHz, e construção de redes de área pessoal (PANs). É usado principalmente como uma alternativa para conexões com fio, para trocar arquivos entre dispositivos portáteis próximos e conectar telefones celulares e tocadores de música com fones de ouvido sem fio . No modo mais utilizado, a potência de transmissão é limitada a 2,5 miliwatts , proporcionando um alcance muito curto de até 10 metros (33 pés).

*******
## Browser, sites, aplicativos e webserver
*******

### Browser
Para ver um site, é preciso um programa que interprete as linguagens de programação (LP) e as tranforme em algo compreensível por um humano.
Sabe identificar várias LP, linguagens de marcação (HTML) e conteúdo multimedia. Os browsers fazem muito mais que isso, possuindo plug-ins, ou add-ons, que ajudam na navegação.

A finalidade de um navegador da Web é buscar conteúdo da Web ou de um dispositivo de armazenamento local e exibi-lo no dispositivo de um usuário .

Esse processo começa quando o usuário insere um Uniform Resource Locator (URL), como https://en.wikipedia.org/, no navegador. Praticamente todos os URLs na Web começam com http:ou https:, o que significa que o navegador irá recuperá-los com o protocolo HTTP ( Hypertext Transfer Protocol ). No caso do modo seguro (HTTPS), a comunicação entre o navegador e o servidor web é criptografada para fins de segurança e privacidade .

Depois que uma página da Web é recuperada, o mecanismo de renderização do navegador a exibe no dispositivo do usuário. Isso inclui formatos de imagem e vídeo suportados pelo navegador.

As páginas da Web geralmente contêm hiperlinks para outras páginas e recursos. Cada link contém um URL e, quando clicado ou tocado nele , o navegador navega para o novo recurso. Assim, o processo de trazer conteúdo para o usuário começa novamente.

A maioria dos navegadores usa um **cache** interno de recursos da página da Web para melhorar os tempos de carregamento para visitas subsequentes à mesma página. O cache pode armazenar muitos itens, como imagens grandes, para que não precisem ser baixados do servidor novamente. Os itens em cache geralmente são armazenados apenas pelo tempo que o servidor web estipula em suas mensagens de resposta HTTP.

Durante a navegação, os **cookies** recebidos de vários sites são armazenados pelo navegador. Alguns deles contêm credenciais de login ou preferências do site. No entanto, outros são usados ​​para rastrear o comportamento do usuário por longos períodos de tempo, então os navegadores normalmente fornecem uma seção no menu para excluir cookies. O gerenciamento mais refinado de cookies geralmente requer uma extensão do navegador .

#### Página estática X dinâmica
Sites estáticos são aqueles que são fixos e exibem o mesmo conteúdo para cada usuário, geralmente escritos exclusivamente em HTML.

Um site dinâmico, por outro lado, é aquele que pode exibir diferentes conteúdos e proporcionar interação do usuário, fazendo uso de programação avançada e bancos de dados, além de HTML.

Dica: Acesse o site [Archive], nele você pode ver sites antigos, como por exemplo, do yahoo.

### Site, aplicativo e e-commerce
#### Site
- Página da internet;
- Diversos propósitos;
- Podem ser feitas em diversas LP;
- D/XHTML caindo em desuso.

#### Aplicativo
- Um software que é executado no navegador;
- Um aplicativo de celular, muitas vezes, nada mais é do que uma espécie de navegador;
- Já quase não existe duferença entre site e aplicativo, e o primeiro está em declínio.

#### E-commerce
- "e", assim como em "e-mail", significa "eletronic";
- Comércio eletrônico;
- Site de comprar e venda com sistema de pagamento;
- O sistema de pagamento pode ser exterior ao site: Picpay, Boleto, Pagseguro, Paypal, Mercado pago.

### Web-server
Existe dois tipos:
#### Estático
É um servidor físico onde são armazenados arquivos, software e/ou banco de dados.

#### Dinâmico
Refere-se aos softwares que estão presentes no servidor físico.
      - Arquivos (file server);
      - Aplicações (Aplication server);
      - Banco de dados (database)
  
Um site, ou aplicativo, precisa estar hospedado em um servidor para pode ser acessado. Os dados de um site precisam estar em um servidor. O banco de daods de um site ou aplicativo precisa estar em um servidor.

#### Web-service
Interface disponível para fazer requisições e consultas em banco de dados inacessíveis (correios, governos, dentre outros).

*******
## O que são Stacks
*******

### Stacks

  <p align="center">
 		<img src="figuras/fig_full_stack_development_main.jpg?raw=true" alt="stacks" width="60%" height="60%" />
  </p>

o stack tecnológico é uma pilha de tecnologias, como se uma fosse uma tecnologia fosse colocada em cima da outra. No entanto, o sentido real do termo significa representar o conjunto de sistemas necessários para executar um único aplicativo sem outro software adicional. 

Acima de tudo, um dos principais objetivos de um stack de tecnologia é melhorar a comunicação sobre como um aplicativo é construído. Além disso, o pacote escolhido de tecnologia pode conter: 

- As linguagens de programação utilizadas;
- Estruturas e ferramentas que um desenvolvedor precisa para interagir com o aplicativo;
- Atributos e limitações de desempenho conhecidos;
- Levantamento de pontos fortes e fracos do aplicativo em geral. 

### Definição de Front-end, Back-end e Fullstack
#### Front-end
- "Frente" de um projeto de desenvolvimento;
- Site, software, aplicativo, web service;
- Interface, UI, UX;
- Lógica de programação, HTML, CSS, jQuery/SJ/AJAX, PHP, Bootstrap/outros frameworks.

#### Back-end
- "Atrás" de um projeto de desenvolvimento;
- Servidores, banco de dados;
- "meio-campo" entre interface e banco de dados, regras de negócios, validações;
- MySql, Ocacle, protocolos de comunicação, PHP, Java, Python, node.js, dentre outros.

#### Fullstack
Profissional que sabe trabalhar em todas as camadas das tecnologias de desenvolvimento/execução de um app/software.

*******
## LPs e termos
*******
### Principais linguagens
- HTML
- CSS
- JavaScript (jQuery, AJAX, diversas libs)
- PHP
- .NET
- ASP
- JAVA
- Ruby (on Rails)
- Python
- Perl
- C/C++/C#

### termos comuns
Consulte vários termos comuns em TI através do [Dicionário de termos comuns](/Dias/documento-extras/termos-comuns.md).

*******
## Projeto Prático
*******
Para o primeiro projeto do curso, construir um site com Jquery utilizando a biblioteca accordion.

![](\projetos\1-construindo-a-primeira-aplicacao\primeiro-projeto.gif)

[Código do projeto 1]
****
## Links para treinamento
****
- [w3schools]
- [Play code]


[Symbolics]: <https://symbolics.com/>
[Archive]: <https://archive.org/web>
[w3schools]:<https://www.w3schools.com/>
[Play code]:<https://playcode.io/html>
[Código do projeto 1]: <https://github.com/jacivaldocarvalho/Bootcamp---Spread-Fullstack-Developer/tree/main/Dias/projetos/1-construindo-a-primeira-aplicacao>