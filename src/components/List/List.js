import React from 'react';
import './List.css';
import ListItem from "../ListItem/ListItem";

const List = ({data}) => {
    const list = data.map(item => <ListItem key={item.id} title={item.title} img={item.img}/>);

    return <ul className="list-group">{list}</ul>;
};

export default List;