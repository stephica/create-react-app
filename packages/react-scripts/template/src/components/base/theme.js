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

const theme = {
  default: 'gray',
  primary: 'green',
  secondary: 'blue',
  alternate: 'lightBlue',
  danger: 'red',
  info: 'purple',
  dark: 'black',
  black: 'black',
  white: 'white',
  warning: 'orange',
  ...screenSizes
}
export default theme
