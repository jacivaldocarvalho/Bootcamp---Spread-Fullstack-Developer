# Debugging e Error Handling

## Conteúdo
- [Debugging e Error Handling](#debugging-e-error-handling)
  - [Conteúdo](#conteúdo)
    - [Tipos de Erros](#tipos-de-erros)
      - [ECMAScript Error](#ecmascript-error)
      - [DOMException](#domexception)
    - [Tratando Erros](#tratando-erros)
      - [Throw](#throw)
      - [Try/Catch](#trycatch)
      - [Finally](#finally)
    - [Objeto error](#objeto-error)

### Tipos de Erros

#### ECMAScript Error
Erros que ocorrem em tempo de execução. Exemplo: falta de ponto e vírgula (;).

Composto por:
- Mensagem;
- Nome;
- Linha;
- Call Stack.


#### DOMException
Erros relacionados ao Document Object Model (DOM). O DOMExceptioninterface representa um evento anormal (chamada de exceção ) que ocorre como resultado de chamar um método ou acessar uma propriedade de uma API web. É assim que as condições de erro são descritas nas APIs da web.

### Tratando Erros

- A instrução try define um bloco de código para ser executado.
- A instrução catch define um bloco de código para lidar com qualquer erro.
- A instrução finally define um bloco de código para ser executado independentemente do resultado.
- A instrução throw define um erro personalizado.

#### Throw
Tecnicamente, você pode lançar uma exceção. A exceção pode ser um JavaScript String, Number, Booleanou ou Object:

```javascript
throw "Too big";    // throw para string.
throw 500;          // throw para number.
```

#### Try/Catch
A instrução try permite que você defina um bloco de código para ser testado quanto a erros enquanto está sendo executado. A instrução catch permite definir um bloco de código a ser executado, caso ocorra um erro no bloco try.

```javascript
try {
  // Bloco de código try.
}
catch(err) {
  // bloco de código para lidar com erros caso ocorra.
}
```

#### Finally
A instrução finally permite executar o código, depois do try e catch, independentemente do resultado.

```javascript
try {
  // Bloco de código try.
}
catch(err) {
  // bloco de código para lidar com erros caso ocorra.
}
finally{
    // Bloco de código a ser executado independentemente do resultado try/catch.
}
```

### Objeto error
JavaScript tem um objeto de error integrado que fornece informações de erro quando ocorre um erro. O objeto de error fornece duas propriedades úteis: nome e mensagem.

```javascript
new Error(message, fileName, lineNumber)
const MeuErro = new Error('Mensagem Inválida');
throw MeuErro;
```

ou

```javascript
const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;
```