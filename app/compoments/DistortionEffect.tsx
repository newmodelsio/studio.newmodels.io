import Image from "next/image";

export default function DistortionEffect() {
  return (
    <svg className="absolute top-0 left-0 pointer-events-none">
      <defs>
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves="10" result="pattern" seed="1"></feTurbulence>
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="0"></feGaussianBlur>
          <feDisplacementMap id="displacer" in2="pattern" in="blur" scale="5" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
