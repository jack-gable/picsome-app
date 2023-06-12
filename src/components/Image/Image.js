import React from "react";
import { PhotoContext } from "../../PhotosProvider";
import { RiShoppingCart2Fill, RiAddCircleLine } from "react-icons/ri";
import styles from "./Image.module.css";

function Image({ className, img }) {
	const [hovered, setHovered] = React.useState(false);
	const { addToCart, cartItems, removeFromCart } =
		React.useContext(PhotoContext);

	const enter = () => {
		setHovered(true);
	};

	const leave = () => {
		setHovered(false);
	};

	function cartIcon() {
		const alreadyInCart = cartItems.some((item) => item.id === img.id);
		if (alreadyInCart) {
			return (
				<RiShoppingCart2Fill
					onClick={() => removeFromCart(img.id)}
					className={`${styles.cart}`}
				/>
			);
		} else if (hovered) {
			return (
				<RiAddCircleLine
					onClick={() => addToCart(img)}
					className={`${styles.cart}`}
				/>
			);
		}
	}

	return (
		<div
			className={`${className} ${styles.imageContainer}`}
			onMouseEnter={enter}
			onMouseLeave={leave}
		>
			<img
				src={img.urls.regular}
				className={`${styles.imageGrid}`}
				alt={img.alt_description}
			/>
			<a
				className={`${styles.credit}`}
				target="_blank"
				href={`https://unsplash.com/@${img.user.username}`}
				rel="noreferrer"
			>
				{img.user.name}
			</a>
			{cartIcon()}
		</div>
	);
}

export default Image;
