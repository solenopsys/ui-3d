
import {Component} from '@solenopsys/converged-renderer';
import {BasicSceneConfig} from "./scene";
import {load3MF} from "./loaders";

export const View3D:Component = (props:{modelUrl:string,textureUrl:string}) => {
  let config = new BasicSceneConfig();
  config.loadTexture(props.textureUrl);

  const animate = () => {
    requestAnimationFrame(animate);
    config.render();
  };

  //"/assets/3d/blouberg_sunrise_2_1k.hdr"

      //    drawElement.appendChild(stlRenderer.renderer.domElement);
      load3MF(props.modelUrl,config.scene);
   //   config.animate();
    
  return (  <div style={{maxWidth: "1000px"}}></div>);
};

export default View3D;
