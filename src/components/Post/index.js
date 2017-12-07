import React from 'react';
import DanBot from '../DanBot';

export const Quote = props => {
    return (
        <div className="quote">
            <blockquote>
                {props.data.text}
                {props.data.src && <span>- {props.data.src}</span>}
            </blockquote>
        </div>
    );
};

export const Image = props => {
    return <img className="image" alt="" src={`/images/${props.data.src}`} />;
};

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    toggleExpando() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { data } = this.props;
        const { content } = data;
        return (
            <div className="post">
                <div className="post-title" onClick={this.toggleExpando.bind(this)}>
                    {data.title}
                </div>
                {this.state.expanded &&
                    content.map(block => {
                        switch (block.type) {
                            case 'Image':
                                return <Image data={block} />;
                            case 'Quote':
                                return <Quote data={block} />;
                            case 'Text':
                                return <div className="text">{block.text}</div>;
                            case 'Bot':
                                return <DanBot />
                            default:
                                return <div>Bah?</div>;
                        }
                    })}
            </div>
        );
    }
}
