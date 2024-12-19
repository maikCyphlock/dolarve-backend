# Proyecto de Monitoreo de Monedas
=====================================

Este proyecto es un sistema de monitoreo de monedas que utiliza una base de datos SQLite para almacenar información sobre las monedas y sus precios. El proyecto está desarrollado en Node.js y utiliza Express.js como framework para crear una API RESTful.

## Características

*   Monitoreo de monedas en tiempo real
*   Almacenamiento de información en una base de datos SQLite
*   API RESTful para interactuar con la base de datos
*   Soporte para múltiples monedas

## Instalación

Para instalar el proyecto, sigue los siguientes pasos:

1.  Clona el repositorio: `git clone https://github.com/maikCyphlock/dolarve-backend.git`
2.  Instala las dependencias: `npm install`
3.  Inicia el servidor: `npm start`

## API

La API está disponible en `http://localhost:3000/api/v1/monitors`. Los siguientes endpoints están disponibles:

*   `GET /get-all-currency`: Obtiene todas las monedas
*   `GET /get-uid-currency/:uid`: Obtiene una moneda por UID
*   `GET /get-id-currency/:id`: Obtiene una moneda por ID
*   `GET /get-history-id/:id`: Obtiene el historial de una moneda por ID

## Base de datos

La base de datos se encuentra en el archivo `dolar.db`. La estructura de la base de datos es la siguiente:

*   `Monitors`: tabla que almacena información sobre las monedas
*   `PriceHistory`: tabla que almacena el historial de precios de las monedas

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1.  Haz un fork del repositorio
2.  Crea una rama para tu contribución
3.  Haz tus cambios y haz un commit
4.  Haz un pull request

## Licencia

Este proyecto está licenciado bajo la licencia ISC.

## Autor

MaikCyphlock