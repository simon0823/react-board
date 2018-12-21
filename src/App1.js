import React, { Component } from 'react';

class App1 extends Component {
    state = {
        boards : [
            {
                brdno : 1,
                brdwriter : 'Lee Sunsin',
                brdtitle : 'Lorem ipsum',
                brddate : new Date()
            },
            {
                brdno : 2,
                brdwriter : 'So Sino',
                brdtitle : 'We are Youth!',
                brddate : new Date()
            }
        ]
    }

    render() {
        const {boards} = this.state;
        const {list} = boards.map((row) => {
            return row.brdno + row.brdwriter;
        });

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default App1;