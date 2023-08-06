export default function Navbar(props) {
	return (
		<nav>
			<span id="logo">
				<img src="https://cdn-icons-png.flaticon.com/512/3271/3271136.png" />
				Workout Journal
			</span>
			<div id="search-bar">
				<input
					type="text"
					id="search-input"
					placeholder="Enter title to search."
					value={props.value}
					onChange={props.handleSearchChange}
					autoComplete='off'
				/>
				<i
					class="fa fa-search"
					aria-hidden="true"
				></i>
			</div>
		</nav>
	)
}
