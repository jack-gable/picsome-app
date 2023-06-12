import React from "react";
import { Link } from "react-router-dom";
import { PhotoContext } from "../../PhotosProvider";
import { RiShoppingCartFill, RiShoppingCart2Line } from "react-icons/ri";
import Search from "../Search";
import styles from "./Header.module.css";

function Header() {
	const { cartItems } = React.useContext(PhotoContext);

	return (
		<header>
			<Link to="/">
				<h2>PicSome</h2>
			</Link>
			<Search />
			<Link to="/cart">
				{cartItems.length > 0 ? (
					<RiShoppingCartFill className={`${styles.shoppingCartFill}`} />
				) : (
					<RiShoppingCart2Line className={`${styles.shoppingCartLine}`} />
				)}
			</Link>
		</header>
	);
}

export default Header;
