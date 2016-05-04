import * as React from 'react';

interface ButtonProps {
    click: (x: number) => void;
    value: number;
}

const Button = ({ click, value }: ButtonProps) => <button onClick={() => click(value)}>{value}</button>;

export default Button;
