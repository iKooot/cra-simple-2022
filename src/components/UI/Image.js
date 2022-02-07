import React, { useEffect, useRef, useState } from "react";
import { Skeleton } from "@mui/material";

export const Image = ({ src, alt = 'Custom image',  width, height, attrs }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    console.log(imgRef.current)
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width={width} height={height} />
      ) : (
        <img ref={imgRef} src={src} alt={alt} width={width} height={height} {...attrs} />
      )}
    </>
  );
};
