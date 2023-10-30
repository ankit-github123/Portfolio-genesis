/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        primary: 'var(--color-home)',
        secondary: 'var(--border-light)'
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'default': '#ffffff',
        'home': 'var(--color-home)'
      },
      backgroundColor: {
        primary: '#1F2233',
        secondary: 'var(--secondary-bg)',
        btn: 'var(--btn-primary)',
        btn_home: 'var(--btn-home)',
      },
      fontSize: {
        8: '8px',
        9: '9px',
      }

    },
  },
  plugins: [],
}
