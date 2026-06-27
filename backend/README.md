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
