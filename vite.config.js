import reactRefresh from "@vitejs/plugin-react-refresh";
export default {
  input: "src/index.jsx",
  output: {
    file: "dist/index.jsx",
    format: "cjs",
    exports: "named",
  },
  plugins: [reactRefresh()],
  external: ["react", "react-dom"],
};
