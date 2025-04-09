import type { Config } from "tailwindcss"

// Esta função adiciona cada cor do Tailwind como uma variável CSS global, ex: var(--gray-200)
function addVariablesForColors(config: any) {
  const flatColors: Record<string, string> = {}
  const colors = config.theme?.colors || {}

  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === "object") {
      Object.entries(value as Record<string, string>).forEach(([subKey, color]) => {
        flatColors[`--${key}-${subKey}`] = color
      })
    } else {
      flatColors[`--${key}`] = value as string
    }
  })

  // Adicionar variáveis especiais necessárias para o Aurora
  flatColors["--transparent"] = "transparent"
  flatColors["--white"] = "#ffffff"
  flatColors["--black"] = "#000000"

  // Adicionar cores da CT Junior
  flatColors["--orange-200"] = "#FFB380"
  flatColors["--orange-300"] = "#FF9140"
  flatColors["--orange-500"] = "#FF6A00"
  flatColors["--green-500"] = "#003A3D"
  flatColors["--green-400"] = "#004A4D"
  flatColors["--green-300"] = "#005A5D"

  return {
    ":root": flatColors,
  }
}

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Adicionar cores da CT Junior diretamente
        ctOrange: {
          DEFAULT: "#FF6A00",
          light: "#FF9140",
          lighter: "#FFB380",
        },
        ctGreen: {
          DEFAULT: "#003A3D",
          light: "#004A4D",
          lighter: "#005A5D",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addBase, theme }: any) => {
      const allColors = {}
      const colors = theme("colors")

      // Flatten the colors object
      Object.entries(colors).forEach(([key, value]) => {
        if (typeof value === "object") {
          Object.entries(value as Record<string, string>).forEach(([subKey, color]) => {
            allColors[`--${key}-${subKey}`] = color
          })
        } else {
          allColors[`--${key}`] = value as string
        }
      })

      // Add special variables needed for Aurora
      allColors["--transparent"] = "transparent"
      allColors["--white"] = "#ffffff"
      allColors["--black"] = "#000000"
      allColors["--orange-200"] = "#FFB380"
      allColors["--orange-300"] = "#FF9140"
      allColors["--orange-500"] = "#FF6A00"
      allColors["--green-500"] = "#003A3D"
      allColors["--green-400"] = "#004A4D"
      allColors["--green-300"] = "#005A5D"

      addBase({
        ":root": allColors,
      })
    },
  ],
} satisfies Config

export default config
