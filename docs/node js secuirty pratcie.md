
Node js Security best pratices 

1. rate limiter 

Basic way to handle is express-rate-limit --> suitable for small apps.
    For large application 
    aws have there own rate limiter

2. password encryption -->. when ever you are going to save the password in the db you need hash the password. 
    --> bcrypt is the library everyone is using 

3. JWT blacklisting
    --> jwt will be in the client . saving the session of the jwt in the database 
    --> chekc the jwt from the client with the server .
     --> save the refresh token in the db 

4. JSON schema validation
    --> schema for the req payload 

5. Escaping html and css
    --> escape-html (library)

6. ORM and ODM againt injection 

    --> using ORM packages ( like prisma , mangoose)

7. security linter

    --> eslint-plugin-security


helmet --> plugin

vulnerability inspection 

owasp  document 
