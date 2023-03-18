# Instalação do Docker

  

O primeiro passo para utilizar o Docker é realizar a sua instalação. Isso nos dará acesso à sua interface de linha de comando (CLI).

  

No Linux, o Docker não possui uma interface gráfica de utilização (GUI) oficial, mas existem várias opções não-oficiais disponíveis, bem como [uma extensão oficial da Microsoft para a plataforma no VSCode](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker).

  
  
  

## 1. Desinstale versões anteriores

## Caso você já possua alguma versão de Docker instalada na sua máquina e queira refazer o processo de instalação para atualizar ou para corrigir algum problema, primeiro você deve remover os pacotes da versão que está na sua máquina.

  

![](https://lh4.googleusercontent.com/Jmbn2gis-bdAAfD-vY0dgEwqPhc5WdD5vT7ENaUMx6JsEQ5dwFZh3EO42QTONgv0OvvqypT7XswDneg44NmJiTTsL61z2WUFKh9jpDrI5pmM5yccEjyn_xnpZlTp-1xwnI0GieDe9GtTB7ucAAXwluA)

  
  

[dica] o Docker preserva informações sobre imagens, containers, volumes e redes na pasta /var/lib/docker/. Nesse processo, esses arquivos não são apagados.

  
  

## 2 - Instalando as dependências iniciais

  

Para habilitar a obtenção dos repositórios via HTTPS pelo apt-get, instale os pacotes listados abaixo. Nós precisamos disso para prosseguir a instalação:

  
![](https://lh5.googleusercontent.com/zwdxOtQ1i54-4qcoFH0tWF7kcSORIHMB5Wpw5marTl6a3VQr8ltaqKficR5KE_yGTdirCCkrOooV3lX0ORpKCN54c27YF8pBzfxBrTO5jueXkqOBihQq095WQxXRMbbcmxv2NC9QQxw6X4E_ON8Rjb0)  

sudo apt-get install \ apt-transport-https \ ca-certificates \curl\ gnupg \ lsb-release

  
  
  

## 3. Adicionando a chave pública do repositório Docker em nossa máquina

  

Para adicionar a chave GPG* oficial do repositório do Docker, execute o comando a seguir:

  

-   GPG - permite encriptar dados, assim somente o destinatário terá acesso aos dados.
    

  

![](https://lh4.googleusercontent.com/qtp9Q3-bKH4NiYDGymsqQ9Yc6G-xunzTaWrRnOJG44kZEkYPPftoEbMhj7OcprTotlJI9CTVZ5Uj2MlJejsFFr8T13mGuzS82Tt2ybHKWiNyx2nInsG31Asxw1hHDo52YA_1rcd2W6UEumATSKY9q8w)

  

![](https://lh5.googleusercontent.com/KoWshe_arEDPmTK9oTtGwUX7rRxgz3xyk5lzs0yJywrCx7KPVdS4Ml2gr6su-YqP8A0q4_Wz3pC8Kd1CztSph9TMnqdW_cLaDkhZG3w_zJrztHQe7MMK81RuTBqwLS01u0dVTP2yHE-us_mN7NPVQYQ)

  

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

  
  
  

## 4. Adicionando o repositório remoto na lista do apt

  

Para finalmente adicionar o repositório oficial do Docker no apt, execute o seguinte comando:

  

![](https://lh6.googleusercontent.com/C777JTa4xojMm2SJmxiaMV-GatP2ArEIkB_Pe0OX8DUo6xz-CMQW3q4YkLVNIZdIsF3F68yfd-e0PU2HcHtSHNoOTbvr-Ujfj6Fyfs_-maajyeJptgRbHDrWbCH6xG1TKub7TQjADcQT8T_0RVDBMrk)

  

echo \

"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \

| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  
  

![](https://lh6.googleusercontent.com/00YJ1gIR84eEWxMTAyh2l5pgsF5YvI4V6PCmT-8gB2XAAG1c11IZ9S1wode16Bz8iUWFX7uD0NwnSzMvKdd7KAHcju13Ps-0hyF9BXz5rULHeyIc_7XlDcOrpLZ4dWh1SEHVZ9xBXISOfqBQ5spS4G8)

  
  

-   Minha versão do Ubuntu
    

![](https://lh3.googleusercontent.com/BzJuVie16HJ2b_xaWDk2hLCzRtxZjBDaFwx9U-BDi-vAgovrtcGT_vVHZFGnqCuoVHmd0f9FLK6OAJq2bTfvF2jjA5sFsv8679cWm5eRnrfXNfkAFmI9cDtQUsJ9JRTI7XDMEs9f2WQmzsDJCbfBT78)

  
  
  

## 5. Instalando o Docker no Linux

  

[https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)

  

[https://lifeappshelp.zendesk.com/hc/pt-br/articles/360048641073-Como-instalar-o-docker-no-Linux-Ubuntu-](https://lifeappshelp.zendesk.com/hc/pt-br/articles/360048641073-Como-instalar-o-docker-no-Linux-Ubuntu-)

  
  

Instalação do Docker!

  

-   Primeiro, vamos garantir que os índices dos pacotes do apt estão atualizados, já que adicionamos um novo repositório:
    

  

![](https://lh3.googleusercontent.com/SWZZED1YAR9aVXq_LEBQdW6Wq6rOI5AQRztEZq20xYiXfF6wxQ9C1XL746C7Odt9oFHAXv2iS4Wy134V9NFTJG_D_RrT_1LYCGAOfndqL1KFFFx_0YEfLSCNsyO_7mYq2ECwFjKUsWEqkDyA6iqozRU)

  
  

-   Vamos instalar a última versão estável do Docker Engine - Community, que é uma versão mantida pela própria comunidade, já que o Docker é open source.
    

  

![](https://lh5.googleusercontent.com/fzHyJ7zVg-wBD3ZLELlbYM8-H1-1qSTsvxyfuaWzJCX2Nyv-aSs9KY54C08kkHTmnnqSBGgryBMzZlJeVoLc4o0s1PoN8VGa3INSszgMxNKu1WvN21XNMvGhqlBm_L8M4d8l1Gyqv4Pd5y4Pt8h9OXQ)

  

  

  

## 6. Adicionando seu usuário ao grupo de usuários Docker

  

  

Para evitar o uso de sudo em todos os comandos Docker que formos executar, vamos dar as devidas permissões ao nosso usuário.

  

  

-   Primeiro crie um grupo chamado docker:
    

  

![](https://lh6.googleusercontent.com/n3LwCMMpYFgy_yg37Bm3oI0O-nUMw7pMxPEHIk7m5UtdiMzQQTsMyxd3gTzFK-mRbdWCRWD7lqIwNcFWWybU7Ff6NdA-wJ6S54-XcBaIJ0ogANMDr-sllTnrtc8PE1UlG-JM5ZG3wUOBAMKNKHo5jTc)

  

Caso ocorra uma mensagem: groupadd: grupo 'docker' já existe, é só prosseguir.

  

![](https://lh6.googleusercontent.com/hAi8gecL2R1LXD4c_0uM7t8CW_lgu53UK4WjEsIw1y6kezt3MBee8OZ7X1IdYZ3meZ78JOG6DmhRl8XTgcpsK296s-GJlUQV0QVKfNfqhl1smuCXRDlw5L0kNS44UCv9MS8rFWss-wH_DF6wLzjeEf0)

  

  

-   Então, use o comando abaixo para adicionar seu usuário a este novo grupo:
    

  

![](https://lh3.googleusercontent.com/UKQdNQcxVzMPA0yGeuap-zOAsmV03jGmNJ9FPFt124wTBJa65l_CDv7y7TGmYpCwW1tN9k7kMhC-Br0MSVZxW8k-8U1aXmt2SlTn70OGlY1_-XeGy_wwjj9sb0VmKnvbGiKI_FVnK4av4bY-bmWbph0)

  

Detalhes do comando: https://techoverflow.net/2019/04/30/what-does-sudo-usermod-a-g-docker-user-do-on-linux/

  

  

-   Para ativar as alterações realizadas nos grupos, você pode realizar logout e login de sua sessão ou executar o seguinte comando no terminal:
    

  

![](https://lh4.googleusercontent.com/_M-fVEM1Pt-oWSIVgwJxLMIvNX5V1xfUD-EsnzyzEGGjoxy_mZZ7qaz4cMU4qvTMWAFq_vrWy5v_lmVbo4OXxg-M9MK0nOMhpvHXOIW1fov8tL2xz8Fxi7Wg0IJbRMOJ9DpfOKw7nm2u7fzPXyY1RfI)

  

  

  

## 7. Inicie o Daemon do Docker

  

[https://dockerlabs.collabnix.com/beginners/components/daemon/#:~:text=What%20is%20docker%20Daemon%3F,on%20MacOS%20and%20Windows%20too](https://dockerlabs.collabnix.com/beginners/components/daemon/#:~:text=What%20is%20docker%20Daemon%3F,on%20MacOS%20and%20Windows%20too).

  

  

O Daemon é um serviço que fica no background, ou seja, é um serviço que sempre está em execução e aguarda por comandos feitos por meio do CLI. Entretanto, para que este serviço fique sempre disponível, precisamos ativá-lo, até mesmo após reiniciarmos nosso computador.

  

  

-   O daemon do Docker é um serviço executado no sistema operacional host.
    
-   Atualmente, ele é executado apenas no Linux porque depende de vários recursos do kernel do Linux, mas também existem algumas maneiras de executar o Docker no MacOS e no Windows.
    

  

-   Para consultar o status atual do daemon do Docker, execute o seguinte comando:
    

  

![](https://lh5.googleusercontent.com/W1qKVBQoBfft8YEelj9gj62ftnz8HJ80CygOctcegNF6JWJ8CSKov1UqL6NhOuPJyrgve4yN8n876KFvz9t-TDn9qlmwJNPmXze1DZ4ljMoEwLAeWKYDUgbIEDo11csx3v88X3aHes-Qi2APJu64rbU)

  

-   O comando anterior deve retornar algo como um pequeno relatório sobre o serviço, onde consta seu status de funcionamento:
    

  

![](https://lh4.googleusercontent.com/49kGiDK8RyAF0eQyFkkOnjkL54v_lPvrtypzFN6k6wAdA898LORvbuDMxOr1ZC-cVYiFXdiegbfxoxhpriWQHZ6aGKzeWxCCEPjREaCP3KIlDJuuHjlwJF_A-59p1yfaMdAGhX14i-dg-FmnX90IhHU)

  

  

-   Caso o parâmetro Active esteja como stop/waiting ou no nosso caso, como inactive, rode o comando start para iniciá-lo:
    

  

![](https://lh4.googleusercontent.com/nhoXufOearYop_iA1MuJyDoMksbqTr-Qn9-WWsXqGy8GCJsZTqwhde9bqmCg1rwTJRX8QPAFKsjRDb97SmaubBZjGHsfnzs7N3Qc8dkkgVcWRrU_Zh7yIjxiiSYYpMU2Oj4CXMBaFWmt2v6BzUvvDiU)

  

  

-   Agora, vamos habilitar o daemon do Docker para iniciar durante o boot:
    

  

![](https://lh3.googleusercontent.com/B-klNcuLahSsg6RTfKhE9JjP46zApCbzVMQ_EQ46Cr561y-cOBK2nDcCVHra30ygeHuXAAITA1sGdsp6cqJKCk5Vq48wzoSbrPxX-U5noANz71nJI04wDcB2rSFeYC2MC1gcPC3BKRnyhFjOA1rxHy0)

  

  

  

## 8. Valide a instalação

  

Para validar se tudo ocorreu como deveria na instalação, vamos executar o tão esperado hello world do Docker:

  

![](https://lh6.googleusercontent.com/eKvylaWorMVYAHe3MJWyVwcLCH5nKOKS1dWKlubSxVqC78wNuXzBMkFYQNMFwfIE0ycinQ64t3ko6euIUhFNj25KN0YfqvR5aP5HOQVaG8U1pr_dCu1EuYeZcUDnxRCLLioVtpxOXB0Ae9jW9yiXLZo)

  

O terminal deve retornar uma mensagem com dicas, conforme a seguir:

  

![](https://lh6.googleusercontent.com/qtsYq0o4ixTSYVMHlvx9IOHejHdLevSh6VlKIJEoyI6bT6SNIHaTvaN66Cgr3vzajJxNxq4ocmspY6xei9JDnAnAWhFxVGHofG3700na9qrztxNl6BXlboeSLu6icIfaGhiY7BfiVDV55hvuH-iKsKo)

![](https://lh5.googleusercontent.com/kmolHsH3hxlNxxtOaZaDePkXlO1D4HCEcZ1KLwgxU86rI7dR03zWHGxet7KYJpZ_wh8lgVfJ3ccoRDk1KKIqeEDnoOnnXZRC7qqMaH5KTP9B1Sx4F2KiWErC0STlZyJTPLaMS66S3UN-1hQtXBK4jw8)