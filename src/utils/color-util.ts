export function hexToRgbA(hex: string, opacity: number = 1, isRgb: boolean = false) {
  var c: string | string[];
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      const rgb = Number('0x'+c.join(''));

      if(isRgb) return 'rgb('+[(rgb>>16)&255, (rgb>>8)&255, rgb&255].join(', ')+')';

      return 'rgba('+[(rgb>>16)&255,(rgb>>8)&255,rgb&255].join(',')+`,${opacity})`;
  }
  throw new Error('Bad Hex');
}