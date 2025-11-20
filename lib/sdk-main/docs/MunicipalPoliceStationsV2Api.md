# MunicipalPoliceStationsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gETAllMunicipalPoliceStations**](#getallmunicipalpolicestations) | **GET** /v2/municipalpolicestations | GET All Municipal Police Stations|
|[**gETMunicipalPoliceStation**](#getmunicipalpolicestation) | **GET** /v2/municipalpolicestations/{id} | GET Municipal Police Station|

# **gETAllMunicipalPoliceStations**
> GETAllMunicipalPoliceStations200Response gETAllMunicipalPoliceStations()



### Example

```typescript
import {
    MunicipalPoliceStationsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MunicipalPoliceStationsV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let districts: Array<any>; //Filter by Prague city districts (slug) separated by comma. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let updatedSince: string; //Filters all results with older updated_at than this parameter (optional) (default to undefined)

const { status, data } = await apiInstance.gETAllMunicipalPoliceStations(
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
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filters all results with older updated_at than this parameter | (optional) defaults to undefined|


### Return type

**GETAllMunicipalPoliceStations200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gETMunicipalPoliceStation**
> MunicipalPoliceStation gETMunicipalPoliceStation()



### Example

```typescript
import {
    MunicipalPoliceStationsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MunicipalPoliceStationsV2Api(configuration);

let id: number; //Identifier of the police station. (default to undefined)

const { status, data } = await apiInstance.gETMunicipalPoliceStation(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Identifier of the police station. | defaults to undefined|


### Return type

**MunicipalPoliceStation**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

