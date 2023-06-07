import React from "react";
import { PhotoContext } from "../../PhotosProvider";
import CartItem from "../../components/CartItem";
import Payment from "../../components/Payment";
import styles from "./Cart.module.css";

function Cart() {
	const [buttonText, setButtonText] = React.useState("Place Order");
	const { cartItems, emptyCart } = React.useContext(PhotoContext);
	const totalCost = 5.99 * cartItems.length;
	const totalCostDisplay = totalCost.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	const cartItemElements = cartItems.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	function placeOrder() {
		setButtonText("Ordering...");
		setTimeout(() => {
			setButtonText("Place Order");
			emptyCart();
		}, 3000);
	}

	return (
		<main className={`${styles.cartPage}`}>
			<h1>Check Out</h1>
			{cartItemElements}
			<p className={`${styles.totalCost}`}>Total: {totalCostDisplay}</p>
			{cartItems.length > 0 ? (
				<div>
					<Payment />
					<div className={`${styles.orderButton}`}>
						<button onClick={placeOrder}>{buttonText}</button>
					</div>
				</div>
			) : (
				<p>You have no items in your cart.</p>
			)}
		</main>
	);
}

export default Cart;
