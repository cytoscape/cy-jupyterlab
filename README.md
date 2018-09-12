# @iau/cy-jupyterlab

Jupyter lab extension (widget) for rendering graphs (network: [.cx](http://www.home.ndexbio.org/data-model/), .cyjs) using cytoscape.js. 
![tab](https://github.com/idekerlab/cy-jupyterlab/blob/images/screenshot-01.png)  

![cell](https://github.com/idekerlab/cy-jupyterlab/blob/images/screenshot-02.png)


## What you can do
- visualize network on tab.
- also visualize on cells of python notebook (including some bugs related to layout).
- get deta from public detabase (ex: [NDEx](http://www.ndexbio.org/)) and visualize on cells.
- show filename, the number of Nodes&Edges (elements) in graph.
- when you clicked an element, display the keys of it.
- change layouts.
- fit graph to the screen.

## Prerequisites

- JupyterLab

- ndex2 (this is a python library as data imorting )

## Installation

```bash
jupyter labextension install @iau/cy-jupyterlab
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

