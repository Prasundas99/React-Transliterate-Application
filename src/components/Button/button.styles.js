const getPrimaryStyles = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary
})

const getSecondaryStyles = (theme) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: `1px dashed ${theme.palette.primary.main}`
})

export const customButtonStyles = {
  primary: getPrimaryStyles,
  secondary: getSecondaryStyles
}
