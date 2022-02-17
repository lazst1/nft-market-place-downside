export const colorsBg = {
  primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white',
  secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-400 text-white'
}

export const colorsBgHover = {
  primary: 'bg-gradient-to-r from-primary-900 to-primary-700 text-white',
  secondary: 'bg-gradient-to-r from-secondary-900 to-secondary-700'
}

export const colorsBorders = {
  primary: 'border-primary-900',
  secondary: 'border-secondary-900'
}

export const colorsText = {
  primary: 'text-primary-900',
  secondary: 'text-secondary-900'
}

export const colorsOutline = {
  primary: [colorsText.primary, colorsBorders.primary],
  secondary: [colorsText.secondary, colorsBorders.secondary],
}

export const colorsOutlineHover = {
  primary: 'hover:bg-primary-900 hover:text-white border-2 border-primary-900',
  secondary: 'hover:bg-secondary-900 hover:text-white border-2 border-secondary-900'
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

export const getButtonHoverColor = (color, isOutlined, hasHover) => {
  const base = [
    isOutlined ? '' : colorsBgHover[color]
  ]
  return base
}
