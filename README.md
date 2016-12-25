# react-grids

## Introduction

An easy to use simple grid layout system for React. Allows to specify base grids, and span for each column such as 5/12 - 7/12, or 1/5 - 4/5 grids.

## Install

` $ npm install --save-dev react-grids`

## Properties

`ReactGrids.Wrap`

    `cutoff:int` // when to break from grids to single stack for responsive layouts

    `align:string` // when the columns don't fill the fulll width, how to align them within the wrap. accepts left | center | right.

    `max-width:int` // set maximum width for the layout

`ReactGrids.Column`

    `base:int` // the base grids. accepts 1 to 12

    `span:int` // how many base grids should this column span over. should be 1 <= x <= base.

## Use

```
'use strict';
import ReactGrids from 'react-grids';

const YourComponent = (props) => (
    <ReactGrids.Wrap
        cutoff={599}
        align="center"
        className="my-grids-wrapper"
        max-width={900}
    >
        <ReactGrids.Column
            base={12}
            span={5}
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
