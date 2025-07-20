import type { ProductModel } from "../_models/product.model"
import FullImg from "./full-img"

const ProductCard = (props: {
  val: ProductModel
}) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white ">
      <div className="aspect-[3/4] overflow-hidden p-6  ">
        <FullImg src={props?.val?.image} alt={props?.val?.title} objectContain={true} />
      </div>

      <div className="p-3 bg-slate-100">
        <p title={props?.val?.title} className="text-base cursor-pointer hover:text-black/80 transition-all  font-medium line-clamp-2">{props?.val?.title}</p>
      </div>


    </div>
  )
}

export default ProductCard