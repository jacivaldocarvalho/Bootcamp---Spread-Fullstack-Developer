# Introdução aos Reacts Hooks
## Conteúdo
- [Introdução aos Reacts Hooks](#introdução-aos-reacts-hooks)
  - [Conteúdo](#conteúdo)
  - [React Hooks](#react-hooks)

## React Hooks
Hooks são implementados no React 16.8. Eles permitem o uso de estado e outros recursos do React sem escrever uma classe.

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

Nesse tópico, foi desenvolvido um projeto que gera frases aleatórias realizando uma requisão de uma API em Python. Foi utilizado boas práticas de projeto como abstração de componentes, criação de testes unitários, uso de pro-types, dentre outros. E utilizando Hooks e useState. Dado o projeto no curso, desenvolvi uma versão com frases da série Dragon Ball Z [Frases DragonBall Z].

Documentação do React Hooks: [React Hooks]


[React Hooks]:<https://reactjs.org/docs/hooks-intro.html>
[Frases DragonBall Z]: <https://github.com/jacivaldocarvalho/dragonball-z-quotes>