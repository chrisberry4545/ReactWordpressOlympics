// Sport
var SportComponent = React.createClass({

    handleClick: function() {
        this.props.onSportsClick();
        this.setState({isActive: true});
    },

    getInitialState: function() {
        return {
            isActive: false
        };
    },

    hideSportsDetail: function() {
        this.setState({
            isActive: false
        });
    },

    render: function() {
        return (
            <div className={"c-sport " + (this.state.isActive ? 'c-sport--active' : '')}>
                <div onClick={this.handleClick} className="c-sport-summary">
                    <img className="c-icon" src={'./wp-content/uploads/2016/07/' + this.props.sport.icon} />
                    <img className="c-icon c-sport__icon-animator" src={'./wp-content/uploads/2016/07/' + this.props.sport.icon} />
                </div>
                {this.state.isActive ? <SportDetails onCloseClick={this.hideSportsDetail} sport={this.props.sport} /> : null}
            </div>
        );
    }
});