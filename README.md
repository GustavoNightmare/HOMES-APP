# Mi primera aplicacion Angular: Homes

> **Estudiante:** Javier Alexander Hurtado Guaca<br>
> **Tutorial:** [Your first Angular app](https://angular.dev/tutorials/first-app)<br>
> **Estado:** Completado

Aplicacion web desarrollada con Angular para consultar viviendas disponibles, filtrarlas por ciudad y revisar el detalle de cada ubicacion.

## Resultado final

La aplicacion cuenta con:

- Listado dinamico de viviendas.
- Filtro por ciudad.
- Vista de detalle para cada vivienda.
- Formulario de solicitud.
- Consumo de datos desde una API local simulada con `db.json`.

---

## Bitacora de desarrollo

### 1. Proyecto base

**Fecha:** 24 de septiembre de 2026<br>
**Commit:** [`76fecb9`](https://github.com/GustavoNightmare/HOMES-APP/commit/76fecb9)

Se genero el proyecto Angular con Angular CLI. En esta etapa se verifico que el servidor de desarrollo y la plantilla inicial funcionaran correctamente.

![Pantalla inicial de Angular](docs/capturas/avance-01-2026-09-24.png)

### 2. Inicio de Homes

**Fecha:** 25 de septiembre de 2026<br>
**Commit:** [`bb1db37`](https://github.com/GustavoNightmare/HOMES-APP/commit/bb1db37)

Se creo el componente `home`, se reemplazo la pantalla inicial por la cabecera de Homes y se agrego el formulario de busqueda por ciudad junto con el logotipo de la aplicacion.

![Interfaz inicial de Homes](docs/capturas/avance-02-2026-09-25.png)

### 3. Listado y detalle de viviendas

**Fecha:** 01 de octubre de 2026<br>
**Commit:** [`d85e98a`](https://github.com/GustavoNightmare/HOMES-APP/commit/d85e98a)

Se implementaron la interfaz de datos, el servicio `Housing`, las tarjetas de vivienda, la navegacion mediante rutas y el componente de detalle.

![Listado de viviendas](docs/capturas/avance-03-2026-10-01.png)

### 4. Filtro y formulario de solicitud

**Fecha:** 04 de octubre de 2026<br>
**Commit:** [`20620d1`](https://github.com/GustavoNightmare/HOMES-APP/commit/20620d1)

Se agrego el filtro en tiempo real por ciudad, el mensaje para resultados vacios y un formulario reactivo para solicitar una vivienda desde su vista de detalle.

![Filtro de viviendas](docs/capturas/avance-04-2026-10-04.png)

### 5. Datos desde API local simulada

**Fecha:** 04 de octubre de 2026<br>
**Commit:** [`7126fde`](https://github.com/GustavoNightmare/HOMES-APP/commit/7126fde)

Se traslado el listado de viviendas desde un arreglo interno hacia `db.json`. El servicio ahora consulta los datos mediante `fetch` a una API local simulada.

![Version final conectada a datos](docs/capturas/avance-05-2026-10-04.png)

---

## Tecnologias

- Angular 22
- TypeScript
- HTML y CSS
- JSON Server para datos locales simulados

## Ejecutar el proyecto

```bash
npm install
npm start
```

Abre `http://localhost:4200/` en el navegador.

Para compilar el proyecto:

```bash
npm run build
```

Para ejecutar las pruebas:

```bash
npm test -- --watch=false
```

## Evidencias completas

La bitacora detallada, con todos los cambios por avance, esta disponible en [docs/bitacora.md](docs/bitacora.md).
