# ParkingV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2ParkingGet**](#v2parkingget) | **GET** /v2/parking | GET All Parking Spaces within the region of interest|
|[**v2ParkingIdGet**](#v2parkingidget) | **GET** /v2/parking/{id} | GET Parking Space|

# **v2ParkingGet**
> V2ParkingGet200Response v2ParkingGet()


### Example

```typescript
import {
    ParkingV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let source: string; //Filter by data provider. (optional) (default to undefined)
let sourceId: string; //Filter by parking group id. Unique per data provider. (optional) (default to undefined)
let category: Array<string>; //Filter by parking type. Use with square brackets `category[]` (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let minutesBefore: number; //Filter by time conditions based on last data update. By maximal minutes before last update. (optional) (default to undefined)
let updatedSince: string; //Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. (optional) (default to undefined)

const { status, data } = await apiInstance.v2ParkingGet(
    latlng,
    range,
    source,
    sourceId,
    category,
    limit,
    offset,
    minutesBefore,
    updatedSince
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latlng** | [**string**] | Sorting by location (Latitude and Longitude separated by comma, latitude first). | (optional) defaults to undefined|
| **range** | [**number**] | Filter by distance from latlng in meters (range query). Depends on the latlng parameter. | (optional) defaults to undefined|
| **source** | [**string**] | Filter by data provider. | (optional) defaults to undefined|
| **sourceId** | [**string**] | Filter by parking group id. Unique per data provider. | (optional) defaults to undefined|
| **category** | **Array&lt;string&gt;** | Filter by parking type. Use with square brackets &#x60;category[]&#x60; | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **minutesBefore** | [**number**] | Filter by time conditions based on last data update. By maximal minutes before last update. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. | (optional) defaults to undefined|


### Return type

**V2ParkingGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * x-access-token -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2ParkingIdGet**
> ParkingSpaceFeature v2ParkingIdGet()


### Example

```typescript
import {
    ParkingV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2Api(configuration);

let id: string; //Id of parking location. (default to undefined)

const { status, data } = await apiInstance.v2ParkingIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id of parking location. | defaults to undefined|


### Return type

**ParkingSpaceFeature**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * x-access-token -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

