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
				<input
					className={`${styles.search}`}
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
					placeholder="i.e. cats"
				/>
				<select
					className={`${styles.searchSelect}`}
					value={searchSize}
					onChange={(event) => setSearchSize(event.target.value)}
				>
					<option value={25}>25</option>
					<option value={50}>50</option>
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
