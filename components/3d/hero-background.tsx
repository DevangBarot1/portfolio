"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points } from "@react-three/drei"
import type * as THREE from "three"
import { useTheme } from "next-themes"

function StarField({ count = 5000 }) {
  const { theme } = useTheme()
  const ref = useRef<THREE.Points>(null!)

  // Generate random points
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 50
    positions[i3 + 1] = (Math.random() - 0.5) * 50
    positions[i3 + 2] = (Math.random() - 0.5) * 50

    // Color based on distance from center
    const distance = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2)

    // Blue to cyan gradient
    const t = distance / 25
    colors[i3] = 0.2 + t * 0.3 // R
    colors[i3 + 1] = 0.5 + t * 0.3 // G
    colors[i3 + 2] = 0.8 // B
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1
    ref.current.rotation.x = Math.sin(time / 4)
    ref.current.rotation.y = Math.sin(time / 2)
  })

  return (
    <Points ref={ref}>
      <pointsMaterial size={0.1} vertexColors transparent opacity={theme === "dark" ? 0.8 : 0.5} />
      <bufferAttribute
        attach="geometry.attributes.position"
        array={positions}
        count={positions.length / 3}
        itemSize={3}
      />
      <bufferAttribute attach="geometry.attributes.color" array={colors} count={colors.length / 3} itemSize={3} />
    </Points>
  )
}

export default function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <StarField />
    </Canvas>
  )
}

