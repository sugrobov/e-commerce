

import Product from "./Product";

function ProductList({ data, itemOffset, endOffset }) {

    return data?.slice(itemOffset, endOffset).map(note => 
    <Product
            key={note.id}
            item={note}         
        />
    )
}

export default ProductList;