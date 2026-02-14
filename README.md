# 🍽️ RenderBites – Swiggy-Like Food Ordering App

RenderBites is a **Swiggy-inspired food delivery frontend application** built using **React**.
It uses **Swiggy’s live public API** to fetch real-time restaurant and menu data and demonstrates modern React concepts such as **hooks, context API, custom hooks, routing, and performance optimizations**.

---

## 🚀 Features

* 🏪 Live restaurant listing using Swiggy API
* 📋 Restaurant menu with categories & items
* 🔄 Shimmer UI while loading data
* 🌐 Online / Offline status detection
* 🧠 Global state management using Context API
* 🧩 Reusable & modular React components
* 🔁 Custom hooks for clean logic separation
* 🧭 Client-side routing
* ❌ Error handling & fallback UI

---

## 🛠️ Tech Stack

* **React (Functional Components)**
* **React Hooks**
* **React Router DOM**
* **Context API**
* **Parcel Bundler**
* **JavaScript (ES6+)**
* **CSS**
* **Live Swiggy API**

---

## 📁 Project Structure

```
RenderBites/
│
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── Grocery.js
│   │   ├── Header.js
│   │   ├── ItemList.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantCategory.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   ├── User.js
│   │   └── UserClass.js
│   │
│   ├── utils/
│   │   ├── UserContext.js
│   │   ├── constants.js
│   │   ├── mockData.js
│   │   ├── useOnlineStatus.js
│   │   └── useRestaurantMenu.js
│   │
│   └── App.js
│
├── index.html
├── index.css
├── package.json
└── README.md
```

---

## ⚡ Bundler & Build Tool – Parcel

This project uses **Parcel**, which provides many powerful features out of the box:

* 🚧 Dev Build
* 🖥️ Local Development Server
* 🔥 HMR (Hot Module Replacement)
  Updates the UI live whenever a file is changed.
* 👀 File Watching Algorithm (written in C++)
* ⚡ Caching for faster builds
* 🖼️ Image Optimization
* 📦 Bundling
* 🧹 Minification
* 🗜️ Compression
* 🔀 Consistent Hashing
* ✂️ Code Splitting
* 🌍 Differential Bundling (supports older browsers)
* 🧪 Diagnostics
* ❌ Error Handling
* 🔐 HTTPS support
* 🌳 Tree Shaking (removes unused code)
* 🏗️ Separate development & production bundles

---

## 📦 JavaScript Module System

### 🔹 Default Export / Import

```js
export default Component;
import Component from "path";
```

### 🔹 Named Export / Import

```js
export const Component;
import { Component } from "path";
```

---

## ⚛️ React Hooks Used

React Hooks are **normal JavaScript utility functions** provided by React.

* **`useState()`**
  Used to create powerful state variables in React components.

* **`useEffect()`**
  Used for:

  * API calls
  * Side effects
  * Lifecycle-like behavior in functional components

---

## 🔌 Custom Hooks

### `useOnlineStatus`

* Detects whether the user is **online or offline**
* Helps display fallback UI when the user is offline

### `useRestaurantMenu`

* Fetches **live restaurant menu data**
* Manages loading and error states

---

## 🧠 Context API

### `UserContext`

* Manages **global user state**
* Avoids prop drilling
* Accessible across multiple components

---

## 📡 API Used

* **Swiggy Live Public API**

  * Restaurant listing
  * Restaurant menu & categories

> ⚠️ Note: Swiggy APIs may change or face CORS restrictions.
> A proxy or browser extension may be required in some cases.

---

## 🖥️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/RenderBites.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd RenderBites
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Application

```bash
npm start
```

The app runs on:

```
http://localhost:3000
```

---

## 🎯 Learning Outcomes

* Real-world React folder structure
* API handling using custom hooks
* Context API for global state
* Performance optimization with Parcel
* Clean, reusable component design
* Production-ready frontend practices

---

## 👨‍💻 Author

**Uday**
B.E. Computer Science Engineering
React | JavaScript | MERN Stack
Passionate about building scalable frontend applications

---
