# JWT Authentication for API Access

This API utilizes JSON Web Token (JWT) authentication to secure its endpoints and prevent unauthorized access. Follow these steps to interact with the API:

1. **Signup**: Sign up by sending a POST request to `localhost:8000/api/user` with your name, email, and password in the request body.

2. **Login**: Log in by sending a POST request to `localhost:8000/api/login` with your email and password in the request body. Upon successful login, you'll receive a JWT token.

3. **Add Token to Header**: Add the JWT token to the header section of your requests. Set the `Authorization` header key with the value `Bearer [your_token]`, where `[your_token]` is the token received upon login.

4. **Access API**: You can now access the API endpoints by including the JWT token in the `Authorization` header of your requests. Without the token, access to the API will be denied.

5. **Endpoints**:
    - `GET /api`: Get data from the API.
    - `POST /api`: Add data to the API.
    - `GET /api/:id`: Get specific data from the API.
    - `PATCH /api/:id`: Update specific data in the API.
    - `DELETE /api/:id`: Delete specific data from the API.

**Note**: Ensure that you include the JWT token in the `Authorization` header for each request after login to access the API endpoints securely.
