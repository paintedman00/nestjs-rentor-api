# nestJS-CRUD

A restful CRUD API created using NestJS and MongoDB with authentication and authorization.

There is a rnestjs-postman-collection-api with in the files for execution .

API end points :
==============

POST /users/register : you can create a new user. accept a body parameter (name, email, password)

POST /users/login: you need to authenticate a registered user and get a valid token. accept a body parameter (username, password)

POST /genres: user can create a new genre. accept a body parameter (name)

GET /genres: will give all genres stored in database.

GET /genres/<genreid>: will give one genre stored in database.
  
PATCH /genres/<genreid>: user can patch or update a specefice genre.  

DELETE /genres/<genres_id>: delete a genre completely

