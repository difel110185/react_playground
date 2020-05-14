import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    };

    render = () => {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;