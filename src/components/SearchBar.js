import React from "react";

class SearchBar extends React.Component {
    state = { location: "" };

    onInputChange = e => {
        this.setState({ location: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.location);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Enter Location:</label>
                <input
                    type="text"
                    value={this.state.location}
                    onChange={this.onInputChange}
                />
            </form>
        );
    }
}

export default SearchBar;
