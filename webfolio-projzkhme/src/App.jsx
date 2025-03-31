import { useState, useEffect } from "react";
import UIBtnScrollDown from "./components/common/UIBtnScrollDown";
import Introduction from "./components/sections/Introduction";
import Loading from "./components/screens/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="">
        <Introduction />
        <UIBtnScrollDown />
      </div>
    </>
  );
}

export default App;
