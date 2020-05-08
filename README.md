# GLOBAI

## Problema 2

Implemente un microproyecto en react js y graphql donde construyan un indicador para un dashboard
utilizando cualquier tipo de grafica con el que ustedes consideren que pueden representar información
relevante, esta información la pueden consumir por medio de [api.graphql.jobs](https://api.graphql.jobs/) y la biblioteca
para la implementación del grafico debe ser [www.plotly.com](https://plotly.com/javascript/).

## Demo

Puede dar click en el siguiente enlace:
#### [PROYECTO DEPLOYADO](https://globai-test-2.netlify.app/)

El proyecto es totalmente responsivo y ademas esta implementado como "Progressive Web App".


<img src="https://res.cloudinary.com/jaacker25/image/upload/c_scale,w_250/v1588953617/GLOBAI/res-removebg-preview_rnfpm8.png">


### LightHouse Audit
<img src="https://res.cloudinary.com/jaacker25/image/upload/c_scale,w_450/v1588953467/GLOBAI/lighthouse_iskcaz.png"> 

## Tecnologias implementadas

@apollo/react-hooks "^3.1.5"<br>
apollo-boost "^0.4.7"<br>
graphql "^15.0.0"<br>
graphql-tag "^2.10.3"<br>
plotly.js "^1.54.1"<br>
react "^16.13.1"<br>
react-dom "^16.13.1"<br>
react-plotly.js "^2.4.0"<br>
react-router-dom "^5.1.2"<br>
react-scripts "3.4.1"<br>

## Acerca del Proyecto

### Dificultades encontradas
El primer reto fue decidir qué graficar.
La api no cuenta con muchos datos que puedan ser informativos, se descartaron algunas ideas hasta llegar a dos que sí se pudieron implementar.<br>
Otro reto fue hacer las graficas responsivas, dentro de la documentacion de plotly se ofrecen algunas opciones pero ninguna de ellas tuvo efecto, al parecer es problema de las ultimas versiones de este. Al final se tuvo que buscar otra manera para implementarlo.

### Sobre las Graficas y la Informacion Recopilada

<p align="center">
<img src="https://res.cloudinary.com/jaacker25/image/upload/v1588952237/GLOBAI/plotOne_b4mnwd.webp">
</p>
En total existen 80 vacantes en toda la API.<br> 
La primer Grafica nos indica cuantas vacantes han sido creadas de acuerdo a cada pais.<br>
Estados Unidos ocupa el primer puesto con 37 vacantes, mientras que Portugal, Francia y Dinamarca ocupan el puesto mas bajo con solo una vacante.
<p align="center">
<img src="https://res.cloudinary.com/jaacker25/image/upload/v1588952237/GLOBAI/plotTwo_hba9k3.webp">
</p>
En la segunda grafica podemos observar la fecha en que fueron creadas cada una de las vacantes, respecto a cada pais de origen, muchisimas de ellas fueron creadas el mismo día, por lo tanto apreceran encimadas unas a otras, es por eso que si queremos definir el numero de vacantes de cada pais nos guiaremos del primer grafico.<br>
Aqui vemos una clara tendencia, mientras ha pasado el tiempo mas paises se han sumado a hacer uso de la plataorma, sin embrago, la mayoria de ellos solo han creado postulaciones en una sola fecha determinada.<br>
Por otro lado Alemania, Estados Unidos y Reino Unido se mantienen constantemente abriendo vacantes.

## Para hacer uso directo del codigo

I. Forkear este repositorio o bien descargarlo.

II. En la terminal ingresar: yarn install
Para instalar todas las dependencias
 
III. En la terminal ingresar: yarn start
Para Inicializar la aplicacion en localhost:3000