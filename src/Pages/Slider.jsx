import { useEffect, useRef, useState } from "react";

const images = [
  "air.webp",
  "air2.jpg",
  "air3.jpg",
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);   // cleanup on unmount
  }, []);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <>

{/* <Booking/> */}

    <div className="relative w-full max-w-3xl h-64 md:h-96 mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out h-full"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-full object-cover flex-shrink-0"
            alt={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1"
      >
        ›
      </button>
    </div>

  {/* </About> */}
  {/* <FlightCard></FlightCard> */}


    </>
  );
}
