import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContextComponent } from "../CartContextComponent";
import { getProductData } from "../data";

const CartProduct = (props) => {
	const cart = useContext(CartContextComponent);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<>
			<h3>{productData.title}</h3>
			<p>{quantity} total</p>
			<p>${(quantity * productData.price).toFixed(2)}</p>
			<Button size="sm" onClick={() => cart.deleteFromCart(id)}>
				Remove
			</Button>
			<hr></hr>
		</>
	);
};

export default CartProduct;
