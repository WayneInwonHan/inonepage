import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model"; // Ensure this path is correct for your project
import { AvatarSpinner, AvatarContainer } from "./AvatarLoader"; // Adjust path as needed

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelAvatar = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const urlAvatarGLB =
    (process.env.NODE_ENV === "production" ? "https://inwonhan.com" : "") +
    "/robot_the.glb"; // Adjust accordingly

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 1.5, 0);
      const initialCameraPosition = new THREE.Vector3(
        25 * Math.sin(0.2 * Math.PI),
        10,
        50 * Math.cos(0.2 * Math.PI),
      );

      const scale = scH * 0.05 - 5;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 4.5);
      ambientLight.position.set(500, 500, 500);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, urlAvatarGLB, {
        receiveShadow: false,
        castShadow: true,
      }).then(() => {
        setLoading(false);
        animate();
      });

      let req = null;
      const animate = () => {
        req = requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <AvatarContainer ref={refContainer}>
      {loading && <AvatarSpinner />}
    </AvatarContainer>
  );
};

export default VoxelAvatar;
