			FUNDAMENTOS WEB 
Bloco 1 
		UNIX & BASH 

UM POUCO DA HISTÓRIA: 


O unix foi lançado oficialmente em 1969. 

Nos anos 60, os pesquisadores utilizavam os computadores para realizar seus estudos na área de computação, e as empresas os utilizavam para as mais diversas tarefas, como processar e armazenar dados. 

Porém, os sistemas operacionais dos computadores da época eram extremamente limitados.
A maioria não possuía recursos de rede, nem suporte a multi-tarefas, e esses problemas foram a motivação para a criação do Unix 



UNIX 

Unix é o pai de todos os sistemas Operacionais (Linux e MAC OS) 

-O unix é um sistema operacional portável (Pode ser executado independentemente da arquitetura) 

-Multi tarefas (Executa várias tarefas ao mesmo tempo) 

-Multi Usuário (Permite mais de um usuário ao mesmo tempo) 

Obs: A maioria dos servidores ou provedores cloud utilizam esse sistema (ou o linux) 

O unix suporta tanto alterações por linha de comando, que dão flexibilidade e precisão. 

Quanto para definições via interface gráfica, uma opção normalmente mais prática e menos trabalhosa do que a anterior

O UNIX É MONTADO EM 3 CAMADAS, SÃO ELAS: 


1 - KERNEL (Cérebro)

KERNEL é responsável por fazer a interação entre Hardware e o Software do computador.

Outras responsabilidades incluem o gerenciamento da memória, de processos e arquivos   

Ele é iniciado assim que a máquina é ligada. 



					

			2	SHELL 

É um interpretador. 

Shell é a interface que faz a ponte entre o SO -> Usuario -> Núcleo do sistema (Kernel);
Sendo a interface de linha de comando ou a interface gráfica do SO 

FUNÇÃO: Ler a linha de comando, interpretar o significado, executar o comando e devolver o resultado ao usuaŕio 

Existem vários tipos de Shell, sendo eles: SH, BASH, CSH, TCSH, ZSH 

BASH - É um interpretador de comandos 


		

3	APLICATIVOS 

Aqui se encontra a maioria dos Softwares que o usuário pode utilizar e também a maioria dos comandos do Unix 

OBSERVAÇÃO: Tudo que é realizado no Unix é um processo, ou seja, cada vez que é executado uma tarefa ou um comando ele é interpretado como um processo possui um identificador único chamado de PID

PIB (iDENTIFICADOR DE PROCESSO) - São geradas algumas informações como: o usuário e o proprietário do processo 


ESTADO ATUAL (Se está funcionando, suspenso ou aguardando) 



OS ARQUIVOS 
No Unix, tudo é considerado um arquivo. 
Diretórios (Pasta) são considerados arquivos. 

Sendo que os arquivos no Unix são organizados em uma Hierarquia de raiz. 








			COMANDOS 

Ctrl + Alt + t -> Abre o Terminal 


cd (Change directory) -> Muda de diretório 


cd /  -> Muda para o diretório raiz (root) 


cd .  -> Referência o próprio diretório 

cd .. -> Altera o diretório para o diretório “pai” (volta ao diretório anterior) 



ls  -> lista tudo o que se encontra no diretório 



ls -a -> Mostra tudo e também arquivos ocultos 





ls *  -> Exibe tudo dentro do diretório, conseguindo ver todos os arquivos de cada diretório 


ls *.txt -> Irá exibir apenas os arquivos com extensão txt 


ls ? - Utilizado para quando não se lembra de uma letra de algum arquivo/diretório 


mkdir (make directory) -> Cria um diretório (pasta) 
mkdir + nome do Diretório 


touch - > Cria um arquivo 



pwd (print working directory) -> Mostra todo o caminho que está 




OPERAÇÕES COM ARQUIVOS E DIRETÓRIOS 

cp (copy) -> faz a cópia de um arquivo, seguido de nome do arquivo original e o nome da cópia 	

cat -> Abre o arquivo e exibe todo o conteúdo 



mv -> Utilizado para mover arquivo entre diretórios (nome do arquivo e endereço para onde será movido) 

