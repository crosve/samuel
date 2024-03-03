import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Reveal } from "../utils/Reveal";

const images = [
  "/galleryImages/samuelimg1.jpeg",
  "/galleryImages/samuelimg2.jpg",
  "/galleryImages/samuelimg3.jpg",
  "/galleryImages/samuelimg5.jpg",
  "/galleryImages/samuelimg6.jpg",
];

function Reviews() {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const closeImage = () => {
    setData({ img: "", i: 0 });
  };

  const back = (data) => {
    if (data.i > 0) {
      setData({ img: images[data.i - 1], i: data.i - 1 });
    }
  };

  const forward = (data) => {
    if (data.i < images.length - 1) {
      setData({ img: images[data.i + 1], i: data.i + 1 });
    }
  };
  return (
    <>
      {data.img && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Set a higher z-index
            gap: "20px",
          }}
        >
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
              top: "50%",
            }}
          />
          <div className="flex items-center justify-center gap-4">
            {data.i > 0 && (
              <button
                className=" bg-slate-600 h-12 w-16 rounded-lg text-center text-white font-bold hover:bg-slate-100"
                onClick={() => back(data)}
              >
                Back
              </button>
            )}
            <button
              className=" bg-slate-600 h-12 w-16 rounded-lg text-center text-white font-bold hover:bg-slate-100"
              onClick={() => closeImage()}
            >
              Close
            </button>
            {data.i < images.length - 1 && (
              <button
                className=" bg-slate-600 h-12 w-16 rounded-lg text-center text-white font-bold hover:bg-slate-100"
                onClick={() => forward(data)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}

      <div
        style={{
          padding: "100px 50px 0 50px",
          display: "relative",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <Reveal>
                <img
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  alt=""
                  onClick={() => viewImage(image, i)}
                />
              </Reveal>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Reviews;
