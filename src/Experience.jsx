import { OrbitControls } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import { useRef, useState } from "react";

const Experience = () => {
	const boxRef = useRef(null);
	const [y, setY] = useState(0);

	useFrame((state, delta) => {
		boxRef.current.rotation.y += 1 * delta;
		setY(prevY => prevY + (2 * delta));
		boxRef.current.position.y = Math.sin(y)/2;
	});

	return (
		<>
			<OrbitControls makeDefault />
			<ambientLight intensity = {0.5} />
			<directionalLight position = {[10, 10, 5]} intensity={2} />
			<mesh ref = {boxRef}>
				<boxGeometry args = {[1,1,1]} />
				<meshStandardMaterial color = "MediumTurquoise" />
			</mesh>
		</>
	)
}
export default Experience;