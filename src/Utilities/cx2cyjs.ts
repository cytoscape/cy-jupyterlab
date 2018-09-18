import { cxToJs, cyNetworkUtils } from "cytoscape-cx2js";

const _isCx = (data: any) => {
    let dataLen = data.length;
    while(dataLen--) {
        const entry = data[dataLen]
        if(entry['nodeAttributes']) {
            return true
        }
    }
    return false
};

const cx2cyjs = (data: any) => {
    let elements: any;
    let style: any;

    const isCxData = _isCx(data)
    if (isCxData) {
        const utils = new cyNetworkUtils();
        let jsonObject = data;
        const niceCX = utils.rawCXtoNiceCX(jsonObject);
        const cx2Js = new cxToJs(utils);
        const attributeNameMap = {};
        elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
        style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
    } else {
        // This is Cytoscape.js data
        elements = data.elements;
        style = data.style;
    }
    return {
        elements,
        style
    };
};

export default cx2cyjs

