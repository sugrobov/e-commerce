import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productAdded } from "../parts/products/productsSlice";
import { add } from "../parts/likes/likeSlice";
import Star from "./UI/Star/Star";



function Product({ item }) {
    const select = useSelector(state => state.likes.likes);
    const { id, title, price, description, rating, image } = item;
    const dispatch = useDispatch();

    let likesArray = Object.keys(select).filter(k => select[k].id === id);

    let stars = [];

    for (let index = 0; index < Math.floor(rating['rate']); index++) {
        stars.push(<Star />)

    }
  
    return (

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-56 w-full">
                <Link
                    to={`products/details/${id}`}
                    state={item}
                >
                    <img className="mx-auto h-full dark:hidden" src={image} alt="" />
                </Link>
            </div>

            <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> {description.substring(0, 20)} ... </span>
                    <div className="flex items-center justify-end gap-1">
                        {
                            likesArray.length > 0 ?
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                                    <svg onClick={() => dispatch(add(item))} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                                :
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-blue-500 ml-4">
                                    <svg onClick={() => dispatch(add(item))} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                        }

                    </div>
                </div>

                <p
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{title.length > 63 ? `${title.substring(0, 63) + '...'}` : title}</p>

                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        {/* stars block */}
                        {
                            stars.map((note, i) => <span key={i}>{note}</span>)
                        }

                    </div>

                    <p className="text-sm font-medium text-gray-900 dark:text-white">Рейтинг {rating['rate']} </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Голосов ({rating['count']}) </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{price}</p>

                    <button
                        onClick={() => dispatch(productAdded(item))}
                        type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                        В корзину
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Product;