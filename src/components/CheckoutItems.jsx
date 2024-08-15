
import { useDispatch } from "react-redux";
import { productIncrease, productDecrease, productRemove } from "../parts/products/productsSlice";

function CheckoutItems({ item }) {
    const { id, price, amount, title, image } = item;
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center border border-solid border-glass p-14 mb-6 ml-5 mr-6">
            <div className="flex items-center gap-4 pr-4">
                <img src={image} alt="" className="w-20 h-20 object-cover" />
            </div>
            <div className="flex flex-col items-start max-w-[6.8rem]">
                <div>{title}</div>
                <div className="flex items-center gap-4 mt-2">
                    <button
                        className="w-8 h-8 text-white bg-blue-500 rounded-full"
                        onClick={() => dispatch(productDecrease(item))}
                    >-</button>
                    <div>{amount}</div>
                    <button
                        className="w-8 h-8 text-white bg-blue-500 rounded-full"
                        onClick={() => dispatch(productIncrease(item))}
                    >+</button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <button className="w-6 h-6 text-white bg-red-500 rounded-full" onClick={() => dispatch(productRemove(item))}>x</button>
                {(price * amount).toFixed(2)}
            </div>
        </div>
    )
}

export default CheckoutItems;