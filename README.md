# cy-jupyterlab

Jupyter lab extension (widget) for rendering graphs (network:.cx, .cyjs) using cytoscape.js. 
![top-page](https://github.com/idekerlab/cy-jupyterlab/blob/images/screenshot-01.png)

## What you can do
- visualize network on tab.
- also visualize on cells of python notebook (including some bugs related to layout).
- get deta from public detabase (ex: NDEx) and visualize on cells.
- show filename, the number of Nodes&Edges (elements) in graph.
- when you clicked an element, display the keys of it.
- change layouts.
- fit graph to the screen.

## Prerequisites

- JupyterLab

## Installation

```bash
jupyter labextension install cy-jupyterlab
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

