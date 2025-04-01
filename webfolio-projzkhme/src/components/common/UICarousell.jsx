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

  return (
    <div className={`w-[64rem] flex flex-col gap-3 ${className}`}>
      <section
        ref={carouselRef}
        className="flex flex-row gap-5 overflow-x-hidden"
      >
        {items.map((item) => (
          <div
            key={item.id || item} // Use item.id if available, else fallback to item
            className="min-w-[20rem] h-[22.5rem] p-4 bg-[var(--theme-primary)]"
          >
            <span className="text-xl">{item}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-row-reverse gap-5">
        <button
          onClick={() => scroll("next")}
          className={`cursor-pointer hover:opacity-75 ${
            isAtEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isAtEnd}
        >
          NEXT
        </button>
        <button
          onClick={() => scroll("prev")}
          className={`cursor-pointer hover:opacity-75 ${
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
