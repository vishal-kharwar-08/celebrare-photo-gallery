
import {
  useReducer,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react'

import useFetchPhotos from '../hooks/useFetchPhotos'
import favouritesReducer from '../reducers/favouritesReducer'
import PhotoCard from './PhotoCard'
import LoadingSpinner from './LoadingSpinner'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  const [favourites, dispatch] = useReducer(favouritesReducer, [])

  const [searchTerm, setSearchTerm] = useState('')

  const [favouritesLoaded, setFavouritesLoaded] = useState(false)

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedFavourites = localStorage.getItem('favourites')

      if (savedFavourites) {
        const parsedFavourites = JSON.parse(savedFavourites)

        if (Array.isArray(parsedFavourites)) {
          dispatch({
            type: 'LOAD_FAVOURITES',
            payload: parsedFavourites,
          })
        }
      }
    } catch (err) {
      console.error('Failed to load favourites:', err)
    } finally {
      setFavouritesLoaded(true)
    }
  }, [])

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    if (favouritesLoaded) {
      localStorage.setItem(
        'favourites',
        JSON.stringify(favourites)
      )
    }
  }, [favourites, favouritesLoaded])

  // Handle search input changes
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  // Filter photos by author name
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  }, [photos, searchTerm])

  // Toggle a photo as favourite
  const handleToggleFavourite = (photoId) => {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      payload: photoId,
    })
  }

  // Show loading spinner while fetching photos
  if (loading) {
    return <LoadingSpinner />
  }

  // Show error message if fetching fails
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-center text-red-600">
          Error: {error}
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Photo Gallery
      </h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search photos by author..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-8 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      {/* Responsive photo grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={favourites.includes(photo.id)}
            onToggleFavourite={handleToggleFavourite}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
