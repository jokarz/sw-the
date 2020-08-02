## Live here

# Getting Started

* Made sure [Node](https://nodejs.org/en/download/) (preferably [Yarn](https://yarnpkg.com/getting-started/install) as well) is installed 
* Clone this repository
* Head on to the terminal (set directory at the root directory of this repo) and type ```npm i``` or ```yarn```
* Followed by typing in ```npm start``` or ```yarn start``` to run the app in local development

# Additional Info

* This is a React + Typescript project
* The teams tabs (All, Favorite, Archive) are working
* Each of the teams can be added/removed from the favorite tab by starring/unstarring
* The json data given is stored at ```src/data.json```, editing this will edit the results being populated
* Created with desktop view and modern browsers in mind
* Unique cases are taken into consideration
    * 0 notification count (in which a badge won't be shown) 
    * No teams being in Archive/Favorite tab 
    * Empty actitives 

