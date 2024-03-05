import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";

const root = createRoot(document.getElementById('root'));

root.render(
	<Canvas camera = {{ position: [2,0,5] }}>
		<Experience />
	</Canvas>
)