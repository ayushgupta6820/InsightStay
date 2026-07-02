## Backend - How to Run Locally

### 1. Open the backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add the following:

```env
PORT=5000
```

### 4. Start the backend server

```bash
npm run dev
```

The backend will run at:

```
http://localhost:5000
```

### Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/:id | Get review by ID |
| POST | /api/reviews | Create a review |
| PUT | /api/reviews/:id | Update a review |
| DELETE | /api/reviews/:id | Delete a review |
| GET | /api/reviews/search?q=keyword | Search reviews |

---

# Database

## Database Technology

InsightStay uses **MongoDB Atlas** as its cloud database and **Mongoose** as the Object Data Modeling (ODM) library.

MongoDB was selected because guest reviews are naturally represented as documents with a flexible schema. It integrates well with the MERN stack, provides excellent scalability, and allows efficient CRUD operations for review management.

---

# Database Schema

The application stores guest reviews in a MongoDB collection named **reviews**.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| _id | ObjectId | Auto Generated | Unique identifier for each review |
| guest | String | Yes | Name of the guest |
| hotel | String | Yes | Hotel or property name |
| review | String | Yes | Guest review text |
| sentiment | String | Yes | Review sentiment (Positive, Neutral or Negative) |
| createdAt | Date | Auto Generated | Timestamp when the review is created |
| updatedAt | Date | Auto Generated | Timestamp when the review is last updated |

---

# Database Schema Diagram

The following diagram illustrates the MongoDB data model used by InsightStay.

![Database Schema](C:\Users\AYUSH\Pictures\InsightStay\backend\SchemaDiagram.png)

---

# Database Setup

### 1. Create a MongoDB Atlas Account

Create a free cluster using MongoDB Atlas.

### 2. Create a Database User

Create a database user with read and write permissions.

### 3. Configure Network Access

Whitelist your current IP address or allow access from all IPs during development.

### 4. Obtain the Connection String

Copy the MongoDB Atlas connection string.

Example:

```text
mongodb+srv://username:password@cluster.mongodb.net/insightstay
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 6. Install Dependencies

```bash
npm install
```

### 7. Start the Backend Server

```bash
npm run dev
```

A successful connection will display:

```text
MongoDB Connected Successfully
Server running on http://localhost:5000
```

---

# Environment Variables

The application requires the following environment variables.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

A sample configuration file is provided as `.env.example`.

---

# Database Features

The backend performs all data operations directly on MongoDB using Mongoose.

Supported operations include:

- Create Review
- Retrieve All Reviews
- Retrieve Review by ID
- Update Review
- Delete Review
- Search Reviews

All changes are stored permanently in MongoDB Atlas, ensuring data persists even after restarting the application.