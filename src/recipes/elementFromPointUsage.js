/* 
    RECIPE: <NAME OF RECIPE>
    -------------------------------------------------------------
    Author: Grisha Lyukshin
    Description: usage of elementFromPoint in script tags
*/
void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function getElementFromPointUsage( element, results) {

    	if(element.nodeName === "SCRIPT"){
    		if(element.innerText.indexOf("elementFromPoint") !== -1){
    			results["use"] = results["use"] || {count: 0};
    			results["use"].count++;
    		}
    	}
        return results;
    });
}();