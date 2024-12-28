import React from 'react';

const ContentSection: React.FC = () => {
  return (
    <section>
      <div className="pt-20 text-center">
        <h2 className="text-4xl font-bold leading-tight max-w-5xl mx-auto">
          Why choose our eBooks?
        </h2>
        <p className="leading-relaxed text-2xl max-w-4xl mx-auto pt-7">
          Our eBooks are designed to help you learn to code and boost your
          career. We have a wide range of topics that are beginner-friendly
          and expert-approved.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pt-20">
        <div className="grid grid-cols-1 gap-8 pt-20">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <img
              className="w-full md:w-1/2 mx-auto md:mx-0 md:mr-8 rounded-md"
              src="/src/assets/photo-1.jpeg"
              alt="Description of the image"
            />
            <div>
              <h3 className="text-2xl font-bold pt-7 md:pt-0">
                Expert authors
              </h3>
              <p className="text-lg pt-4">
                Our eBooks are written by experts in the field who have years
                of experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left">
            <img
              className="w-full md:w-1/2 mx-auto md:mx-0 md:ml-8 rounded-md"
              src="/src/assets/photo-2.jpeg"
              alt="Description of the image"
            />
            <div>
              <h3 className="text-2xl font-bold pt-7 md:pt-0">
                Practical content
              </h3>
              <p className="text-lg pt-4">
                Our eBooks are designed to be practical and easy to
                understand.
              </p>
              <p>
                With our eBooks, you’ll gain access to knowledge ranging from
                basic to advanced. Understand fundamental concepts, master
                modern frameworks, and learn to create amazing projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
