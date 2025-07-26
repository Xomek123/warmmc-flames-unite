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
						opacity: '0.95',
						filter: 'brightness(1)'
					},
					'25%': { 
						transform: 'scale(1.02) rotate(0.5deg)',
						opacity: '1',
						filter: 'brightness(1.1)'
					},
					'50%': { 
						transform: 'scale(0.98) rotate(-0.5deg)',
						opacity: '0.9',
						filter: 'brightness(0.95)'
					},
					'75%': { 
						transform: 'scale(1.01) rotate(0.3deg)',
						opacity: '0.98',
						filter: 'brightness(1.05)'
					}
				},
				'ember-float': {
					'0%': {
						transform: 'translateY(0px) translateX(0px) scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateY(-50px) translateX(10px) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100px) translateX(20px) scale(0.8)',
						opacity: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--fire-primary) / 0.4), 0 0 40px hsl(var(--fire-accent) / 0.2)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 30px hsl(var(--fire-primary) / 0.6), 0 0 60px hsl(var(--fire-accent) / 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'smooth-bounce': {
					'0%, 100%': {
						transform: 'translateY(0px)',
						animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
					},
					'50%': {
						transform: 'translateY(-10px)',
						animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'accordion-up': 'accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'fire-flicker': 'fire-flicker 3s ease-in-out infinite',
				'ember-float': 'ember-float 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
				'glow-pulse': 'glow-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'smooth-bounce': 'smooth-bounce 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
