<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="src/style.css" />
    <link
      rel="stylesheet"
      href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css"
    />
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <script>
      $(function() {
       $("#accordion").accordion();
      });
    </script>
  </head>
  <header>
    <title>Spread Fullstack Developer!</title>
  </header>

  <body>
    <div id="accordion">
      <h3>Módulo 1 - Conteúdo de abertura</h3>
      <div>
        <p>Concluído!</p>
      </div>
      <h3>Módulo 2 - HTML/CSS</h3>
      <div>
        <p>Em andamento.</p>
      </div>
      <h3>Módulo 3 - Javascript</h3>
      <div>
        <p>Pendente.</p>
      </div>
      <h3>Módulo 4 - React JS</h3>
      <div>
        <p>Pendente.</p>
      </div>
      <h3>Módulo 5 - Banco de Dados</h3>
      <div>
        <p>Pendente.</p>
      </div>
      <h3>Módulo 6 - NodeJS</h3>
      <div>
        <p>Pendente.</p>
      </div>
    </div>
  </body>
</html>
