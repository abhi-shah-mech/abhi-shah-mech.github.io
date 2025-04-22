import { useState } from "react";

export default function VideoCard({ video }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="flex items-center shadow-sm flex-col relative cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src={video.thumbnail}
          alt={video.description}
          className="rounded-box object-contain w-full aspect-square"
        />
        <div className="absolute bg-neutral/75 text-md lg:text-sm bottom-0 rounded-b-box p-2 right-0 left-0">
          {video.description}
        </div>
      </div>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box w-full max-w-3xl p-0 relative rounded-box">
            <iframe src={video.src} className="aspect-video w-full" />
            <button
              className="btn btn-ghost btn-circle absolute top-2 left-2"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form className="modal-backdrop">
            <button onClick={() => setShowModal(false)}>close</button>
          </form>
        </div>
      )}
    </>
  );
}
