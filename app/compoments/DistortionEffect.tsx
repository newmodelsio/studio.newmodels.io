export default function DistortionEffect() {
  return (
    <svg className="absolute top-0 left-0">
      <defs>
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.07 0.07" numOctaves="20" result="pattern" seed="1"></feTurbulence>
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="0"></feGaussianBlur>
          <feDisplacementMap id="displacer" in2="pattern" in="blur" scale="2" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
