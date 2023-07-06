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
			<h3>
				<span>{productData.title}</span>
				<span className="mx-5">
					<img src={productData.productImage} width={"50"} height={"50"} />
				</span>
			</h3>

			<p>{quantity} total</p>
			<p>${(quantity * productData.price).toFixed(2)}</p>
			<Button size="sm" onClick={() => cart.deleteOneFromCart(id)}>
				Remove
			</Button>
			<hr></hr>
		</>
	);
};

export default CartProduct;