E também para renomear arquivo (nome do arquivo original e novo nome do arquivo) 



rm -> remove um arquivo 

rmdir -> Remove um diretório e os arquivos contidos nele. 

rm -rf -> Remove o diretório e os arquivos contidos nele 

rm *.txt  -> Remove todos os arquivos com extensão txt. 



EXIBIR CONTEÚDO DE ARQUIVOS NO TERMINAL 

less -> Exibe partes do conteúdo por página (para avançar uma página utiliza a barra de espaço e o Q sai) 

Dentro do less digitar / palavra irá encontrar um valor específico


head -> Mostra os 10 primeiros valores/linhas 
head + nome do arquivo 

head -n 5 -> Mostra especificamente os primeiros 5 valores 
head -n 5 + nome do arquivo 

tail -> Mostra os 10 últimos valores 
tail + nome do arquivo 

tail -n 5 -> Mostra especificamente os 5 últimos valores 

grep -> Encontra um valor específico no arquivo sem abrir ele, sendo um comando key sensitive (palavra chave) 


 
VARIAÇÕES grep 

grep -i  -> Irá ignorar o key sensitive

grep -iv -> Trazer todos os valores que não corresponde com a busca 

grep -in ‘ ’  -> Irá exibir a linha que o valor se encontra 

grep -ic ‘ ‘ -> Quantidade de vezes que aparece 




wc (word count) -> Quantidade de linhas, palavras e caracteres que um arquivo tem 



VARIAÇÕES WC 

wc -w -> Quantidade de palavras 

wc -l -> Quantidade de linhas 

wc -c -> Quantidade de caracteres 


AJuda no Terminal 

man -> manual de um comando (man ls) 

whatis -> Mostra o que um comando faz (whatis) 

apropos -> Digita o que você precisa e ele exibe o comando que faz isso 

https://www.youtube.com/watch?v=JEhVB4VHsTI - Mostra os comandos Linux (Ubuntu)

https://www.oficinadanet.com.br/tecnologia/25897-18-comandos-basicos-do-ubuntu-para-iniciantes#:~:text=sudo,usu%C3%A1rio%20normalmente%20n%C3%A3o%20teria%20acesso.



COMANDOS IMPORTANTES:  (ADM)

sudo (SuperUser do) - Permite que você execute tarefas de privilégios administrativos, como instalar, remover, etc.. 

-Ele é útil quando, por exemplo, você precisa modificar arquivos em um diretório, ao qual seu usuário normalmente não teria acesso. 


apt-get - É um dos comandos mais importante. Ele é usado para instalar, atualizar e remover qualquer pacote

sudo apt-get install - Se souber o nome do pacote, poderá instalar.
Exemplo: sudo apt-get install (nome do pacote)

 sudo apt remove - Para remover um pacote 
Exemplo: sudo apt remove (nome do pacote) 

sudo apt-get update - Este comando atualiza o banco de dados e informa ao seu sistema se há pacotes mais novos disponíveis ou não. 

sudo apt-get upgrade - Depois de atualizar o banco de dados do pacote, o próximo passo é atualizar os pacotes instalados. Para atualizar todos os pacotes com atualizações disponíveis 
																			
curl - Ele é usado como abreviação para “Client URL”. 










UNIX & BASH PARTE 2 


INPUTS (Entradas) e Outputs (Saída) 


cat - (Receber valores como inputs) 


Para fechar o comando é Ctrl + d 

cat >  (Sinal de maior) = Vamos atribuir valores para um determinado arquivo 

Exemplo: cat > cores.txt 

Para visualizar o arquivo 



												
>> (maior maior) = Significa editar e acrescentar mais valores 
Sendo assim, ele adiciona o que foi digitado ao final do arquivo em questão 

Exemplo: cat >> cores.txt 


Agora foi adicionado ao final do arquivo 



PARA JUNTAR TODAS AS INFORMAÇÕES DE DOIS ARQUIVOS PARA UM OUTRO ARQUIVO É : 

cat arquivo1 arquivo2 > arquivo3 





			
	
		COMANDOS 
		
sort = Ordena os dados 

sort < arquivo1 > arquivo4 - Envia os valores para um arquivo em forma ordenada. 


