import React from "react";
import { RiAppleFill } from "react-icons/ri";
import styles from "./Payment.module.css";

function Payment() {
	return (
		<div>
			<div className={`${styles.container}`}>
				<button className={`${styles.appleBtn}`}>
					<RiAppleFill />
					Pay
				</button>
			</div>
			<div className={`${styles.payHr}`}>
				<div className={`${styles.separator}`}>Or pay with card</div>
			</div>

			<div className={`${styles.payForm}`}>
				<div className={`${styles.inputContainer}`}>
					<label htmlFor="email-input" style={{ display: "inline-block" }}>
						Email
					</label>
					<input
						id="email-input"
						type="email"
						name="email"
						placeholder="john.doe@gmail.com"
					/>
				</div>
				<div className={`${styles.inputContainer}`}>
					<label htmlFor="name-input">Name on card</label>
					<input
						id="name-input"
						type="text"
						name="name"
						placeholder="John Doe"
					/>
				</div>
				<div className={`${styles.inputContainer}`}>
					<label htmlFor="card-num">Card information</label>
					<input
						id="card-num"
						type="text"
						name="card"
						placeholder="1234 1234 1234 1234"
					/>
					<input id="card-date" type="text" name="card" placeholder="12/24" />
					<input id="card-code" type="text" name="card" placeholder="123" />
				</div>
				<div className={`${styles.inputContainer}`}>
					<label htmlFor="country-input">Country or region</label>
					<input
						id="country-input"
						type="text"
						name="country"
						placeholder="United States"
					/>
				</div>
			</div>
		</div>
	);
}

export default Payment;
