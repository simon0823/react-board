import React, { Component } from 'react';

class App3 extends Component {
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
        const { boards } = this.state;

        return (
            <div>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.brdno} row={row}/>)
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

export default App3;