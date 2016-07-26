// tutorial1.js

var Sport = function () {
    this.icon = '';
    this.name = '';
    this.description = '';
};

var App = React.createClass({

    getInitialState: function() {
        return {
            sports: []
        };
    },

    convertToSport: function(page) {
        var sport = new Sport();
        sport.name = page.title.rendered;
        sport.icon = page['icon-name'];
        sport.description = page.content.rendered;
        return sport;
    },

    getSportsFromApi: function() {
        var httpRequest = new XMLHttpRequest();
        console.log('getting sports');

        httpRequest.onreadystatechange = function(){
            // process the server response
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var pages = JSON.parse(httpRequest.responseText);
                    var sports = [];
                    pages.map(function(page) {
                        sports.unshift(this.convertToSport(page));
                    }.bind(this));
                    this.setState({
                        sports: sports
                    });
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }.bind(this);
        httpRequest.open('GET', '/wordpress/wp-json/wp/v2/pages/?per_page=100', true);
        httpRequest.send(null);
    },

    getSports: function() {
        return this.sports;
    },

    hideOtherSportSummaries: function() {
        for(var prop in this.refs) {
            this.refs[prop].hideSportsDetail();
        }
    },

    handleSportSummaryClick: function() {
        this.hideOtherSportSummaries();
    },

    componentWillMount: function() {
        return this.getSportsFromApi();
    },

    render: function() {
        return (
            <div className="c-app">
                <Header />
                <div className="c-content-wrapper">
                    {this.state.sports.map(function(sport, i) {
                        return <SportComponent ref={'sport' + i} onSportsClick={this.handleSportSummaryClick} sport={sport} />;
                    }, this)}
                </div>
            </div>
        );
        }
    });
ReactDOM.render(
    <App />,
    document.getElementById('content')
);