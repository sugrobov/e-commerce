import { useEffect, useState } from 'react';
import { useDebounce, useFetch } from '../utils';
import { API, SEARCH_FIELD } from '../constants';


import ReactPaginate from 'react-paginate';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


function Main() {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.products);

    const [search, setSearch] = useState('');
    const debounce = useDebounce(search);

    let [data, isLoading, isError] = useFetch(API);
    const [visible, setIsVisible] = useState(false);



    useEffect(() => {
        setIsVisible(debounce.length > 3);
    }, [debounce, data]);


    const itemsPerPage = 4;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;


    const pageChangeHandler = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };



    return (

        <div className="container mx-4 px-4 flex flex-col md:flex-row">
            <div className="md:flex">
                <aside className="flex items-start justify-start p-4 md:flex-none md:w-1/3 lg:w-1/4">

                    <div className="bg-gray-200 p-4 w-full">
                        <h4 className="font-bold mb-2">Блок</h4>
                        <span>...</span>
                    </div>
                </aside>


                <main className="w-11/12 md:w-3/4 px-2">
                    <div className="bg-white p-4">
                        <h2 className="font-bold mb-2">Заголовок раздела</h2>
                        <p>Здесь может быть ваш текстовый контент или информация о продуктах.</p>
                        <div className="relative w-[560px]">
                            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className="border py-2 px-4 flex items-center justify-between gap-8 w-[420px] h-[42px] mb-2" placeholder="Поиск по сайту..." />
                            <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[460px] shadow-md bg-white overflow-y-scroll">
                                {
                                    visible && data.filter(note => (
                                        note[SEARCH_FIELD].toLowerCase().includes(debounce.toLowerCase())
                                    ))?.map(note => (
                                        <li key={note.id}
                                            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer
                                        section grid lg:grid-cols-3 md:grid-cols-2 gap-6
                                        ">
                                            <Link
                                                to={`products/details/${note.id}`}
                                                state={{
                                                    id: note.id,
                                                    title: note.title,
                                                    price: note.price,
                                                    description: note.description,
                                                    image: note.image
                                                }}


                                            >
                                                <>
                                                    <img className="w-8" src={note.image} alt="" />
                                                    <h6 className="">{note[SEARCH_FIELD]}</h6>
                                                </>

                                            </Link>

                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                        <div className="mb-4 grid gap-4 sm:grid-cols-1 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
                            {
                                isLoading ? <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                                    <span className="font-medium">Информация</span> Загрузка данных
                                </div> :
                                    isError ? <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                                        <span className="font-medium">Внимание</span> Ошибка чтения данных
                                    </div> :
                                        <ProductList
                                            data={data}
                                            itemOffset={itemOffset}
                                            endOffset={endOffset}
                                        />
                            }

                        </div>
                        {
                            data && <ReactPaginate
                                breakLabel="..."
                                nextLabel="вперед >"
                                onPageChange={pageChangeHandler}
                                activeClassName="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
                                pageCount={Math.ceil(data.length / itemsPerPage)}
                                previousLabel="< назад"
                                pageClassName="py-1 px-2 border mr-2"
                                previousClassName="py-1 px-2 border"
                                nextClassName="py-1 px-2 border"
                                containerClassName="flex"
                            />
                        }
                    </div>
                </main>

            </div>
        </div>


    )
}

export default Main;