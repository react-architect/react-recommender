
export const isNumber = (value: string | number): boolean => (
    (value != null) &&
    (value !== '') &&
    !isNaN(Number(value.toString()))
);
