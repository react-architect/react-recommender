
export const isNumber = (value: string | number): boolean => (
    (value != null) &&
    (value !== '') &&
    !isNaN(Number(value.toString()))
);


export const separateDevEnv = (objectiveId: string) => objectiveId + (
    location?.hostname === "localhost" || location?.hostname === "127.0.0.1" ? "-dev" : "");

