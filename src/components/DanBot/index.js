import React from 'react';

export default class DanBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.themes = ['', 'blue', 'orange'];
    }

    onClick(e) {
        e.preventDefault();
        const activeIndex = (this.state.activeIndex < this.themes.length - 1) ? this.state.activeIndex + 1 : 0;
        this.setState({ activeIndex })
    }

    render() {
        return (
            <div className="bot">
                <div class="container" data-theme={this.themes[this.state.activeIndex]} id="dan-container">
                    <h1>DanBot3000</h1>
                    <p>Finally, the Dan that fits in your pocket!<br/>Tap to change Dan themes</p>

                    <div class="body" id="dan" onClick={this.onClick.bind(this)}>
                        <span><i>Never Salty!</i></span>
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="spacer"/>
                        <div class="part head"></div>
                        <div class="part neck"></div>
                        <div class="part torso"></div>
                        <div class="part crotch"></div>
                        <div class="part arm arm--left">
                            <div class="part arm__top">
                                <div class="part arm__bottom"></div>
                            </div>
                        </div>
                        <div class="part arm arm--right">
                            <div class="part arm__top">
                                <div class="part arm__bottom"></div>
                            </div>
                        </div>
                        <div class="part leg leg--left">
                            <div class="part leg__top">
                                <div class="part leg__bottom">
                                    <div class="part leg__shoe"></div>
                                </div>
                            </div>
                        </div>
                        <div class="part leg leg--right">
                            <div class="part leg__top">
                                <div class="part leg__bottom">
                                    <div class="part leg__shoe"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
