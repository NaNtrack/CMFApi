## Antes de comenzar: Obtener una API key

1. Cambia el nombre del archivo `.env.template` a `.env`.
2. Obtenga su API key en `https://api.cmfchile.cl/api_cmf/contactanos.jsp`, si se completa el formulario debería recibir en segundos su API key en su correo electrónico
3. Ingrese el valor de la API key en el archivo `.env`

## Paso 1: Instalar las dependencias

```bash
# usando npm
npm i

# O usando Yarn
yarn
```

Luego de instalar las dependencias debes ejecutar el siguiente comando

```
cd ios; pod install
```

## Paso 2: Iniciar el servidor Metro

```bash
# usando npm
npm start

# O usando Yarn
yarn start
```

## Paso 3: Iniciar la app

### Para Android

```bash
# usando npm
npm run android

# O usando Yarn
yarn android
```

### Para iOS

```bash
# usando npm
npm run ios

# O usando Yarn
yarn ios
```

## TODO:

1. Arreglar `yarn test`
