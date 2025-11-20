# PublicDeparturesV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2PublicDepartureboardsGet**](#v2publicdepartureboardsget) | **GET** /v2/public/departureboards | Get Departure Boards|

# **v2PublicDepartureboardsGet**
> Array<Array<PublicDepartureGroupInner>> v2PublicDepartureboardsGet()

ℹ️ Note: This endpoint is optimized for client applications serving many users simultaneously. It provides streamlined data structures and caching strategies suitable for client-side consumption. Rate limits can be adjusted upon request - contact us if you need higher limits. Note: Despite the \'public\' prefix, this endpoint requires an API key for access control and usage monitoring. 

### Example

```typescript
import {
    PublicDeparturesV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PublicDeparturesV2Api(configuration);

let stopIds: Array<string>; //Groups of stop IDs formatted as JSON (index/priority -> stop IDs). For example ?stopIds[]={\\\"0\\\": [\\\"U717Z5P\\\"]}&stopIds[]={\\\"1\\\": [\\\"U718Z5P\\\", \\\"U719Z5P\\\"]}. The maximum number of groups is 50. The maximum number of stops in one group is 50. The maximum number of stops combined is 50.  (default to undefined)
let limit: number; //Limit for each group of departures. Default is 5. Maximum is 30. (optional) (default to undefined)
let routeShortNames: Array<string>; //Default is null (optional) (default to undefined)
let minutesAfter: number; //Default is 60. Maximum is 360 (6 hours) (optional) (default to undefined)
let minutesBefore: number; //Set the starting point of the departure retrieval window, in minutes, relative to now (or to timeFrom, if used). Positive values will return departures starting earlier in the past. Negative values will return departures starting later in the future. This setting helps account for walking time to the stop. Example: 2 returns departures that left 2 minutes ago. -10 returns departures no earlier then 10 minutes from now. Default is set to 0. Maximum value is 30. Minimum value is -359. (optional) (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2PublicDepartureboardsGet(
    stopIds,
    limit,
    routeShortNames,
    minutesAfter,
    minutesBefore,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stopIds** | **Array&lt;string&gt;** | Groups of stop IDs formatted as JSON (index/priority -&gt; stop IDs). For example ?stopIds[]&#x3D;{\\\&quot;0\\\&quot;: [\\\&quot;U717Z5P\\\&quot;]}&amp;stopIds[]&#x3D;{\\\&quot;1\\\&quot;: [\\\&quot;U718Z5P\\\&quot;, \\\&quot;U719Z5P\\\&quot;]}. The maximum number of groups is 50. The maximum number of stops in one group is 50. The maximum number of stops combined is 50.  | defaults to undefined|
| **limit** | [**number**] | Limit for each group of departures. Default is 5. Maximum is 30. | (optional) defaults to undefined|
| **routeShortNames** | **Array&lt;string&gt;** | Default is null | (optional) defaults to undefined|
| **minutesAfter** | [**number**] | Default is 60. Maximum is 360 (6 hours) | (optional) defaults to undefined|
| **minutesBefore** | [**number**] | Set the starting point of the departure retrieval window, in minutes, relative to now (or to timeFrom, if used). Positive values will return departures starting earlier in the past. Negative values will return departures starting later in the future. This setting helps account for walking time to the stop. Example: 2 returns departures that left 2 minutes ago. -10 returns departures no earlier then 10 minutes from now. Default is set to 0. Maximum value is 30. Minimum value is -359. | (optional) defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**Array<Array<PublicDepartureGroupInner>>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found - no stops found for the given query parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

