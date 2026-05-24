import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const meshRef = useRef()
  const count = 150

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02
      const positions = meshRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.005
        if (positions[i * 3 + 1] > 40) {
          positions[i * 3 + 1] = -40
        }
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#c9a84c"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles />
        <ambientLight intensity={0.2} />
      </Canvas>
    </div>
  )
}

export default ParticleBackground
