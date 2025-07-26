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
				fire: {
					primary: 'hsl(var(--fire-primary))',
					secondary: 'hsl(var(--fire-secondary))',
					accent: 'hsl(var(--fire-accent))',
					glow: 'hsl(var(--fire-glow))'
				}
			},
			backgroundImage: {
				'gradient-fire': 'var(--gradient-fire)',
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-ember': 'var(--gradient-ember)'
			},
			boxShadow: {
				'fire': 'var(--shadow-fire)',
				'warm': 'var(--shadow-warm)',
				'glow': 'var(--shadow-glow)'
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
				},
				'fire-flicker': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.9'
					},
					'25%': { 
						transform: 'scale(1.05) rotate(1deg)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(0.95) rotate(-1deg)',
						opacity: '0.8'
					},
					'75%': { 
						transform: 'scale(1.02) rotate(0.5deg)',
						opacity: '0.95'
					}
				},
				'ember-float': {
					'0%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100px) translateX(20px)',
						opacity: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--fire-primary) / 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--fire-primary) / 0.8), 0 0 60px hsl(var(--fire-accent) / 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fire-flicker': 'fire-flicker 2s ease-in-out infinite',
				'ember-float': 'ember-float 4s ease-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
