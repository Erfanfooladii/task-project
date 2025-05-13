import CountdownTimer from "./CountdownTimer";
import SliderHotDeals from "./SliderHotDeals";

const HotDeals = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotdeals`, {
      next: { revalidate: 3600 },
    });
    const hotDealsData = await res.json();
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-start md:items-baseline md:justify-between">
          <h2 className="font-bold text-4xl text-center pt-24  text-slate-900">
            Hot Deals
          </h2>
          <CountdownTimer />
        </div>
        <SliderHotDeals data={hotDealsData} />
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
export default HotDeals;
