# E-commerce Project

This is a full-stack E-commerce project built using React for the front-end and Spring Boot for the back-end. It includes basic functionalities like product browsing, user authentication, shopping cart management, and order processing.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration and login (with JWT authentication).
- Product listing and filtering.
- Product details page with reviews and ratings.
- Shopping cart and checkout process.
- Order history and order tracking.
- Admin panel for product and order management.
  
## Technologies Used

### Frontend
- React
- Redux (State Management)
- React Router (Routing)
- Axios (HTTP Requests)
- Bootstrap / Material-UI (Styling)

### Backend
- Spring Boot
- Spring Data JPA (MySQL H2 Database)
- Hibernate (ORM)
- RESTful APIs
- Docker (Optional)

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- NPM
- Java (JDK 17 or later)
- MySQL (or any other supported database)
- Docker (Optional)

### Backend Setup (Spring Boot)
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-project-backend.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd ecommerce-project-backend
    ```
3. Set up MySQL database and update `application.properties` with your database credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
    spring.datasource.username=yourusername
    spring.datasource.password=yourpassword
    ```

4. Run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend Setup (React)
1. Clone the frontend repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-project-frontend.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd ecommerce-project-frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the React development server:
    ```bash
    npm start
    ```

### Docker Setup (Optional)
If you are using Docker, you can build and run the project with Docker Compose:
1. Navigate to the project root directory.
2. Run:
    ```bash
    docker-compose up --build
    ```

## Usage
1. Navigate to `http://localhost:3000` for the frontend.
2. The backend API is available at `http://localhost:8080/api`.

You can register as a user, browse products, add them to your cart, and proceed to checkout. Admin users can manage products and view orders.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate a user and generate a JWT token.

### Products
- `GET /api/products` - Fetch all products.
- `GET /api/products/{id}` - Get product details by ID.

### Cart
- `POST /api/cart/add` - Add a product to the shopping cart.
- `GET /api/cart` - View cart items.

### Orders
- `POST /api/orders` - Place a new order.
- `GET /api/orders` - View all orders for a user.

## Screenshots
_Add screenshots of your app here._

## Contributing
If you want to contribute to this project, feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
