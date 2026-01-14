import React from 'react'

export default function Index({src,alt,style,className}) {
  return (
    <>
      <img
              src={src}
              alt={alt}
              className={className}
              style={style}
            />

    </>
  )
}
