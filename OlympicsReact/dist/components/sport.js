// Sport
var SportComponent = React.createClass({
    displayName: 'SportComponent',


    handleClick: function () {
        this.props.onSportsClick();
        this.setState({ isActive: true });
    },

    getInitialState: function () {
        return {
            isActive: false
        };
    },

    hideSportsDetail: function () {
        this.setState({
            isActive: false
        });
    },

    render: function () {
        return React.createElement(
            'div',
            { className: "c-sport " + (this.state.isActive ? 'c-sport--active' : '') },
            React.createElement(
                'div',
                { onClick: this.handleClick, className: 'c-sport-summary' },
                React.createElement('img', { className: 'c-icon', src: './wp-content/uploads/2016/07/' + this.props.sport.icon }),
                React.createElement('img', { className: 'c-icon c-sport__icon-animator', src: './wp-content/uploads/2016/07/' + this.props.sport.icon })
            ),
            this.state.isActive ? React.createElement(SportDetails, { onCloseClick: this.hideSportsDetail, sport: this.props.sport }) : null
        );
    }
});