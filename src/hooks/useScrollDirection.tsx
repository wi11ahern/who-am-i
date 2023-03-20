/**
 * @author William Ahern
 * @create date 2023-03-20 11:42:21
 * @modify date 2023-03-20 11:42:21
 * @desc Credit to https://www.codemzy.com/blog/.
 */

import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(
    null
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && scrollY !== lastScrollY) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
