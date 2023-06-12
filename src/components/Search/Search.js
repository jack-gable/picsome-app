import React from "react";
import { PhotoContext } from "../../PhotosProvider";
import styles from "./Search.module.css";
import { RiSearch2Line } from "react-icons/ri";

function Search() {
	const { searchPics, searchTerm, setSearchTerm, searchSize, setSearchSize } =
		React.useContext(PhotoContext);
	return (
		<form onSubmit={searchPics}>
			<div className={`${styles.searchContainer}`}>
				<select
					className={`${styles.searchSelect}`}
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				>
					<option value={"shoes"}>Shoes</option>
					<option value={""}>50</option>
					<option value={100}>100</option>
				</select>
				<button className={`${styles.searchLine}`} type="submit">
					<RiSearch2Line />
				</button>
			</div>
		</form>
	);
}

export default Search;

//TODO: switch search select to have products categories and add filter for price and stars
