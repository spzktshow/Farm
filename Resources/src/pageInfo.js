/**
 * Created by rocklee on 13-12-21.
 */
var pageInfo = pageInfo || {};

function pageInfoInit(){
    pageInfo.info = {
        tag:'gameCanvas',
        widthTag:'width',
        heightTag:'height',
        canvasWidth:null,
        canvasHeight:null
    }
    var canvasNode = document.getElementById(pageInfo.info.tag);
    pageInfo.info.canvasWidth = canvasNode.getAttribute(pageInfo.info.widthTag);
    pageInfo.info.canvasHeight = canvasNode.getAttribute(pageInfo.info.heightTag);
};
/**init pageInfo**/
pageInfoInit();

