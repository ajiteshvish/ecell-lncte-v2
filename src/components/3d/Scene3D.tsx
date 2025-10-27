import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { FallbackScene } from './FallbackScene';
import { ErrorBoundary } from '../ErrorBoundary';
import { Suspense, useState, useEffect } from 'react';
import { detectWebGLSupport, getWebGLErrorMessage } from '../../utils/webglDetection';

interface Scene3DProps {
  className?: string;
  showText?: boolean;
  text?: string;
}

export const Scene3D = ({ className = "", showText = false, text = "E-CELL" }: Scene3DProps) => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL support on component mount
    const supported = detectWebGLSupport();
    setWebglSupported(supported);
    
    if (!supported) {
      console.info('WebGL not supported:', getWebGLErrorMessage());
    }
  }, []);

  // Show loading state while checking WebGL support
  if (webglSupported === null) {
    return (
      <div className={`h-full w-full ${className}`}>
        <FallbackScene className="opacity-50" showText={showText} text={text} />
      </div>
    );
  }

  // Show fallback if WebGL is not supported
  if (!webglSupported) {
    return (
      <div className={`h-full w-full ${className}`}>
        <FallbackScene showText={showText} text={text} />
      </div>
    );
  }

  // Render 3D scene with error boundary
  return (
    <div className={`h-full w-full ${className}`}>
      <ErrorBoundary fallback={<FallbackScene showText={showText} text={text} />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: window.innerWidth > 768, // Disable antialias on mobile for performance
            alpha: true,
            powerPreference: window.innerWidth > 768 ? 'high-performance' : 'low-power',
            failIfMajorPerformanceCaveat: false,
            precision: window.innerWidth > 768 ? 'highp' : 'mediump' // Lower precision on mobile
          }}
          dpr={[1, window.innerWidth > 768 ? 2 : 1]} // Limit pixel ratio on mobile
          performance={{ min: 0.5 }} // Reduce performance requirements on mobile
          onCreated={(state) => {
            // Additional WebGL context validation
            if (!state.gl.getContext()) {
              throw new Error('WebGL context initialization failed');
            }
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
            <directionalLight position={[0, 10, 5]} intensity={0.5} color="#fbbf24" />
            
            <Environment preset="city" />
            
            {/* Floating cubes - reduced count on mobile for performance */}
            <FloatingCube position={[-3, 2, 0]} color="#8b5cf6" size={0.8} />
            <FloatingCube position={[3, -1, -2]} color="#3b82f6" size={1.2} />
            <FloatingCube position={[0, 3, -1]} color="#fbbf24" size={0.6} />
            {window.innerWidth > 768 && (
              <>
                <FloatingCube position={[-2, -2, 1]} color="#10b981" size={1} />
                <FloatingCube position={[4, 1, 1]} color="#f59e0b" size={0.9} />
              </>
            )}
            
            {/* 3D Text */}
            {showText && (
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Center>
                  <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={1}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                  >
                    {text}
                    <meshStandardMaterial 
                      color="#8b5cf6" 
                      emissive="#3b82f6"
                      emissiveIntensity={0.3}
                      roughness={0.1}
                      metalness={0.8}
                    />
                  </Text3D>
                </Center>
              </Float>
            )}
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={window.innerWidth > 768 ? 1 : 0.5} // Slower rotation on mobile
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};