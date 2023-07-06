import { createContext, useState } from "react";
import { productsArray, getProductData } from "./data";

export const CartContextComponent = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteOneFromCart: () => {},
	getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const [cardProducts, setCartProducts] = useState([]);
	//[{id: 1, quantity: 2}]

	const getProductQuantity = (id) => {
		const quantity = cardProducts.find(
			(product) => product.id === id
		)?.quantity;
		if (quantity === undefined) {
			return 0;
		}

		return quantity;
	};

	const addOneToCart = (id) => {
		const quantity = getProductQuantity(id);
		if (quantity === 0) {
			setCartProducts([...cardProducts, { id: id, quantity: 1 }]);
		} else {
			setCartProducts(
				cardProducts.map((product) =>
					product.id == id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
			);
		}
	};

	const removeOneFromCart = (id) => {
		const quantity = getProductQuantity(id);
		if (quantity === 1) {
			deleteOneFromCart(id);
		} else {
			setCartProducts(
				cardProducts.map((product) =>
					product.id == id
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			);
		}
	};

	const deleteOneFromCart = (id) => {
		setCartProducts((cardProducts) =>
			cardProducts.filter((currentProduct) => {
				return currentProduct.id != id;
			})
		);
	};

	const getTotalCost = () => {
		let totalCost = 0;
		cardProducts.map((cardItem) => {
			const producData = getProductData(cardItem.id);
			totalCost += producData.price * cardItem.quantity;
		});
		return totalCost;
	};

	const contextValue = {
		items: cardProducts,
		getProductQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteOneFromCart,
		getTotalCost,
	};
	return (
		<CartContextComponent.Provider value={contextValue}>
			{children}
		</CartContextComponent.Provider>
	);
}

export default CartProvider;
