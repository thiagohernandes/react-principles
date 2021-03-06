import React, {Component} from 'react';

const Teste = props =>{
    return (
        <label>{props.teste}</label>
    );
}

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class TableProps extends Component {
    render() {
        const { characterData } = this.props;
        const { teste } = this.props;
        return (
            <div> <Teste teste={teste}/>
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
            </div>
        );
    }
}
export default TableProps;