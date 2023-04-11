# Glossário

  
  

## Módulos

Módulos são como “caixinhas” que isolam suas funções, variáveis e afins de outras partes do código. O Node.js possui três tipos de módulos:

1.  Módulos internos: também chamados de core modules, são módulos que já vem com o Node.js quando baixamos o runtime.
    
2.  Módulos locais: são aqueles criados por nós na nossa máquina. Eles representam as funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes.
    
3.  Módulos externos: são módulos publicados no NPM, que as pessoas podem baixar e utilizar em suas aplicações.
    

  
  

## Node.js

O Node.js é um interpretador de JavaScript construído a partir do V8 (interpretador utilizado pelo Google Chrome) e que permite a execução de códigos JavaScript fora de navegadores web. De forma resumida, ele nos permite utilizar o JavaScript no backend da aplicação.

  
  

## NPM

O [NPM](https://www.npmjs.com/) é o site em que são publicados os pacotes Node.js. Dados do site [ModuleCounts.com](http://www.modulecounts.com/) mostram que atualmente o NPM está entre os repositórios com maior número de pacotes.

  
  

## npm

npm é a ferramenta de linha de comando(CLI) que realiza o gerenciamento dos pacotes Node.js para nós.

[Neste repositório](https://github.com/tryber/Trybe-CheatSheets/blob/master/backend/nodejs/npm/README.md) você encontra uma lista para consultas rápidas dos principais comandos npm (Cheat Sheet).

  
  
  

## Pacote

Um pacote é um conjunto de arquivos que exportam um ou mais módulos Node.js.

  
  

## package.json

É onde estão algumas configurações importantes para o nosso pacote como nome, versão, dependências e scripts

  

## Promises

Promise é um objeto usado para processamento assíncrono. Uma Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca. Se o código é executado sem nenhum problema, ela é resolvida por meio da função resolve; se algo de errado acontecer durante a execução, ela é rejeitada por meio da função reject.

  
  
  

## Scripts

São “atalhos” que podemos definir para executar determinadas tarefas relacionadas ao pacote atual. Eles são criados no arquivo package.json, mais especificamente no objeto scripts. Lá, definimos o par de chave e valor correspondentes ao nome que usaremos para chamar o script e o que será executado ao chamá-lo, respectivamente.

Marcar como incompleta