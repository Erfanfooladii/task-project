import SliderCategory from "./components/SliderCategory";

const Category = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      throw new Error("Error of server!!");
    }
    const data = await res.json();

    return (
      <div className="p-2">
        <div className="w-full">
          <h2 className="font-bold text-4xl text-center py-9 text-slate-900">
            Shop by Category
          </h2>
        </div>
        <SliderCategory data={data} />
      </div>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "error notfound";
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        <h3>Error for load categories!</h3>
        <p>{errorMessage}</p>
      </div>
    );
  }
};
export default Category;
