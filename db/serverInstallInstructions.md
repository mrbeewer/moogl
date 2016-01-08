## Installing On Digital Ocean for Express + MongoDB

Droplet Name: moogl
IP Address: 104.131.68.13
Username: root
Password: a780d3f69e029a95

  * ssh root@104.131.68.13
  * Security can't be established, continue? yes
  * password -> m00g1burgers
  * `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10` - Add the MongoDB team's key to the list of trusted keys
  * `echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list` - Add reference to the repository to our `apt` configuration
  * `apt-get update` - Update the system's local packages
  * `apt-get install mongodb-org git build-essential openssl libssl-dev pkg-config` - Install MongoDB packages, git, and dependencies (Y x1)
  * `git clone https://github.com/Beelers-Blockers/moogl.git` - clone down the repo (use HTTPS)
  * `wget https://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz` - download Node.js source code
  * `tar xzvf node-v` - extract the archive
  * `cd node-v*` - move into the node directory
  * `./configure
make` - configure and build the software (takes while! ~30min?)
  * `make install` - install Software
  * `cd ~` - move to root
  * `rm -rf ~/node-v*` - remove the source code and directory (clean it up!)
  * `cd moogl` - change directory
  * `npm install` - install dependencies
  * `mongoimport --db moogl --collection searches --type json --file ~/moogl/db/seeds/SearchSeed.json --jsonArray` - Run in terminal, not mongo!!
  * `mongoimport --db moogl --collection locations --type json --file ~/moogl/db/seeds/LocationsSeed.json --jsonArray` - Run in terminal, no --jsonArray, different format
  * `npm start` - run the server
  * URL -> IP:3000 to Test
  * `npm install -g forever` - install Forever
  * `cd moogl` - move to the moogl folder
  * `forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www` - start the server and keep it running
  *
  * http://104.131.68.13:3000/ - for the server
