import { Component } from "@solenopsys/converged-renderer";
import { BasicSceneConfig } from "./scene";
import { load3MF } from "./loaders";

export const View3D: Component = (props: {
	modelUrl: string;
	textureUrl: string;
}) => {
	console.log("VIEV3D PROPS", props);
	let containerRef;
	let config = new BasicSceneConfig();
	config.loadTexture(props.textureUrl);

	const animate = () => {
		requestAnimationFrame(animate);
		config.render();
	};

	if (containerRef) {
		containerRef.appendChild(config.renderer.domElement);
	}

	load3MF(props.modelUrl, config.scene);

	return (
		<div style={{ maxWidth: "1000px" }} ref={(el) => (containerRef = el)}></div>
	);
};

export default View3D;
