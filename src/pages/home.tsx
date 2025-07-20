import { useEffect, useState } from "react"
import type { ProductModel } from "../_models/product.model"
import ProductCard from "../components/product.card";

const Home = () => {
  const [items, setItems] = useState<ProductModel[]>([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Unable to get products!")

      }

      const data = await res.json()
      setItems(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 bg-slate-400">
      {items?.map((val, i) => {
        return <ProductCard val={val} key={i} />
      })}
    </div>
  )
}

export default Home