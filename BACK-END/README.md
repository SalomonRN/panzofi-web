# Página Web Panzofi - Guía de Instalación

## Back-end - Django
### Lo recomendado para inicializar este proyecto es utilizar un entorno virtual, aunque no es necesario es recomendable hacerlo. En una terminal ejecutamos el siguiente comando para poder crear un entorno virtual:
**py -m venv .venv**
### Posterior a esto activamos el entorno virtual en VSCode para poder así instalar las dependencias.
### Para instalar las dependencias colocamos el siguiente comando en la consola:
**pip install -r requirements.txt**
### Posteriormente de que las dependencias se hayan instalado ejecutamos el servidor con el siguiente comando:
**py manage.py runserver**
### Este comando dejará corriendo el servidor en localhost:8000

## Front-end - React
### Para correr el front primero se deben instalar las dependencias, para ello usamos
**npm i**
### Posterior a la instalacion se ejecuta el siguiente comando para poner en marcha el servidor del front
**npm run dev**
### Este comando dejará corriendo el server en localhost:5173


## Notas
### Para el desarrollo del front se usó ViteJS