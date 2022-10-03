import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
	if (props.phonetic) {
		return (
			<div className="Phonetic">
				{props.phonetic.text}
				<br />
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
