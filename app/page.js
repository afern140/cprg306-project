"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useUserAuth } from './_utils/auth-context'
import { getCharacters } from './_services/character-services'
import Character from './components/Character'

export default function Page() {
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	const handleSignIn = async () => {await gitHubSignIn();}
	const handleSignOut = async () => {await firebaseSignOut();}
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			const characters = await getCharacters();
			setCharacters(characters);
		};
		fetchCharacters();
	}, []);

	return (
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
			<div className="flex flex-wrap items-center justify-around p-5">
				{characters ? (characters.sort((a, b) => a.id - b.id).map((character) => (
					<Character
						character={character}
						key={character.id}
						name={character.name}
						image={character.image}
					/>
				))): <h2 className="flex items-center justify-center p-2 bg-red-950 text-3xl">No Characters Found</h2>} 
			</div>
		</main>
		</>
	)
}
