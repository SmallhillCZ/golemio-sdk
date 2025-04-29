# AirQualityV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2AirqualitystationsComponenttypesGet**](#v2airqualitystationscomponenttypesget) | **GET** /v2/airqualitystations/componenttypes | GET Air Quality Station Component Types|
|[**v2AirqualitystationsGet**](#v2airqualitystationsget) | **GET** /v2/airqualitystations | GET All Air Quality CHMI Stations|
|[**v2AirqualitystationsHistoryGet**](#v2airqualitystationshistoryget) | **GET** /v2/airqualitystations/history | GET Air Quality Stations CHMI History|
|[**v2AirqualitystationsIndextypesGet**](#v2airqualitystationsindextypesget) | **GET** /v2/airqualitystations/indextypes | GET Air Quality Station Index Types|

# **v2AirqualitystationsComponenttypesGet**
> Array<AirQualityStationComponentType> v2AirqualitystationsComponenttypesGet()


### Example

```typescript
import {
    AirQualityV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new AirQualityV2Api(configuration);

const { status, data } = await apiInstance.v2AirqualitystationsComponenttypesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AirQualityStationComponentType>**

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
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2AirqualitystationsGet**
> V2AirqualitystationsGet200Response v2AirqualitystationsGet()


### Example

```typescript
import {
    AirQualityV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new AirQualityV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let districts: Array<string>; //Filter by Prague city districts (slug) separated by comma. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let updatedSince: string; //Filters all results with older updated_at than this parameter (optional) (default to undefined)

const { status, data } = await apiInstance.v2AirqualitystationsGet(
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
| **districts** | **Array&lt;string&gt;** | Filter by Prague city districts (slug) separated by comma. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filters all results with older updated_at than this parameter | (optional) defaults to undefined|


### Return type

**V2AirqualitystationsGet200Response**

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
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2AirqualitystationsHistoryGet**
> Array<AirQualityStationHistory> v2AirqualitystationsHistoryGet()


### Example

```typescript
import {
    AirQualityV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new AirQualityV2Api(configuration);

let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime. Defaults to 1 day ago. (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime. Defaults to now. (optional) (default to undefined)
let sensorId: string; //Limits data measured up by sensor with this id (optional) (default to undefined)

const { status, data } = await apiInstance.v2AirqualitystationsHistoryGet(
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
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime. Defaults to 1 day ago. | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime. Defaults to now. | (optional) defaults to undefined|
| **sensorId** | [**string**] | Limits data measured up by sensor with this id | (optional) defaults to undefined|


### Return type

**Array<AirQualityStationHistory>**

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
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2AirqualitystationsIndextypesGet**
> Array<AirQualityStationIndexType> v2AirqualitystationsIndextypesGet()


### Example

```typescript
import {
    AirQualityV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new AirQualityV2Api(configuration);

const { status, data } = await apiInstance.v2AirqualitystationsIndextypesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AirQualityStationIndexType>**

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
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

