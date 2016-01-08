# moogl
### [moogl](http://104.131.68.13:3000/) <--- Click me!
<br>
<br>


### Screenshots:
<p align="center">
  <img src="" alt="moogl"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/moogl-home.png" alt="moogl - Home View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/moogl-secondaryRefinementWChoices.png" alt="moogl - Secondary Refinement With Choices View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/moogl-mapWPins.png"  alt="moogl - Map With Pins / Locations View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/moogl-mapWDetails.png"  alt="moogl - Map With Location Detail (small) View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/moogl-LocationDetails.png"  alt="moogl - Location Detail View"/>
  <br>
  <img width="400px" src="https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/moogl-BurgerDetail.png"  alt="moogl - Burger Detail View"/>
</p>

### Technology:
* HTML, CSS, JavaScript, jQuery
* Node.js, Express.js - MVC and RESTful API
* MongoDB - Database Management
* MongoHub - Easy DB Modification
* Passport - User Authentication and Sessions
* JSON - API Dealing
* Semantic - CSS Framework
* [Draw.io](http://draw.io) - Wireframes and ERD
* [Trello](http://trello.com) - SCRUM Board

### Links:
* [Wireframes and ERD](https://github.com/Beelers-Blockers/moogl/blob/master/screenshots/WireframeAndERD.svg)
* [User Stories](?)
* Live App - [thoughtful: be inspired](http://104.131.68.13:3000/)

### Approach: GROUP UPDATE!!!
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
  * Standard MVC:
    * After deciding that we were not going to be able to develop a single page application to the standards we desired, we returned to the basic buildout with routing. To facilitate the development, we broke into pairs focusing on different aspects.
    * Marty and Katie
      * Focus on Design and the Location / Burger Detail pages that auto populate based on returned JSON.
    * Jeff  and David
      * Focus on Search Criteria Views and Map Populating / Search Routing
  * Bugs / Polish
    * asfsf


### Installation: UPDATE ME DAVID!!
**Install on your local system**
* *Git* the files
  * Fork the repository and `git clone` to your local system
* Setting up the Database
  * Required: Postgresql (http://www.postgresql.org/)
  * Run the commands in `migration.sql` -> `db/migrations.sql` to initialize the DB and tables
  * Run the commands in `seed.sql` -> `db/migrations.sql` to create the default profile image
* Preparing for a HTTParty
  * Within the root `thoughtful` folder, run `bundle` from the terminal. This will prepare/install the necessary gems for this project. If they are all successful, continue on...
  * Again from the root `thoughtful` folder, run `bundle exec rackup` to start this HTTParty!
* Check it out
  * In your favorite browser, go to `localhost:9292`

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
  apt-get update
  # updates the list of software our server knows about

  apt-get install ruby-dev -Y
  # installs the tools we need for a ruby environment

  apt-get install build-essential -Y
  # essential build tools such as GCC

  apt-get install git -Y
  # git for github

  # postgres database
  apt-get install postgresql -Y
  apt-get install postgresql-contrib -Y  
  apt-get install libpq-dev
  gem install pg

  # create a user
  createdb $USER
  touch ~/.psql_history

  # gems
  apt-get install ruby -y
  gem install json
  gem install bundler
  gem install sinatra
  gem install httparty
  gem install dotenv
  ```
  * From the terminal, we need to create a `.env` file that holds the API and database name
    * send the command `touch .env` to create the file
    * send the command `nano .env` to open the file in the command-line editor
    * Set your keys names appropriately like below
      ```
      PIXABAY_API_KEY="api-key-here"
      QUOTE_API_KEY="api-key-here"
      DB_name="database_name"
      ```
  * From github, fork to your repositories and `git clone` the repository to the server (use the HTTP link)
  * Setting up the Database
    * Required: [Postgresql](http://www.postgresql.org/)
    * Run the commands in `migration.sql` -> `db/migrations.sql` to initialize the DB and tables
    * Run the commands in `seed.sql` -> `db/migrations.sql` to create the default profile image
  * Preparing for a HTTParty
    * Within the root `thoughtful` folder, run `bundle` from the terminal. This will prepare/install the necessary gems for this project. If they are all successful, continue on...
    * Again from the root `thoughtful` folder, run `bundle exec rackup -p 80 --host 0.0.0.0` to start this HTTParty!
  * Check it out
    * In your favorite browser, go to the IP address provided by DigitalOcean!
    * To keep the server running after disconnecting, run `nohup bundle exec rackup -p 80 --host 0.0.0.0`


### Unsolved Problems:
* Add some stuff

[Martin Ryan](https://github.com/mrbeewer) - Git Leader
[Jeff Steed](https://github.com/mrbeewer) - SCRUM Master
[Katie Ude](https://github.com/mrbeewer)
[David Beeler](https://github.com/mrbeewer)

January 8, 2016
