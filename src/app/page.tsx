import { Food, FoodCategory } from "@/types";
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  // const foodCategories = await fetch("http://localhost:5000/foodCategory");
  // const data = await foodCategories.json();
  // console.log(data);

  const foodCategories = await axios.get<FoodCategory[]>(
    "http://localhost:5000/foodCategory"
  );

  const foods = await axios.get<Food[]>("http://localhost:5000/food");
  console.log("food data", foods.data);

  return (
    <div>
      <div>
        {foodCategories.data.map((categories) => {
          const { _id, categoryName } = categories;
          return (
            <div>
              <div>{categoryName}</div>
              <div>
                <p className="font-bold">
                  {foods.data.map((food) => {
                    const { foodName, category } = food;
                    if (_id == category) return foodName;
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
