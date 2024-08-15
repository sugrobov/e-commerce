import { useSelector } from "react-redux";
import CheckoutItems from "./CheckoutItems";
import { useDispatch } from "react-redux";

// import { total } from '../parts/products/productsSlice';
import { clear } from "../parts/products/productsSlice";

function CheckOut() {
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.products);

    let total = 0;


    cartItems.forEach(item => {
        total += item.amount * item.price
    });

    return (
        <div className="mt-8">
            {
                cartItems.length === 0 ? (
                    <div className="uppercase text-center text-3xl">
                        is Empty
                    </div>
                ) :
                    <>
                        {cartItems.map(item => (
                            <CheckoutItems
                                key={item.id}
                                item={item}
                            />
                        ))}
                        <div className="flex justify-end items-center mt-10 mb-5">
                            <div>Total: {total.toFixed(2)}</div>
                            <button className="w-8 h-8 text-white bg-red-800 rounded-full m-3" onClick={() => dispatch(clear())}>x</button>
                        </div>
                    </>
            }
        </div>
    )
}

export default CheckOut;