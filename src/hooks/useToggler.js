// Creating a custom hook to handle the game logic
import { useState, useEffect, useRef } from "react";

const useToggler = (startingTime = 60) => {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(startingTime);
	const [isGameRunning, setIsGameRunning] = useState(false);
	const [wordCounts, setWordCounts] = useState(0);
	const textareaRef = useRef(null);

	const handleChange = (event) => {
		const { value } = event.target;
		setText(value);
	};

	const calculateWords = (text) => {
		const wordsArray = text.trim().split(" ");
		return wordsArray.filter((word) => word !== "").length;
	};

	const startGame = () => {
		setIsGameRunning(true);
		setTimeRemaining(startingTime);
		setText("");
		textareaRef.current.disabled = false;
		textareaRef.current.focus();
	};

	const endGame = () => {
		setIsGameRunning(false);
		setWordCounts(calculateWords(text));
	};

	useEffect(() => {
		if (isGameRunning && timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining((time) => {
					return time - 1;
				});
			}, 1000);
		} else if (timeRemaining === 0) {
			endGame();
		}
	}, [timeRemaining, isGameRunning]);

	return {
		textareaRef,
		text,
		handleChange,
		isGameRunning,
		timeRemaining,
		startGame,
		wordCounts
	};
};

export default useToggler;
