import React from 'react'
import DesignBoard from './DesignBoard'
import DesignPad from './DesignPad'
import padInput from './padInput'

class Design extends React.Component {

    render() {
        return (
            <div>
                <h3>
                <DesignBoard></DesignBoard>
                <DesignPad></DesignPad>
                </h3>
            </div>
        );
    }
}

export default Design;