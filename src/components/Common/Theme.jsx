export const theme = {
  colors: {
    defaultText: '#000000',
    mediumText: '#555555',
    inverseText: '#ffffff',
    secondBackground: '#f0f0f0',
    pageBackground: '#ffffff',
    buttonColor: 'rgb(180, 200, 255)',
  },
  fontSizes: {
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '36px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  spacing: [0, 5, 10, 20, 40, 80, 160, 320, 640],
  radii: {
    none: 0,
    normal: '5px',
    large: '10px',
    round: '50%',
  },
  mp: returnParams,
};

function returnParams(...sizes) {
  if (sizes.length === 0) return;

  const resultArray = [];

  for (let size of sizes) {

    if (size === 0) resultArray.push('0');
    else if (size > 0) {
      if (size >= this.spacing.length) size = this.spacing.length;
      resultArray.push(`${this.spacing[size]}px`);
    } else if (size < 0) {
      size = size * -1;
      if (size >= this.spacing.length) size = this.spacing.length;
      resultArray.push(`-${this.spacing[size]}px`);
    } else if (size === 'auto') resultArray.push('auto');
    
  }

  return resultArray.join(' ');
}
