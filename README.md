# cy-jupyterlab

**A Jupyter Lab extension for interactive graph (network) data visualization**


![tab](https://github.com/idekerlab/cy-jupyterlab/blob/images/screenshot-01.png)  

## Introduction

*Cy-JupyterLab* is a Jupyter Lab *extension* for interactive graph visualization. Current version supports the following data types: 

* Cytoscape eXchange format ([.cx](http://www.home.ndexbio.org/data-model/))
* [Cytoscape.js](http://js.cytoscape.org/) JSON (.cyjs)

![cell](https://github.com/idekerlab/cy-jupyterlab/blob/images/screenshot-02.png)

## Features

* Interactive network visualization in Panels.
* Supports visualization in Jupyter Notebook cells
* Full support for Cytoscape.js compatible *styles*
* Support for data from [NDEx](http://www.ndexbio.org/)) database.
* Simple node/edge property panel
  * Display filename, number of nodes and edges (elements) in graph
* Automatic layouts

## Requirments

* JupyterLab - Tested on v0.34.10

### Optional

* ndex2 - this is a python library to import data from NDEx.  If you want to use NDEx data sets, this provides high-level API to access the data

## Installation

### v0.1.0

```bash
jupyter labextension install @iau/cy-jupyterlab
```

### v0.5.0 and later (Not released yet)

```bash
jupyter labextension install cy-jupyterlab
```

## For Developers

To build the extension from the source, please do the following in the cloned directory:

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

### Acknoowledgment

The prototype was developed by the following students as a summer project 2018:

* Hideki Akazawa (University of Osaka, Japan)
* Kaito Uemura (University of Osaka, Japan)

----
&copy; 2018 University of California, San Diego

[Trey Ideker Lab](https://medschool.ucsd.edu/som/medicine/research/labs/ideker/Pages/default.aspx)
