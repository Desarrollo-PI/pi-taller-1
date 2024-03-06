import { OrbitControls } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import { useRef, useState } from "react";
import { MeshDistanceMaterial } from "three";

const Experience = () => {
	const boxRef = useRef(null);
	const groundRef = useRef(null);
	const torusRef = useRef(null);
	const [y, setY] = useState(0);
	const [x, setX] = useState(0);

	useFrame((state, delta) => {
		boxRef.current.rotation.y += 1 * delta;
		setY(prevY => prevY + (2 * delta));
		boxRef.current.position.y = Math.sin(y)/2;
		// torusRef.current.rotation.y += 0.01;
		setX(prevX => prevX + (2 * delta));
		torusRef.current.position.x = Math.cos(x)/2;
	});

	return (
		<>

			<OrbitControls makeDefault />
			<ambientLight intensity = {0.5} color={"white"} />
			<directionalLight position = {[10, 10, 5]} intensity={2} />
			
			{/* Caja  */}
			<mesh ref = {boxRef}>
				<boxGeometry args = {[1,1,1]} />
				<meshStandardMaterial color = "MediumTurquoise" />
			</mesh>
			{/* Piso  */}
			<mesh ref = {groundRef} position={[0,-4, 0]}>
				<boxGeometry args = {[10,0.5,100]} />
				<meshStandardMaterial color={[24/255, 52/255, 14/255]}/>
			</mesh>	

			{/* Torus */}
			<mesh ref = {torusRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
				<torusGeometry args = {[3, 0.5, 40, 100]} />
				<meshLambertMaterial color = "maroon" emissive={"black"} emissiveIntensity={0.1} reflectivity={1} fog/>
			</mesh>
		</>
	)
}
export default Experience;