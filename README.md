# moogl
### [moogl](http://104.131.68.13:3000/) <--- Click me!
<br>
<br>


### Screenshots:
<p align="center">
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/NoBackbone/screenshots/moogl-home.png" alt="moogl - Home View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/NoBackbone/screenshots/moogl-secondaryRefinementWChoices.png" alt="moogl - Secondary Refinement With Choices View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/NoBackbone/screenshots/moogl-mapWPins.png"  alt="moogl - Map With Pins / Locations View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/NoBackbone/screenshots/moogl-mapWDetails.png"  alt="moogl - Map With Location Detail (small) View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/NoBackbone/screenshots/moogl-LocationDetails.png"  alt="moogl - Location Detail View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/NoBackbone/screenshots/moogl-BurgerDetails.png"  alt="moogl - Burger Detail View"/>
</p>

### Technology:
* HTML, CSS, JavaScript, jQuery
* Node.js, Express.js - MVC and RESTful API
* MongoDB - Database Management
* MongoHub - Easy DB Modification
* Passport - User Authentication and Sessions
* JSON - API Dealing
* Semantic - CSS Framework
* [JSON Generator](http://www.json-generator.com/) - Database of fake restaurants
* [Draw.io](http://draw.io) - Wireframes and ERD
* [Trello](http://trello.com) - SCRUM Board

### Links:
* [Wireframes and ERD](https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/WireframeAndERD.svg)
* [User Stories](https://trello.com/b/aHJErc6U)
* Live App - [moogl](http://104.131.68.13:3000/)

### Approach:
* Planning Phase
  * Over the first and second days, the team spent the majority of the time in plan mode.
    * Discussed the potential project topic (events listing for Chicago) and through this conversation continued to narrow the topic to a listing of the best burgers in Chicago.
    * Conversationally created potential 'User Stories' for the topic of the best burgers in Chicago. These user stories guided the layout and functionality of the website.
    * Using both the white board and draw.io, the basic wireframe was created pages such as: login/register, home, primary search criteria, secondary search criteria, map, location detail, and burger detail.
    * The biggest portion of planning was spent discussing the ERD tables for the database. The 'user' ERD was straightforward, but with the intent of the website to allow a user to very accurately search for burgers, it was important to include many potential 'flags' for the burgers and locations.
* Initial Development
  * Basic Buildout
    * As a group, we implemented a basic Express.js folder structure, Backbone MVC, RESTful API routing, and Passport Authentication.
  * Single Page Application Through Backbone:
    * The initial plan for the application was to utilize Backbone MVC for a 'Single Page Application' rather than using the routing method of Ruby/Sinatra. Although we collectively learned a lot, it was a struggle to use Backbone appropriately for Single Page without using any routes.
    * **During this time, we created a new branch, NoBackbone, that became the main branch for use.**
  * Standard MVC:
    * After deciding that we were not going to be able to develop a single page application to the standards we desired, we returned to the basic buildout with routing. To facilitate the development, we broke into pairs focusing on different aspects.
    * Marty and Katie
      * Overall Design and Semantic implementation
      * Location / Burger Detail pages with auto-population based on returned JSON.
    * Jeff and David
      * Search Criteria Views
      * Map Populating / Search Routing


### Installation:
**Install on your local system**
* *Git* the files
  * Fork the repository and `git clone` to your local system
* Setting up the Database
  * Required: MongoDB (https://www.mongodb.org/)
  * HIGHLY Recommended: MongoHub (https://github.com/jeromelebel/MongoHub-Mac)
  * Within MongoHub:
    * Create `moogl` Database, `locations` Collection, `searches` Collection
    * Add data -> Double click on the collection (opens the query), click on Insert, and copy the contents of `db/seeds/LocationSeed.json` and `db/seeds/SearchSeed.json` appropriately
* Install
  * Within the root `moogl` folder, run `npm install` from the terminal. This will prepare/install the necessary dependencies for this project. If they are all successful, continue on...
  * Again from the root `moogl` folder, run `npm start` to start the server.
* Check it out
  * In your favorite browser, go to `localhost:3000`

**Install on Digital Ocean**
* Create Droplet
  * Set name of droplet ... `thoughtful`
  * Choose plan ... $5/month
  * Choose region ... America
  * Choose Distribution ... Ubuntu
  * Click CREATE
* Config that Server!
  * Once the email from Digital Ocean arrives, keep note of the IP address and password, you will need those in the next steps.
  * On the terminal, access the server by `ssh root@123.123.123.123` using the IP sent by Digital Ocean.
  * Answer yes to the authenticity alert
  * Enter the provided password (twice) and setup a new password
  Use the following commands
  ```
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
  # Add the MongoDB team's key to the list of trusted keys

  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
  # Add reference to the repository to our `apt` configuration

  apt-get update
  # updates the list of software our server knows about

  apt-get install mongodb-org git build-essential openssl libssl-dev pkg-config
  # Install MongoDB packages, git, and dependencies (Y x1)

  git clone https://github.com/Beelers-Blockers/moogl.git
  # clone down the repo with the correct URL (use HTTPS)

  wget https://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
  # download Node.js source code

  tar xzvf node-v
  # extract the archive

  cd node-v*
  # move into the node director

  ./configure
  make
  # configure and build Node (takes while! ~30min?)

  make install
  # install Node

  rm -rf ~/node-v*
  # remove the source code and directory (clean it up!)

  cd moogl
  # change directory

  npm install
  # install dependencies

  mongoimport --db moogl --collection searches --type json --file ~/moogl/db/seeds/SearchSeed.json --jsonArray
  # Run in terminal, not mongo!!

  mongoimport --db moogl --collection locations --type json --file ~/moogl/db/seeds/LocationsSeed.json --jsonArray
  # Run in terminal

  npm start
  # run the server and test with IP.IP.IP.IP:3000

  npm install -g forever
  # install Forever globally

  cd moogl
  # move to the moogl folder if not there already

  forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www
  # start the server and keep it running
  ```


### Unsolved Problems:
* Backbone + Single Page Application
* Searching by Cost and Popularity (specifically sending in the query hasn't been implemented. Not specifically a problem)
* David Beeler

[Martin Ryan](https://github.com/martin-ryan) - Git Leader <br>
[Jeff Steed](https://github.com/jeffsteed) - SCRUM Master <br>
[Katie Ude](https://github.com/KatieUde) <br>
[David Beeler](https://github.com/mrbeewer) <br>

January 8, 2016
