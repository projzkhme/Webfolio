function UITags({ className = "", items, selectedItem, onClick }) {
  return (
    <div className={`p-4 flex flex-row items-center space-x-3 overflow-auto ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item)}
          className={`min-w-[10rem] p-2 ring-1 text-center text-xs md:text-sm cursor-pointer hover:bg-[var(--theme-secondary)] hover:text-[var(--theme-text-light)] duration-300 transition ease-in-out flex items-center justify-center ${
            item === selectedItem
              ? "bg-[var(--theme-secondary)] text-[var(--theme-text-light)]"
              : ""
          }`}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default UITags;
