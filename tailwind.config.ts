import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    colors: {
      "background": "#E3E7D3",
      "orange-5": "#FDF5F3",
      "orange-10": "#FDE8E3",
      "orange-20": "#FBD6CD",
      "orange-30": "#F8B9A9",
      "orange-40": "#F19078",
      "orange-50": "#E76F51",
      "orange-60": "#D3502F",
      "orange-70": "#B14024",
      "orange-80": "#933821",
      "orange-90": "#7A3422",
      "orange-95": "#42380D",
      "blue-5": "#F0FAFB",
      "blue-10": "#D9F2F4",
      "blue-20": "#B7E4EA",
      "blue-30": "#85D0DB",
      "blue-40": "#4CB2C4",
      "blue-50": "#3196A9",
      "blue-60": "#2B798F",
      "blue-70": "#296475",
      "blue-80": "#295361",
      "blue-90": "#264653",
      "blue-95": "#142D38",
      "green-5": "#F2FBF9",
      "green-10": "#D3F4ED",
      "green-20": "#A6E9DB",
      "green-30": "#72D6C6",
      "green-40": "#44BDAC",
      "green-50": "#2A9D8F",
      "green-60": "#208177",
      "green-70": "#1D6861",
      "green-80": "#1C634F",
      "green-90": "#1B4642",
      "green-95": "#0A2928",
      "gold-5": "#FDF9ED",
      "gold-10": "#F8EDCD",
      "gold-20": "#F0D997",
      "gold-30": "#E9C46A",
      "gold-40": "#E2AB3D",
      "gold-50": "#DA8D26",
      "gold-60": "#C16C1E",
      "gold-70": "#C16C1E",
      "gold-80": "#833E1D",
      "gold-90": "#6C331B",
      "gold-95": "#3D190B",
      "grey-5": "#101010",
      "grey-10": "#202020",
      "grey-20": "#303030",
      "grey-30": "#505050",
      "grey-40": "#606060",
      "grey-50": "#707070",
      "grey-60": "#909090",
      "grey-70": "#B0B0B0",
      "grey-80": "#CFCFCF",
      "grey-90": "#EFEFEF"
    },
    fontFamily: {
      array: ['var(--font-array)'],
    }
  },
  },
  plugins: [

  ],
};
export default config;
