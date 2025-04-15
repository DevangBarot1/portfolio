"use client"

import { Suspense, useRef } from "react"
import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PerspectiveCamera, Environment, useGLTF, Html, Float } from "@react-three/drei"
import { MotionConfig } from "framer-motion"
import Image from "next/image"

interface Project {
  image?: string;
  title: string;
  tags: string[];
}

function Laptop({ project }: { project: Project }) {
  const { nodes, materials } = useGLTF("/assets/3d/duck.glb")
  const { viewport } = useThree()
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.x = Math.sin(t / 4) / 8
      group.current.rotation.y = Math.sin(t / 2) / 4
      group.current.position.y = Math.sin(t / 1.5) / 10
    }
  })

  // Since we don't have an actual laptop model, we'll use the duck as a placeholder
  // and add a floating screen with the project image
  return (
    <group ref={group} dispose={null} scale={2}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <primitive object={nodes.LOD3spShape} scale={0.01} />

        {/* Project screen */}
        <Html transform position={[0, 0.5, 0]} rotation={[-0.3, 0, 0]} scale={0.5} occlude>
          <div className="w-[300px] h-[200px] bg-card rounded-lg overflow-hidden shadow-xl border border-primary/20">
            <div className="relative w-full h-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="text-white text-lg font-bold">{project.title}</h4>
                <p className="text-white/80 text-xs">{project.tags.slice(0, 2).join(" • ")}</p>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  )
}

export default function ProjectCard3D({ project }: { project: Project }) {
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <Laptop project={project} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </MotionConfig>
  )
}
