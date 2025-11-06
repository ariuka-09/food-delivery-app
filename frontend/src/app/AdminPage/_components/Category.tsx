import { AddCategory } from "./AddCategory";

export function Category (props:{Categories:{categoryName:string, _id:string}[]}){
    const {Categories} = props;
    console.log("test", Categories);
    
    return(
        <div className="flex flex-col gap-4">
          <h4 className="text-5 font-semibold">Dishes category</h4>
          <div className="flex gap-3">
          <div className="flex gap-3 flex-wrap w-fit">
            {Categories.map((Category)=>{
                return(
                    <div className="py-2 px-4 rounded-full border-2 border-[#E4E4E7] flex gap-2 items-center ">
                        <p className="text-[14px] font-medium ">{Category.categoryName}</p> 
                        <div className="px-2.5 py-0.5 bg-black text-white rounded-full">10</div>
                    </div>
                )
            })}
          </div>

          <AddCategory/>
          </div>

        </div>
    )
}


