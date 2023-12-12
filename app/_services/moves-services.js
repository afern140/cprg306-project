import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getMoves = async (character) => {
	try {
		const movesCollection = await getDocs(collection(db, 'characters', character, 'moves'));
		const movesData = movesCollection.docs.map((moveDoc) => ({id: moveDoc.id, ...moveDoc.data(),}));
		return movesData;
	} catch (error) {
		console.error('Error fetching moves:', error.message);
	}
}

export const addMove = async (character, moveData) => {
	try {
		console.log(character)
		console.log(moveData)
		const movesCollection = collection(db, 'characters', character, 'moves');
		const move = await addDoc(movesCollection, moveData);
		alert(`Added ${move.name} successfully`)
	}
	catch (error) {
		console.error('Error adding move:', error.message)
	}
}