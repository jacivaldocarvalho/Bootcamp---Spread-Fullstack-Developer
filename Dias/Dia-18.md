# Introdução ao TypeScript: Classes, Tipos e Interfaces
## Conteúdo
- [Introdução ao TypeScript: Classes, Tipos e Interfaces](#introdução-ao-typescript-classes-tipos-e-interfaces)
  - [Conteúdo](#conteúdo)
  - [Implementar o typescript na prática](#implementar-o-typescript-na-prática)
    - [](#)

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
