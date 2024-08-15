
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {

    const { amount } = useSelector(state => state.products);

    return (
   
        <div className="bg-gray-800 text-white">

            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Мой Сайт</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Главная
                        </Link>
                        
                        <Link to="/checkout" className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Корзина [{amount}]</Link>
                     </div> 
                </div>
            </nav>
        </div>
      
    )


}

export default Navbar;

