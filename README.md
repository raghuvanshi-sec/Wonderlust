# Wonderlust

Wonderlust is a web application inspired by Airbnb, designed to help users find and manage unique travel accommodations. It provides a platform for listing properties, browsing available stays, and leaving reviews.

## Features

- **Listings Management**: Users can create, view, edit, and delete property listings.
- **Detailed Information**: Each listing includes a title, description, price, location, country, and images.
- **Reviews & Ratings**: Users can leave comments and ratings (1-5 stars) for properties.
- **Responsive Design**: Built with Bootstrap for a seamless experience on all devices.
- **Data Validation**: Robust server-side validation using Joi to ensure data integrity.

## Tech Stack

- **Frontend**: EJS (Embedded JavaScript), Bootstrap, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Joi (Server-side schema validation)

## Installation

1. **Clone the repository:**

    git clone <https://github.com/raghuvanshi-sec/Wonderlust.git>
    cd Wonderlust

2. **Install dependencies:**

    npm install

3. **Start the MongoDB server:**
    Make sure you have MongoDB installed and running locally.

    mongod

4. **Initialize the database (optional):**
    To seed the database with sample data:

    node init/index.js

5. **Run the application:**

    node app.js

6. **Access the app:**
    Open your browser and navigate to `http://localhost:8080`.

## Directory Structure

- `models/`: Database schemas (Listing, Review)
- `views/`: EJS templates for pages and layouts
- `public/`: Static assets (CSS, JS)
- `routes/`: Express routes (implied structure)
- `init/`: Database initialization scripts
-   `utils/`: Utility functions (Error handling)

## Future Improvements

- User Authentication (Login/Signup)
- Map Integration (showing property locations on a map)
- Image Upload (Cloudinary storage)

## License

This project is open-source and available under the permissions of the MIT License.
