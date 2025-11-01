import { Food, foodInfo } from "@/types";

export const Foodcard = (props: { Food: Food }) => {
  const { Food } = props;
  const { foodName, price, ingredients } = Food;
  return (
    <div className="p-4 w-[365px] h-[310px] bg-amber-50 ">
      {/* <img src={`${img}`} alt="" /> */}
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-[#ef4444] text-[24px] font-semibold">{foodName}</p>
          <p className="font-semibold text-[18px]">{price}</p>
        </div>
        <div>
          <p className="text[14px] font-normal">{ingredients}</p>
        </div>
      </div>
    </div>
  );
};
