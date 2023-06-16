import React from "react";
import ReactFocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { RiCloseCircleLine } from "react-icons/ri";
import styles from "./Modal.module.css";

function Modal({ handleDismiss, children }) {
	const closeBtnRef = React.useRef();

	React.useEffect(() => {
		const currentlyFocusedElem = document.activeElement;

		closeBtnRef.current.focus();

		return () => {
			currentlyFocusedElem?.focus();
		};
	}, []);

	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.keyCode === "escape") {
				handleDismiss();
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleDismiss]);

	return (
		<ReactFocusLock>
			<RemoveScroll>
				<div className={styles.wrapper}>
					<div className={styles.backdrop} onClick={handleDismiss} />
					<div className={styles.content}>
						<button
							ref={closeBtnRef}
							onClick={handleDismiss}
							className={styles.closeBtn}
						>
							<RiCloseCircleLine />
						</button>
						{children}
					</div>
				</div>
			</RemoveScroll>
		</ReactFocusLock>
	);
}

export default Modal;
