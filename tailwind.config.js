module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}',],
  darkMode: false,
  theme: {
    fontFamily: {
      'display': ['Neue Plak', 'Arial', 'sans-serif'],
      'sans': ['Karla', 'Arial', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.375rem', // 54px
      '7xl': '5rem', // 80px
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        black: '#000',
        white: '#FFF',
        red: '#f5163f',
        yellow: '#ffca5f',
        purple: '#d234b5',
        orange: '#ff7d2f',
        green: '#00c8af',
        blue: '#57bee6',
      },
      lineHeight: {
        'extra-tight': '1.15',
       }
    },
  },
  variants: {
    extend: {},
  }
}