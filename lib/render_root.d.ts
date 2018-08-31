import * as React from "react";
import "../style/index.css";
import { /*JSONArray,*/ JSONObject } from "@phosphor/coreutils";
/**
 * The properties for the JSON tree component.
 */
export interface JGraph {
    elements: any;
    style: any;
}
export interface IProps {
    data: JGraph;
    metadata?: JSONObject;
    theme?: string;
}
/**
 * The state of the JSON tree component.
 */
export interface IState {
    filter?: string;
    CyRef?: any;
}
export declare var status: any;
/**
 * A component that renders JSON data as a collapsible tree.
 */
export declare class Component extends React.Component<IProps, IState> {
    constructor(props: any);
    input: Element;
    timer: number;
    cyreference: (cy: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
