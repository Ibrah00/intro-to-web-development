import React from 'react'

class DesignBoard extends React.Component {

    render() {
        return (
            <div class="left">
                <h1>Design pad</h1>
                <table class="pad1">
                    <thead>
                    </thead>
                </table>

            <div class="right">
            <table class="pad2">
                <thead>
                </thead>
            </table>
            </div>

            <div class="down">
            <table class="pad3">
                <thead>
                </thead>
            </table>
            </div>

            <div class="downright">
            <table class="pad4">
                <thead>
                </thead>
            </table>

            <button class="Reset"> Edit </button>
            </div>
            
        
        </div>
        );
    }
}

export default DesignBoard;