import * as React from "react";
import "../style/index.css";
import { JSONObject } from "@phosphor/coreutils";
export interface JGraph {
    elements: any;
    style: any;
}
export interface IProps {
    data: JGraph;
    metadata?: JSONObject;
    theme?: string;
}
export interface IState {
    filter?: string;
    CyRef?: any;
    selectedNodeId?: string;
    selectedNodeName?: string;
}
export declare var sat: any;
export declare class Component extends React.Component<IProps, IState> {
    constructor(props: any);
    input: Element;
    timer: number;
    cy: any;
    foo: any;
    cyjs: any;
    applyLayout: (layoutName: string) => void;
    componentDidMount(): void;
    setEventhandlers: (cy: any) => void;
    applyStyle: () => void;
    render(): JSX.Element;
}
