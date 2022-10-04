import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
	if (props.phonetic) {
		return (
			<div className="Phonetic">
				<div className="text">{props.phonetic.text}</div>

				<ReactAudioPlayer
					className="audio-player"
					src={props.phonetic.audio}
					controls
					id="player"
				/>
			</div>
		);
	} else {
		return null;
	}
}
