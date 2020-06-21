# Sigescom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


CODE SCAFFOLDING
------------------------------------------------------

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### CLASE 18
ITEM|      COMMAND                               |       DESCRIPCION                       
----|--------------------------------------------|------------------------------------
01  | ng g c login --spec=false -is              |
03  | ng g c pages/dashboard --spec=false -is    |
04  | ng g c pages/progress --spec=false -is     |
05  | ng g c pages/graficas1 --spec=false -is    |
02  | ng g c shared/nopagefound --spec=false -is | Paginas 404
06  | ng g c shared/header --spec=false -is      |
07  | ng g c shared/sidebar --spec=false -is     | menu lateral
08  | ng g c shared/breadcrumbs --spec=false -is | navegar entre paginas
09  | ng g s services/shared/shared --spec=false | 
10  | ng g s services/shared/sidebar --spec=false| controla opciones de menu

### CLASE 22
ITEM|      COMMAND                               |       DESCRIPCION                       
----|--------------------------------------------|------------------------------------
01  | ng g c pages/pages --flat --is --spec=false | solo crea archivos, sin carpeta


### CLASE 24
ITEM|      COMMAND                                  |       DESCRIPCION                       
----|-----------------------------------------------|------------------------------------
01  | ng g c login/register --flat --is --spec=false | solo crea archivos, sin carpeta

### CLASE 44
ITEM|      COMMAND                                      |       DESCRIPCION                       
----|---------------------------------------------------|------------------------------------
01  | ng g c components/incrementador --is --spec=false | componente reutilizable


### CLASE 55
ITEM|      COMMAND                                                  |     DESCRIPCION 
----|---------------------------------------------------------------|------------------------------
01  | ng g c components/graficoDona --is --spec=false --skip-import | componente reutilizable


### CLASE 57
ITEM|      COMMAND                                                  |     DESCRIPCION
----|---------------------------------------------------------------|------------------------------
01  | ng g c components/accountSettings -m="pages/pages.module.ts" --is --spec=false | configuracion color

### CLASE 60
ITEM|      COMMAND                                                  |     DESCRIPCION
----|---------------------------------------------------------------|------------------------------
01  | ng g s services/settings -m="app.module.ts" --spec=false      | Crear un servicio


### CLASE 62
ITEM|      COMMAND                                                  |     DESCRIPCION
----|---------------------------------------------------------------|------------------------------
01  | ng g m services --spec=false                                  | agrupar servicios


### CLASE 71
ITEM|      COMMAND                                     |     DESCRIPCION
----|--------------------------------------------------|------------------------------
01  | ng g c pages/promesas --spec=false -is           | Ejemplo de promesas


### CLASE 73
ITEM|      COMMAND                                     |     DESCRIPCION
----|--------------------------------------------------|------------------------------
01  | ng g c pages/rxjs --spec=false -is               | Ejemplo de Observable


INSTALACION DE DEPENDENCIAS O LIBRERIA DE TERCEROS
------------------------------------------------------

> __NOTA:__ Ingresar al Path `C:\ProjectAngular\galeria-app\backend-nodejs-galeria` para instalar todas las dependencias:


ITEM|      COMMAND                                      |       DESCRIPCION                       
----|---------------------------------------------------|------------------------------------
01  | npm install ng2-charts --save                     | Graficos - ng2-charts
02  | npm install chart.js --save                       | Graficos - ng2-charts
03  | npm install --save sweetalert                     | https://github.com/t4t5/sweetalert
    | npm uninstall sweetalert
04  | npm install --save sweetalert2                    | https://sweetalert2.github.io









## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