who - Para saber quem está utilizando o sistema. 




| - (pipe) : Para ordenar usuários (passar output de um comando para outro)

Por exemplo: who | sort  -Isso vai ordernar no output os usuários 


who | wc -l - Vai mostrar a quantidade de linhas 








PERMISSÃO 


ls -l - Mostra todos os direitos de acesso para todos os arquivos. 

ls-la - Mostra todos os direitos de acesso para todos os arquivos (Até os ocultos) 



CADA LETRA E SEU RESPECTIVO SIGNIFICADO 



Quando inicia com: 
 - Significa que é um arquivo. 
d - Significa que é um diretório

r(read) Têm permissão para leitura do arquivo ou diretório 

w(write) Têm permissão para editar, alterar o valor do arquivo ou diretório 

x(Execute) Têm permissão para executar um arquivo ou acessar um diretório pelo comando cd


ESSA ORDEM DE DONO, GRUPO, OUTROS NÃO MUDA.   
OBSERVAÇÃO


: Cada cor é um determinado grupo. u > DONO  |  g > GRUPO | o > OUTROS 

chmod [opção] arquivo - Altera os direitos de acesso para todos os arquivos 

chmod u - modifica só para o usuário 

chmod g - modifica para o grupo 

chmod o - modifica para outros usuários 

chmod a - para todo mundo 

Depois, acrescentar, retirar ou deixar como está em relação a permissões, usa +, - , = 
RESPECTIVAMENTE 

Exemplo: chmod u-rw nomedoarquivo.txt (remove a capacidade de leitura e escrita do arquivo) 

chmod u+rw nomedoarquivo.txt( devolve a capacidade de leitura e escrita do arquivo) 



PROCESSO 	


ps - Para vermos a lista de processos executados no momento





PID: PROCESS IDENTIFIER
Esses processos podem estar em execução, em background ou suspensos.


É interessante deixar em background alguma coisa que está demorando muito para finalizar(como um download), já que o unix é um sistema multiprocessos. 

Um exemplo de processo é o “sleep” que faz parar o terminal por um tempo, ex sleep 5 (segundos) 
CRIAR PROCESSOS E DEIXAR EM BACKGROUND: 

isso enquanto pode fazer outras coisas ao mesmo tempo. 
Exemplo: 
sleep 10 & (ele deixa o processo em background por 10 segundos) 

Ctrl Z ( Usado para suspender(pausar) o processo. 
Se quiser fazer ele voltar a funcionar, mas em background, aperte bg 

ps -A -    Mostra tudo do computador 








JOBS 

É onde ficam todos os processos executados, suspensos ou em background. 
(Não tem muita diferença em relação ao ps)

Para encerrar um processo: executa o comando ctrl c 

Para matar um processo: executa kill %numeroDoprocesso[]

Para matar processo pelo PID: kill 7657 (número do PID) 






COMANDO DE ACHAR UMA DETERMINADO ARQUIVO OU DIRETÓRIO 


fnd - É um comando para pesquisar diretórios por arquivos ou outras pastas
Podendo ser name, date, size and type.

find . -name “*txt” -  Achar todos os arquivos que terminam na extensão citada (txt) 

find . -type d -   (d = diretório)   Mostrar todos os diretórios 

find . -type f -  (file = arquivos) Mostra todos os arquivos


Localizar tanto arquivos quanto diretórios que comecem por algum trecho:

find ./teste -name “exemplo*”

Resultado: 
,/teste/exemplo.txt
./teste/exemplo



OLHAR O HISTÓRICO DE COMANDOS USADOS NO TERMINAL 

history - Comando que mostra o histórico de comandos que você usou no terminal



 history -c - COMANDO PARA APAGAR O HISTÓRICO

history | tail - Pegar os últimos 10 comandos 




ECHO 
echo é um comando utilizado em scripts ou no terminal para exibir mensagens na tela ou em um arquivo.

echo “Este é um teste”
Resultado: Este é um teste 
Pode ser usado para colocar textos dentro de arquivos e ainda criar esse arquivo. 

echo “Este é mais um teste” > teste.txt

cat.teste.txt
Resultado: Este é mais um teste 














