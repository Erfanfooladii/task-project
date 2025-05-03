import { ListBenefits } from "../../types";

export default function ItemBenefits({
  icon,
  title,
  description,
}: ListBenefits) {
  return (
    <>
      <div className="border-2 flex items-center justify-center rounded-full w-16 h-16 border-slate-200">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </>
  );
}
