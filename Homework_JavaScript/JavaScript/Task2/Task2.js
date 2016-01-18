/**
 * Created by aglika on 17/01/2016.
 */

    function anchorsNum() {
    var anchors = document.getElementsByTagName('a');

    document.querySelector('#result').innerHTML = "<div> There are " + anchors.length + " anchors in the document. </div>";

}