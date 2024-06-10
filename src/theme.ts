import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#fafafa',
    bgLihgt: '#e1e4e8',
    bgNeutralLight: '#ebebeb',
    bgDark: '#24292e',
    primary: '#0366d6',
    primaryLight: '#2B9ECF',
    primaryDark: '#003d6f',
    error: '#d73a4a',
    succes: '#28a745'
  },
  fontSizes: {
    small: 12,
    body: 14,
    subheading: 16,
    heading: 20,
    xxxl: 32
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    semiBold: '500',
    bold: '700'
  },
  borderRadius: 3,
  spacing: (num: number) => num * 8
} as const

export default theme
