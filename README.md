# Twitter Clone

A full-stack social media application built with the MERN stack, featuring real-time interactions, user authentication, and a modern responsive design.

![Twitter Clone](https://img.shields.io/badge/Twitter-Clone-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 🚀 Features

### Core Features
- **User Authentication & Authorization**
  - Secure user registration and login
  - JWT-based authentication with protected routes
  - Password hashing with bcryptjs

- **User Profile Management**
  - Customizable user profiles with bio, profile picture, and cover image
  - Follow/unfollow functionality
  - User profile editing with image uploads

- **Post Management**
  - Create posts with text and image support
  - Like and comment on posts
  - Real-time post updates
  - Image upload with Cloudinary integration

- **Social Interactions**
  - Follow/unfollow users
  - Like posts
  - Comment on posts
  - Real-time notifications system

- **Notifications**
  - Follow notifications
  - Like notifications
  - Real-time notification updates

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Real-time Updates** - React Query for efficient data fetching and caching
- **Image Handling** - Cloudinary integration for image storage and optimization
- **Security** - Protected routes, input validation, and secure authentication
- **Modern UI/UX** - Clean, intuitive interface with loading states and error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **TanStack React Query** - Data fetching and state management
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage and management
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie parsing middleware

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/twitter-clone.git
   cd twitter-clone
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # JWT
   JWT_SECRET=your_jwt_secret_key
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Server
   PORT=5001
   NODE_ENV=development
   ```

4. **Database Setup**
   - Set up MongoDB (local or cloud)
   - Update the `MONGODB_URI` in your `.env` file

5. **Cloudinary Setup**
   - Create a Cloudinary account
   - Get your cloud name, API key, and API secret
   - Update the Cloudinary credentials in your `.env` file

## 🚀 Running the Application

### Development Mode
```bash
# Start the backend server
npm run dev

# In a separate terminal, start the frontend
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5001`

### Production Mode
```bash
# Build and start the application
npm run build
npm start
```

## 📁 Project Structure

```
twitter-clone/
├── backend/
│   ├── controllers/          # Route controllers
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   ├── user.controller.js
│   │   └── notification.controller.js
│   ├── middleware/           # Custom middleware
│   │   └── protectRoute.js
│   ├── models/              # Database models
│   │   ├── user.model.js
│   │   ├── post.model.js
│   │   └── notification.model.js
│   ├── routes/              # API routes
│   │   ├── auth.route.js
│   │   ├── post.route.js
│   │   ├── user.route.js
│   │   └── notification.route.js
│   ├── db/                  # Database connection
│   │   └── connectMongoDB.js
│   ├── lib/                 # Utility functions
│   │   └── utils/
│   └── server.js            # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── common/      # Shared components
│   │   │   ├── skeletons/   # Loading skeletons
│   │   │   └── svgs/        # SVG components
│   │   ├── pages/           # Page components
│   │   │   ├── auth/        # Authentication pages
│   │   │   ├── home/        # Home page components
│   │   │   ├── profile/     # Profile pages
│   │   │   └── notifications/
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── public/          # Static assets
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/user/profile/:username` - Get user profile
- `POST /api/user/follow/:id` - Follow a user
- `POST /api/user/unfollow/:id` - Unfollow a user
- `PUT /api/user/update` - Update user profile

### Posts
- `GET /api/posts/` - Get all posts
- `POST /api/posts/create` - Create a new post
- `POST /api/posts/like/:id` - Like a post
- `POST /api/posts/unlike/:id` - Unlike a post
- `POST /api/posts/reply/:id` - Comment on a post
- `DELETE /api/posts/:id` - Delete a post

### Notifications
- `GET /api/notifications/` - Get user notifications
- `PUT /api/notifications/:id` - Mark notification as read

## 🎨 Key Components

### Frontend Components
- **Sidebar** - Navigation and user info
- **CreatePost** - Post creation form with image upload
- **Posts** - Display posts with interactions
- **Post** - Individual post component
- **ProfilePage** - User profile display and editing
- **RightPanel** - Suggested users and trends
- **NotificationPage** - Notifications management

### Backend Models
- **User** - User schema with profile, followers, following
- **Post** - Post schema with likes, comments, and media
- **Notification** - Notification schema for user interactions

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Protected routes middleware
- Input validation and sanitization
- CORS configuration
- Secure cookie handling

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build --prefix frontend`
2. Deploy the `frontend/dist` folder

### Backend (Railway/Heroku)
1. Set environment variables
2. Deploy the backend code
3. Ensure MongoDB and Cloudinary are configured

### Full Stack (Vercel)
1. Use Vercel's full-stack deployment
2. Configure build settings for both frontend and backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built as part of a MERN stack crash course
- Inspired by Twitter's user interface and functionality
- Uses modern React patterns and best practices
- Implements responsive design principles

