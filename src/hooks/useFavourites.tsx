import { useState } from "react";

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const addFavourite = (id: any, remove: any) => {
    const newFavorite = [...favourites, id];

    if (remove) {
      const result = newFavorite.filter((item) => {
        return item !== id;
      });
      return setFavourites(result);
    }
    const result = newFavorite.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);

    return setFavourites(result);
  };
  return { favourites, addFavourite };
};
