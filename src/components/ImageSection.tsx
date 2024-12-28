import React from 'react';

interface ImageSectionProps {
  src: string;
  alt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt }) => {
  return (
    <section className="pt-20">
      <img
        className="rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        src={src}
        alt={alt}
      />
    </section>
  );
};

export default ImageSection;
