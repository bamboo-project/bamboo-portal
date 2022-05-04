module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: '#532a83',
        primary: '#fc3b99',
        'dark-bg-1': '#1A1B1F',
        'dark-bg-2': '#141519',
        'dark-bg-3': '#282A30',
        second: '#FFE366',
      },
      textColor: {
        primary: '#FC3A99',
      },
      fontFamily: {
        px: 'Pixellari',
        game: 'Gameplay',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '800px',
      },
      minHeight: {
        2: '0.5rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '1000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
