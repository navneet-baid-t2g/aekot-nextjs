export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>

        <p className="text-sm font-medium tracking-wide text-gray-700">
          Loading…
        </p>
      </div>
    </div>
  )
}