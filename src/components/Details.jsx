import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { add } from "../parts/likes/likeSlice";
import { productAdded } from "../parts/products/productsSlice";

import Button from "./UI/Button/Button";


function Details() {
    
    const location = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const select = useSelector(state => state.likes.likes);
    let likesArray = Object.keys(select).filter(k => select[k].id === location.state.id);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={location.state.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{location.state.title}</h1>
                        
                        <p className="leading-relaxed">{location.state.description}</p>

                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            {/* code */}
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{location.state.price}</span>
                            <button onClick={() => dispatch(productAdded(location.state))} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Купить</button>
                            {

                                <Button
                                    action={() => dispatch(add(location.state))}
                                    color={likesArray.length > 0 ? "red" : "blue"}
                                />

                            }

                            <button className="flex ml-auto text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 rounded" onClick={() => navigate(-1)}>вернуться</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;