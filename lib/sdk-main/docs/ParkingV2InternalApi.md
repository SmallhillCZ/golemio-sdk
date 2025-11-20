# ParkingV2InternalApi

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2ParkingDetailGet**](#v2parkingdetailget) | **GET** /v2/parking/detail | GET All Detailed Parking Spaces|
|[**v2ParkingDetailIdGet**](#v2parkingdetailidget) | **GET** /v2/parking/detail/{id} | GET Detailed Parking Space|
|[**v2ParkingMeasurementsGet**](#v2parkingmeasurementsget) | **GET** /v2/parking/measurements | GET All Parking Spaces Measurements|
|[**v2ParkingTariffsGet**](#v2parkingtariffsget) | **GET** /v2/parking/tariffs | GET All Parking Spaces Tariffs|
|[**v2ParkingTariffsTariffIdGet**](#v2parkingtariffstariffidget) | **GET** /v2/parking/tariffs/{tariffId} | GET Parking Space Tariff|

# **v2ParkingDetailGet**
> V2ParkingGet200Response v2ParkingDetailGet()


### Example

```typescript
import {
    ParkingV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2InternalApi(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let source: string; //Filter by data provider. (optional) (default to undefined)
let sourceId: string; //Filter by parking group id. Unique per data provider. (optional) (default to undefined)
let category: Array<string>; //Filter by parking type. Use with square brackets `category[]` (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let minutesBefore: number; //Filter by time conditions based on last data update. By maximal minutes before last update. (optional) (default to undefined)
let updatedSince: string; //Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. (optional) (default to undefined)
let zoneType: Array<string>; //Filter by parking zone. Use with square brackets `zoneType[]`, multiple values can be passed forming an array. (optional) (default to undefined)
let parkingType: Array<string>; //Filter by parking type. Use with square brackets `parkingType[]`, multiple values can be passed forming an array. (optional) (default to undefined)

const { status, data } = await apiInstance.v2ParkingDetailGet(
    latlng,
    range,
    source,
    sourceId,
    category,
    limit,
    offset,
    minutesBefore,
    updatedSince,
    zoneType,
    parkingType
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
| **zoneType** | **Array&lt;string&gt;** | Filter by parking zone. Use with square brackets &#x60;zoneType[]&#x60;, multiple values can be passed forming an array. | (optional) defaults to undefined|
| **parkingType** | **Array&lt;string&gt;** | Filter by parking type. Use with square brackets &#x60;parkingType[]&#x60;, multiple values can be passed forming an array. | (optional) defaults to undefined|


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

# **v2ParkingDetailIdGet**
> ParkingSpaceFeature v2ParkingDetailIdGet()


### Example

```typescript
import {
    ParkingV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2InternalApi(configuration);

let id: string; //Id of parking location. (default to undefined)

const { status, data } = await apiInstance.v2ParkingDetailIdGet(
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

# **v2ParkingMeasurementsGet**
> Array<ParkingMeasurement> v2ParkingMeasurementsGet()


### Example

```typescript
import {
    ParkingV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2InternalApi(configuration);

let source: string; //Filter by data provider. (optional) (default to undefined)
let sourceId: string; //Filter by parking group id. Unique per data provider. (optional) (default to undefined)
let latest: boolean; //Show only the latest measurement. (optional) (default to false)
let from: string; //Date in ISO8601, limits data measured from this datetime. (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. Max 10000. (optional) (default to undefined)
let offset: number; //Number of items that are skipped in result (like in sql). (optional) (default to undefined)
let minutesBefore: number; //Filter by time conditions based on last data update. By maximal minutes before last update. (optional) (default to undefined)
let updatedSince: string; //Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. (optional) (default to undefined)

const { status, data } = await apiInstance.v2ParkingMeasurementsGet(
    source,
    sourceId,
    latest,
    from,
    to,
    limit,
    offset,
    minutesBefore,
    updatedSince
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**string**] | Filter by data provider. | (optional) defaults to undefined|
| **sourceId** | [**string**] | Filter by parking group id. Unique per data provider. | (optional) defaults to undefined|
| **latest** | [**boolean**] | Show only the latest measurement. | (optional) defaults to false|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime. | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. Max 10000. | (optional) defaults to undefined|
| **offset** | [**number**] | Number of items that are skipped in result (like in sql). | (optional) defaults to undefined|
| **minutesBefore** | [**number**] | Filter by time conditions based on last data update. By maximal minutes before last update. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filter by time conditions based on last data update. Date has to be in ISO8601 format. Cannot be used together with minutesBefore. | (optional) defaults to undefined|


### Return type

**Array<ParkingMeasurement>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  * x-access-token -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2ParkingTariffsGet**
> Array<ParkingSpaceTariff> v2ParkingTariffsGet()


### Example

```typescript
import {
    ParkingV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2InternalApi(configuration);

let source: string; //Filter by data provider. (optional) (default to undefined)

const { status, data } = await apiInstance.v2ParkingTariffsGet(
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**string**] | Filter by data provider. | (optional) defaults to undefined|


### Return type

**Array<ParkingSpaceTariff>**

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

# **v2ParkingTariffsTariffIdGet**
> ParkingSpaceTariff v2ParkingTariffsTariffIdGet()


### Example

```typescript
import {
    ParkingV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new ParkingV2InternalApi(configuration);

let tariffId: string; //Id of parking tariff. (default to undefined)

const { status, data } = await apiInstance.v2ParkingTariffsTariffIdGet(
    tariffId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tariffId** | [**string**] | Id of parking tariff. | defaults to undefined|


### Return type

**ParkingSpaceTariff**

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

