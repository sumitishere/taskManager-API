<p> This is a node js assignment where i am working on  task manager CRUD backend api</p>

<h2>Intial Steps or Part 1</h2>
<ul>
<li>Install Mongo(Mongoose is the one to connect node js to mongodb) and Express</li>
<li>body parser obkect is a middleware converts strings(data from frontend/postman) into json format to extract data out of it</li>
<li>brcypt - to hash this password for making </li>
<li>jsonwentoken - to securely transmit information between parties a a json object </li>
<!-- npm i express body-parser bcrypt jsonwebtoken -->
</ul>

<h2>Importing things</h2>
<ul>
<li>Import express and bodyparser as we have installed them already</li>
<li>COurse - someone which one actually allows to acess any kind of backedn from frontend. Suppose google needs acess.</li>
<li>Also env file which contains all of your passwords (this requires a package i.e npm i dotenv)</li>
</ul>

<ul>
<li>Make server on port 800 or what you like. Just listen and get</li>
</ul>

<ul>
<li>create a db server db.js</li>
</ul>

<!-- Creating User Schema -->
<!-- In models folder -->

<h2>Making User js schema and all</h2>
<ul>
<li>First import mongoose and export it</li>
<li>then make a collection scheme of users with name email and password</li>
<li></li>
</ul>

<h2>Creating routes</h2>
<ul><li>Also define some routers Routes determines how an application responds to a client request to a particular endpoint, which is a URI(or path) and a specific http request method</li>
<li>One for User routes which register and logins user</li>
<li>Another for task Routes which is going to perform CRUD</li>
</ul>

<!-- Till here everything is connected -->