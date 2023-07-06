//Coffe: price_1NQt0FDoEYiPQmcr2spKccSu;
//Sunglass: price_1NQt1yDoEYiPQmcrWg25igjQ
//Camera: price_1NQt2qDoEYiPQmcrCnXSiFMR
const productsArray = [
	{
		id: "price_1NQt0FDoEYiPQmcr2spKccSu",
		title: "Coffee",
		price: "4.99",
	},
	{
		id: "price_1NQt1yDoEYiPQmcrWg25igjQ",
		title: "Sunglass",
		price: "79.99",
	},
	{
		id: "price_1NQt2qDoEYiPQmcrCnXSiFMR",
		title: "Camera",
		price: "299.99",
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
