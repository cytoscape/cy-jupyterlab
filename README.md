# cy-jupyterlab

**A Jupyter Lab extension for interactive graph (network) data visualization**


![tab](https://user-images.githubusercontent.com/1568884/195467656-6db34de5-cca4-4f08-afc8-604b6f15bb7c.png)

## Introduction

*Cy-JupyterLab* is a Jupyter Lab *extension* for interactive graph visualization. Current version supports the following data types: 

* Cytoscape eXchange format ([.cx](http://www.home.ndexbio.org/data-model/))
* [Cytoscape.js](http://js.cytoscape.org/) JSON (.cyjs)

![cell](https://user-images.githubusercontent.com/1568884/195467711-f9ec19a8-8dd0-4ded-9de0-612badab9b53.png)

## Features

* Interactive network visualization in Panels.
* Supports visualization in Jupyter Notebook cells
* Full support for Cytoscape.js compatible *styles*
* Support for data from [NDEx](https://www.ndexbio.org/)) database.
* Automatic layouts

## Requirments

* JupyterLab - Tested on v3.4

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
jlpm install
jlpm build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
jlpm build
jupyter lab build
```

### Acknoowledgment

The prototype was developed by the following students as a summer project 2018:

* Hideki Akazawa (University of Osaka, Japan)
* Kaito Uemura (University of Osaka, Japan)

----
&copy; 2022 University of California, San Diego

[Trey Ideker Lab](https://medschool.ucsd.edu/som/medicine/research/labs/ideker/Pages/default.aspx)
