function LoadingSpinner() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
        role="status"
        aria-label="Loading photos"
      ></div>

      <p className="text-gray-600 font-medium">
        Loading photos, please wait...
      </p>
    </div>
  )
}

export default LoadingSpinner