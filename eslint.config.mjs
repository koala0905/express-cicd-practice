import js from "@eslint/js";
import globals from "globals";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
// ]);

// import js from "@eslint/js";
// import globals from "globals";

export default [
  // 1. 繼承 ESLint 官方的推薦規則
  js.configs.recommended,

  {
    // 2. 指定適用檔案
    files: ["**/*.{js,mjs,cjs}"],

    languageOptions: {
      // 3. 核心：開啟 Node.js 全域變數支援，並保留瀏覽器支援
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },

    // 4. 自定義規則 (可依需求增減)
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
