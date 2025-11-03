import { Food, foodInfo } from "@/types";

export const Foodcard = (props: { Food: Food }) => {
  const { foodName, price, ingredients, image } = props.Food;
  return (
    <div className="p-4 w-[365px] h-[310px] bg-amber-50 rounded-[20px] border-black border-2">
      <img src={`${image}`} className="h-[60%] w-full object-cover " alt="" />
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
