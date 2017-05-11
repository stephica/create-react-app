/*
*
* Blends and Meshes global style settings
* for use in styled components
*
*/
export const screenSizes = {
  small: '480px',
  medium: '768px',
  large: '1080px',
  larger: '1440px',
  largest: '1820px'
}

export const zIndexes = {
  sidebarZ: '2',
  sidebarDimmerZ: '1'
}

export const dimmensions = {
  topBarHeight: 60
}

const theme = {
  default: 'gray',
  lighterGray: '#ddd',
  lightGray: '#999',
  gray: '#666',
  darkGray: '#333',
  darkerGray: '#222',
  primary: '#42818F',
  blueGreen: '#42818F',
  green: 'green',
  secondary: 'blue',
  blue: 'blue',
  alternate: 'lightBlue',
  lightBlue: 'lightBlue',
  danger: 'red',
  red: 'red',
  info: 'purple',
  purple: 'purple',
  dark: 'black',
  black: 'black',
  white: 'white',
  warning: 'lightYellow',
  orange: 'orange',
  ...screenSizes,
  ...zIndexes,
  ...dimmensions
}
export default theme
