# Celebrare Photo Gallery

A responsive photo gallery built with **React, Vite, and Tailwind CSS** as part of the Celebrare Frontend Internship Assignment.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Responsive photo grid layout.
- Real-time search by author name.
- Add and remove photos from favourites.
- Favourites persist after page refresh using localStorage.
- Loading spinner while fetching photos.
- Error handling for API failures.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- React Hooks (`useState`, `useEffect`, `useReducer`, `useCallback`, `useMemo`)

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── LoadingSpinner.jsx
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── App.jsx
└── index.css
```

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/vishal-kharwar-08/celebrare-photo-gallery.git
```

2. Navigate to the project directory:

```bash
cd celebrare-photo-gallery
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Author

**Vishal Kharwar**

GitHub: [vishal-kharwar-08](https://github.com/vishal-kharwar-08)

---

Developed as part of the Celebrare Frontend Internship Assignment.