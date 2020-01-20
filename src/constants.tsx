/**
 * The URL of the data-endpoint that collects the data of selected options and achieved objectives
 *
 * @type {string}
 */
export const URL = "http://localhost:3000/_api";

/**
 * The endpoint to request a recommendation
 * @type {string}
 */
export const RECOMMEND = "/recommend";

/**
 * The endpoint to collect the achieved objectives
 * @type {string}
 */
export const REPORT = "/report";

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
