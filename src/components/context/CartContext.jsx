import { createContext, useContext, useState } from "react";

const CartContext = createContext([])


export function useCartContext() {
    return useContext(CartContext)
}const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    function isInCart(id) {
        return cartList.some(product => product.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
       
            let i = cartList.findIndex(product => product.id === item.id);
            const newCartList = cartList;
            newCartList[i].qty += item.qty;
            updateCart(newCartList);
        } else {
            updateCart([...cartList,item]);
        }
    }
    const deleteCart = () => {
        updateCart([]);
    }
 
        function clearItem(id) {
            let i = cartList.findIndex(product=> product.id === id);
            const newCartList = cartList;
            newCartList.splice(i,1);
            updateCart(newCartList);
        }

  
    
    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.qty*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.qty)
            .reduce((acc,curr) => acc+curr,0)
        );
    }
    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            clearItem,
            deleteCart,
            totalPrice,
            totalItems
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



