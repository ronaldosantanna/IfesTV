# IfesTV
IfesTV é um site local, no estilo _kiosk_ (Raspberry pi ligado a TV), que exibe videos do youtube, notícias, avisos locais, clima e temperatura ambiente.
Utilizamos uma ESP8266 para ligar o sensor local de temperatura DHT11, no qual serve para uma estação remota via comunicalção MQTT com o raspberry pi.
Desse jeito, a raspberry ligada a TV recebe informações de um ou vários sensores em um ou mais prédios e também informações da internet e exibe na TV.

Toda a configuração foi pesquisada na internet e aplicada para este projeto. Aqui tentaremos juntar todas as informações necessárias para a configuração do projeto.

## Hardware
* Raspberry pi + Raspbian
* [Mosquitto MQTT Server](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/)
* Esp8266
* DHT11

## Configuração do site
O site foi básico apenas para exibir o necessário em nosso projeto. Acima temos os arquivos da página e suas dependencias.
Para editá-lo é simples e qualquer pesquisa na internet já se encontra o passo a passo da criação.

## Configuração da ESP8266
Para configurar a esp é necessário apenas baixar o código "X" na placa.
O código recebe informações do sensor DHT11 e envia por meio de MQTT para a Raspberry que é um broker, servidor que recebe as informações.

## [_Kiosk Mode_](https://pimylifeup.com/raspberry-pi-kiosk/)

Para Configurar o modo _kiosk_ apenas aplicamos o necessário de alguns tutoriais da internet.

### Qualquer dúvida ou sugestão fiquem a vontade.

# TODO
* Colocar tutorial de como alterar video, avisos, frases, imagem...
* Upload da imagem do rpi.
* Upload da placa utilizada.
* Circuito para alimentação.
