# ParkingV1Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v1ParkingsGet**](#v1parkingsget) | **GET** /v1/parkings | GET All Parking Lots within the region of interest|
|[**v1ParkingsHistoryGet**](#v1parkingshistoryget) | **GET** /v1/parkings/history | GET Parking Lot History|
|[**v1ParkingsIdGet**](#v1parkingsidget) | **GET** /v1/parkings/{id} | GET Parking Lot|

# **v1ParkingsGet**
> V1ParkingsGet200Response v1ParkingsGet()


### Example

```typescript
import {
    ParkingV1Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV1Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let districts: Array<any>; //Filter by Prague city districts (slug) separated by comma. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let updatedSince: string; //Filters all results with older updated_at than this parameter (optional) (default to undefined)

const { status, data } = await apiInstance.v1ParkingsGet(
    latlng,
    range,
    districts,
    limit,
    offset,
    updatedSince
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latlng** | [**string**] | Sorting by location (Latitude and Longitude separated by comma, latitude first). | (optional) defaults to undefined|
| **range** | [**number**] | Filter by distance from latlng in meters (range query). Depends on the latlng parameter. | (optional) defaults to undefined|
| **districts** | **Array&lt;any&gt;** | Filter by Prague city districts (slug) separated by comma. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filters all results with older updated_at than this parameter | (optional) defaults to undefined|


### Return type

**V1ParkingsGet200Response**

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

# **v1ParkingsHistoryGet**
> Array<ParkingLotHistory> v1ParkingsHistoryGet()


### Example

```typescript
import {
    ParkingV1Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV1Api(configuration);

let limit: number; //Limits number of retrieved items. (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up to this datetime (optional) (default to undefined)
let sensorId: string; //Limits data measured by sensor with this id (parameter `id` of the parking) (optional) (default to undefined)

const { status, data } = await apiInstance.v1ParkingsHistoryGet(
    limit,
    offset,
    from,
    to,
    sensorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up to this datetime | (optional) defaults to undefined|
| **sensorId** | [**string**] | Limits data measured by sensor with this id (parameter &#x60;id&#x60; of the parking) | (optional) defaults to undefined|


### Return type

**Array<ParkingLotHistory>**

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

# **v1ParkingsIdGet**
> ParkingLotFeature v1ParkingsIdGet()


### Example

```typescript
import {
    ParkingV1Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV1Api(configuration);

let id: string; //Id of parking location. (default to undefined)

const { status, data } = await apiInstance.v1ParkingsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id of parking location. | defaults to undefined|


### Return type

**ParkingLotFeature**

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

