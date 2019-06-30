import React from 'react';
import './index.css';

const SeriesListItem = ({series}) => {
    return (
        <li>{series.show.name}</li>
    )
}

const SeriesList = props => (
        <div>
            <ul className="series-list">
                {props.list.map(series => (<SeriesListItem key={series.show.id} series={series} />))}
            </ul>
        </div>
    )


export default SeriesList;