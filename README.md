# react-grids

## Introduction

An easy to use simple grid system for React. Allows to specify base grids, and span for each column such as 5/12 - 7/12, or 1/5 - 4/5 grids.

## Install

` $ npm install --save-dev react-grids`

## Use

```
'use strict';
import ReactGrids from 'react-grids';

const YourComponent = (props) => (
    <ReactGrids.Wrap>
        <ReactGrids.Column
            base="12" 
            span="5"
        >
            Left column
        </ReactGrids.Column>
        <ReactGrids.Column
            base="12" 
            span="7"
        >
            Right column
        </ReactGrids.Column>
    </ReactGrids.Wrap>
)

export default YourComponent;
```
