// tutorial1.js
var SportDetails = React.createClass({
    displayName: "SportDetails",


    getInitialState: function () {
        return {
            isHidden: false
        };
    },

    onCloseClick: function () {
        this.setState({
            isHidden: true
        });
        setTimeout(function () {
            this.props.onCloseClick();
        }.bind(this), 1000);
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "c-sport-details" + (this.state.isHidden ? " c-sport-details--is-hidden" : "") },
            React.createElement(
                "button",
                { className: "c-btn c-btn--iconed t-top-right", onClick: this.onCloseClick },
                "Close"
            ),
            React.createElement(
                "h2",
                { className: "c-heading" },
                this.props.sport.name
            ),
            React.createElement(
                "div",
                { className: "c-sport-detail__content" },
                React.createElement(
                    "div",
                    { className: "c-sport-detail__icon-wrapper" },
                    React.createElement("img", { className: "c-icon", src: './wp-content/uploads/2016/07/' + this.props.sport.icon })
                ),
                React.createElement(
                    "div",
                    { className: "c-sport-detail__description" },
                    React.createElement(
                        "p",
                        null,
                        "Hashtag mixtape quinoa four dollar toast artisan literally chambray mumblecore, four loko freegan. Godard shoreditch vegan venmo try-hard, retro next level listicle cred beard lumbersexual +1 occupy. Fap neutra +1 tofu, retro typewriter pabst PBR&B. Letterpress pug wolf VHS, shoreditch cronut blog leggings four loko mustache swag. Fingerstache mlkshk keytar, food truck listicle flexitarian tacos direct trade sartorial plaid kitsch knausgaard tousled flannel. Scenester 3 wolf moon chillwave, photo booth dreamcatcher cred wayfarers 90's bicycle rights cliche. Four loko put a bird on it cronut etsy, direct trade kinfolk offal mixtape synth kale chips pitchfork."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Slow-carb direct trade lo-fi locavore. Echo park leggings meh, selfies cray chicharrones try-hard hammock before they sold out. Health goth actually banjo small batch. Brooklyn etsy craft beer, yuccie +1 green juice microdosing pork belly cronut yr listicle stumptown vinyl gluten-free. DIY meditation leggings deep v. Photo booth tacos kogi aesthetic, plaid cardigan neutra forage fanny pack art party keytar hella man bun vegan. Vice gluten-free synth, kogi freegan mixtape truffaut swag scenester keffiyeh pop-up plaid."
                    )
                )
            )
        );
    }
});