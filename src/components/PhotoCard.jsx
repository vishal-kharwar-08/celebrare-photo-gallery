
function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="h-64 w-full object-cover"
      />

      <div className="flex items-center justify-between p-4">
        <p className="truncate font-medium text-gray-800">
          {photo.author}
        </p>

        <button
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite ? 'Remove from favourites' : 'Add to favourites'
          }
          className="text-2xl text-red-500 transition hover:scale-110"
        >
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>
    </div>
  )
}

export default PhotoCard
