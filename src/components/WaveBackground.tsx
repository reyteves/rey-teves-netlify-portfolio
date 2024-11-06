import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function WaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create multiple wave layers with different colors
    const createWaveMesh = (color: number, yPos: number, opacity: number) => {
      const geometry = new THREE.PlaneGeometry(30, 30, 100, 100);
      const material = new THREE.MeshPhysicalMaterial({
        color,
        wireframe: false,
        transparent: true,
        opacity: 0.3,
        metalness: 0.2,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 0.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        ior: 1.5,
        reflectivity: 0.9,
        envMapIntensity: 1.5,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = yPos;
      return { mesh, geometry };
    };

    // Adjusted colors for glass effect
    const waves = isDark ? [
      createWaveMesh(0x00BCD4, 0, 0.3),     // Cyan 500
      createWaveMesh(0x26C6DA, -0.2, 0.25), // Cyan 400
      createWaveMesh(0x4DD0E1, -0.4, 0.2),  // Cyan 300
      createWaveMesh(0x80DEEA, -0.6, 0.15), // Cyan 200
      createWaveMesh(0xB2EBF2, -0.8, 0.1),  // Cyan 100
    ] : [
      createWaveMesh(0x006064, 0, 0.3),     // Cyan 900
      createWaveMesh(0x00838F, -0.2, 0.25), // Cyan 800
      createWaveMesh(0x0097A7, -0.4, 0.2),  // Cyan 700
      createWaveMesh(0x00ACC1, -0.6, 0.15), // Cyan 600
      createWaveMesh(0x00BCD4, -0.8, 0.1),  // Cyan 500
    ];

    waves.forEach(({ mesh }) => scene.add(mesh));

    // Enhanced lighting for glass effect
    const mainLight = new THREE.DirectionalLight(isDark ? 0x00BCD4 : 0x006064, 1.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const backLight = new THREE.DirectionalLight(isDark ? 0xB2EBF2 : 0x00ACC1, 1.2);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    scene.add(new THREE.AmbientLight(0xffffff, 1.0));

    // Position camera
    camera.position.set(0, 5, 5);
    camera.lookAt(0, 0, 0);

    // Animation parameters
    const waveParams = {
      speed: 0.8,
      amplitude: 0.4,
      frequency: 0.7
    };

    // Animate vertices
    function animate() {
      requestAnimationFrame(animate);

      waves.forEach(({ mesh, geometry }, index) => {
        const positions = geometry.attributes.position;
        const time = Date.now() * 0.001 * waveParams.speed;

        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          
          // More complex wave pattern
          const waveX = Math.sin(x * waveParams.frequency + time + index) * waveParams.amplitude;
          const waveY = Math.cos(y * waveParams.frequency + time + index) * waveParams.amplitude;
          const waveZ = Math.sin(x * waveParams.frequency + y * waveParams.frequency + time) * waveParams.amplitude * 0.5;
          
          positions.setZ(i, waveX + waveY + waveZ);
        }

        positions.needsUpdate = true;
        
        // Smoother rotation
        mesh.rotation.z = Math.sin(time * 0.3) * 0.15;
      });

      renderer.render(scene, camera);
    }

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Add after scene setup
    const createLightningBolt = () => {
      // Create lightning geometry
      const points = [];
      let startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 20,  // Random x start
        10,                          // Start high in the sky
        (Math.random() - 0.5) * 20   // Random z start
      );
      
      // Generate zigzag path for lightning
      const segments = 8;
      for (let i = 0; i <= segments; i++) {
        points.push(new THREE.Vector3(
          startPoint.x + (Math.random() - 0.5) * 2,  // Zigzag deviation
          startPoint.y - (10 * i / segments),        // Move down
          startPoint.z + (Math.random() - 0.5) * 2   // Zigzag deviation
        ));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color: 0xE0F7FA,
        linewidth: 1,
        transparent: true,
        opacity: 0.8
      });

      const lightning = new THREE.Line(geometry, material);
      scene.add(lightning);

      // Add glow effect
      const glowMaterial = new THREE.LineBasicMaterial({ 
        color: 0xE0F7FA,
        linewidth: 3,
        transparent: true,
        opacity: 0.3
      });
      const glowLightning = new THREE.Line(geometry, glowMaterial);
      glowLightning.scale.multiplyScalar(1.1);
      scene.add(glowLightning);

      // Add point light following the bolt
      const light = new THREE.PointLight(0xE0F7FA, 20, 5);
      light.position.copy(points[0]);
      scene.add(light);

      // Animate the lightning
      const duration = 500;
      const startTime = Date.now();

      const animateLightning = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        
        if (elapsed < duration) {
          const progress = elapsed / duration;
          
          // Flicker effect
          lightning.material.opacity = 0.8 * (1 - progress) * (0.5 + Math.random() * 0.5);
          glowLightning.material.opacity = 0.3 * (1 - progress) * (0.5 + Math.random() * 0.5);
          light.intensity = 20 * (1 - progress) * (0.5 + Math.random() * 0.5);
          
          requestAnimationFrame(animateLightning);
        } else {
          scene.remove(lightning);
          scene.remove(glowLightning);
          scene.remove(light);
          geometry.dispose();
          material.dispose();
          glowMaterial.dispose();
          
          // Schedule next lightning bolt
          setTimeout(createLightningBolt, 2000 + Math.random() * 3000);
        }
      };

      animateLightning();
    };

    // Start the lightning effect
    setTimeout(createLightningBolt, 2000);

    // Keep the original cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      waves.forEach(({ geometry }) => geometry.dispose());
    };
  }, [isDark]);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 -z-10" />
      {/* Additional gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
    </>
  );
} 