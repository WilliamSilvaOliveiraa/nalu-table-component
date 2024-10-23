import React, { useRef, useState, useEffect, useCallback } from "react";
import FinalEnableCurve from "../../assets/FinalEnableCurve";
import colorThemes from "../../constants/colorThemes";

const useEvenWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (ref.current) {
      const currentWidth = ref.current.getBoundingClientRect().width;
      const evenWidth = Math.ceil(currentWidth / 2) * 2;
      setWidth(evenWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    const mutationObserver = new MutationObserver(updateWidth);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [updateWidth]);

  return [ref, width];
};

export default function Tab({
  tab,
  toggle,
  onClick,
  isFirst,
  variant,
  themeMode,
}) {
  const [tabRef, evenWidth] = useEvenWidth();
  const zIndex = 1;

  const {
    primary,
    primaryLow,
    secondBackground,
    white,
    background,
    secondText,
  } = colorThemes[variant];

  return (
    <div
      ref={tabRef}
      className={`relative flex cursor-pointer select-none items-end ${
        !isFirst ? "-ml-[10px]" : ""
      }`}
      style={{ zIndex }}
      onClick={onClick}
    >
      <div
        style={{
          width: evenWidth > 0 ? `${evenWidth}px` : "auto",
          backgroundColor: !toggle
            ? secondBackground[themeMode]
            : background[themeMode],
        }}
        className={`relative flex items-center justify-center gap-2 rounded-2xl border-[1px] border-neutral-200 px-4 py-2 transition-all duration-300 lg:rounded-b-none lg:rounded-t-2xl lg:border-b-[0px] lg:border-l-[1px] lg:border-r-[1px] lg:border-t-[1px] ${
          !toggle ? "border-transparent " : "border-neutral-200 "
        }`}
      >
        <h5
          className={`text-[12px] font-medium transition-colors duration-300`}
          style={{
            color: !toggle ? secondText[themeMode] : "#434342",
          }}
        >
          {tab.title}
        </h5>
        <p
          style={{
            backgroundColor: !toggle
              ? primaryLow[themeMode]
              : primary[themeMode],
            color: !toggle ? secondText[themeMode] : white[themeMode],
          }}
          className={`flex font-bold items-center justify-center px-3 py-[4px] text-[10px] transition-all duration-300 rounded-full`}
        >
          {tab.quantity}
        </p>
      </div>
      <div
        style={{
          zIndex: zIndex - 1,
          marginLeft: !toggle ? "-1px" : "-1.06px",
          marginBottom: "-1.1px", // Não é necessário o operador ternário, pois o valor é o mesmo
          overflow: "hidden",
          position: "absolute",
          bottom: "0",
          left: "100.2%",

          width: "20px",
          height: "20px",
          pointerEvents: "none",
          cursor: "default",
        }}
        className="hidden lg:flex"
      >
        <div
          style={{
            transition: "all 0.3s ease-in-out",
            opacity: toggle ? 1 : 0, // Corrigido a sintaxe para interpolação
          }}
        >
          <FinalEnableCurve />
        </div>
      </div>
    </div>
  );
}
