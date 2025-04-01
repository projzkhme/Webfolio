function Content({ children }) {
  return (
    <div
      className="flex flex-col space-y-16 pt-16 pb-24 w-full h-full relative"
      role="main"
    >
      {children}
    </div>
  );
}

export default Content;
