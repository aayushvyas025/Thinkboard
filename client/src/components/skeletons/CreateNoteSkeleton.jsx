import React from "react";

function CreateNoteSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <div className="skeleton h-10 w-36 rounded-lg mb-6"></div>

        {/* Card */}
        <div className="card bg-base-100 shadow">
          <div className="card-body space-y-6">
            {/* Heading */}
            <div className="space-y-2">
              <div className="skeleton h-8 w-56"></div>
              <div className="skeleton h-4 w-72"></div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-12 w-full rounded-lg"></div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-40 w-full rounded-lg"></div>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <div className="skeleton h-12 w-40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNoteSkeleton;