# Setup do Sequelize

  
  

A implementação do Sequelize em uma aplicação com TypeScript difere um pouco do método que utiliza o sequelize-cli para criação de modelos. Isso se dá porque o sequelize-cli não dá suporte nativo na interpretação/criação de migrations, seeders e models em TS.

  

## Configuração inicial

  

Faça a instalação dos seguintes pacotes:

  

![](https://lh4.googleusercontent.com/rpMaBhHhlpjLvzgSP127zdYq71VY7AG71O7egXnzpHWVu651qLGv4KiMJ5DSCVhnjzVNoK7epTyRDAABTmfT4bxfFhyrUVp94J4A2nX5PuxWoM_cJVICxE7_Z9bmUpFdTx-kq2jrNPxvwrr3pHLGwFI)

  

faça a instalação do CLI:

  

![](https://lh4.googleusercontent.com/Dfc20zNo6VjGcL-4No44XPgRNJPiNadjpHS_Klb_DEfUvW9eXULskcm3S-CsowVy9S63kEdDgnyC6ebUuqjXjl43fn9sN1QMk-bjohMj4pzwXIUUlBMileyDwchJa8oBNXuN0V1ZLT6E6i5EpCCziU0)

  

Gere também um arquivo .sequelizerc no diretório raiz do projeto. Ele será fundamental para o sequelize-cli, dado que será responsável por guardar as informações dos caminhos onde é possível encontrar seus recursos do DB:

  

![](https://lh6.googleusercontent.com/7NI0zStUV8xHCGQeYc3FbR615iEQJ1GnaCqME6-K1aVXqZwRBwAKM5fr02lprKqvlbS7cj_RNwG4QCKFoXNqlSjE8S2CZeAXyrKHSPWi2_5QWuefP9qr_5v7ust6qqWLf2H-KMWO5WhO3IzXV2dN0U8)

  

Aqui você deve ter notado que todos os caminhos apontam para pasta raiz build ao invés de src.

  

Isso é necessário já que, como dito anteriormente, o CLI não conseguirá interpretar esses recursos caso encontrem-se em *.ts, sendo portanto necessária a transpilação desses recursos para JS Vanilla. Estamos apontando o CLI para os arquivos JavaScript que o compilador gera!

![](https://lh6.googleusercontent.com/fnO2SKiImCsc2LH4zvRrfqo9UKPVfPW6xsJTplBBMsAhDxM3Ya9NkUHLazmA1GSk3AHOlcOqrvoBqPRE_TMQtwagO8NlyKI5VyFSqc6tkfXkME9EREHO5YoWY_1o2sfW9ZZucA77SHuwWvSi1aZ29C0)

  

Agora rode o comando de inicialização do sequelize:

  

![](https://lh3.googleusercontent.com/ytAobSXbqvKMVnxkHJUx-vmRtVEehBg8ZZ0lzXXNzscjU-ahABZCmarB3-36GYEWCuP8WTlKJn6r2uwN98yNSkPIZZmW6UCF708eRzZI6dsbeghDXnUhGBaHK8wcGcdbVtyfK3B0rr9IEHdTEMJvGIQ)

  

Esse comando deve criar o conjunto de pastas, conforme os caminhos definidos em .sequelizerc, algo como:

  

![](https://lh4.googleusercontent.com/1Kw9xFxX8LX1rpq30w_4lov-p70rTGeVYyboC8SetTsliYujS4PliSfUx_38kvU9LbaD4JoWyaUGxBMewxfV88md-Q8bGrJEb_haYvSYnL0KwEspovu4WwAv5u7chRH3mokzgIM3hFL68DxxhOoYupQ)

  

Será necessário criar todas as pastas no diretório src já que o sequelize-cli criará todas na pasta build.

  

![](https://lh6.googleusercontent.com/PzPZ-O3SQOzuuRxqfgIROVd6EaVVKtdg9L0xy5MebxTkup6fDIT1kIC_QuUAIroAhRM9vDGcJoM8GmXihDSEhl8C4auFCKeA4qRrsweF_r2k3Sa8FA4CzvOwrnxyLvsJJXsxCSGxS3fZqxV0lf-HDDI)

  

Faremos isso pois criaremos nossos próprios arquivos de configuração de modelos em TypeScript.

  
  
  

## Criando o arquivo de configuração e iniciando o banco

  

Crie um novo arquivo em ./src/database/config/database.ts (considerando que o build dele deve respeitar o caminho configurado em .sequelizerc), ele será nosso novo arquivo de configuração:

  

![](https://lh3.googleusercontent.com/zd365nhz4zQOLEY3iia6eA8WDFUMaceQcIfBUEXFH6X_KoyW91Sk41Jr84prffh8IHgOsaFA0bfJQjC2xm8VOEcMyaq8WfH51SiCEgNrmT1-Zmy2Lr2OOBAaPXtO-tFGun24bcQG9kyU26zQizNh03k)

  

O tipo Options, importando da lib  sequelize, deve assegurar que os atributos de configuração respeitarão os padrões utilizados no momento da inicialização do Sequelize na API.

  
  

### Script

  

Para facilitar esse processo, vamos criar um script db:reset em [curto-circuito](https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_curto-circuito) que fará três trabalhos, consecutivamente:

  

-   Executar o tsc para gerar a build (gerar o arquivo que precisamos em build/database/config/database.js);
    
-   Executar o comando npx sequelize-cli db:drop (para deletar o banco, caso ele já esteja criado);
    
-   Executar o comando npx sequelize-cli db:create (para criar o banco novamente).
    

  

Adicione ao seu package.json, o script:

  

![](https://lh5.googleusercontent.com/4oWthyU_mdsWttnhakfkcPdftLOcxiNzsBT-d58SbctDsqegJlHyJCIiQLW8MvgcdqrfRY68ISDipamNvJPV7zxcoqsrhM1WxjuvNI5mEybEdKWPA7QMc5LW2KFdyh1Jt6RjQr1eOeVlcooVhEV_eG4)

  

{

// ...

"scripts": {

"db:reset": "npx -y tsc && npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed"

}

// ...

}

  

Verifique se os dados do banco estão corretos em src/database/config/database.ts (sobretudo se você estiver utilizando arquivos .env). Caso o serviço MySQL esteja operando por meio do Docker, lembre-se de iniciar o container. Agora rode o comando npm run db:reset:

  
  
  

Se tudo correr bem, o sequelize-cli deve utilizar o arquivo build/database/config/database.js (gerado pelo tsc) para criar o novo banco.

  
  

## Instanciando o Sequelize

  

Agora crie um novo arquivo em ./src/database/models/index.ts. Antes, esse arquivo era gerado automaticamente e já fazia o reconhecimento dos models gerados pelo sequelize-cli.

  

No nosso caso, esse arquivo servirá única e exclusivamente para gerar e exportar uma nova instância do Sequelize, baseada na configuração anterior (já assegurada pela tipagem):

  

![](https://lh4.googleusercontent.com/MuFRWirdb2ehYhMF9b49pHMgJyjyso4z6JYIjdQRCXiRE03qPiEjZmzJoHemXNLhgTXdmL1B7cHtZKfkG1DeOucb5u-u1sPXMiy4OeCpLh4uQTxpekyE7lXHYN-P9LlZ8GcssetM7XD83B2uAry-5ds)

  
  

Essa instância deve ser utilizada na implementação dos models. Veja um exemplo abaixo.

  

![](https://lh4.googleusercontent.com/pGwcU4Z1kVA9DsRwUNk4uBiLmuR-cfr0c_OdP7Dm_img5p2M_2qnRgcNaBFPV8pLQFp0b7jY_ptY0TdWNVUy8YtR397QTqdCk1WeGO2JiKs2hRB_2gtIsuDy74D1Xxr4qXJfGgrTYvDr2TKbEVgdF6k)