# SecureConnect

## Description

SecureConnect is a platform for secure authentication of users.

## Prerequisites

Ensure you have the following installed on your system:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) 

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/RavimalRanathunga/SpiritX_Byteforge_01
```

### 2. Navigate to the project directory

```sh
cd secureconnect
```

### 3. Set up a Neon PostgreSQL Database

1. Go to [Neon](https://neon.tech/) and sign up or log in.
2. Create a new project and choose PostgreSQL as the database type.
3. Once the database is created, copy the provided connection string.

### 4. Set up environment variables

Create a `.env` file in the root directory and add the required environment variables:

```sh
DATABASE_URL=your_database_url
AUTH_SECRET=your_secret_key
```

### 5. Install dependencies

For install dependencies:

```sh
npm install
```

### 6. Run the application

For run the project:

```sh
npm run dev
```

##

