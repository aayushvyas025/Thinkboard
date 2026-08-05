function NotesCardSkeleton() {
  return (
    <div className="card bg-base-100 border-t-4 border-solid border-base-300 shadow-sm animate-pulse">
      <div className="card-body">
        {/* Title */}
        <div className="skeleton h-6 w-3/4 rounded-md"></div>

        {/* Description */}
        <div className="mt-3 space-y-2">
          <div className="skeleton h-4 w-full rounded-md"></div>
          <div className="skeleton h-4 w-11/12 rounded-md"></div>
          <div className="skeleton h-4 w-4/5 rounded-md"></div>
        </div>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-6">
          <div className="skeleton h-4 w-24 rounded-md"></div>

          <div className="flex gap-2">
            <div className="skeleton h-8 w-8 rounded-full"></div>
            <div className="skeleton h-8 w-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesCardSkeleton;