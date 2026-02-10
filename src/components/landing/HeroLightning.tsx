const HeroLightning = () => {
  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
      {/* Glow layers */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-[15%] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite]" />

      <svg
        viewBox="0 0 400 500"
        className="relative z-10 w-[70%] h-auto drop-shadow-[0_0_40px_hsl(217,91%,60%,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main bolt */}
        <path
          d="M220 10 L140 200 L200 200 L120 490 L300 180 L230 180 L310 10 Z"
          fill="url(#boltGradient)"
          stroke="url(#boltStroke)"
          strokeWidth="2"
          className="animate-[boltFlicker_4s_ease-in-out_infinite]"
        />

        {/* Inner bright core */}
        <path
          d="M215 30 L150 195 L200 195 L135 470 L285 185 L232 185 L300 30 Z"
          fill="url(#coreGradient)"
          opacity="0.7"
          className="animate-[boltFlicker_4s_ease-in-out_infinite_0.2s]"
        />

        {/* Small branch left */}
        <path
          d="M155 190 L100 260 L130 260 L90 330"
          stroke="url(#branchStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
          className="animate-[boltFlicker_3s_ease-in-out_infinite_1s]"
        />

        {/* Small branch right */}
        <path
          d="M270 175 L320 230 L295 230 L330 290"
          stroke="url(#branchStroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          className="animate-[boltFlicker_3.5s_ease-in-out_infinite_0.5s]"
        />

        {/* Sparkle dots */}
        {[
          { cx: 120, cy: 210, r: 3, delay: "0s" },
          { cx: 290, cy: 170, r: 2.5, delay: "0.8s" },
          { cx: 100, cy: 310, r: 2, delay: "1.5s" },
          { cx: 320, cy: 270, r: 2, delay: "2s" },
          { cx: 180, cy: 120, r: 2.5, delay: "0.3s" },
          { cx: 250, cy: 400, r: 2, delay: "1.2s" },
        ].map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="hsl(200, 100%, 75%)"
            className="animate-[sparkle_2s_ease-in-out_infinite]"
            style={{ animationDelay: s.delay }}
          />
        ))}

        <defs>
          <radialGradient id="boltGradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="hsl(200, 100%, 70%)" />
            <stop offset="50%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="100%" stopColor="hsl(230, 80%, 40%)" />
          </radialGradient>
          <linearGradient id="coreGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200, 100%, 85%)" />
            <stop offset="50%" stopColor="hsl(217, 91%, 70%)" />
            <stop offset="100%" stopColor="hsl(200, 100%, 60%)" />
          </linearGradient>
          <linearGradient id="boltStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200, 100%, 80%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 50%)" />
          </linearGradient>
          <linearGradient id="branchStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200, 100%, 75%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 50%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroLightning;
