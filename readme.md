# CRUD API Test

 ## Customers Data 
 - Name
 - Email (Unique) 
 - Address

###  API endpoints localhost:4522/customers/  for Create, Update, Search and Delete

## Tech Stack
- Node.js
- Express
- Mongoose
- MongoDB

### Directory Structure contain Model, Service and Controller.

### Used Postman To test this API.

### Read Customers
Use http://localhost:4522/customers/ 

### Create Customers
Creat Customer By Sending Post Request with Json Object to the same Url http://localhost:4522/customers/ 

### Update Customer by Id and Email
- By Id: Go to The Link http://localhost:4522/customers/(Id) with post request carry the Updated Object with the Same Id In Url.

- By Email: Go to The Link http://localhost:4522/customers/email/(email) with post request holds the Updated Object with the Same email In Url.

###  Search With Id and Email
- - By Id: Go to The Link http://localhost:4522/customers/(Id) with Get request holds the Same Id In Url.

- By Email: Go to The Link http://localhost:4522/customers/email/(email) with Get request that holds  the Same email In Url.

### deleate Customer
with a deleate request You Can specify the id of a Customer like this form http://localhost:4522/customers/(id)