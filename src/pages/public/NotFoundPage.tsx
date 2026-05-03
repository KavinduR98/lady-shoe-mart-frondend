
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-6xl font-bold text-pink-500">404</h1>
      <p className="text-xl text-gray-500">Page not found</p>
      <a href="/" className="text-pink-500 underline">Go Home</a>
    </div>
  )
}

export default NotFoundPage