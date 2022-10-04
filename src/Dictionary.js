import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	let [results, setResults] = useState(null);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey =
			"563492ad6f91700001000001b226dbb8e1ae4241ba76a377a483afce";

		let pexelsAPIUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsAPIUrl, { headers: headers }).then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<section>
				<h1>What word do you want to look up?</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="search"
						autoFocus={true}
						onChange={handleKeywordChange}
						placeholder="Search for a word"
					/>
				</form>
				<div className="hint">suggested words: sunset, wine, yoga</div>
			</section>
			<Results results={results} />
			<Photos photos={photos} />
		</div>
	);
}
