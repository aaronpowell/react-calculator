interface Equation {
    left: number;
    operand?: string;
    right?: number;
}

interface CalculatorStoreState {
    history: Equation[];
    current?: Equation;
    currentAnswer?: number
}
