# Contact Management System

A full-stack MERN application for managing business contacts with real-time data operations. Built with **React**, **Express.js**, **MongoDB**, and **Node.js**.

## 🎯 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete contacts
- **Contact Status Tracking**: Track contact status (Interested, Follow-up, Closed)
- **Contact Information**: Store name, email, phone, and company details
- **Responsive UI**: Beautiful and intuitive interface with DaisyUI components
- **Real-time Updates**: Automatic data refresh using TanStack Query
- **Error Handling**: Comprehensive error handling and user feedback
- **RESTful API**: Well-structured REST API endpoints

## 🛠️ Tech Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express.js 5.1.0**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose 8.19.2**: MongoDB object modeling
- **Nodemon**: Auto-restart development server
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

### Frontend
- **React 19.1.1**: UI library
- **Vite 7.1.7**: Fast build tool and dev server
- **React Router DOM 7.9.5**: Client-side routing
- **TanStack Query 5.90.5**: Data synchronization and caching
- **Axios 1.13.1**: HTTP client
- **Tailwind CSS 4.1.16**: Utility-first CSS framework
- **DaisyUI 5.3.10**: Component library
- **ESLint**: Code quality

## 📁 Project Structure

```
ContactManagementSystem/
├── backend/
│   ├── .env                          # Environment variables
│   ├── server.js                     # Express server setup
│   ├── package.json                  # Backend dependencies
│   ├── model/
│   │   └── contact.model.js         # Contact MongoDB schema
│   ├── routes/
│   │   └── contact.route.js         # API routes
│   ├── controller/
│   │   └── contact.controller.js    # Route handlers
│   └── db/
│       └── connectdb.js             # MongoDB connection
│
├── frontend/
│   ├── package.json                  # Frontend dependencies
│   ├── index.html                    # HTML entry point
│   ├── vite.config.js               # Vite configuration
│   ├── eslint.config.js             # ESLint config
│   ├── public/                       # Static assets
│   ├── src/
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # React entry point
│   │   ├── App.css                  # Styles
│   │   ├── index.css                # Global styles
│   │   ├── utils/                   # Utility functions
│   │   └── components/
│   │       ├── Leftside/            # Left sidebar components
│   │       └── Rightside/           # Right side components
│   └── node_modules/
│
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud - MongoDB Atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ContactManagementSystem
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Configuration

Create a `.env` file in the `backend` directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

**Example MongoDB Atlas URL**:
```
mongodb+srv://username:password@cluster.mongodb.net/contactdb?retryWrites=true&w=majority
```

### Running the Application

#### Option 1: Terminal Tabs (Recommended)

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:3000`

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

#### Option 2: Single Command (if using concurrently)
```bash
npm run dev:all
```

## 📊 API Endpoints

### Get All Contacts
```
GET /api/contacts
```
Returns all contacts from the database.

### Create Contact
```
POST /api/contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Tech Corp",
  "status": "Interested"
}
```

### Update Contact
```
PUT /api/contacts/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+9876543210",
  "company": "Tech Corp",
  "status": "Follow-up"
}
```

### Delete Contact
```
DELETE /api/contacts/:id
```

## 📋 Contact Schema

```javascript
{
  name: String (required),
  email: String,
  phone: String,
  company: String,
  status: String (enum: ["Interested", "Follow-up", "Closed"], default: "Interested"),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🎨 UI Components

### Layout Structure
- **Leftside Components**: Contact form and filters
- **Rightside Components**: Contact list and details display

### Key Features
- Add new contacts with form validation
- View all contacts in a list/table
- Edit existing contact details
- Delete contacts
- Filter contacts by status
- Real-time data synchronization

## 🔧 Available Scripts

### Backend
```bash
npm run dev          # Start development server with nodemon
```

### Frontend
```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## 🌐 Application Flow

1. **User Interface**: React frontend at `localhost:5173`
2. **Form Input**: User enters contact details in the form
3. **HTTP Request**: Axios sends request to Express API
4. **Server Processing**: Express.js handles the request
5. **Database Operation**: Mongoose interacts with MongoDB
6. **Response**: Data sent back to frontend
7. **UI Update**: TanStack Query caches and updates the UI

## 🔐 Security Considerations

- **CORS**: Enabled for cross-origin requests between frontend and backend
- **Environment Variables**: Sensitive data stored in `.env` file
- **Input Validation**: Backend validates all incoming data
- **MongoDB Connection**: Uses secure connection strings

## 📦 Dependencies Summary

### Backend (5 core dependencies)
- `express`: Web server framework
- `mongodb`: Database driver
- `mongoose`: Schema validation and modeling
- `cors`: Enable cross-origin requests
- `dotenv`: Environment configuration

### Frontend (8 core dependencies)
- `react`: UI library
- `react-dom`: React DOM rendering
- `react-router-dom`: Routing
- `@tanstack/react-query`: Data management
- `axios`: HTTP requests
- `tailwindcss`: Styling
- `daisyui`: UI components

## 🎓 Learning Points

This project demonstrates:
- **MERN Stack Architecture**: Full-stack web development
- **RESTful API Design**: Proper HTTP methods and status codes
- **Database Modeling**: Mongoose schemas and data relationships
- **State Management**: React Hooks and TanStack Query
- **Async Operations**: API calls and data fetching
- **Form Handling**: Controlled components and validation
- **Responsive Design**: Tailwind CSS utilities
- **Error Handling**: Try-catch blocks and error states

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB connection string is correct in `.env`
- Check if port 3000 is already in use
- Verify Node.js version compatibility

### Frontend won't compile
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Clear Vite cache: `rm -rf .vite` or `rmdir .vite /s /q` on Windows

### API calls failing
- Verify backend is running on port 3000
- Check CORS is enabled in backend
- Ensure MongoDB connection is active

## 📄 Git Commands

```bash
# View changes
git status

# Commit changes
git commit -m "Your message"

# Pull latest changes
git pull
```

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Verify all environment variables are set
3. Ensure both backend and frontend servers are running
4. Check browser console for error messages

## 🎯 Future Enhancements

- Authentication and user login
- Contact search and filtering
- Bulk operations (import/export)
- Contact categories/groups
- Communication history tracking
- Email integration
- Mobile app version

## 📄 License

This project is part of a learning workspace and follows standard open-source practices.

---

**Created**: 2026 | **Stack**: MERN (MongoDB, Express, React, Node.js) | **Build Tool**: Vite
