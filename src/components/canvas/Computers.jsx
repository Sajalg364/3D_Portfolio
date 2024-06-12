import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader"
import Loader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop.gltf")

  return (
    <mesh>
      <ambientLight intensity={1} />
      <directionalLight angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024} 
        intensity={1} 
        position={[-20, 50, 10]} />
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile?0.6:0.75}
        position={isMobile?[-2,-2.5, -1.6]:[0, -3.25, -1.5]}
        rotation={[0, -0.23, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;