export default function FinalEnableCurve({
  fillColor = "#fff",
  borderColor = "#000",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_3063_12257)">
        <mask
          id="mask0_3063_12257"
          style={{ maskType: "luminance" }}
          width="20"
          height="20"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h20v20H0V0z"></path>
        </mask>
        <g mask="url(#mask0_3063_12257)">
          {/* Triângulo preenchido */}
          <path
            fill={fillColor}
            style={{
              transition: "fill 300ms ease",
            }}
            d="M0 .677V20.16s38.503-.006 20.003-.005C1.503 20.156 0 5.676 0 .676z"
          ></path>

          {/* Curva com a borda aplicada */}
          <path
            stroke={borderColor}
            style={{
              transition: "stroke 300ms ease",
            }}
            strokeWidth="0.4"
            fill="none" // Não preencher a curva, apenas a borda
            d="M20.003 19.415a.5.5 0 010 1v-1zm0 1c-9.41 0-14.457-3.764-17.119-8.238C.25 7.747 0 2.697 0 .176h1c0 2.48.252 7.3 2.744 11.49 2.465 4.144 7.17 7.749 16.259 7.749v1z"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3063_12257"
          x1="0.5"
          x2="19.5"
          y1="0.5"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E2E1"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <clipPath id="clip0_3063_12257">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
