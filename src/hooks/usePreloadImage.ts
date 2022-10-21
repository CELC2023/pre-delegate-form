import { useEffect } from "react";

export function usePreloadImage(image: string) {
  useEffect(() => {
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = img.onabort = () => {
          reject(image);
        };
        img.src = image;
      });
  }, [image]);
}
