import React, { useContext, useState } from "react";

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./Pages/Store";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import CartProvider from "./CartContextComponent";

//localhost: 3000 -> Home
//localhost: 3000/success -> Success

function App() {
	return (
		<CartProvider>
			<Container>
				<NavbarComponent />
				<BrowserRouter>
					<Routes>
						<Route index element={<Store />} />
						<Route path="success" element={<Success />} />
						<Route path="cancel" element={<Cancel />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</CartProvider>
	);
}

export default App;
