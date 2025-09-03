import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
			},
			brand: {
				black: 'hsl(var(--brand-black))',
				ink: 'hsl(var(--brand-ink))',
				stone: 'hsl(var(--brand-stone))',
				'ink-90': 'hsl(var(--brand-ink-90))',
				'ink-70': 'hsl(var(--brand-ink-70))',
				'ink-50': 'hsl(var(--brand-ink-50))',
				'ink-30': 'hsl(var(--brand-ink-30))',
				'ink-10': 'hsl(var(--brand-ink-10))',
				'stone-70': 'hsl(var(--brand-stone-70))',
				'stone-50': 'hsl(var(--brand-stone-50))',
				'stone-30': 'hsl(var(--brand-stone-30))',
				'stone-10': 'hsl(var(--brand-stone-10))'
			}
		},
		fontFamily: {
			'display': ['var(--font-display)', 'sans-serif'],
			'body': ['var(--font-body)', 'sans-serif'],
			'neue-haas': ['Neue Haas Grotesk Display', 'Inter', 'sans-serif'],
			'inter': ['Inter', 'sans-serif']
		},
		spacing: {
			'brand-xs': 'var(--luxury-spacing-xs)',
			'brand-sm': 'var(--luxury-spacing-sm)',
			'brand-md': 'var(--luxury-spacing-md)',
			'brand-lg': 'var(--luxury-spacing-lg)',
			'brand-xl': 'var(--luxury-spacing-xl)',
			'brand-2xl': 'var(--luxury-spacing-2xl)'
		},
		transitionTimingFunction: {
			'brand': 'var(--luxury-ease)',
			'brand-in-out': 'var(--luxury-ease-in-out)'
		},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
