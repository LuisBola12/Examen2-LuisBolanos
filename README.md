# Examen2-LuisBolanos B91145

## Manual de Usuario

### Lista de pasos para poder correr la aplicación.

1. Instalar **Node.js**
    Es necesario revisar si tenemos inslatado Node.js en nuestra computadora. Para comprobar esto vamos a correr el siguiente comando en una terminal de nuestra computadora.
    `node -v`
    De tener node instalado correctamente la terminal nos mostará la version instalada, en mi caso tengo la 16.14.2:
    `v16.14.2`
    En caso de no tener Node.js instalado solo es necesario [descargarlo](https://nodejs.org/es/download/).
    
    Una vez lo hayamos descargado es importante repetir los pasos anteriores para verificar que Node.js se haya instalado con éxito.
    
2. Dirigirse a la carpeta con la aplicación
    Para esto es necesario estar situado en el repositorio de github clonado y dirigirse a la carpeta '*maquina-de-bebidas*'
    `cd .\maquina-de-bebidas\`

3. Para poder correr de manera exitosa la aplicación es necesario instalar los paquetes que esta utiliza.
    Para esto lo único que debemos hacer es correr el siguiente comando en la terminal:
    `npm install`
    Después de correr este comando debemos de esperar unos segundos para que Node.js instale los paquetes necesarios para poder correr la aplicación.

4. Una vez completados los pasos anteriores podremos correr nuestra aplicación con éxito.
    Para esto lo único que debemos hacer es correr el siguiente comando en la terminal:
    `npm start`
    Una vez realizado esto una ventana de nuestro navegador se nos abrirá con la siguiente vista.
    ![](https://i.imgur.com/PjV7aBD.png)
5. En caso de querer correr las pruebas unitarias solo es necesario correr en una terminal:
    `npm run test`
     Adjunto screenshot de lo que debería de suceder:
     ![](https://i.imgur.com/eMQpjjU.png)
     En primera instancia nos va a preguntar que deseamos hacer, en este caso le vamos a presionar la tecla **'a'** la cual nos va a correr toodos los casos de prueba.
     ![](https://i.imgur.com/ClbT6ka.png)
