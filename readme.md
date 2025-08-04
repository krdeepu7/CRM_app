
---

```markdown
# CRM_app

A full-featured **ERP/CRM system** built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). This app helps businesses manage their customers, sales, and business operations efficiently.

> Forked and customized from the [idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm) project.

## ✨ Features

- User Authentication and Authorization (Role-Based Access)
- Company, Customer, and Employee Management
- Product and Inventory Management
- Quotation, Invoice, and Payment Tracking
- Dynamic Dashboard with KPIs
- Built-in Search, Filters, and Pagination
- Responsive UI with Ant Design
- RESTful API

---

## 🛠️ Tech Stack

| Frontend         | Backend       | Database   | UI Framework |
|------------------|---------------|------------|--------------|
| React.js + Vite  | Node.js + Express | MongoDB    | Ant Design   |

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js >= 16
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- npm or yarn

### 🔧 Project Structure

```

CRM\_app/
├── backend/      # Node.js + Express API
├── frontend/     # React.js + Vite Frontend
└── README.md

````

---

## 🖥️ Run Locally

### 1. Clone the repository

```bash
git clone git@github.com:krdeepu7/CRM_app.git
cd CRM_app
````

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Create `.env` in `backend/` with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/crm_db
JWT_SECRET=your_jwt_secret
```

Then start the backend server:

```bash
npm run dev
```

### 4. Install frontend dependencies

```bash
cd ../frontend
npm install
```

If `vite` is not installed globally:

```bash
npm install -g vite
```

Start the frontend app:

```bash
npm run dev
```

> By default, frontend runs on `http://localhost:3000` and backend on `http://localhost:5000`

---

## 🧪 Testing

To test the API or frontend, you can use:

* Postman (for backend routes)
* Jest/Mocha (if test cases are added)
* Browser for UI testing

---

## 📦 Build for Production

### Backend:

```bash
cd backend
npm run build
```

### Frontend:

```bash
cd frontend
npm run build
```

---

## 📁 Environment Variables

Make sure to set the following variables in your `.env`:

```env
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
```

---

## 🙌 Acknowledgements

* [Idurar ERP/CRM](https://github.com/idurar/idurar-erp-crm)
* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Ant Design](https://ant.design/)
* [Vite](https://vitejs.dev/)

---

## 📄 License

MIT License

---

## 📬 Contact

Created and maintained by [@krdeepu7](https://github.com/krdeepu7)


