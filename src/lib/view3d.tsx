import { createEffect, onCleanup, onMount } from "solid-js";
import { StlRenderer } from "./test_scene";

const View3DComponent = () => {
 
  let stlRenderer = new StlRenderer();

  const animate = () => {
    requestAnimationFrame(animate);
    stlRenderer.render();
  };

          drawElement.appendChild(stlRenderer.renderer.domElement);
      stlRenderer.load3MF("/assets/3d/USB3.3MF");
      animate();
    
  

  return (
    <div style={{ max-width: "1000px" }} ref={drawElement}></div>
  );
};

export default View3DComponent;
l