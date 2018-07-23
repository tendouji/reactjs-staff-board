export const setColorOpacity = (color:string, opacity: string) => {
  const isRGB = (color.substring(0, 3) === 'rgb');
  if (isRGB) {
    return color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
  } else {
    return (hexToRGBA(color)).replace('###', opacity)
  }
}

const hexToRGBA = (hexStr: string) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexStr)) {
    c = hexStr.substring(1).split('');
    if (c.length === 3) { // convert to 6 character
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ') + ', ###)';
  }
  console.log('hexToRGBA: Error reading hex string')
}
