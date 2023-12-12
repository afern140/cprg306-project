import Image from "next/image";

export default function Move({ image, name, damage, guard, startup, active, recovery, onBlock }) {
return (
	<div className="text-white font-bold border-2 border-gray-700 m-5">
		<Image
			src={image}
			alt="Move GIF"
			width={375}
			height={409}
		/>
		<h2 className="flex items-center justify-center p-2 bg-red-950 text-3xl">{name}</h2>
		<div className="bg-gray-300 text-red-950 p-2">
			<h3>Damage: {damage}</h3>
			<h3>Block Options: {guard}</h3>
			<h3>{startup} startup frames</h3>
			<h3>{active} active frames</h3>
			<h3>{recovery} recovery frames</h3>
			<h3>{onBlock} frames on block</h3>
		</div>
	</div>
);
}