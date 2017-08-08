/* 
    RECIPE: <NAME OF RECIPE>
    -------------------------------------------------------------
    Author: Grisha Lyukshin
    Description: usage of elementFromPoint in script tags
*/
void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push( function getElementFromPointUsage(/*HTML DOM Element*/ element, results) {
        var nodeName = element.nodeName;
        var script = ".elementFromPoint"
        if (nodeName == "SCRIPT")
        {
            results[nodeName] = results[nodeName] || { count: 0, };
            // if inline script. ensure that it's not our recipe script and look for string of interest
            if (element.text !== undefined && element.text.indexOf(script) != -1)
            {
                results[nodeName].count++;
            }
            else if (element.src !== undefined && element.src != "")
            {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", element.src, false);
                xhr.send();
                if (xhr.status === 200 && xhr.responseText.indexOf(script) != -1)
                {
                    results[nodeName].count++;
                }
            }
        }
        return results;
    });
}();