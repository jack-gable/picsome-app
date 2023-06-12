import React from "react";
import Image from "../../components/Image";
import { PhotoContext } from "../../PhotosProvider";
import { getClass } from "../../utils";
import styles from "./Photos.module.css";

function Photos() {
	const { allPhotos } = React.useContext(PhotoContext);
	const imageElements = allPhotos.map((img, i) => (
		<Image key={img.id} img={img} className={getClass(i)} />
	));
	return (
		<>
			<main className={`${styles.photos}`}>{imageElements}</main>
		</>
	);
}

export default Photos;
