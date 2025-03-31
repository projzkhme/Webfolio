function UIBtnScrollDown() {
  const icon = {
    label: "Scroll Down",
    description: "Scroll Down Icon",
    path: "/scroll-down.svg",
  };

  return (
    <div className="fixed bottom-0 flex flex-row">
      <div className="p-8 flex flex-col items-center gap-5 cursor-pointer">
        <span className="text-base">{icon.label.toUpperCase()}</span>
        <img
          className="w-[4rem] h-[4rem]"
          src={icon.path}
          alt={icon.description}
        />
      </div>
    </div>
  );
}

export default UIBtnScrollDown;
