import React from "react";
import { PhotoContext } from "../../PhotosProvider";
import CartItem from "../../components/CartItem";
import Payment from "../../components/Payment";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";
import styles from "./Cart.module.css";

function Cart() {
	const [buttonText, setButtonText] = React.useState("Complete Order");
	const { cartItems, emptyCart } = React.useContext(PhotoContext);
	const [isModalOpen, toggleIsModalOpen] = useToggle(false);
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
			toggleIsModalOpen();
		}, 3000);
	}

	return (
		<main className={styles.cartPage}>
			<h1>Cart</h1>
			{cartItemElements}
			{cartItems.length > 0 ? (
				<div>
					<p className={styles.totalCost}>Total: {totalCostDisplay}</p>
					<div className={styles.orderButton}>
						<button onClick={toggleIsModalOpen}>Place Order</button>
					</div>
				</div>
			) : (
				<p style={{ textAlign: "center" }}>You have no items in your cart.</p>
			)}
			{isModalOpen && (
				<Modal handleDismiss={toggleIsModalOpen}>
					<Payment />
					<div className={styles.orderButton}>
						<button onClick={placeOrder}>{buttonText}</button>
					</div>
				</Modal>
			)}
		</main>
	);
}

export default Cart;
