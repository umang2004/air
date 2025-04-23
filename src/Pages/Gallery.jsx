import React from 'react';

const images = [
  {
    src: 'bang.jpg',
    title: 'Kolkata',
    description:
      'When booking a ticket on our website, all you need to think of is the list of things you’ll pack in your suitcase, we will do everything else for you!',
  },
  {
    src: 'balg.jpg',
    title: 'Banglore',
    description: 'Feel the freedom of flight and enjoy stunning views above the clouds.',
  },
  {
    src: 'del.jpg',
    title: 'Delhi',
    description: 'Nature’s beauty awaits at every altitude.',
  },
  {
    src: 'mum.jpg',
    title: 'killa',
    description: 'Relax with golden sands and blue waters on your next getaway.',
  },
  {
    src: 'goa.jpg',
    title: 'Beach',
    description: 'Glide through crystal waters and explore hidden coves.',
  },
  {
    src: 'koltaka.jpg',
    title: 'Mumbai',
    description: 'Step back in time with our guided historical tours.',
  },
];

export default function Gallery() {
  return (
  <>
    <div className="bg-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition duration-300 flex flex-col justify-end p-4 text-white backdrop-blur-sm">
              <h3 className="text-lg font-bold">{img.title}</h3>
              <p className="text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
