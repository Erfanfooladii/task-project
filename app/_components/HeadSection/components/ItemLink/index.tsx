const ItemLink = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="w-[450px] h-[260px] rounded-2xl md:min-h-[650px] duration-1000 transition-all md:w-full overflow-hidden relative snap-start block">
      <img
        className="rounded-2xl object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
        src={src}
        alt="keyboard image"
      />
      <div className="z-10 w-full h-full md:h-fit flex flex-col justify-between md:gap-4 items-start p-9 absolute bottom-0">
        <span className="font-bold text-sm text-slate-300">No.1 GEAR</span>
        <h2 className="font-bold text-3xl md:text-6xl">{title}</h2>
        <p className="text-slate-300 text-lg">
          Every piece is made to last beyond the season
        </p>
        <button className="px-7 py-3 font-bold text-sm bg-white rounded text-black">
          Shop now
        </button>
      </div>
    </div>
  );
};
export default ItemLink;
