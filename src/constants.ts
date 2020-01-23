/**
 * The URL of the data-endpoint that collects the data of selected options and achieved objectives
 *
 * @type {string}
 */
//export const DEFAULT_URL = "https://2r0tzp6i4l.execute-api.eu-west-1.amazonaws.com/test/_api";
export const DEFAULT_URL = "https://www.react-architect.com/_api";
//export const DEFAULT_URL = "http://localhost:3000/_api";

/**
 * The endpoint to request a recommendation
 * @type {string}
 */
export const RECOMMEND_API = "/recommend";

/**
 * The endpoint to collect the achieved objectives
 * @type {string}
 */
export const REPORT_API = "/report";

/**
 * Default params for fetching-requests
 */
export const FETCH_PARAMS = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Accept-Charset": "utf-8"
    }
};
