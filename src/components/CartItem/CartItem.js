import React from "react";
import { PhotoContext } from "../../PhotosProvider";
import { RiDeleteBin2Fill, RiDeleteBin2Line } from "react-icons/ri";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
	const [hovered, setHovered] = React.useState(false);
	const { removeFromCart } = React.useContext(PhotoContext);

	const enter = () => {
		setHovered(true);
	};

	const leave = () => {
		setHovered(false);
	};

	return (
		<div
			className={`${styles.cartItem}`}
			onMouseEnter={enter}
			onMouseLeave={leave}
		>
			{hovered ? (
				<RiDeleteBin2Fill
					className={`${styles.deleteFill}`}
					onClick={() => removeFromCart(item.id)}
				/>
			) : (
				<RiDeleteBin2Line
					className={`${styles.deleteLine}`}
					onClick={() => removeFromCart(item.id)}
				/>
			)}
			<img src={item.urls.thumb} alt={item.alt_description} width="130px" />
			<p>$5.99</p>
		</div>
	);
}

export default CartItem;
