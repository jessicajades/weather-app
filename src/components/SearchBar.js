import React from "react";

class SearchBar extends React.Component {
    state = { location: "" };

    onInputChange = e => {
        this.setState({ location: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.location);
        this.setState({ location: "" });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    value={this.state.location}
                    onChange={this.onInputChange}
                    placeholder="Please enter location"
                    id="search-input"
                />
            </form>
        );
    }
}

export default SearchBar;
