import { CxToJs, CyNetworkUtils } from '@js4cytoscape/cx2js'

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
    let networkAttr: any;
    let layout: string;

    const isCxData = true; //_isCx(data)
    if (isCxData) {
        const utils = new CyNetworkUtils();
        // let jsonObject = data;
        const niceCX = utils.rawCXtoNiceCX(data);
        layout = niceCX.hasOwnProperty('cartesianLayout')? 'preset':'cose';  
        const cx2Js = new CxToJs(utils);
        const attributeNameMap = {};
        elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
        style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
        
    } else {
        // This is Cytoscape.js data
        elements = data.elements;
        style = data.style;
        networkAttr = data.data
        layout = 'preset'
    }
    return {
        elements,
        style,
        data: networkAttr,
        layout: layout
    };
};

export default cx2cyjs

