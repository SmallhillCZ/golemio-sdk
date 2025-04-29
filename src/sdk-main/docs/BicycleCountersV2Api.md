# BicycleCountersV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2BicyclecountersDetectionsGet**](#v2bicyclecountersdetectionsget) | **GET** /v2/bicyclecounters/detections | GET Bicycle Counters Detections|
|[**v2BicyclecountersGet**](#v2bicyclecountersget) | **GET** /v2/bicyclecounters | GET All Bicycle Counters|
|[**v2BicyclecountersTemperaturesGet**](#v2bicyclecounterstemperaturesget) | **GET** /v2/bicyclecounters/temperatures | GET Bicycle Counters Temperatures|

# **v2BicyclecountersDetectionsGet**
> Array<BicycleCounterDetections> v2BicyclecountersDetectionsGet()


### Example

```typescript
import {
    BicycleCountersV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new BicycleCountersV2Api(configuration);

let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime (optional) (default to undefined)
let aggregate: boolean; //sum aggregated by directions_id is returned (optional) (default to undefined)
let id: string; //direction ids (optional) (default to undefined)
let xAccessToken: string; //e.g. YOUR_ACCESS_TOKEN (optional) (default to undefined)

const { status, data } = await apiInstance.v2BicyclecountersDetectionsGet(
    limit,
    offset,
    from,
    to,
    aggregate,
    id,
    xAccessToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime | (optional) defaults to undefined|
| **aggregate** | [**boolean**] | sum aggregated by directions_id is returned | (optional) defaults to undefined|
| **id** | [**string**] | direction ids | (optional) defaults to undefined|
| **xAccessToken** | [**string**] | e.g. YOUR_ACCESS_TOKEN | (optional) defaults to undefined|


### Return type

**Array<BicycleCounterDetections>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2BicyclecountersGet**
> V2BicyclecountersGet200Response v2BicyclecountersGet()


### Example

```typescript
import {
    BicycleCountersV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new BicycleCountersV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let xAccessToken: string; //e.g. YOUR_ACCESS_TOKEN (optional) (default to undefined)

const { status, data } = await apiInstance.v2BicyclecountersGet(
    latlng,
    range,
    limit,
    offset,
    xAccessToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latlng** | [**string**] | Sorting by location (Latitude and Longitude separated by comma, latitude first). | (optional) defaults to undefined|
| **range** | [**number**] | Filter by distance from latlng in meters (range query). Depends on the latlng parameter. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **xAccessToken** | [**string**] | e.g. YOUR_ACCESS_TOKEN | (optional) defaults to undefined|


### Return type

**V2BicyclecountersGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2BicyclecountersTemperaturesGet**
> Array<BicycleCounterTemperatures> v2BicyclecountersTemperaturesGet()


### Example

```typescript
import {
    BicycleCountersV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new BicycleCountersV2Api(configuration);

let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime (optional) (default to undefined)
let aggregate: boolean; //average aggregated by locations_id is returned (optional) (default to undefined)
let id: Array<string>; //location ids (optional) (default to undefined)
let xAccessToken: string; //e.g. YOUR_ACCESS_TOKEN (optional) (default to undefined)

const { status, data } = await apiInstance.v2BicyclecountersTemperaturesGet(
    limit,
    offset,
    from,
    to,
    aggregate,
    id,
    xAccessToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime | (optional) defaults to undefined|
| **aggregate** | [**boolean**] | average aggregated by locations_id is returned | (optional) defaults to undefined|
| **id** | **Array&lt;string&gt;** | location ids | (optional) defaults to undefined|
| **xAccessToken** | [**string**] | e.g. YOUR_ACCESS_TOKEN | (optional) defaults to undefined|


### Return type

**Array<BicycleCounterTemperatures>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

