# Javascript Assíncrono
## Conteúdo

- [Javascript Assíncrono](#javascript-assíncrono)
  - [Conteúdo](#conteúdo)
    - [Assincronicidade](#assincronicidade)
      - [Promises](#promises)
      - [Async e Await](#async-e-await)
    - [Consumindo APIs (Application programming Interface)](#consumindo-apis-application-programming-interface)
        - [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
      - [fetch](#fetch)

### Assincronicidade
Que não ocorre ou não se efetiva ao mesmo tempo.

#### Promises
Objeto de processamento assíncrono. No início, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

 <p align="center">
 		<img src="https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png?raw=true" alt="Exemplo de Promises" width="60%" height="50%" />
  </p>

Existem 3 estados do objeto Promise:

- Pending: Estado inicial, antes que a promise seja bem-sucedida ou falhe.
- Resolved: Promise concluída.
- Rejected: Promise falha.

Por exemplo, quando solicitamos dados do servidor usando um Promise, ele ficará em modo pendente até recebermos nossos dados. Se conseguirmos obter as informações do servidor, a Promise será resolvida com sucesso. Mas se não obtivermos as informações, a Promise estará no estado rejeitado.

```javascript
// Estrutura
// Cria uma promise e após 2s informa que a promise foi resolvida.
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() =>{
        resolve(console.log('Resolvida!'));
    }, 2000);
});
```

```javascript
// Manipulação
// Cria uma promise e após 2s informa que a promise foi resolvida.
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() =>{
        resolve(console.log('Resolvida!'));
    }, 2000);
});

// Encadeamento de chamadas após a promise retornar como resolvida.
await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err) => console.log(err.message));
```

#### Async e Await
Uma função assíncrona é uma função declarada com a palavra-chave **async** e a palavra-chave **await** é permitida dentro dela. As palavras-chave **async** e **await** permitem que o comportamento assíncrono e baseado em **promises** seja escrito em um estilo mais limpo, evitando a necessidade de configurar explicitamente as cadeias de **promises**.

```javascript
// Exemplo: A função asyncCall recebe após 5s 'resolvido' da função resolveAfter5Seconds.
function resolveAfter5Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolvido');
    }, 5000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter5Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

### Consumindo APIs (Application programming Interface)
Uma API é uma forma de realizar a intermediação entre o front-end e o back-end. O acesso é realizado por URLs. É comum que APIs retornem seus dados no formato .json (JavaScript Object Notation), portanto precisamos tratar esses dados quando os recebemos.

##### JSON (JavaScript Object Notation)
JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados. É fácil para humanos ler e escrever. É fácil para as máquinas analisar e gerar.

#### fetch
A API **fetch** provê ao navegador uma interface para a execução de requisições HTTP através de Promises.

Podemos descrever os métodos do objeto da seguinte maneira:
- **then**: Permite definir o bloco executado mediante o cumprimento de uma promise retornando um objeto do tipo Response.
- **catch**: Permite definir o bloco executado mediante a rejeição de uma promise.


```javascript
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
// retorna uma Promise.
```



