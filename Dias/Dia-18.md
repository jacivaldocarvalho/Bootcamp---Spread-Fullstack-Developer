# Introdução ao TypeScript: Classes, Tipos e Interfaces
## Conteúdo
- [Introdução ao TypeScript: Classes, Tipos e Interfaces](#introdução-ao-typescript-classes-tipos-e-interfaces)
  - [Conteúdo](#conteúdo)
  - [Implementar o typescript na prática](#implementar-o-typescript-na-prática)

## Implementar o typescript na prática

O TypeScript adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor . Detecte erros no início do seu editor.

No exemplo abaixo, temos uma função em typescrit onde os argumentos aceitos são apenas number.

´´´ts
function soma(a: number, b:number){
    return a+b;
}

console.log(soma(3, 2)); // Realizará a soma.
console.log(soma('c', 2)); // Indicará erro em 'c'.

´´´

Exemplos desenvolvidos no curso:

- Uso em interfaces
```ts
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executaRugido(alturaRugido: number): void;
}

// Identifica as propriedades da interface IAnimal.
interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'Aério', // indica: O tipo '"Aério"' não pode ser atribuído ao tipo '"terrestre" | "aquático"'
    executaRugido: (alturaRugido) => (`${alturaRugido} dB`)
}


const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executaRugido: (alturaRugido) => (`${alturaRugido} dB`)
}

felino.executaRugido(20); // executa o Rugido
felino.executaRugido('s'); // indica erro por não receber number.
```

- Uso em Types

```ts
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

// Define que o IDomestico pode ser IFelino ou ICanino
type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    nome: 'cachorro',
    domestico: true,
    tipo: 'terrestre',
    porte: 'medio',
}
```

- Tratando a tag input

```ts
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const entrada = event.currentTarget as HTMLInputElement;
    console.log(entrada);
});

```

- Generic Types

```ts
/* Infere se os valores são strings, number ...*/
function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 4, 6], 1);
```

- Desenvolvendo condicionais a partir de parâmetros

```ts
interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        // Redirecionar para a área de administração.
    }

    // Redirecione para a área do usuário.
}

```

- Utilizando o caracterer "?" para variáveis opcionais

```ts
interface IUsuario{
    id: string;
    email: string;
    // ? torna a propriedade cargo opcional
    cargo?: 'funcionario'| 'gerente' | 'coordenador' | 'supervisor';
}


function redirecione(usuario: IUsuario ){
    if(usuario.cargo){
        // Redirecionar(usuario.cargo);
    }

    // Redirecione para a área do usuário.
}

```
- Criando variáveis com propriedade readonly e private

```ts
interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura{
    +readonly [K in keyof Cachorro]-?:Cachorro[K];
}

class MeuCachorro implements Cachorro{
    idade;
    nome;

    construtor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

```

- Exemplo de como usar Omit

```ts
interface Pessoa{
    name: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}
```