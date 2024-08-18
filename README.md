# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Проект создан с целью прокачать навыки react-redux.
Стек: react-router-dom, react-redux, tailwind.
Описание работы. Приложение получает данные по адресу https://fakestoreapi.com/products. Указанный путь прописан в константе const API = "https://fakestoreapi.com/products" //** файл 'src\constants\index.js' */
Процесс чтения данных обрабатывается хуком useFetch(url), //** файл 'src\utils\index.js' */ где url – путь чтения данных. который возвращает: data - данные isLoading - состояние загрузки isError - наличие ошибки чтения данных
Приложение разбирает данные и рендерит их в виде карточек товара с кнопкой "Добавить в корзину" и "Лайк/Не лайк". При нажатии «Добавить в корзину», товар отправляется в Корзину, которая активируется при переходе по ссылке верхнего меню «Корзина». В приложении предоставлена возможность поиска. Функцию поиска обрабатывает хук useDebounce(search, delay = 300), //** файл 'src\constants\index.js' */ который активирует поиск, если строка поиска не задействована пользователем более delay = 300 мс.

