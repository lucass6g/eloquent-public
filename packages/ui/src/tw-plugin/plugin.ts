import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, SPACING } from '@eloquent/tokens';
import plugin                                           from 'tailwindcss/plugin';

const createFontSizes = () => {
	//create an object to store the font sizes with pattern 'text-{size}'
	const fontSizes: Record<string, string> = {};
	//loop through the FONT_SIZE object
	for ( const [ key, value ] of Object.entries( FONT_SIZE ) ) {
		//add the key and value to the fontSizes object
		fontSizes[`text-${ key }`] = value;
	}
	return fontSizes;
}

const createFontWeights = () => {
	//create an object to store the font weights with pattern 'font-{weight}'
	const fontWeights: Record<string, string> = {};
	//loop through the FONT_WEIGHT object
	for ( const [ key, value ] of Object.entries( FONT_WEIGHT ) ) {
		//add the key and value to the fontWeights object
		fontWeights[`font-${ key }`] = value;
	}
	return fontWeights;
}

const createSpacing = () => {
	//create an object to store the spacing with pattern 'p-{size}'
	const spacing: Record<string, string> = {};
	//loop through the SPACING object
	for ( const [ key, value ] of Object.entries( SPACING ) ) {
		//add the key and value to the spacing object
		spacing[`p-${ key }`]   = value;
		spacing[`m-${ key }`]   = value;
		spacing[`gap-${ key }`] = value;
	}
	return spacing;
}

const createColors = () => {
  //create an object to store the colors with pattern 'text-{size}'
  const colors: Record<string, string> = {};
  //loop through the FONT_SIZE object
  for ( const [ key, value ] of Object.entries( FONT_SIZE ) ) {
    //add the key and value to the fontSizes object
    colors[`text-${ key }`] = value;
    colors[`bg-${ key }`] = value;
    colors[`border-${ key }`] = value;
  }
  return colors;
}

export const eloquentTW = plugin( function ( { addBase } ) {
	const fontSizes   = createFontSizes();
	const fontWeights = createFontWeights();
  const spacing     = createSpacing();
  const colors      = createColors();
	// Adicionando cores
	addBase( {
		':root': {
			...fontSizes,
			...fontWeights,
     ...spacing,
      ...colors,
			"font-sans": FONT_FAMILY.sans,
		},
	} )
} )