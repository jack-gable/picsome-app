import React from "react";
import Image from "../../components/Image";
import { PhotoContext } from "../../PhotosProvider";
import { getClass } from "../../utils";
import styles from "./Favorites.module.css";

function Favorites() {
	const { favorites } = React.useContext(PhotoContext);
	const imageElements = favorites.map((img, i) => (
		<Image key={img.id} img={img} className={getClass(i)} />
	));
	return (
		<>
			{favorites.length === 0 ? (
				<p className={`${styles.text}`}>
					You have no favorited pictures yet...
				</p>
			) : (
				<main className={`${styles.photos}`}>{imageElements}</main>
			)}
		</>
	);
}

export default Favorites;
