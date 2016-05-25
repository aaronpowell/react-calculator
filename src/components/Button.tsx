import * as React from 'react';

interface ButtonProps {
    click: (x: number | string) => void;
    value: number | string;
}

const Button = ({ click, value }: ButtonProps) => <button onClick={() => click(value)}>{value}</button>;

export default Button;
