# Trabalhando com Módulos em JavaScript

## Conteúdo
- [Trabalhando com Módulos em JavaScript](#trabalhando-com-módulos-em-javascript)
  - [Conteúdo](#conteúdo)
    - [Módulos](#módulos)
    - [Vantagens](#vantagens)
    - [Exportar](#exportar)
      - [Named exports](#named-exports)
      - [Default exports](#default-exports)
    - [Importar](#importar)
      - [Named exports](#named-exports-1)
      - [Default exports](#default-exports-1)
      - [Trocando nome de imports](#trocando-nome-de-imports)
      - [Importando todos os dados de um arquivo](#importando-todos-os-dados-de-um-arquivo)
    - [Vinculando ao HTML](#vinculando-ao-html)
    - [Curiosidades](#curiosidades)

### Módulos
São arquivos JavaScripts que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

### Vantagens
- Organização do código;
- Compartilhamento de variáveis em escopos diferentes;
- Explicita as dependências dos arquivos.

### Exportar
#### Named exports

```Javascript
// Primeira forma de exportar
export function mostraIdade(pessoa){
    return `A idade do(a) ${pessoa.name} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa){
    return `A Cidade do(a) ${pessoa.name} é ${pessoa.cidade}`;
}

```

```Javascript
// Segunda forma de exportar
function mostraIdade(pessoa){
    return `A idade do(a) ${pessoa.name} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
    return `A Cidade do(a) ${pessoa.name} é ${pessoa.cidade}`;
}

export{
    mostraIdade,
    mostraCidade
}

```

#### Default exports
Só pode haver um por arquivo. Será o retorno padrão do seu arquivo.


```Javascript

function mostraIdade(pessoa){
    return `A idade do(a) ${pessoa.name} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
    return `A Cidade do(a) ${pessoa.name} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa){
    return `O Hobby do(a) ${pessoa.name} é ${pessoa.hobby}`
}

export{
    mostraIdade,
    mostraCidade
}

export default mostraHobby;

```

### Importar

#### Named exports
```javascript
import {funcao, variavel, classe} from './arquivo.js';

```
#### Default exports

```javascript
import valorDefault from './arquivo.js'
```

#### Trocando nome de imports

```javascript
import {arquivo as Apelido} from './arquivo.js';

Apelido.metodo();
```

#### Importando todos os dados de um arquivo

```javascript
import * as INFOS from './arquivo.js';

INFO.metodoA();
console.log(INFOS.variavel);
```

### Vinculando ao HTML

```html
<script type="module" src="./main.js"></script>
```

Para testes locais, será necessário estar rodando um servidor. Isso pode ser feito utilizando a extensão "Live server" do VScode.

### Curiosidades
- Módulos sempre estão em "strict mode";
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locais, é necessário um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar, sempre utilize "./" como ponto de partida.


