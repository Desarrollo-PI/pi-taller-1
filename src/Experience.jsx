import { OrbitControls } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import { useRef, useState } from "react";
import { MeshToonMaterial , MeshPhongMaterial } from "three";

const Experience = () => {
	const boxRef = useRef(null);
	const groundRef = useRef(null);
	const torusRef = useRef(null);
	const capsuleRef = useRef(null);
	const coneRef = useRef(null);
	const [contador, setContador] = useState(0);

	const phongMaterial = new MeshPhongMaterial({color: "purple", emissive: "black", emissiveIntensity: 0.1, reflectivity: 1, wireframe: false, wireframeLinewidth: 1, specular: "gray", shininess: 30, flatShading: true});

	useFrame((state, delta) => {
		boxRef.current.rotation.y += 1 * delta;
		setContador(prevContador => prevContador + delta);
		boxRef.current.position.y = Math.sin(contador * 2)/2;
		torusRef.current.position.x = Math.cos(contador * 4) * 1.5;
		torusRef.current.position.z = Math.sin(contador * 4) * 1.5;
		capsuleRef.current.rotation.y += 0.01;
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
			<mesh ref = {groundRef} position={[0,-2, 0]}>
				<boxGeometry args = {[10,0.5,100]} />
				<meshStandardMaterial color={[24/255, 52/255, 14/255]}/>
			</mesh>	

			{/* Torus */}
			<mesh ref = {torusRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
				<torusGeometry args = {[3, 0.5, 40, 100]} />
				<meshLambertMaterial color = "maroon" emissive={"black"} emissiveIntensity={0.1} reflectivity={1} wireframe={true} wireframeLinewidth={0.5}/>
			</mesh>

			{/* Capsule */}
			<mesh ref = {capsuleRef} position={[0,8,20]}>
				<capsuleGeometry args = {[5, 5, 8, 16]} />
				<primitive object = {phongMaterial}/>
			</mesh>

			{/* Cone */}
			<mesh ref = {coneRef} position={[0, 0, -10]}>
				<coneGeometry args={[1, 2, 10]} />
				<meshPhysicalMaterial color="red" />
			</mesh>
		</>
	)
}
export default Experience;