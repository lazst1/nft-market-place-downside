export const colorsBg = {
  primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white',
  secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-400 text-white',
  gray: 'bg-gradient-to-r from-gray-800 to-gray-700 text-white',
  red: 'bg-gradient-to-r from-red-800 to-red-700 text-white',
}

export const colorsBgHover = {
  primary: 'bg-gradient-to-r from-primary-900 to-primary-700 text-white',
  secondary: 'bg-gradient-to-r from-secondary-900 to-secondary-700',
  gray: 'bg-gradient-to-r from-gray-900 to-gray-800',
  red: 'bg-gradient-to-r from-red-900 to-red-800',
}

export const colorsBorders = {
  primary: 'border-primary-900',
  secondary: 'border-secondary-900',
  gray: 'border-gray-900',
  red: 'border-red-900',
}

export const colorsText = {
  primary: 'text-white',
  secondary: 'text-white',
  gray: 'text-white',
  red: 'text-white',
}

export const colorsOutline = {
  primary: [colorsText.primary, colorsBorders.primary],
  secondary: [colorsText.secondary, colorsBorders.secondary],
  gray: [colorsText.gray, colorsBorders.gray],
  red: [colorsText.red, colorsBorders.red],
}

export const colorsOutlineHover = {
  primary: 'hover:bg-primary-900 hover:text-white border-2 border-primary-900',
  secondary: 'hover:bg-secondary-900 hover:text-white border-2 border-secondary-900',
  gray: 'hover:bg-gray-900 hover:text-white border-2 border-gray-900',
  red: 'hover:bg-red-900 hover:text-white border-2 border-red-900',
}

export const getButtonColor = (color, isOutlined, hasHover) => {
  const base = [
    isOutlined ? colorsText[color] : colorsBg[color],
    colorsBorders[color]
  ]

  if (hasHover) {
    base.push(isOutlined ? colorsOutlineHover[color] : '')
  }

  return base
}

export const getButtonHoverColor = (color, isOutlined, disabled) => {
  const base = [
    isOutlined ? '' : colorsBgHover[color]
  ]
  if (disabled) {
    base.push('cursor-not-allowed')
  }

  return base
}
