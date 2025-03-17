# Parcial 1

## Cómo correr el repositorio

1. Instalar React Router DOM:
   ```sh
   npm install react-router-dom --save
   ```
2. Instalar React Bootstrap y Bootstrap:
   ```sh
   npm install react-bootstrap bootstrap
   ```
3. Instalar React i18next con compatibilidad para dependencias heredadas:
   ```sh
   npm install react-i18next --legacy-peer-deps
   ```
4. Iniciar la aplicación:
   ```sh
   npm start
   ```

## Componentes usados

- **Librerías y Frameworks**:
  - React
  - React Router DOM
  - React Intl
  - Bootstrap
  - React Bootstrap

- **Componentes de React Bootstrap utilizados**:
  - `Container`, `Row`, `Col`, `Card`, `Form`, `Button`

## Explicación de las decisiones tomadas

- **Login**:
  Para el Login, se utilizó un contenedor con un Row y 2 Col para separar la página en los dos cuadros del mockup. En cada Col decidí ingresar un Card, ya que es el componente que más he utilizado. Se usó un Form para crear el login en la columna de la izquierda. Por cuestiones de tiempo, no alcancé a centrar el Form ni estilizarlo como en el mockup, de manera similar para los elementos de la columna de la izquierda, que aparecen en desorden. 
  
- **Home**:
  Para el Home se usó un contenedor con una columna y fila centradas, en este espacio se insertaron 3 Cards, cada una con su título según el mockup (Menú, Store, Cart). Nuevamente, utilicé Cards para separar los títulos el uno del otro fácilmente, sin necesidad de ajustar los estilos, aunque reconozco que no fue la mejor forma de hacerlo, fue la que se me hizo más fácil al momento de realizar el parcial con tiempo limitado. Para los iconos pensaba incluir lucide-react, sin embargo, no alcance. 
  
- **Detail**:
  Para el Detail, se utilizó un contenedor con 3 filas. La primera contiene un componente Header que tiene el color deseado en el mockup y tiene el título según la opción seleccionada en la pantalla anterior. La segunda fila tiene el carrusel de imágenes y la tercera tiene 4 columnas, cada una con un Card que tiene una imagen y un título. Las 3 imágenes del  carrusel, las 4 imágenes y los 4 textos de los cards son generados por mockaroo, ya que se hace una petición a un api que regresa a un objeto con estos 7 campos.  Por cuestiones de tiempo, no alcancé a estilizar tampoco esta pantalla para que fuera más similar al mockup. 

- **Index y App**:
  Por último, en los componentes Index y App  se hace el routing y la internacionalización de la página por medio de dos archivos en la carpeta locales, es.json y en.json. Index pasa una función ToggleLanguage a App que a su vez se la pasa a Login, para que el botón de cambiar idioma funcione correctamente. 



