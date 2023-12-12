"use client"

import Image from "next/image"
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getCharacter } from "../_services/character-services";
import { getMoves } from "../_services/moves-services";
import Move from "../components/Move";
import AddMove from "../components/AddMove";

export default function Page({ params }) {
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	const handleSignIn = async () => {await gitHubSignIn();}
	const handleSignOut = async () => {await firebaseSignOut();}
	const [character, setCharacter] = useState("");
	const [moves, setMoves] = useState([]);

	const docKeys = {
		0: 'sol',
		1: 'ky',
		2: 'may',
		3: 'axl',
		4: 'chipp',
		5: 'potemkin',
		6: 'faust',
		7: 'millia',
		8: 'zato'
	}

	useEffect(() => {
		const fetchCharacter = async () => {
			try {
				const character = (await getCharacter(params.character));
				setCharacter(character);
			} catch (error) {
				console.error('Error fetching character:', error.message);
			}
		};
		fetchCharacter();
	}, [params.character]);

	useEffect(() => {
		const fetchMoves = async () => {
			try {
				const moves = await getMoves(docKeys[character.id]);
				setMoves(moves);
			} catch (error) {
				console.error('Error fetching moves:', error.message);
			}
		};
		fetchMoves();
	}, [docKeys[character.id]]);

	return(
		<>
		<header className="flex flex-row items-center justify-between text-white font-bold bg-black p-5 drop-shadow-lg">
			<div className="flex items-center">
				<Image
				src="/logo.png"
				alt="Site Logo"
				className="invert"
				width={50}
				height={50}
				/>
				<h1 className="ml-2 text-5xl">Strive Frame Data</h1>
			</div>
			{user ? (<button onClick={handleSignOut} className="text-2xl bg-red-900 px-5 py-3 rounded-full">Sign Out</button>) : (<button onClick={handleSignIn} className="text-2xl bg-red-900 px-5 py-3 rounded-full">Sign In</button>)}
		</header>
		<main className="bg-gray-200">
			<h1 className="text-white text-4xl font-bold text-center bg-red-950 p-4">{character.name}</h1>
			<div className="flex flex-wrap items-center justify-around p-5">
				{moves? (moves.map((move) => (
					<Move
						key={move.id}
						name={move.name}
						image={move.image}
						damage={move.damage}
						guard={move.guard}
						startup={move.startup}
						active={move.active}
						recovery={move.recovery}
						onBlock={move.onBlock}
					/>
				))) : <h2 className="flex items-center justify-center p-2 bg-red-950 text-3xl">No Moves Found</h2>}
				{user ? (<AddMove character={docKeys[character.id]}/>) : <h2 className="flex items-center justify-center p-2 bg-red-950 text-3xl">Log In to Add Moves</h2>}
			</div>
		</main>
		</>
	)
}