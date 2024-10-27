import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/NaluTable.jsx"),
      name: "NaluDataTable",
      formats: ["es", "umd"],
      fileName: (format) => `nalu-data-table.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "@emotion/styled",
        "@mui/icons-material",
        "@mui/material",
        "styled-components",
        "tailwindcss",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
          "@mui/icons-material": "MuiIcons",
          "@mui/material": "Mui",
          "styled-components": "styled",
          tailwindcss: "tailwindcss",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "nalu-data-table.css";
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
  },
});
