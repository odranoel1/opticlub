Base web actualizada
===========================

Para trabajar:

Instalar gulp y bower

npm install -g gulp
npm install -g bower

----

Instalar modulos y librearias de gulp y bower

npm install
bower install

----

Las librerias jquery/css solo se instalaran desde bower (expcepto maps)

Ej. bower install jquery

Una vez instalada se debe registrar en la llave vendor de: bundle.config.js para que gulp la compile

----

Se debe crear un archivo js por cada archivo html que necesite java script y deben estar almacendados en lib/js
