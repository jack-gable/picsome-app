import React from "react";
import { createApi } from "unsplash-js";
import useLocalStorage from "./hooks/useLocalStorage";

const API_KEY = "QMxJuJcyMlBjJWFASttOjcM_kkdQYZNvZ9z6Ky4jfas";
const PhotoContext = React.createContext();

function PhotosProvider({ children }) {
	const [allPhotos, setAllPhotos] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = useLocalStorage("favorites", []);
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchSize, setSearchSize] = React.useState(25);
	const [openFavorites, setOpenFavorites] = React.useState(false);

	const api = createApi({
		accessKey: API_KEY,
	});

	const searchPics = async (e) => {
		e.preventDefault();

		try {
			const res = await api.search.getPhotos({
				query: searchTerm,
				page: Math.floor(Math.random() * 10),
				per_page: searchSize,
			});
			setAllPhotos(res.response.results);
		} catch (err) {
			console.log("something went wrong!");
		}

		setSearchTerm("");
	};

	function addToFavorites(newItem) {
		setFavorites((prevItems) => [...prevItems, newItem]);
	}

	function removeFromFavorites(id) {
		setFavorites((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	function emptyFavorites() {
		setFavorites([]);
	}

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
				favorites,
				openFavorites,
				setOpenFavorites,
				addToFavorites,
				removeFromFavorites,
				emptyFavorites,
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
