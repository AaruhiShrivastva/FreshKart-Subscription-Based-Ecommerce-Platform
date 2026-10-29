# 🛒 FreshKart — Subscription-Based E-Commerce Platform

FreshKart is a subscription-based e-commerce platform designed to simplify the purchase of everyday essentials, including groceries, fruits, vegetables, and household products. It provides flexible purchasing options, allowing customers to choose one-time orders or recurring subscriptions based on their needs.

With a user-friendly interface and a full-stack JavaScript architecture, FreshKart aims to make routine shopping more convenient through subscription management, OTP-based authentication, and order tracking.

**Shop smarter. Subscribe easily. Simplify everyday essentials.** 🌱

---

## 📌 Overview

Traditional online shopping often requires customers to place repeated orders for products they purchase regularly. FreshKart introduces a subscription-oriented shopping experience that helps simplify recurring purchases.

The platform brings together product browsing, subscription selection, user authentication, order management, and administrative product management in one application.

### 🎯 Objectives

- Simplify the purchase of frequently used household essentials.
- Offer flexible one-time and recurring purchase options.
- Support daily, weekly, and monthly subscription frequencies.
- Provide a convenient interface for managing orders and subscriptions.
- Demonstrate the use of modern full-stack web technologies.

---

## ✨ Key Features

### 🛍️ Product Browsing and Shopping
- Explore everyday essentials through a product catalog.
- Select products according to individual needs.
- Choose between one-time purchases and subscriptions.

### 🔁 Subscription Management
- Daily, weekly, and monthly subscription options.
- Recurring purchase workflows for frequently used products.
- Subscription-related information and status management.

### 🔐 OTP-Based Authentication
- One-time password verification workflow.
- Backend-supported OTP generation and verification.
- Authentication integrated into the shopping experience.

*During local development, the OTP is displayed in the backend terminal.*

### 👤 User Profile Management
- Access profile information.
- Manage relevant account details.
- Review available subscription information.

### 🧾 Order History and Billing
- Review previous purchases.
- Access available order and billing information.
- Follow order status through the application.

### 🛠️ Admin Product Management
- Administrative product management interface.
- Support for maintaining the product catalog.

### 📱 Responsive User Interface
- React-based component architecture.
- Tailwind CSS styling.
- Responsive layouts for different screen sizes.
- Interactive components using React Hooks.

---

## 🔄 How It Works

1. **Explore products:** Browse available groceries and daily essentials.
2. **Select items:** Choose the products you want to purchase.
3. **Choose a plan:** Select a one-time order or a recurring subscription.
4. **Select frequency:** Choose daily, weekly, or monthly delivery where supported.
5. **Verify identity:** Complete the OTP authentication process.
6. **Confirm the purchase:** Complete the required order or subscription steps.
7. **Manage orders:** Review available order history and subscription information.

### User Workflow

```text
        Browse Products
              |
              v
        Select Products
              |
              v
      Choose Purchase Type
          /          \
         v            v
    One-Time      Subscription
      Order          Plan
         \            /
          v          v
       OTP Verification
              |
              v
       Complete Purchase
              |
              v
     Manage Orders and Plans
```

---

## 💻 Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Interactive user interface |
| Tailwind CSS | Responsive styling |
| Node.js | Backend runtime |
| MongoDB | NoSQL data storage |
| React Hooks | Component state and lifecycle management |
| OTP Authentication | User verification workflow |

---

## 🏗️ System Architecture

FreshKart follows a client-server architecture in which the frontend communicates with the backend, and the backend interacts with the database.

```text
+-------------------------------+
|        React Frontend         |
|                               |
| Product Catalog               |
| Subscription Interface        |
| User Profile                  |
| Order History                 |
+---------------+---------------+
                |
                | API Requests
                v
+-------------------------------+
|         Node.js Backend       |
|                               |
| Authentication               |
| Product Operations            |
| Order Management              |
| Subscription Logic            |
+---------------+---------------+
                |
                | Database Queries
                v
+-------------------------------+
|            MongoDB            |
|                               |
| Users | Products | Orders     |
| Subscription Data             |
+-------------------------------+
```

---

## ⚙️ Installation and Setup

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

Verify the installations:

```bash
node --version
npm --version
git --version
```

### 1. Set Up the Project

Open the project directory in your terminal and inspect the available folders:

```powershell
Get-ChildItem
```

Identify the frontend and backend directories and locate their respective `package.json` files.

### 2. Install Dependencies

Navigate to each application directory containing a `package.json` file and run:

```bash
npm install
```

Repeat for the frontend and backend if they are separate applications.

### 3. Configure Environment Variables

Create a local `.env` file using the variable names expected by the application.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

These variable names are illustrative. Check the application's configuration files before using them.

Do not publish passwords, database credentials, API keys, or other secrets.

### 4. Start the Backend

Navigate to the backend directory and inspect the available scripts:

```bash
npm run
```

Run the development script if available:

```bash
npm run dev
```

Alternatively, use `npm start` if that is the script defined by the application.

### 5. Start the Frontend

Open a separate terminal, navigate to the frontend directory, and inspect its scripts:

```bash
npm run
```

Start the frontend using the script configured in its `package.json`, such as:

```bash
npm run dev
```

Open the local development URL displayed in the terminal.

*The exact commands and directory names depend on the project's configuration.*

---

## 🔐 Authentication Workflow

The application uses an OTP-based verification workflow:

1. The user initiates authentication.
2. The backend generates an OTP.
3. The user obtains the OTP through the configured development workflow.
4. The OTP is submitted for verification.
5. The application proceeds based on the verification result.

For production use, OTP expiration, rate limiting, secure verification, and an appropriate email or SMS delivery service should be considered.

---

## 🚀 Future Enhancements

Potential improvements include:

- 💳 Payment gateway integration.
- 📅 Advanced delivery scheduling.
- 🔄 Automated recurring order generation.
- 📧 Email and SMS notifications.
- 📍 Delivery tracking.
- ⭐ Product reviews and ratings.
- 🔍 Advanced search and filtering.
- 📊 Admin analytics dashboard.
- 📦 Inventory management.
- 🧪 Automated testing.
- ☁️ Cloud deployment and CI/CD integration.

---

## 📚 Technical Learning Areas

The application covers several important full-stack development concepts:

- Component-based UI development with React.
- Responsive design with Tailwind CSS.
- Backend development with Node.js.
- NoSQL database integration with MongoDB.
- OTP-based authentication workflows.
- Product, order, and subscription management.
- Client-server communication.
- Environment configuration and application setup.

---


---

**FreshKart — A convenient approach to recurring everyday shopping.** 🌱🛒