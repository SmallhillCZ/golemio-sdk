/* tslint:disable */
/* eslint-disable */
/**
 * 🚋 Public Transport | Golemio API
 * <p><img src=\"https://storage.golemio.cz/golemiocz/images/golemioapi_logos.png\" alt=\"Logos\" /></p> <p><b>Toto je část dokumentace REST API projektu pražské datové platformy Golemio, která obsahuje popis Public Transport Output Gateway API.</b></p> <p>Veškeré dotazy prosím směřujte na <a href=\"mailto:golemio@operatorict.cz?subject=golemioapi\">golemio@operatorict.cz</a>.</p> <p>Dokumentace je v anglickém jazyce. Více informací o projektu naleznete na <a href=\"https://www.golemio.cz/\">www.golemio.cz</a>.</p> <H1>Description</H1> <p><b>This documentation covers the RESTful API of the Golemio Prague Data Platform project, specifically detailing the Public Transport Output Gateway API.</b></p> <p>Support is accessible via <a href=\"mailto:golemio@operatorict.cz?subject=golemioapi\">golemio@operatorict.cz</a>.</p> <p>For more information about Golemio, please visit the website <a href=\"https://www.golemio.cz/\">www.golemio.cz</a>.</p> <H2>Golemio API documentation:</H2> <li><a href=\"https://api.golemio.cz/docs/openapi/\">Main Golemio API</a></li> <li><a href=\"https://api.golemio.cz/docs/public-openapi/\">Open Data Golemio API</a></li> <li><a href=\"https://api.golemio.cz/input-gateway/docs/openapi/\">Golemio Input Gateway API</a></li> <li>👉 Public Transport Golemio API</li> <li><a href=\"https://api.golemio.cz/pid/input-gateway/docs/openapi/\">Public Transport Golemio Input Gateway API</a></li> <H1>General info</H1> <H2>Authorization</H2> <p>Generate your token at <a href=\"https://api.golemio.cz/api-keys\">api.golemio.cz/api-keys</a>.</p> <p><b>Use the token as the value of the X-Access-Token header.</b></p> <H1>Usage</H1> <H2>Pagination</H2> <p>The API returns a maximum of 10,000 objects/rows per request. You can specify a lower number by adding the <code>?limit</code> URL parameter.</p> <p>     This limit may vary depending on the specific route; please refer to the description of parameters for each route. To retrieve more data, use multiple requests with the <code>?limit&offset</code> parameters.     Refer to the examples below. </p> <H2>Requests rate</H2> <p>By default, each API key has a rate limit of 20 requests per 8 seconds.</p> <H2>Compression</H2> <p>By default, the Content-Encoding header is set to gzip (if requested). If the raw response is less than 1 KB, the data is returned uncompressed, and the Content-Encoding header is not set.</p> <H2>General Transit Feed Specification</H2> <p>Access GTFS (<a href=\"https://developers.google.com/transit/gtfs\">General Transit Feed Specification</a>) data on the city\'s public transportation schedules through this API.</p> <p>The data is published by ROPID and remains valid for the upcoming ~12 days, subject to daily updates.</p> <p>Learn more at <a href=\"https://pid.cz/o-systemu/opendata/\">pid.cz</a>.</p> <H2>Open Data</H2> <p><img src=\"https://img.shields.io/badge/opendata-available-green\" alt=\"golemioapi-opendata-badge\" /></p> <p>This badge means it is available for public use as Open Data.</p>
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: golemio@operatorict.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ConfigurationParameters } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://api.golemio.cz".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: RawAxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: ConfigurationParameters | undefined;

    constructor(configuration?: ConfigurationParameters, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath ?? basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

interface ServerMap {
    [key: string]: {
        url: string,
        description: string,
    }[];
}

/**
 *
 * @export
 */
export const operationServerMap: ServerMap = {
}
