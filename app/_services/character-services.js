import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getCharacters = async () => {
	try {
		const charactersCollection = await getDocs(collection(db, 'characters'));
		const charactersData = charactersCollection.docs.map((doc) => ({id: doc.id, ...doc.data(),}));
		return charactersData;
	} catch (error) {
		console.error('Error fetching characters:', error.message);
	}
}

export const getCharacter = async (id) => {
	try {
		const charactersCollection = await getDocs(collection(db, 'characters'));
		const charactersData = charactersCollection.docs.map((doc) => ({id: doc.id, ...doc.data(),}));
		const character = charactersData.find((character) => character.id == id);
		return character;
	} catch (error) {
		console.error('Error fetching characters:', error.message);
	}
}