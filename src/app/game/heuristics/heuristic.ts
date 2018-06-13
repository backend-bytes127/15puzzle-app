// This is an interface to create a geuristic function. ALl child classes
// should implement the evaluate cost function.

export interface Heuristic<T> {
    evaluate_cost_function(source: any, target: any);
}



