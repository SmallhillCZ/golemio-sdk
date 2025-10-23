# PIDDepartureBoardsV3Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v3PidInfotextsGet**](#v3pidinfotextsget) | **GET** /v3/pid/infotexts | GET Infotexts (export from the VYMI (JIS) Infotexts system)|
|[**v3PidTransferboardsGet**](#v3pidtransferboardsget) | **GET** /v3/pid/transferboards | GET Transfer Boards|

# **v3PidInfotextsGet**
> Array<V3PidInfotextsGet200ResponseInner> v3PidInfotextsGet()



### Example

```typescript
import {
    PIDDepartureBoardsV3Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDDepartureBoardsV3Api(configuration);

let includeFuture: boolean; //If set to true, the endpoint returns both active and future infotexts. If false or omitted, only active infotexts are returned. (optional) (default to undefined)

const { status, data } = await apiInstance.v3PidInfotextsGet(
    includeFuture
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeFuture** | [**boolean**] | If set to true, the endpoint returns both active and future infotexts. If false or omitted, only active infotexts are returned. | (optional) defaults to undefined|


### Return type

**Array<V3PidInfotextsGet200ResponseInner>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all active infotexts |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3PidTransferboardsGet**
> V3PidTransferboardsGet200Response v3PidTransferboardsGet()

⚠️ Note: This endpoint is experimental and may be subject to change. Tested and optimized for train transfers only (as in transfering from a train to other all kinds of transport). 

### Example

```typescript
import {
    PIDDepartureBoardsV3Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PIDDepartureBoardsV3Api(configuration);

let cisId: number; //CIS identifier of the stop. A list of CIS IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). (default to undefined)
let tripNumber: number; //Trip number of the vehicle in which the transfer is planned. Use to filter out transfers for a specific trip. Represents the numeric part of the GTFS `trip_short_name` (Os 2547 -> 2547). (optional) (default to undefined)
let timeFrom: string; //Set initial timestamp for time interval given by `minutesBefore` (hardcoded to 0) and `minutesAfter` (hardcoded to 60). Use to simulate query time different from now. Use ISO 8601 time format and URL encoded symbols - `%3A` for `:`, `%2B` for `.`, `%2F` for `+`. Time zone is set to `Europe/Prague`. Applicable range is -6 hours +2 days from now. (optional) (default to undefined)

const { status, data } = await apiInstance.v3PidTransferboardsGet(
    cisId,
    tripNumber,
    timeFrom
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cisId** | [**number**] | CIS identifier of the stop. A list of CIS IDs can be found in [Prague Open data](https://opendata.praha.eu/datasets/https%3A%2F%2Fapi.opendata.praha.eu%2Flod%2Fcatalog%2F6ac8381f-ea19-4ea9-8949-92076809dc5a). | defaults to undefined|
| **tripNumber** | [**number**] | Trip number of the vehicle in which the transfer is planned. Use to filter out transfers for a specific trip. Represents the numeric part of the GTFS &#x60;trip_short_name&#x60; (Os 2547 -&gt; 2547). | (optional) defaults to undefined|
| **timeFrom** | [**string**] | Set initial timestamp for time interval given by &#x60;minutesBefore&#x60; (hardcoded to 0) and &#x60;minutesAfter&#x60; (hardcoded to 60). Use to simulate query time different from now. Use ISO 8601 time format and URL encoded symbols - &#x60;%3A&#x60; for &#x60;:&#x60;, &#x60;%2B&#x60; for &#x60;.&#x60;, &#x60;%2F&#x60; for &#x60;+&#x60;. Time zone is set to &#x60;Europe/Prague&#x60;. Applicable range is -6 hours +2 days from now. | (optional) defaults to undefined|


### Return type

**V3PidTransferboardsGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all active transfer boards |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found - no valid GTFS stop found for the given CIS ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

