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
  primary: 'green',
  secondary: 'blue',
  alternate: 'lightBlue',
  danger: 'red',
  info: 'purple',
  dark: 'black',
  black: 'black',
  white: 'white',
  warning: 'orange',
  ...screenSizes,
  ...zIndexes,
  ...dimmensions
}
export default theme
