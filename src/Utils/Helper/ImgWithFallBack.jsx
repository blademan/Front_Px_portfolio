import React from 'react';

export default function ImgWithFallBack({ src, fallback, type = 'image/webp', alt, ...delegated }) {
  return (
    <picture>
      <source srcSet={src} type={type} alt={alt} />
      <img src={fallback} {...delegated} alt={alt} />
    </picture>
  );
}
