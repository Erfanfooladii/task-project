import SliderPoplur from "./SliderPopular";

const Popular = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotdeals`, {
      next: { revalidate: 3600 },
    });
    const popularData = await res.json();
    return (
      <div className="flex flex-col gap-5">
        <div className="">
          <h2 className="font-bold text-4xl text-center pt-24  text-slate-900">
            Popular products
          </h2>
        </div>
        <SliderPoplur data={popularData} />
      </div>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "error notfound";
    return (
      <div className="p-4 bg-red-100  text-red-800 rounded">
        <h3>Error for load Hot Deals!</h3>
        <p>{errorMessage}</p>
      </div>
    );
  }
};
export default Popular;
