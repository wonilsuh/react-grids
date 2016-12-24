# react-grids

## Install

` $ npm install --save-dev react-grids`

## Use

```
'use strict';
import ReactGrids from 'react-grids';

const YourComponent = (props) => (
    <ReactGrids.Wrap>
        <ReactGrids.Column 
            layoutFlip={false}
        >
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
        </ReactGrids.Column>
    </ReactGrids.Wrap>
)

export default YourComponent;
```
