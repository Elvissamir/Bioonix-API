# BIOONIX API 
- Desarrollado con Nodejs, Sequelize, Mysql y Typescript

## PASOS PARA INICIAR
1) Primero ejecutar: npm i 

1) Crear DB

- Se debe crear una base de datos con las variables en el .env, 
para esta API se asume la existencia de una DB con nombre: prueba_bioonix_ec.

- En el .env se tienen las siguientes variables: 
NODE_ENV=dev
DB_NAME=prueba_bioonix_ec
DB_USER=user
DB_HOST=localhost
DB_DRIVER=mysql
DB_PASSWORD=123456

2) Iniciar con: npm run dev

- Se asume el puerto 3002 para la API y puerto 3000 para la UI en react
- La UI se encuentra en: https://github.com/Elvissamir/BioonixUI

## ENDPOINTS
- La API tiene 2 endpoints: 
1) Lista de todos los clientes: Get '/api/customers' 
2) Crear cliente:  Post '/api/customers'

## HERRAMIENTAS USADAS
- Se uso npm, vscode, mysql workbench