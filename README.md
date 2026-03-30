# DB Project

A simple Node.js application with Express and MongoDB integration.

## Features

- Express.js server
- MongoDB connection using Mongoose
- Environment variable configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance running
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB URI:

```
MONGO_URI=your_mongodb_connection_string
```

### Running the Application

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000`

## Project Structure

- `app.js` - Main application file with Express and MongoDB setup
- `package.json` - Project dependencies and scripts

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB object modeling
- **mongodb** - MongoDB driver
- **dotenv** - Environment variable management

## License

ISC
