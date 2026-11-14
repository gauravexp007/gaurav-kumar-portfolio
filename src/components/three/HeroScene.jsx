import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Sparks({ count = 850, radius = 9 }) {
  const sprite = useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')
    const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.3, 'rgba(223,230,255,0.6)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')
    context.fillStyle = gradient
    context.fillRect(0, 0, size, size)
    return new THREE.CanvasTexture(canvas)
  }, [])

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const r = radius * (0.42 + Math.pow(Math.random(), 0.7) * 0.58)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      array[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      array[i * 3 + 1] = r * Math.cos(phi) * 0.72
      array[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) - 1.5
    }
    return array
  }, [count, radius])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        size={0.085}
        color="#dfe3ff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Core({ mobile }) {
  const knot = useRef()
  const wire = useRef()

  useFrame((state, delta) => {
    if (knot.current) knot.current.rotation.y += delta * 0.22
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.06
      wire.current.rotation.x += delta * 0.025
    }
  })

  return (
    <group>
      <Float speed={1.3} rotationIntensity={0.45} floatIntensity={0.85}>
        <mesh>
          <icosahedronGeometry args={[1.35, 6]} />
          <MeshDistortMaterial
            color="#101018"
            metalness={0.92}
            roughness={0.2}
            distort={0.28}
            speed={1.4}
          />
        </mesh>

        <mesh ref={wire} scale={1.26}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#c94f66" wireframe transparent opacity={0.07} />
        </mesh>

        <mesh ref={knot} scale={0.5} rotation={[0.5, 0.2, 0]}>
          <torusKnotGeometry args={[1, 0.26, 160, 20]} />
          <meshBasicMaterial color="#8f78ff" wireframe transparent opacity={0.24} />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2.1, 0.32, 0]}>
        <torusGeometry args={[2.15, 0.005, 6, 180]} />
        <meshBasicMaterial color="#c94f66" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.5, 0.4]}>
        <torusGeometry args={[2.55, 0.004, 6, 180]} />
        <meshBasicMaterial color="#7a5cff" transparent opacity={0.45} />
      </mesh>

      <mesh position={[1.5, 1.25, 0.8]}>
        <sphereGeometry args={[0.032, 12, 12]} />
        <meshBasicMaterial color="#c94f66" />
      </mesh>
      <mesh position={[-1.9, -1.1, 0.6]}>
        <sphereGeometry args={[0.026, 12, 12]} />
        <meshBasicMaterial color="#3ce6ff" />
      </mesh>

      <Sparks count={mobile ? 320 : 850} />
    </group>
  )
}

function Rig({ mobile, children }) {
  const group = useRef()

  useFrame((state, delta) => {
    const node = group.current
    if (!node) return
    const damping = 1 - Math.pow(0.002, delta)
    node.rotation.y += (state.pointer.x * 0.45 - node.rotation.y) * damping
    node.rotation.x += (state.pointer.y * 0.26 - node.rotation.x) * damping
    node.position.y = (mobile ? 0.15 : 0.05) + Math.sin(state.clock.elapsedTime * 0.42) * 0.1
  })

  return (
    <group ref={group} position={mobile ? [0, -1.15, -0.8] : [2.15, 0.05, -0.3]} scale={mobile ? 0.82 : 1.05}>
      {children}
    </group>
  )
}

export default function HeroScene({ mobile = false }) {
  return (
    <Canvas
      dpr={[1, mobile ? 1.4 : 1.8]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} color="#efeaff" />
      <pointLight position={[4, 2, 3]} intensity={45} distance={18} color="#c94f66" />
      <pointLight position={[-4, -2, 1]} intensity={40} distance={18} color="#7a5cff" />

      <Rig mobile={mobile}>
        <Core mobile={mobile} />
      </Rig>
    </Canvas>
  )
}
