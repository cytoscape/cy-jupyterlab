import { IRenderMime } from "@jupyterlab/rendermime-interfaces";
import { JSONObject } from "@phosphor/coreutils";
import { Widget } from "@phosphor/widgets";
import "../style/index.css";
export declare class cy2js {
    DATA: JSONObject;
    constructor(content: JSONObject);
    transportation(): any[];
}
/**
 * A widget for rendering cx.
 */
export declare class OutputWidget extends Widget implements IRenderMime.IRenderer {
    /**
     * Construct a new output widget.
     */
    constructor(options: IRenderMime.IRendererOptions);
    convertData: (data: any) => any[];
    /**
     * Render cx into this widget's node.
     */
    renderModel(model: IRenderMime.IMimeModel): Promise<void>;
    private _mimeType;
}
/**
 * A mime renderer factory for cx data.
 */
export declare const rendererFactory: IRenderMime.IRendererFactory;
/**
 * Extension definition.
 */
declare const extension: IRenderMime.IExtension;
export default extension;
