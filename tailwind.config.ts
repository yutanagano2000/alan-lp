import type { Config } from "tailwindcss"
import typography from '@tailwindcss/typography';

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
      padding: 'var(--sides)',
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
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))", // Added primary-light
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
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        sides: 'var(--sides)',
        'modal-sides': 'var(--modal-sides)',
        'top-spacing': 'var(--top-spacing)',
        fold: 'var(--height-fold)',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        sm: ['0.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        base: ['1rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        lg: ['1.125rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        xl: ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
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
          'collapsible-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-collapsible-content-height)' },
          },
          'collapsible-up': {
            from: { height: 'var(--radix-collapsible-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          'collapsible-down': 'collapsible-down 0.2s ease-out',
          'collapsible-up': 'collapsible-up 0.2s ease-out',
        },
    },
  },
  plugins: [require("tailwindcss-animate"), typography],
} satisfies Config

export default config
