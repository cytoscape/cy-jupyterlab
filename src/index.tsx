import { IRenderMime } from "@jupyterlab/rendermime-interfaces";
import "../style/index.css";
import { CytoscapejsWidget } from "./CytoscapejsWidget";

const MIME_TYPE = "application/cx";

export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: false,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new CytoscapejsWidget(options)
};


const extension: IRenderMime.IExtension = {
  id: "cytoscapejs-renderer:plugin",
  rendererFactory,
  rank: 100,
  dataType: "json",
  fileTypes: [
    {
      name: "cx",
      mimeTypes: [MIME_TYPE],
      extensions: [".cx", ".cyjs"]
    }
  ],

  documentWidgetFactoryOptions: {
    name: "CX Viewer",
    primaryFileType: "cx",
    fileTypes: ["cx", "cyjs"],
    defaultFor: ["cx"]
  }
};

export * from "./CytoscapejsWidget";

export default extension;
