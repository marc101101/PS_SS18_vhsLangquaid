# PS_SS18_vhsLangquaid Mobile Application

<p>
   <a href="https://github.com/marc101101/PS_SS18_vhsLangquaid/releases">
        <img src="https://img.shields.io/badge/release-0.0.5-blue.svg?longCache=true" alt="Latest release" />
    </a>
    <a href="https://travis-ci.com/marc101101/PS_SS18_vhsLangquaid">
        <img src="https://travis-ci.com/marc101101/PS_SS18_vhsLangquaid.svg?token=q4ZzuewzZrMnM6gfyh2w&branch=master" alt="Build status" />
    </a>
    <a href="https://prod-ps-ss18-vhslanquaid.herokuapp.com/">
        <img src="https://img.shields.io/badge/herokuDeployment-production-6762a6.svg?longCache=true" alt="Build status" />
    </a>
     <a href="https://dev-ps-ss18-vhslangquaid.herokuapp.com/">
        <img src="https://img.shields.io/badge/herokuDeployment-development-6762a6.svg?longCache=true" alt="Build status" />
    </a>
</p>

The application is reachable [here](https://prod-ps-ss18-vhslanquaid.herokuapp.com/).

## Installation pre-requisites

For running this project we need npm installed and mariadb on our machine. These are some tutorials to install node and mariadb in different operating systems:

*Its important to install the latest version of Node:*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


*Its important to install the latest version of mariadb:*
- [Follow our installation and data injections steps here](https://github.com/marc101101/PS_SS18_vhsLangquaid/blob/master/setup-db-instructions.md)


## How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/marc101101/PS_SS18_vhsLangquaid.git
    
This repository is made of several separate npm modules, that are installable separately:
    
    cd PS_SS18_vhsLangquaid

Its possible to install the modules as usual using npm:

    npm install 

Prefered installer is yarn:

    yarn install

## Predefined scripts

The repo provides a bunch of different scripts to start development, to build or test the sources.

| command                   | scripts                                                                                   | category   | description                                  |
|---------------------------|-------------------------------------------------------------------------------------------|------------|----------------------------------------------|
| npm run start:client      | ng serve                                                                                  | start dev. | starts angular frontend                      |
| npm run start:server      | node index.js                                                                             | start dev. | starts nodejs backend server                 |
| npm run build:client      | ng build                                                                                  | build      | builds and bundels angular sources           |
| npm run start:prod        | ng build --prod && npm run start:server                                                   | build      | builds frontend and start backend server     |
| npm run test:server       | NODE_ENV=test mocha --exit ./server/test/*.js                                             | test       | executes backend tests                       |
| npm run test:client       | ng test                                                                                   | test       | executes frontend tests                      |
| npm run test:server_local | mysql.server start &&  NODE_ENV=test mocha --exit ./server/test/*.js && mysql.server stop | test       | executes backend test against local database |
| npm test                  | npm run test:server && npm run test:client                                                | test       | executes frontend and backend tests        

##  Running the Development Backend Server

We can start the sample application backend with the following command:

    npm run start:server

The development server is visible at port 8080 - [http://localhost:8080/v1](http://localhost:8080/v1).

The api documentation is available unter - [http://localhost:8080/docs](http://localhost:8080/docs).

For further start scripts have a look at *Predefined scripts*.

## Running the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm run start:client

The development application is visible at port 4200  - [http://localhost:4200](http://localhost:4200).

For further start scripts have a look at *Predefined scripts*.


## Authors

* **Markus Guder** - [Github](https://github.com/marc101101) | [Twitter](https://twitter.com/Markus_Guder) | markus.guder@stud.uni-regensburg.de
* **Hans Martin Schuller** - [Github](https://github.com/hmSchuller) | hans-martin.schuller@stud.uni-regensburg.de

## License

Licensed under the [MIT](LICENSE.txt) License.

