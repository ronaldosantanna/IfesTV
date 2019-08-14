# IfesTV
IfesTV é um site local, no estilo _kiosk_ (Raspberry pi ligado a TV), que exibe videos do youtube, notícias, avisos locais, clima e temperatura ambiente.

> Criado por alunos do IFES - Campus Guarapari. Pelos alunos João Alves, Kevyn Marins e Ronaldo Sant'Anna. [Contato](https://github.com/ronaldosantanna/IfesTV#qualquer-dúvida-ou-sugestão-fiquem-a-vontade)

Utilizamos uma ESP8266 para ligar o sensor local de temperatura DHT11, no qual serve para uma estação remota via comunicalção MQTT com o raspberry pi.
Desse jeito, a raspberry ligada a TV recebe informações de um ou vários sensores em um ou mais prédios e também informações da internet e exibe na TV.

Toda a configuração foi pesquisada na internet e aplicada para este projeto. Aqui tentaremos juntar todas as informações necessárias para a configuração do projeto.

A imagem do sistema já está completa e configurada para uso.

## Hardware
* Raspberry pi 3B + Raspbian [(Img do sistema)](https://drive.google.com/open?id=16IvTq7KXVeJWATDrFhQsSftASu8AablH)
* Esp8266 + [Mosquitto MQTT Server](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/)
* DHT11

## Configuração do site
O site foi básico apenas para exibir o necessário em nosso projeto. Acima temos os arquivos da página e suas dependencias.
Para editá-lo é simples e qualquer pesquisa na internet já se encontra o passo a passo da criação.

> Para alterar seu conteúdo, por enquanto, temos que acessá-lo remotamente e alterar o valor dentro de seus arquivos de configuração.
> 1. Para isso vamos conectar via terminal (pelo linux), ou [Putty](https://the.earth.li/~sgtatham/putty/latest/w32/putty.exe) (windows,   mas teste se seu computador não tem ssh, acessando o cmd e digitando ssh).
 Primeiro devemos descobrir o endereço ip da raspberry. Ou usar o *hostname* dela que é rpi.
> 2. Conectando pelo hostname fica `ssh pi@rpi.local` 
> 3. No terminal digitamos a senha.
 Agora vamos modificar o necessário. Para mudar um arquivo vamos editar pelo editor nano e precisamos ir até o local do arquivo.
> 4. `sudo nano Desktop/IfesTV/JS/script.js`
 Para navegar entre o texto usamos somente as setas do teclado.
> 5. Ao alterar alguma variável e concluirmos as alterações vamos salvar apertando `ctrl + o`. Agora vamos sair apertando `ctrl + x`.
 Para aplicar as mudanças na pagina ela deve ser recarregada. O jeito mais fácil é reiniciando o sistema.
> 6. Para reiniciar (lembre-se de estar conectado via ssh) digitamos `sudo reboot`.

## Configuração da ESP8266
Para configurar a esp é necessário apenas baixar o código da pasta arduino na placa.
O código recebe informações do sensor DHT11 e envia por meio de MQTT para a Raspberry que é um broker, servidor que recebe as informações.

## [_Kiosk Mode_](https://pimylifeup.com/raspberry-pi-kiosk/)

Para Configurar o modo _kiosk_ apenas aplicamos o necessário de alguns tutoriais da internet.

### Qualquer dúvida ou sugestão fiquem a vontade.
Este [formulário](https://forms.gle/AasFBRNRWcPVzgP98) contém um um jeito rápido de contato. Caso se sintam a vontade podem criar um chamado pelo [Issues](https://github.com/ronaldosantanna/IfesTV/issues) do próprio Github.
Ou, caso prefiram deixo meu email para contato: ronaldo.santanna@live.com
