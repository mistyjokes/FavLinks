import React from 'react';
import Linkify from 'react-linkify';


const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {

        let link = <Linkify target= '_blank'> {row.URL} </Linkify>;
        
        return (
            <tr key={index}>
                <td>{row.Name}</td>
                <td><a href={row.URL}>{link}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
   const { linkData, removeLink } = props;
    //add <TableBody /> to the bottom of <TableHeader>

    return (
        <div>
            <table>
                <TableHeader />
                <TableBody linkData = {linkData} removeLink = {removeLink}/>
            </table>
        </div>

    )

}

export default Table;