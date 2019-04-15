https://cmder.net/

https://angular.io/guide/quickstart
npm install -g @angular/cli

ng -v
C:\Users\U0I6910\DEV>ng -v

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.2.5
Node: 10.12.0
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.8.5
@angular-devkit/core         0.8.5
@angular-devkit/schematics   0.8.5
@schematics/angular          0.8.5
@schematics/update           0.8.5
rxjs                         6.2.2
typescript                   2.9.2


SEE WHERE REPOSITORY IS POINTING
git remote -v
C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>git remote -v
origin  https://github.com/Jerga99/angular-starter-bwm.git (fetch)
origin  https://github.com/Jerga99/angular-starter-bwm.git (push)

POINT REPOSISTORY TO A DIFFERENT REPOSITORY:
git remote rm origin
C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>git remote rm origin

C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>git remote -v

C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>

POINT REPOSISTORY TO A DIFFERENT REPOSITORY, MINE:
C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>git remote add origin https://github.com/endriazizi/bwm-ng.git

C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>git remote -v
origin  https://github.com/endriazizi/bwm-ng.git (fetch)
origin  https://github.com/endriazizi/bwm-ng.git (push)

C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>

//PUSH TO REMOTE
//-u (UPSTREAM) origin NAMEoftheBRANCH
//NAMEoftheBRANCH origin is the default name of git repository
//MASTER is the name of branch
C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>git push -u origin master

npm install
//TO START THE SERVE
ng serve or npm start

http://localhost:4200/

//WARNING TO FIX:
C:\Users\U0I6910\DEV\bwm-project\angular-starter-bwm>ng serve
Your global Angular CLI version (6.2.5) is greater than your local
version (1.7.4). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **



FROM GITHUB
https://it.atlassian.com/git/tutorials/setting-up-a-repository

https://alvinalexander.com/git/git-show-change-username-email-address

$ git config --global user.name "Endri Azizi"
git config user.name
$ git config --global user.email endri.azizi@gmail.com
git config --list

…or create a new repository on the command line
echo "# bwm-ng" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/endriazizi/bwm-ng.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/endriazizi/bwm-ng.git
git push -u origin master

…or push an existing repository from the command line
//QUI
git remote add origin https://github.com/endriazizi/bwm-ng.git
git push -u origin master


//CREATE FEATURES BRANCH
git checkout -b feature/NAMEofTheBRANCH
git checkout -b feature/header-component

//TO SEE WHAT BRACH ARE YOU IN
git branch

//TO SWITCH BRANCH
git checkout master
git add .
git add ./????
git commit -m "first commit"
git push -u origin master

git checkout header-component
git commit -m "first commit"
git add .
git push -u origin header-component



./ -> ACTUAL FOLDER
../ -> Different FOLDER


npm i bootstrap@4.1.0 --save

@ -32 2.40

# AngularStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
