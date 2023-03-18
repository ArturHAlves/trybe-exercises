# Comandos Básicos do Docker

  

  

Chegou a hora de finalmente conhecermos os comandos básicos de interação com o Docker, através do CLI.

  
  
  

os comandos feitos através do CLI são enviados para a API interna do Docker, que, por sua vez, envia os comandos para o Daemon.

  

![](https://lh4.googleusercontent.com/FMsFJbVmWzsl4Yhm9LGuLgOx39aV45iJrEnjV55vCFD_cIY1iGftO2Fy-wcIPK7W0JDSPbB7osB98ag_HXXPLYdbxZmFVZRROfLRZ4ycrglz01WOYrOHzLaYaQRysZLhvx9UCRmKoZH-oAwKdXUPW_k)

  
  

## [IMPORTANTE]

  

-   docker <comando> <subcomando> <parâmetros> é o formato padrão para comandos não-abreviados no CLI;
    

  

-   Utilize o parâmetro --help no <comando> ou <subcomando> para ter a relação completa do que pode ser executado a partir deles;
    

-   Exemplo: docker container --help ou docker container run --help.
    

docker container –help

![](https://lh3.googleusercontent.com/t52zkooqk5jgWs8fK_R7tVUWZ1pGaZ79Rqlk9bnHSSBHNBT7GwSx3L4lLP33qUSgQt5e21f08ZGcbhqZXI1pZqI9pM7Pp1olAwEtRi02MAQCg9JEbrv0WRZVlVT1U1USWbGPJ9MsmV_o-CdZvViGwuo)

  

-   Os <parâmetros> são opcionais na execução dos comandos;
    

  

-   O conteúdo faz referência à [documentação oficial](https://docs.docker.com/engine/reference/commandline/docker/) do Docker.
    

  

  

  

  

## Listando imagens

![](https://lh5.googleusercontent.com/MlKWnkSCUAVre0sOoe2En50z7yai1hqRJPir0Cd_ISknYvwxld8UL2lXsSqPLCudat4a4-odHbyqAbwr8I1opWByBKrXB9oY-ZUNiNUEMPKVm1yeShx6RG5Wt208lfkNyBV_wMylIFRly6MI9Kf-azc)

  

➡️ Utilize o comando docker images para visualizar todas as imagens Docker que já estão presentes em sua máquina.

![](https://lh5.googleusercontent.com/o7CSQ7S1PFlZmA8OnohMrzLjt4DohEKwpA3eI1lUT13z70_4Y7ScFDs_-I3CuQdbXJm2_H3tY0L9AT_uN4LwqkOo-lmm4gSFQXwKxgBHQI3-qgXp-SfsbnDPW74qSzDg2noAu--Mu8g0NwAx79mOqBQ)

  

O padrão docker images mostrará todas as imagens de nível superior, seu repositório e tags e seu tamanho.

  

-   Agora, veja um exemplo de saída do comando com uma máquina com várias imagens Docker:
    

  

![](https://lh4.googleusercontent.com/cawA7jlW2qMgxGyAI6lr2rsEsW-gYUlr5M60VLamD1muiqn02NUdf2MyMOeDYrSEvWQzMJZ8XlVb70lRmry20Xi-lEeTRKubFdX6WDng2guKR731EasAdFA-JfyOHrmTb80d-P9x2DE8Q0-cnOWWrgc)

  

#### Listando imagens por nome e tag

docker images comando aceita um argumento opcional [REPOSITORY:[TAG]

Por exemplo, para listar todas as imagens no repositório “java”, execute esse comando

![](https://lh4.googleusercontent.com/Mhn7meoc3XN-M2xJBezoCpHyWA8uSndSoDNzWqynkGGJxFXA1dLsZxqXIkbWtS5jUhg7G_tQD7aSUp56L2p0oLWbhCrTG7XzPLGz8q1ufz5FgRE6_aSbewDcTapvTLG9qEOJblE_0XZgzwXg88C2lT8)

  

#### Sendo possível listar [REPOSITORY] e [TAG]

![](https://lh5.googleusercontent.com/GiS-tywTemkSbV4XGYMsHnXBhBFbTGeAa7Boh8NTT10VUQLseL5ePdM1-zXkg57qbx-T9_vbc898QhyeFyk_jzQVtMuoMTBAwl51JuWFI0PYwHCOGDjIT10WPx8kvrBh6x7idQ_a0xUzRHfsaWHJI2U)

  

#### Remover uma imagem ou mais

  

![](https://lh6.googleusercontent.com/D9kuLrQip94ZMd7cStFo3eBpOERQz7BoVSQ0iMyjJRdFCeMrGXtXw5W-ujdHOoiyXS6wlTCACawAzod9ByrHWNLo0BrSeGPzzfl0qwqeGImdPyOZVga6bB2KfqfTIIRZgCmXC-lRHrLfc36owgGHqpE)

Você pode remover uma imagem usando seu ID curto ou longo, sua tag…

![](https://lh5.googleusercontent.com/aIfZ2PXOyBMBBmQkl6OgFvSOjkGPoeOc3bE-FhqZTi5RQz63l3x84plG7Ru5P_m80dEdSn3nONy6UHgI2LW1l1s2-r1V-7uKOXlC2vhYoqLe5UeeOX1TB-ICFrQSAMxGlpj8RZVQFHUbwJl7iGQDQtw)

  

-   Removendo por ID
    

![](https://lh3.googleusercontent.com/7x9MzWT3oMyd0qHSHErHZ-qrEAipIEc-Ql7eh4F_vLc6U-1vYPhEAu6XL3JlioYB22Id1-n3rl-8jJJCdXqg5JVGLo6o4XPHQNtr9fIBMqDVi2DrsVVUPPzWxN4JHDpzMAbfBUh8hkXvtFXYHDl9ivY)

-   Removendo por tag
    

  
  
  

## Listando containers

  

➡️ Utilize o comando docker ps ou o comando mais novo, o docker container ls, para listar todos os containers em execução neste momento em sua máquina.

  

docker container ls

![](https://lh6.googleusercontent.com/NVnTH1gBTlxL9yTle83vmpiyptQqdP5NFTb4Gcct8SGDa4-ct44ySk89mV3NBuWiw9g84E5q9We5bUsbJyCIVPW2QG0v7ZfUwSM3lND4ZH_8oly9Fjpa_ImH_fSl414G14BlnusCbILOJ-_yFpEePmo)

[OBS] Esses container são os que estão em execução

-   Para mostrar os container que estão parados ou que terminaram sua execução
    

Utiliza o comando: docker container ls -a

![](https://lh3.googleusercontent.com/WgiiH1P4MdvA9oLczPahD6U5NoI_-Zwg4HdC-hikZH4_zmHLxHZbFDQSeCaUT_vhGbj6hFLMxAOY3tx6nWGbvAby56WpXf2R4h2gBGlbPn_I1NWGVA7sukb4glMXnaOu9l9n333741iileIuNwIruGA)

  
  

## Executando um novo container

Utilize o comando docker container run <flags>? <imagem>:<tag> <argumentos>? para executar um container utilizando a imagem identificada pelo <imagem>:<tag>.

  

[Observação]

![](https://lh3.googleusercontent.com/drhgDXaWq-LTk0rzkTZk1h2WvmiHf5If4WSRK7YQM5DeqLrbLRV5rX86Z4fwN4u58LgC0LU96rsWvNsh1P6m6NU9rjx0UTtPKY37fPxWFICZInYwQfR_1QRyrV0Ledc0QJ4ZkWPTeYqE5s8bfG4h5es)

  

Exemplo:

-   O exemplo abaixo executa um container usando a imagem Docker alpine e a tag 3.14:
    

  

![](https://lh4.googleusercontent.com/7d0x8lnS7nB2Sq8lmzIBvYk0W6IYxhgOp9avZMRQa6Sl925U1cgHs_-dDy0QDClKmc1HrZ5vb0tBAXY9-yF77axAWV4ccctqsVGQh4dtZ3OaFOcMcraFdEwxDQ_7v7M0ycXEd80GppR2-Pg8BtT7WYg)

  

PASSO-A-PASSO

  

1- Pedimos para o Docker criar um novo container, baseado na imagem chamada alpine, usando a tag 3.14 e passando os argumentos echo e "Hello World";

  

2- O Docker verifica se já temos esta imagem, com esta tag, no disco da máquina;

  

3- Se a imagem não é encontrada, o Docker imprime na tela a mensagem Unable to find image 'alpine:3.14' locally e começa a baixar a imagem do Docker Hub;

  

4- Com a imagem e a tag presentes no disco da máquina, o Docker cria um processo isolado e utiliza a imagem Docker como o “disco” base para este processo;

  

5- Como estamos subindo este container passando os argumentos echo e "Hello World", o comportamento padrão da imagem alpine é executar este comando. Por isso, nós vemos a saída Hello World no terminal!

  

6- Ao executar o comando docker ps -a, verificamos que o container foi criado, porém ele já terminou sua execução e ficou com o status Exited.

  

  

![](https://lh6.googleusercontent.com/ESdt15sY5earJmHVQ_DsjMCYNI9DBOv7mTPuEDCL6_lFYe9uzkCrt5BpnjmTTxBCwlNq0G9U62P8bYpKGj0CFIYdZwwWuVDkWLl5p07zQFX5dbiyZ_lpsDU-cyleK9viKNj9B8jZ31MfzwZCwlPkdBs)

![](https://lh6.googleusercontent.com/CtNnl3SNXc2fTX-xkGyWrk61cN2ANfHV5G1as_dx3zUIGTD8URFQ32KY0-XRAQ-UOuTC6mN2Dhth30_msTM2HvELur-ghFmx2WCVKTAwSGxDW53TRKwKyJyS6JNj6e7PLcCPyj1_UlA0iPTqWB-sXyE)

Dar nome ao container: docker container run –name (nome do container) alpine:3.14

  

![](https://lh3.googleusercontent.com/G3r0F13boyP_zIBnsC3n69KqJvjH5qL2Mr2y3_F_3temzzp-HP9eaicgvk4wRmxa3cObq0XSefvn01dqYWLrw2SB5VGM8r558y0qpVuSOS1oNgioBF4Z9kJ97TUuFEymPlvPFCFUogAqKV9ow1rLQ5I)

docker ps -a

![](https://lh5.googleusercontent.com/1zi4Vt0uusM-HEPMxpKF9rIJ-LahpYviivLS3TMy9sJtL9uPB4hyYznn3yXefzEKVNhnAYvSGLpkrpZsH9jyo_WmHphHoMnFJXsBCT2Ye5tCRFPPmPukjqpSeUyzFCi9qJShTIgIUcsHKS3rXrc4N_g)

  
  

### REMOVER CONTAINER

  

um container só pode ser removido com o comando docker rm <nome-do-container> se ele estiver parado ou tiver sua execução terminada**

![](https://lh4.googleusercontent.com/d7Z5KVWNE9g8aIdABPiAyxJ6vs_WpumubBq9XzFwlHjIb5B5xOfWVbJT1uKwbHpSVXOoOluwEqVvLUTC4euKTKx2SxeRxL9j_mFEtXYfE6_kpKVodvRYPeRI-2x8OxhJTcryEO39jsRD6ulekNmPGJE)

  
  

## Modo “auto-remover”

Este modo é útil para testar várias imagens Docker sem ficar com uma lista de containers parados. A flag --rm indica para o Docker que desejamos que um container seja removido ao final da sua execução. Veja abaixo um exemplo do uso da flag:

![](https://lh4.googleusercontent.com/7NDz_OfkXlwe_RqdGQhJ05s70sE-nZCLwVoqIgVPHa72GqXNzyiMIyt-l6PM1mexz_zG_UqY69rGXV4lqeMVWeuTFrB02Sjj9HKJ9gXFRDsYFNoKcGmSOVw7WnGln4WH2K6obsNfF7Hd8Iv10n3ppzQ)

Isso significa que o container criado pelo comando docker run executou, terminou sua execução e o Docker já fez a remoção deste container automaticamente.

  

![](https://lh4.googleusercontent.com/eqVJ6WsDnw8YDnaMGU4QlG8jvbAexdyyuTWSfbrRpzRfQEk-KPboCgaQT-ok1a6-MjxcD7bJ7MaRMEUjKvmJ3t38-2gvZknDmFkk3hBJXap8NHzqLwBYde2bN_esqJtnoClpQWDzbBRn6xA6ZkF6s0c)

  
  

## Modo “segundo plano”

  

A flag -d ou --detach faz com que a execução do container ocorra em segundo plano, ou seja, embora não esteja visível, o container executará de forma assíncrona. Esta opção é interessante quando o programa a ser executado é um servidor ou algum processo que você sabe previamente que terá uma execução demorada.

Veja abaixo a saída ao executar um container no modo detached. Neste exemplo, trocamos o argumento echo pela execução do programa sleep, que fará com que o container continue sua execução por 300 segundos (5 minutos):

![](https://lh6.googleusercontent.com/ViDB7YT0m5NgZY1HuQE_5XmPJyk3ueyzQoh6W3g7h3cv5BEo8xUPoHlNPtuDjATPLtoH4jiPEcr1GjV440P2LbdgUpDIjI6Tq4yZsZzEGid9rIOYPk7mpSBMVlibD4epSKbT4RSDLLeZt7wh9mnGFac)

  

FORÇAR A PARADA DO CONTAINER

Podemos usar o comando docker stop <name-do-container>

![](https://lh6.googleusercontent.com/BqvD_GLqngDslOYMTnt0r925Pj2UWwYo00bvaVeUUr2QXh2UECsa1YthgdHp_D3z8XOvVlFGGQVA-fpjGUUJWEvEDekdFkjdkd4utm3za5v2GbZwlr8z3ZNGOzOSntPr2JRaEoq_Pdl0x8X4lEqH6nk)

  

![](https://lh6.googleusercontent.com/I4rSTPWB-vsDiawhW6iU2VfMXYtfsPzfJq1b29YvI2aFP3lr6_xa3nnJ3JEzkvelkWGLVL-M9bVMbYfzpLw0ud3cAyqDeuurGBgs6T_WuJCe5C8zjuLGJgvBRGmLbYQ0tTR1TY2NGbiI84jqpt_WrCw)

  
  

# Comandos Avançados no Docker

  

## Acessando o terminal do container

O Docker nos permite executar um comando dentro de um container que já está em execução, isso é muito útil, pois nos ajuda a encontrar problemas durante a execução dos nossos projetos

  

docker exec

Executa um comando em um contêiner em execução

  

[OBS] - sh - Permite simular um acesso de terminal dentro do container que já está em execução.

  

Exemplo:

Vamos utilizar o comando

-   docker exec -it <nome-do-container> <comando-a-ser-executado>,
    

testando o acesso ao terminal

1- ![](https://lh4.googleusercontent.com/NPLCyjDdPr8MgnirQF8OlSYf58j28qxyVohf2oDnibgCvby8ezg_CfMqlp79eBtRLQFWKtCV4HdgR4kDH5y2B4JvV8qkQTjxfJjQppLAizEMVMHI5Ku8MWrJqRgAK0v4gI1UHkR3MeUdSVfEkc4oENU)

2 - O container está ativo(up) ![](https://lh3.googleusercontent.com/u6lBqoScQVlYHrK04LjSrEbLQ0XVL36biprrm85Jj7ugnms-SyQXwp7qVAvKqOdJtameSkhJaLCyaZT15W5rzrBCcB0Yn7qT8BfQ81x7tUOIZ5ejS3wDCxIbBS9cA9ZvOyyrRIQ1ajAukGqID6KwohA)

3- Vai executar o container, acessando o -it terminal interativo

![](https://lh5.googleusercontent.com/q_e5QdGUN6Z_kwPfctrwOyG-eTKpVjifbXFpn8ch0ARJbSDEh5UjqHrMVClYuMMI4UGO1JubybNKBnuFxi7tnSs54o5pbIhMgOKK1x8XmtRq5T7yn9xt1o84GBm5VbcQ0vFkq4HCkbMvATiXtvGYKbk)

Vai sair do container (exit)

  

4-

![](https://lh4.googleusercontent.com/-PEX92ouomzeZQzy8duTe1tIneYIUK0qMN0p_cxzS2X7n8ov-TrfMZzS3eNIseN2fN9Eg1Klf8z0Tpwk7JdQnLEysh1hUHT7OgyZjFgsLo2hdNuomrr1UqYOtA781JAFqGyryBw47OrJazT0WHzad04)

  

##### PASSO-A-PASSO

1 - Criamos um novo container a partir da imagem alpine, com a tag 3.14:

![](https://lh6.googleusercontent.com/9ZHk5rAfBJHhHsm7ZS2dSTWHVUmKB3PkEBda1Ltr68JnEaebi-gkjbRnX6ojKt2HsxCHbsadBFXlKktkTFtqEAs4H4NUYfo3DKhAbYRUmoH9ce7ylvVNEFvSJT5qpQmWmWZ-U_s8TXBbjwSUYREk5lE)

2- Verificamos a lista de containers usando docker ps, apenas para validar o sucesso do comando anterior:

![](https://lh5.googleusercontent.com/kN7GqSrlSOHFJdEVO6HeuCwY2xHKB6SBX0XnalX2-gZds-rQy3TtgUEapTAQ5GqwuvCAEcKXIj3OVaPBQeGeoTN5O5v1Dh5CH4Phpp1gBtAq4HKR6F-Os54XSHBDEfkhXBKLPipJdZcLtT5L5k9fhe4)

  

3 - Já dentro do container, executamos um comando ps aux:

![](https://lh4.googleusercontent.com/HNxAByqnVgdq2MkQH7nGXvZcFTR1HqrKk2NtkwU61MsSxmHERsMpB8asZR0Dm7MvenL8nATXu6hDnak0sGeDecpkyB9GKEUEQ2Spp-9ir22TWF8Cipd1-9zj4-I1b6Ab9OiwlVv5cuc5b35ZnPGmxu4)

  

-   4 - Usamos o comando exit para sair do terminal do container;
    
-   5 - Forçamos a parada de execução do container usando o comando docker stop;
    
-   6 - Validamos que não há nenhum container restante na máquina usando docker ps -a.
    

  

  

  

## Ver os logs de um container em execução

Quando executamos um novo container no modo despatch (segundo plano), nós deixamos de ver as informações (log, erros, etc..) que o programa está executando

Docker oferece um comando para que a gente possa ver essas informações sem precisar se conectar diretamente ao terminal do container.

  

docker logs

Buscar os logs de um container

![](https://lh6.googleusercontent.com/b1A1l6x9Wr1XgaKONBpBZ6HtftEJHU8cUuhuztwHbaaK8xXllI37-kbxBqRYqTT4M2F4OYXb0w_lj9mQCyXPca9GLCfoXuEYXKcNxzwCGysEV8tESzu13X1Cc7v2Xt9LBP2kIZFIZcUeFvNDlQn9IbA)

Exemplo:

Vamos utilizar o seguinte comando

-   docker logs <flags> <nome-do-container>
    

1-

![](https://lh4.googleusercontent.com/3v3ubZxlKSMccbiQE8DPu3U6dw490tVFTLJBfIEEgGECoz6C1Lb9FK9iudrdwcEKpkOih2BdBaE7KWGszJbpew0MVw_TEi-ZGH06K5p3WQqzFc6NB4c4taxIWBNWF8CIOzgIrJFRRcx-6UEP4M6sjJM)

2-

![](https://lh4.googleusercontent.com/4W2VUKfVgesPKPHrw20r3Ehdxq9Cmx0FuItj-EYIQCGYMiA9WyI4_ApQ6p5y6hRD236fbPVoxeIJ1pMYZPvvqDaC-eopkR7Ly0DDre50KYnFEZJBtwY6oP7pX4ZoAGqcz2RbPk5TloLZmoO1PQgG3-o)

3-

![](https://lh5.googleusercontent.com/hHZ2u1X8VnxxN7qmbSlOJAVvaisCYe0HUNdfqOSCmsrY9q4ak-VPfu7zMuIkpFagayftg4VuodXFT5GUd2P6_lnKB8EqAPO5Fb3ctYM2sh0VhaTifNDF0ggDPD35ULPxqn6SeBKxMHlXtSx9SRhuzys)

Ilustração do comando

![](https://lh6.googleusercontent.com/UTK-PumwTlu6Ow82AjTeE2oXBb2iwsz3vIRvkYu1ILbEAQIkuHy-v69L4DBA06V_glxQahNv28qXMZAxMi3opy0utel45vnq2HRne7-zGXSvui8cbUpehu39NwNFfxwUwiHdaPFQKKNxmQ-YZ2bA-SA)

  

##### PASSO-A-PASSO

  

1 - Criamos um novo container a partir da imagem alpine, com a tag 3.14:

![](https://lh3.googleusercontent.com/7w3CvFcG_YxwKnhqHyYQD1O-nCsUm7caPNve4p42kvaYo3FAyrZgml0gbnxSiS6nv8UQOqYMnXg_9RIlALChG18xFNPijde1tRMevIelNAimWeni0gnAbgFK-N0OL8Fpev3FaKDb11NLPgX62-176ME)

  

2 - Verificamos a lista de containers usando docker ps, apenas para validar o sucesso do comando anterior:

![](https://lh5.googleusercontent.com/4SHZU6e5jS4G8tsDCX4IattLhz4LxoAoExKNiQw3mupmeq1JrYcHipjgLsk-1RbB1gebd4nbKsYTHIDPBjVVB6haXa3TXX5ZSnn3rWfwbsFRPDHMXY4chj5Pp-z7N4jPyAawazhvGZIafqa6N4XLcMw)

  

-   3 - Executamos o comando docker logs meu-container:
    

-   Não especificamos nenhuma flag.
    

-   4 - É exibido na tela a mensagem Tue Apr 26 13:29:32 UTC 2022, que é a saída do comando date, feito dentro do container.
    
-   5 - Após isso, removemos o container usando o comando docker rm.
    


## Limpando containers que não estão sendo utilizados

O comando docker container prune remove todos os containers inativos do seu computador.

Além disso, ele pede uma confirmação para executar a operação e no final mostra a quantidade de espaço em disco recuperado.

![](https://lh3.googleusercontent.com/mpfLwaJHyplHjL_ZwPLjNHU6AHoy_xFvlWlFByvPqfzeaZgnVxlcEuIRPh-MK08OWShvfRpzc21ZcfAf9jA83RNB8IvMfi65UoVkXHOa5B0g4QrDrzlg8TtsF23RjZmYhGbnHwjYnll5JY3f8cfELLk)