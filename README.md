This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It's an auth template. 

## Setting-up

At first installation, you need to set-up differents modules in both server and client. 

### `npm install`

Use this command in server AND client Directory.

To run the server, you need 2 things, and 2 CMDs opened. In client, let's use : 

### `npm start`

and in server, let's use : 

### `nodemon server.js`

nodemon is a particular module that runs the server and takes care of every modification in the code. 

For informations : 

the react client app runs on port 3000, and the server runs on port 8080.

## Client tree

 * <b>public </b> <i> : public ressources, use for ressources (img, logo) and template </i>
 * <b>src </b> <i> :  files for react app </i>
   * <b>actions</b> <i> : functions usable in components. Used for auth system. </i>
   * <b>components</b> <i> : classical react components</i>
   * <b>hoc</b> <i> : high-orders components (for template files for ex) </i>
   * <b>pages</b> <i> : different pages</i>
   * <b>reducers</b> <i> : reducers, used by redux for auth system </i>
   * <b>stylesheets</b><i> : CSS files.  </i>
   * <b>utils</b> <i> utils functions, with rooting system and setAuthTokenw    </i>
 * package.json <i>: packages dependices </i>

## server tree

* <b> config </b> <i> : configurations files, env variables and DB access configuration </i>
* <b> middlewares </b> 
* <b> models </b> <i> : models from the MVC models</i>

  * users.js 
  
* <b> routes </b> 

  * auth.routes.js 
    
* server.js 

