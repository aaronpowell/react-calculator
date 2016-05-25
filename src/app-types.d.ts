interface Equation {
    left: string;
    operand?: string;
    right?: string;
}

interface CalculatorStoreState {
    history: Equation[];
    current?: Equation;
    currentAnswer?: number
}
