
# 🇮🇳 Pincode Lookup App (React + Vite)

This app allows users to search for Indian postal details by entering a 6-digit Pincode. It fetches data from the [Postal Pincode API](https://api.postalpincode.in/) and displays details like Post Office name, District, State, and more. Users can also filter results by post office name in real time.

## 🔥 Features

- ✅ Lookup Indian pincode details via API
- 🔍 Real-time filtering by post office name
- 🚫 Error handling for invalid inputs and API issues
- 🌀 Loader while fetching data
- 🎨 Figma-based responsive UI
- 🔔 Toast notifications using `react-toastify`
- ⚡ Built with Vite + React

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [CSS Modules or Tailwind/CSS (based on your setup)]

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/pincode-lookup-app.git
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

> The app will be available at `http://localhost:5173`

## 🔗 API Used

> Endpoint:

```
https://api.postalpincode.in/pincode/<PINCODE>
```

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── PincodeForm.jsx
│   ├── PostOfficeList.jsx
│   ├── PostOfficeCard.jsx
│   ├── Loader.jsx
│   └── Loader.css
│
├── App.js
├── App.css
└── main.jsx
```

## 🧪 TODO / Improvements

* ✅ Add Toast messages for errors and empty results
* ⏳ Debounce filter input
* ⬆️ Pagination or infinite scroll (if needed for large results)
* 🌐 Add offline support using service workers (PWA)


## 🧑‍💻 Author

Ritesh Roushan Kumar
💼 Passionate MERN Developer | DSA Enthusiast
🔗 [LinkedIn](https://www.linkedin.com/in/riteshroushan14)

---

MIT License


