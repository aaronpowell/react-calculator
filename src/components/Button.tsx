import * as React from 'react';

interface ButtonProps {
    click: (x: number | string) => void;
    value: number | string;
}

interface Props {
    click: (x: any) => void;
    value: any
}

interface Staet {
    foo: string
}

class Button extends React.Component<Props, Staet> {
    constructor(props) {
        super(props);

        this.state = { foo : 'bar' };
    }

   render() {
       const { click, value } = this.props;
       return <button onClick={() => (this.setState({ foo: 'baz' }), click(value))}>{value}</button>;
   }
}

// const Button = ({ click, value }: ButtonProps) => <button onClick={() => click(value)}>{value}</button>;

export default Button;
