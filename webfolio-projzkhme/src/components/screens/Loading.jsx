import { useState, useEffect } from "react";

function Loading() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[var(--theme-background-black)] flex flex-col justify-center items-center">
      <div className="p-4 transition-transform duration-500 ease-in-out text-base">
        {percentage} %
      </div>
    </div>
  );
}

export default Loading;
