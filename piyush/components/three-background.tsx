"use client"

import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

/**
 * Animated star-field background.
 * `drei`’s <Stars /> handles its own geometry/bounding-sphere math,
 * so we avoid the NaN warning from custom BufferGeometry.
 */
export function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={80}    // outer radius
          depth={50}     // star-field depth
          count={6000}   // number of stars
          factor={4}     // star size factor
          saturation={0} // keep them white
          fade           // fade at edge of FOV
          speed={1}      // animation speed
        />
      </Canvas>
    </div>
  )
}
