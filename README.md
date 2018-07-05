
## PS_SS18_vhsLangquaid Mobile Application

# Installation pre-requisites

IMPORTANT: Please use NPM 5 or above, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-pwa-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd angular-pwa-course
    npm install 

Its also possible to install the modules as usual using npm:

    npm install 

Prefered installer is yarn:

    yarn install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

#  Running the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# Running the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The development application is visible at port 4200  - [http://localhost:4200](http://localhost:4200), but in this course we will be mostly running the application production mode.

# Running the application in production mode, with the service worker active

In order to build the application in production mode, we use this command:

    ng build --prod
    
This is going to output the production application in the dist folder, with the service worker active. To run the application we will need an HTTP server, so let's install http-server:

    npm install -g http-server
    
We can then run the production application by doing:

    cd dist
    http-server -c-1 .
    
And now the production application should be available at port 8080 - [http://localhost:8080](http://localhost:8080). 

> Note: Please check in the server startup log to see what port is http-server  using. By default its 8080, but it that port is busy then 8081 will used, etc.

# Shortcut command for building the application in production mode

We will be building the application often in production mode. This shortcut command will build the application in production mode and start http-server all in one go:

    npm run start:prod 


# Getting the code at the beginning of each section

This repository has multiple branches, have a look at the beginning of each section to see the name of the branch.

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a

  The remote branches have their starting in origin, such as for example 1-notifications.

We can checkout the remote branch and start tracking it with a local branch that has the same name, by using the following command:

      git checkout -b 1-notifications origin/1-notifications

It's also possible to download a ZIP file for a given branch,  using the branch dropdown on this page on the top left, and then selecting the Clone or Download / Download as ZIP button.

# Authors

* **Markus Guder** - [Github](https://github.com/marc101101) | [Twitter](https://twitter.com/Markus_Guder) | markus.guder@stud.uni-regensburg.de
* **Hans Martin Schuller** - [Github](https://github.com/hmSchuller) | hans-martin.schuller@stud.uni-regensburg.de

## License

Licensed under the [MIT](LICENSE.txt) License.

