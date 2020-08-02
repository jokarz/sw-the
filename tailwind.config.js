module.exports = {
  purge: {
    content: [
      "./src/**/*.tsx"
    ]
  },
  theme: {
    fontFamily: {
      sans: [
        'Proxima Nova',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ]
    },
    fontSize: {
      base: '14px'
    },
    extend: {
      opacity: {
        '30': '0.30',
      },
      colors: {
        primary: {
          'success': '#40D2BF',
          'success-darker': '#33ae9e',
          'gray': '#565656',
          'gray-lighter': '#808080',
          'gray-lightest': '#E2E2E2',
          'gray-darker': '#444444',
          selection: '#2995DA',
          selected: '#0083E3',
          dark: '#042235'
        }
      },
      fontSize: {
        '13': '13px',
        '16': '16px',
        '18': '18px',
        '30': '30px'
      },
      lineHeight: {
        'px-22': '22px',
        'px-19': '19px',
        'px-16': '16px',
        'px-36': '36px'
      }
    },
  },
  variants: {},
  plugins: [],
}
