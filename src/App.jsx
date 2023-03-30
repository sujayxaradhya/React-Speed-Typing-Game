import React from "react";

import useToggler from "./hooks/useToggler";

const App = () => {
	const {
		textareaRef,
		text,
		handleChange,
		isGameRunning,
		timeRemaining,
		startGame,
		wordCounts
	} = useToggler(30);

	return (
		<>
			<h1>How fast do you type?</h1>
			<textarea
				ref={textareaRef}
				onChange={handleChange}
				value={text}
				disabled={!isGameRunning}
			/>
			<h4>Time remaining:{timeRemaining}</h4>
			<div className="game-interaction">
				<button onClick={startGame} disabled={isGameRunning}>
					Start
				</button>
				<h1>Word count: {wordCounts}</h1>
			</div>
		</>
	);
};

export default App;
