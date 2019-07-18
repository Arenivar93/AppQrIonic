# AppQrIonic
App qr ionic curso Ionic

Configurar proyecto descargado 
* npm install

Iniciar server
*ionic serve


instalar ionic
*npm install -g ionic

crear proyecto ionic
*ionic start miApp

preparar proyecto ionic a android
*ionic cordova prepare android

quitar android de ionic
*ionic cordova platform remove android

 Comandos Git
 
 * git status   o  git status -s  (forma esquematizada)
 * git diff [archivo]  cambios en el archivo
 * git diff --cached  cambios en el area de ensayo (lo que se ira en el commit)
 * git diff --stat  muestra un sumario de los cambios
 * git add .
 * git commit -m "Mis nuevos cambios"
 * git commit -am "Nuevos cambios" ----permite añadir los cambios realizados en el proyecto directamente en el área de ensayo y en el historial (que es como saltarse el área de ensayo
 * git reset o git reset [archivo] permite quitar los archivos añadidos al área de ensayo
 * git reset --hard --> Este comando hace que se deshagan todos los cambios y se vuelva al estado en el que se estaba en el commit anterior. Hay que tener cuidado y estar muy seguro al ejecutar este comando ya que borra todos los cambios y archivos nuevos que se hayan realizado desde el commit anterior.
 * 
 
 RAMAS
 * git branch --- lista de ramas
 * git branch mirama ----se crea la rama "mirama"
 * git checkout mirama ----me cambio a la rama especificada
 * git branch -v  ----Este comando muestra el último commit en cada rama. 
 * git checkout -b [rama]---- crea la rama y nos movemos a ella
 * git branch -d [rama] ----- elimina la rama indicada
 * git merge
 
 HISTORIAL COMMIT
 * git log --- muestra todos los commits que han llevado a la instantánea en la que te encuentras
 * git log --oneline
 
 * git remote show origin  ---revisa info del repositorio remoto
 
  
 Iniciar Proyecto GIT
 
* git init
* git add .
* git commit -m "first commit"
* git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git   ---origin es el alias que se le asigna
* git push -u origin master

* git remote -v ---- revisa repositorios
* git remote rename origin mynewalias ---- renombra el alias del repositorio

* git remote ser-url origin git@.........  cambia el repositorio al que apunta
* git fetch origin  -------- sincroniza la informacion del nuevo repositorio

* git pull origin master --allow-unrelated-histories ---si al inicio da un error el repositorio fatal: refusing to merge unrelated histories

