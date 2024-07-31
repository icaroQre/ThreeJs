# Three.js WebGL Animation

Este projeto é uma animação interativa criada utilizando WebGL e a biblioteca Three.js. A animação demonstra o uso de diferentes geometrias, materiais, texturas e fontes de iluminação, além de carregar um modelo externo.

## Requisitos

Certifique-se de ter um servidor local para servir os arquivos estáticos, pois o carregamento de texturas e modelos pode não funcionar corretamente se os arquivos forem acessados diretamente do sistema de arquivos.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/icaroQre/ThreeJs
Navegue até o diretório do projeto:

  cd seu-repositorio
Instale um servidor local, por exemplo, utilizando o http-server:

npm install -g http-server
Inicie o servidor local:

http-server
Abra o navegador e acesse http://localhost:8080 para visualizar a animação.

## Descrição do Projeto
A animação apresenta os seguintes elementos:

## Geometrias Utilizadas:
Cubo (THREE.BoxGeometry)
Esfera (THREE.SphereGeometry)
Cone (THREE.ConeGeometry)

<br/>

## Materiais Utilizados:
Material com cor sólida (THREE.MeshStandardMaterial com color: 0x0077ff)
Material com textura (THREE.MeshStandardMaterial com map: texture1 e map: texture2)

<br/>

## Texturas Carregadas:
assets/textures/texture.jpg
assets/textures/texture2.jpg

<br/>

## Fontes de Iluminação:
Luz ambiente (THREE.AmbientLight)
Duas luzes pontuais (THREE.PointLight)

<br/>

## Modelo Externo Carregado:
assets/model/model.gltf (utilizando GLTFLoader)

<br/>

## Animação:
Rotação contínua das geometrias (cubo, esfera e cone) em torno dos eixos x e y.
Estrutura dos Arquivos
index.html: Arquivo HTML principal que carrega a aplicação.
main.js: Arquivo JavaScript contendo o código para a animação.
assets/: Diretório que contém texturas e o modelo externo.
