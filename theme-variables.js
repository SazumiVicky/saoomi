/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function(params) {
   let output = '';

      output += ` 
         :root {
            --main-col-width:           ${params.mainWidth}; 
            --sidebar-width:            ${params.sidebarWidth}; 
            --navbar-height:            ${params.navbarHeight};
            --card-small-height:        ${params.cardSmallHeight};
            --card-large-height:        ${params.cardLargeHeight};
            --border-radius:            ${params.roundedLayout}px; 
            --line-height:              ${params.lineHeight};
            --font-weight-normal:       ${params.fontNormalWeight}; 
            --font-weight-bold:         ${params.fontBoldWeight}; 
            --headings-weight:          ${params.fontHeadignsWeight};
            --headings-transform:       ${params.fontHeadingsTransform};
            --white:                    #FFFFFF;
            --black:                    #000000;
            --dark:                     #2C2E35;
            --gray-1:                   #84888E;
            --gray-2:                   #B4B9C1;
            --light:                    #EEF2F8;
            --lighter:                  #F7F7F8;
            --color:                    ${params.primaryColor};  
            --color-rgb:                68,138,255; 
            --text-color:               ${params.textColor}; 
            --headings-color:           ${params.headingColor}; 
            --logo-color: #FFFFFF;
            --link-color:               #2C2E35; 
            --link-hover-color:         ${params.primaryColor}; 
            --border-color-light:       #E1E2E3;
      }`;  

   return output;
}

module.exports = generateThemeVariables;