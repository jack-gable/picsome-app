import React from "react";
import { createApi } from "unsplash-js";

const API_KEY = "QMxJuJcyMlBjJWFASttOjcM_kkdQYZNvZ9z6Ky4jfas";
const PhotoContext = React.createContext();

function PhotosProvider({ children }) {
	const [allPhotos, setAllPhotos] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchSize, setSearchSize] = React.useState(25);

	const api = createApi({
		accessKey: API_KEY,
	});

	const searchPics = async (e) => {
		e.preventDefault();

		try {
			const res = await api.search.getPhotos({
				query: searchTerm,
			});
			setAllPhotos(res.response.results);
		} catch (err) {
			console.log("something went wrong!");
		}

		setSearchTerm("");
	};
	//TODO: switch to json of data of products instead of unsplash api
	function addToCart(newItem) {
		setCartItems((prevItems) => [...prevItems, newItem]);
	}

	function removeFromCart(id) {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	function emptyCart() {
		setCartItems([]);
	}

	return (
		<PhotoContext.Provider
			value={{
				allPhotos,
				cartItems,
				searchTerm,
				searchSize,
				addToCart,
				removeFromCart,
				emptyCart,
				setSearchTerm,
				searchPics,
				setSearchSize,
			}}
		>
			{children}
		</PhotoContext.Provider>
	);
}

export { PhotosProvider, PhotoContext };
