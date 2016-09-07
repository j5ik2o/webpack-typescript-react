import * as React from 'react';

export interface Props {
    content: string;
}

export class HelloWorld extends React.Component<Props, {}> {
    render() {
        return <div>{this.props.content}</div>
    }
}