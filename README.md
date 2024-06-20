# Study-Notion (An EdTech Platform) - MERN Stack Web Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Study-Notion is a comprehensive EdTech platform designed to facilitate online learning. Built using the MERN stack, it allows instructors to create and manage courses, while students can browse, purchase, and view course tutorials. The platform includes payment integration with Razorpay, media storage with Cloudinary, and email notifications via nodemailer. It also features user authentication, a rating and review system for courses, and efficient global state management using Redux Toolkit.

## Features

- User authentication (Sign up, Log in, Log out)
- Instructor course creation and management
- Student course browsing, purchasing, and viewing
- Course rating and review system
- Payment processing with Razorpay
- Media storage with Cloudinary for images and videos
- Email notifications via nodemailer
- Responsive design optimized for both desktop and mobile devices

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux Toolkit
- **Media Storage**: Cloudinary
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer

## Installation

### Prerequisites

- Node.js (>=14.x.x)
- MongoDB (local or Atlas)
- Razorpay account for payment integration
- Cloudinary account for media storage

### Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/thefarhanahmad/StudyNotion-EDTech-Platform.git
   cd study-notion
   ```

2. Install dependencies:

   ```sh
   npm install
   cd client
   npm install

   ```

3. Create a .env file in the server directory and add the following environment variables:

   ```env
   MAIL_HOST=smtp.yourmailprovider.com
   MAIL_USER=your_email@example.com
   MAIL_PASS=your_mail_password
   JWT_SECRET=your_jwt_secret
   FOLDER_NAME=your_folder_name
   RAZORPAY_KEY=your_razorpay_key
    RAZORPAY_SECRET=your_razorpay_secret
    API_KEY=your_api_key
    API_SECRET=your_api_secret
    CLOUD_NAME=your_cloud_name
    MONGODB_URL=your_mongodb_connection_string
    PORT=4000
   ```

4. Create a .env file in the server directory and add the following environment variables:

   ```env
   REACT_APP_BASE_URL=http://localhost:4000/api/v1

   ```

5. Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### User Flow

1. **Sign Up / Log In** : Users can sign up for a new account or log in with existing credentials.
2. **Browse Courses**: Users can browse the available courses and view details.
3. **Purchase Courses**: Users can purchase courses using Razorpay for payment.
4. **View Courses**: After successful payment, users can access and view course tutorials.
5. **Rate and Review Courses**: Users can rate and review courses they have taken.
6. **Admin Panel**: Admin users can add, edit, and delete courses, as well as manage user accounts.

### Admin Panel

- **Manage Courses**: Admins can add new courses, edit existing courses, and delete courses.
- **Manage Users**: Admins can view and delete user accounts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

## License

This project is licensed under the MIT License.

## Contact

- GitHub: [thefarhanahmad](https://github.com/thefarhanahmad)
- Email: akhtarfarhan281@gmail.com
