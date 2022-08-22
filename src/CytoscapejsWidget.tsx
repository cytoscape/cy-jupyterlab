import { IRenderMime } from "@jupyterlab/rendermime-interfaces";
import { Widget } from "@lumino/widgets";
import * as React from "react";
import * as ReactDOM from "react-dom";
import WidgetBase from "./Components/WidgetBase";

const CLASS_NAME = "mimerenderer-cx";
const CSS_CLASS = "jp-RenderedCX";

import cx2cyjs from "./Utilities/cx2cyjs";

import { VDomModel, VDomRenderer } from '@jupyterlab/apputils';


class CytoscapeModel extends VDomModel {
  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
    this.stateChanged.emit(void 0);
  }

  private _value = '';
}


export class CytoscapejsWidget extends Widget implements IRenderMime.IRenderer {
  private resizeMsg: Widget.ResizeMessage;
  private readonly _mimeType: string;

  private cytoscapeModel: object;

  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
    this.addClass(CSS_CLASS);
  }

  protected onResize(msg: Widget.ResizeMessage): void {
    console.log("** panel resize called", msg);
    this.resizeMsg = msg;
    ReactDOM.render(<WidgetBase {...this.cytoscapeModel} />, this.node);
  }

  renderCyjs = (
    elements: object,
    style: object,
    networkName: string = "N/A"
  ) => {
    const data = {
      elements,
      style
    };
    const props = {
      data,
      theme: "cm-s-jupyter",
      networkName
    };
    const component = <WidgetBase {...props} />;
    ReactDOM.render(component, this.node);
  };

  renderModel(model: IRenderMime.IMimeModel): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      let rawData = model.data[this._mimeType] as any;
      const metadata = (model.metadata[this._mimeType] as any) || {};
      const data: any = cx2cyjs(rawData);
      let networkName = "-";
      let keys = Object.keys(rawData);
      keys.forEach(key => {
        if ("networkAttributes" in rawData[key]) {
          networkName = rawData[key].networkAttributes[0].v;
        }
      });
      if (networkName === "-") {
        networkName = data.data.name;
      }

      const props = {
        data,
        metadata,
        theme: "cm-s-jupyter",
        networkName,
        resizeMsg: this.resizeMsg
      };


      this.cytoscapeModel = props;

      const component = <WidgetBase {...props} />;
      ReactDOM.render(component, this.node, () => {
        resolve();
      });
    });
  }
}
