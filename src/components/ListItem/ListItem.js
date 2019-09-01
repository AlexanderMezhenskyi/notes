import React from 'react';
import './ListItem.css';

const ListItem = ({title, img}) => {
    return (
        <li className="list-item list-group-item">
            <h2>{title}</h2>
            <div className="img-box">
                <img src={img} alt="img"/>
            </div>
        </li>
    );
};

export default ListItem;