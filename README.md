# Blissful Stay Scout

A smart hotel recommendation system that helps travelers find their perfect accommodations based on preferences, budget, and location.

![Blissful Stay Scout](https://raw.githubusercontent.com/chaitanya-maddala-236/blissful-stay-scout/main/assets/logo.png)

## 🌟 Overview

Blissful Stay Scout is an intelligent hotel recommendation platform designed to simplify the travel planning process. By analyzing user preferences, budget constraints, and desired locations, our system delivers personalized hotel suggestions that match exactly what you're looking for.

## ✨ Features

- **Personalized Recommendations**: Get hotel suggestions tailored to your specific needs and preferences
- **Budget Filtering**: Find great accommodations that respect your financial constraints
- **Location Analysis**: Discover hotels in your desired areas with proximity to attractions
- **User Reviews Integration**: Make informed decisions based on authentic feedback from other travelers
- **Booking Assistance**: Seamless redirection to booking platforms for easy reservation
- **Favorites List**: Save and compare your top hotel choices
- **Travel Planning Tools**: Additional resources to enhance your trip planning experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chaitanya-maddala-236/blissful-stay-scout.git
   cd blissful-stay-scout
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     API_KEY=your_hotel_api_key
     JWT_SECRET=your_jwt_secret
     ```

4. Start the application:
   ```bash
   npm start
   ```

5. The application will be running at `http://localhost:3000`

## 🔧 Tech Stack

- **Frontend**: React.js, Redux, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **APIs**: Hotel Booking API, Google Maps API
- **Deployment**: Docker, AWS/Heroku

## 📊 Project Structure

```
blissful-stay-scout/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # React source files
├── server/                 # Backend Node.js application
│   ├── controllers/        # Request handlers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── utils/              # Utility functions
├── config/                 # Configuration files
├── scripts/                # Build and deployment scripts
├── tests/                  # Test files
├── .env                    # Environment variables
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🔍 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Hotel Recommendations
- `GET /api/hotels/recommendations` - Get personalized hotel recommendations
- `GET /api/hotels/search` - Search hotels by location, price, and amenities

### User Profile
- `GET /api/user/profile` - Get user profile information
- `PUT /api/user/preferences` - Update user preferences
- `GET /api/user/favorites` - Get user's favorite hotels
- `POST /api/user/favorites/:hotelId` - Add a hotel to favorites

## 🧪 Testing

Run tests using the following command:

```bash
npm test
```

## 🤝 Contributing

We welcome contributions to Blissful Stay Scout! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Chaitanya Maddala - [@chaitanya_m236](https://twitter.com/chaitanya_m236) - chaitanya.maddala.236@gmail.com

Project Link: [https://github.com/chaitanya-maddala-236/blissful-stay-scout](https://github.com/chaitanya-maddala-236/blissful-stay-scout)
