import { useRef, useState, useEffect, useCallback } from "react";

function UICarousel({ className = "", items = [] }) {
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollAmount = 320; // Adjust as needed

  const scroll = useCallback((direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const newScrollLeft =
      direction === "next"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsAtStart(container.scrollLeft <= 0);
        setIsAtEnd(
          container.scrollLeft + container.clientWidth >= container.scrollWidth
        );
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize state

    return () => container.removeEventListener("scroll", handleScroll);
  }, [items.length]); // Dependency changed to items.length to prevent unnecessary effect re-runs

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let startX = 0;
    let scrollLeft = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const deltaX = e.touches[0].clientX - startX;
      container.scrollLeft = scrollLeft - deltaX;
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className={`w-[20rem] flex flex-col gap-3 ${className} md:w-[42.5rem] lg:w-[64rem]`}>
      <section
        ref={carouselRef}
        className="flex flex-row gap-5 overflow-x-hidden"
      >
        {items.map((item) => (
          <div
            key={item.id || item} // Use item.id if available, else fallback to item
            className="min-w-[20rem] h-[22.5rem] p-4 bg-[var(--theme-primary)]"
          >
            <span className="text-base md:text-xl">{item}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-row-reverse gap-5">
        <button
          onClick={() => scroll("next")}
          className={`text-sm cursor-pointer hover:opacity-75 ${
            isAtEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isAtEnd}
        >
          NEXT
        </button>
        <button
          onClick={() => scroll("prev")}
          className={`text-sm cursor-pointer hover:opacity-75 ${
            isAtStart ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isAtStart}
        >
          PREV
        </button>
      </section>
    </div>
  );
}

export default UICarousel;