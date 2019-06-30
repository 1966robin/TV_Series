import React, { Component } from 'react';
import SeriesList from '../../Components/SeriesList';
import Search from '../../Components/Search/Search';

class Series extends Component {

    constructor (props) {
        super(props)
        this.state = {
            series: []
        }
        this.onHandleSearch = this.onHandleSearch.bind(this);
    }

    onHandleSearch(e) {     
        fetch('http://api.tvmaze.com/search/shows?q=' + e)
        .then(response => response.json())
        .then(json => this.setState({series: json}))
    }
    
    render() {
        return (
            <div>
                <Search onHandleClick={this.onHandleSearch} />
                The length of series array: {this.state.series.length}
                <SeriesList list={this.state.series}/>
            </div>
        )
    }
}

export default Series