# But why?
This tool is meant to check if the LZ (specified in long & lat) is suitable for landing. 

* First, it checks if the LZ is actually on land with an API request to onWater.io
* The tool checks with WeatherStack if the wind speed isn't too high (1) for landing 
* The tool will report that the LZ should be suitable for landing. It will provide a sattelite picture of the LZ so that the astronauts can do one last visual inspection of the area

(1) A wind speed of 50km/h or more will result in a negative advice

# Structure
CSS, HTML, JS, Images and Icons have their own separate folders

## HTML
HTML is stored per section in the HTML folder

## CSS
CSS is pre-processed by SASS and is separated into partials and page folders. 
A page folder contains a query.scss file, which imports all the relevant css: the 'base' partial and a device file.
The possible device files are 'mainScreen' (desktop), 'dataPad_Large' (tablet) and 'dataPad_Small' (mobile). They contain the styling that only apply to their respective device types.

### CSS Partials
'base' imports all the CSS that's applicable on every device type:
* 'content' (layout styling for the content container)
* 'footer' (styling for the footer)
* 'header' (styling for the header)
* 'modal' (styling for modal panel pop-ups)
* 'typography' (styling for p, h1, a, etc.)

# Improvements
