# Introdução ao Git e ao Github
*******

## Sumário
*******
- [Introdução ao Git e ao Github](#introdução-ao-git-e-ao-github)
  - [Sumário](#sumário)
  - [Introdução ao Git](#introdução-ao-git)
  - [Navegação por linha de comando e instalação](#navegação-por-linha-de-comando-e-instalação)
  - [Entendendo como o Git funciona por baixo dos panos](#entendendo-como-o-git-funciona-por-baixo-dos-panos)
  - [Primeiros comandos Git](#primeiros-comandos-git)

## Introdução ao Git
*******
Git é um software para rastrear alterações em qualquer conjunto de arquivos, geralmente usado para coordenar o trabalho entre programadores que desenvolvem código-fonte colaborativamente durante o desenvolvimento de software. Seus objetivos incluem velocidade, integridade de dados e suporte para fluxos de trabalho distribuídos e não lineares. (Wikipédia)


Beneficios junto com o GitHub:
    - Controle de versão;
    - Armazenamento em nuvem;
    - Trabalho em equipe;
    - Melhoria do seu código;
    - Reconhecimento
*******
## Navegação por linha de comando e instalação
*******
- Comandos básicos para um bom desempenho no terminal:
    |     Linux     |      Windows      |             Ação             |
    |:-------------:|:-----------------:|:----------------------------:|
    |       ls      |        dir        | Listar conteúdo de uma pasta |
    |       cd      |         cd        |      Entra em uma pasta      |
    |     mkdir     |       mkdir       |         Criar pastas         |
    | rm -rf pasta/ | rmdir pasta /S /Q |        Deletar pastas        |
    |      tab      |        tab        |         Autocompletar        |
    |     clear     |        cls        |          Limpar tela         |
    
    
- Instalando o Git
   Link para instalação em sistemas operacionais Linux, Windows e Mac : [Instalando o Git]
*******
## Entendendo como o Git funciona por baixo dos panos
*******
- SHA1: A sigla SHA significa Algoritmo de Hash seguro (Secure Hash Algorithm), é um conjunto de funções hash criptográficas projetadas pela NASA (Agência de segurança Nacional dos EUA). A encriptação gera conjunto de characteres identificadir de 40 dígitos.
No exemplo a seguir, criamos um arquivo.txt e geramos através do comando openssl sha1.
    ```
    $ echo teste > arquivo.txt
    $ openssl sha1 arquivo.txt
    SHA1(arquivo.txt)= 9dc628289966d144c1a5fa20dd60b1ca1b9de6ed
    ```
    Vale ressaltar que se modificarmos o arquivo é gerado um novo código de 40 dígitos, podemos observar no exemplo a seguir.
    ```
    $ echo teste2 > arquivo.txt
    $ openssl sha1 arquivo.txt
    SHA1(arquivo.txt)= ff0846a3fb101ac42bbb7577afa1d3b1bc4e266d

    ```
- Objetos fundamentais
  - Blobs: Um blob (objeto binário grande) do Git é o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório.
  - Tree: Armazenam Blobs e apontam para eles. Guarda o nome dos arquivos diferentemente dos Blobs que guarda apenas o identificador. Pode apontar para outras árvores também.
  
  <p align="center">
 		<img src="figuras/git_tree.png?raw=true" alt="gite tree" width="60%" height="70%" />
  </p>

  - Commit: Aponta para uma árvores, blobs, parente (último commit). Possui autor e mensagem.

- Chaves SSH e Token
  - Chave SSH: É uma forma de estabelecer uma conexão segura e encriptada entre duas máquinas através de duas chaves (Privada e Pública). Para criar uma conexão SSH entre sua máquina local e o Github, podemos conferir no link a seguir:
  [Configurando uma conexão SSH com o Github]
  - Token: Tokens de acesso pessoal (PATs) são uma alternativa ao uso de senhas para autenticação no GitHub ao usar a API do GitHub ou a linha de comando. Para configurar, podemos seguir os passos do link a seguir:
  [Configurando uma conexão via token com o Github]

*******
## Primeiros comandos Git
*******

- Criando repositório.
  ```shell
  $ git init
  ```
- Fornecendo informações do autor do repositório.
    ```shell
  $ git config --global user.email "nome@email.com"
  ```
  ```shell
  $ git config --global user.name "nome"
  ```
- Criando um commit.
  ```shell
  $ git add .
  ```
  ```shell
  $ git commit -m "mensagem"
  ```
- Exibe o estado do diretório de trabalho e a área de teste.
  ```shell
  $ git status
  ```
- Adicionando um repositório remoto.
  ```shell
  $ git remote add origin https://github.com/user/repo.git
  # Adiciona um novo repositório

  $ git remote -v
  # verifica o novo repositório remoto
  > origin  https://github.com/user/repo.git (fetch)
  > origin  https://github.com/user/repo.git (push)
   ```
- Fazer push para um repositório remoto ou seja, enviar um repositório local para o remoto.
  ```shell
  $ git push origin main
   ```
- Atualiza a ramificação de trabalho local atual e todas as ramificações de rastreamento remoto. 
  ```shell
   $ git pull origin main
   ```
- Clonar repositório.
  ```shell
   $ git clone https://github.com/user/repo.git
   ```



[Instalando o Git]: <https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git>
[Configurando uma conexão SSH com o Github]: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh>

[Configurando uma conexão via token com o Github]: <https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token>