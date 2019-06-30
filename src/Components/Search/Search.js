import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {
    static propTypes = {
        onHandleClick: PropTypes.func.isRequired
    };  

    constructor(){
        super()
        this.searchRef = React.createRef();
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch () {
        this.props.onHandleClick(this.searchRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.searchRef} />
                <button onClick={this.handleSearch}>Suchen</button>
            </div>
        );
    }
}

export default Search;