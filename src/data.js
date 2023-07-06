//Coffe: price_1NQt0FDoEYiPQmcr2spKccSu;
//Sunglass: price_1NQt1yDoEYiPQmcrWg25igjQ
//Camera: price_1NQt2qDoEYiPQmcrCnXSiFMR
import product1 from "./assets/products/coffee.jpeg";
import product2 from "./assets/products/sunglass.jpeg";
import product3 from "./assets/products/camera.png";
const productsArray = [
	{
		id: "price_1NQt0FDoEYiPQmcr2spKccSu",
		title: "Coffee",
		price: "4.99",
		productImage: product1,
	},
	{
		id: "price_1NQt1yDoEYiPQmcrWg25igjQ",
		title: "Sunglass",
		price: "79.99",
		productImage: product2,
	},
	{
		id: "price_1NQt2qDoEYiPQmcrCnXSiFMR",
		title: "Camera",
		price: "299.99",
		productImage: product3,
	},
];

const getProductData = (id) => {
	let productData = productsArray.find((product) => product.id === id);
	if (productData === undefined) {
		return <p>Product data does not exist for ID: + id</p>;
	}

	return productData;
};

export { productsArray, getProductData };
