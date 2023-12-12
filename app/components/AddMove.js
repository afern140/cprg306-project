import Image from "next/image";
import { useState } from "react";
import { addMove } from "../_services/moves-services";

export default function AddMove({ character }) {
	const [moveDetails, setMoveDetails] = useState({
		image: '',
		name: '',
		damage: '',
		guard: '',
		startup: '',
		active: '',
		recovery: '',
		onBlock: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMoveDetails((prevMoveDetails) => ({ ...prevMoveDetails, [name]: value }));
	};

	const handleSubmit = async () => {
		try {
		setMoveDetails({
			image: '',
			name: '',
			damage: '',
			guard: '',
			startup: '',
			active: '',
			recovery: '',
			onBlock: '',
		});
		await addMove(character, moveDetails);
		} catch (error) {
		console.error('Error adding move:', error.message);
		}
	};
	
	return (
		<div className="flex flex-col items-center justify-center max-w-sm font-bold border-2 border-gray-700 m-5">
			<Image src={moveDetails.image} alt="Move GIF" width={375} height={409} />
			<h2 className="flex items-center justify-center p-2 bg-red-950 text-3xl w-full">
				<input
				className="text-white p-2 bg-red-950 text-center border-none w-full"
				type="text"
				name="name"
				placeholder="Move Name"
				value={moveDetails.name}
				onChange={handleChange}
				/>
			</h2>
			<div className="bg-gray-300 text-red-950 p-2">
				<input
				className="text-white bg-gray-300 p-2 mb-2 w-full"
				type="text"
				name="damage"
				placeholder="Damage"
				value={moveDetails.damage}
				onChange={handleChange}
				/>
				<input
				className="text-white bg-gray-300 p-2 mb-2 w-full"
				type="text"
				name="guard"
				placeholder="Block Options"
				value={moveDetails.guard}
				onChange={handleChange}
				/>
				<input
				className="text-white bg-gray-300 p-2 mb-2 w-full"
				type="text"
				name="startup"
				placeholder="Startup frames"
				value={moveDetails.startup}
				onChange={handleChange}
				/>
				<input
				className="text-white bg-gray-300 p-2 mb-2 w-full"
				type="text"
				name="active"
				placeholder="Active frames"
				value={moveDetails.active}
				onChange={handleChange}
				/>
				<input
				className="text-white bg-gray-300 p-2 mb-2 w-full"
				type="text"
				name="recovery"
				placeholder="Recovery frames"
				value={moveDetails.recovery}
				onChange={handleChange}
				/>
				<input
				className="text-white bg-gray-300 p-2 mb-2 w-full"
				type="text"
				name="onBlock"
				placeholder="Frames on block"
				value={moveDetails.onBlock}
				onChange={handleChange}
				/>
			</div>
			<button className="text-white text-xl p-4 bg-red-950 w-full" onClick={handleSubmit}>Submit Move</button>
		</div>
	);	
}