import { ALERT, BLUE_SKY, GREEN_FOREST, GREEN_SEA, INFORMATIVE, NEGATIVE, NEUTRAL, POSITIVE, RED_LAND, YELLOW_SUN } from "@/colors"

export const PALETTE_COLORS = {
	neutral:        NEUTRAL,
	positive:       POSITIVE,
	informative:    INFORMATIVE,
	negative:       NEGATIVE,
	alert:          ALERT,
	"red-land":     RED_LAND,
	"green-forest": GREEN_FOREST,
	"green-sea":    GREEN_SEA,
	"blue-sky":     BLUE_SKY,
	"yellow-sun":   YELLOW_SUN,
	"brand": {
		forest: GREEN_FOREST['500'],
		sea:    GREEN_SEA['600'],
		sky:    BLUE_SKY['500'],
		sun:    YELLOW_SUN['600'],
		land:   RED_LAND['600'],
	}
};

