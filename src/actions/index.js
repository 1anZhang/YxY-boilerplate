export const ADD = 'ADD';
export const MINUS = 'MINUS';

export function add() {
  return {
    type: ADD
  };
}

export function minus() {
  return {
    type: MINUS
  };
}
