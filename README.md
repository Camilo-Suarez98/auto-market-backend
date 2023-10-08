# Automarket - Marketplace to sell cars: Individual Project - Make it Real TOP Program v30 💻

Codebase for the node.js projects.

- Built with Node.js, Express and MongoDB (Mongoose).
- REST API.

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/es)
- [Express](https://expressjs.com/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [CORS](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cloudinary](https://cloudinary.com/)
- [Busboy](https://www.npmjs.com/package/busboy)
- [JSON-webtoken](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Express Router and Routes

| Route                        | HTTP Verb | Route middleware         | Description                             |
| -----------------------------| --------- | -------------------------|-----------------------------------------|
| /api/users                   | GET       |                          | Get list of users                       |
| /api/users                   | POST      |                          | Creates a new user                      |
| /api/users/single  | GET       | isAuthenticated          | Gets a single user                      |
| /api/users/info              | PUT       | isAuthenticated          | Updates user information                |
| /api/users/profile-image            | PUT       | isAuthenticated, formData| Updates user profile image                     |



## Usage
The project includes 50+ functional endpoints. The previous table shows an example with the `/api/users` route. If you need to create an account, explore the app! Here is an example creating a user.

### Example: **user creation**:

Request Body:
```json
{
  "firstName": "Juan",
  "lastName": "Marquez",
  "email": "juanmarquez@example.com",
  "password": "password1234",
}
```

Response:
```json
{ 
  "message": "User created succesfully"
}
```

Once the user has done the process of activating their account, expect a response:
```json
{
  "message": "User created succesfully",
  "token": "TOKEN-DIOVBQEO189Y491384703189R1BKSCSKJBC",
  "profile": {
    "_id": "id",
    "firstName": "Juan",
    "lastName": "Marquez",
    "email": "juanmarquez@example.com",
    "password": "userpassword1234",
    "profileImage": "url-demo", //to edit afeter created
    "phone": "", //to edit afeter created
    "cars": [],
    "createdAt": "date-of-user-created",
    "updatedAt": "date-of-user-updated"
  }
}
```

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the `.env` file.

4. Run `npm run dev` to start the development server.