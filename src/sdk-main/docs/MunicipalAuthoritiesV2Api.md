# MunicipalAuthoritiesV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gETAllMunicipalAuthorities**](#getallmunicipalauthorities) | **GET** /v2/municipalauthorities | GET All Municipal Authorities|
|[**gETAllMunicipalAuthorityWaitingQueues**](#getallmunicipalauthoritywaitingqueues) | **GET** /v2/municipalauthorities/{id}/queues | GET All Municipal Authority Waiting Queues|
|[**gETMunicipalAuthority**](#getmunicipalauthority) | **GET** /v2/municipalauthorities/{id} | GET Municipal Authority|

# **gETAllMunicipalAuthorities**
> GETAllMunicipalAuthorities200Response gETAllMunicipalAuthorities()



### Example

```typescript
import {
    MunicipalAuthoritiesV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MunicipalAuthoritiesV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let districts: Array<any>; //Filter by Prague city districts (slug) separated by comma. (optional) (default to undefined)
let type: 'municipality' | 'city-hall'; //Filter by group of types of the municipal authorities. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let updatedSince: string; //Filters all results with older updated_at than this parameter (optional) (default to undefined)

const { status, data } = await apiInstance.gETAllMunicipalAuthorities(
    latlng,
    range,
    districts,
    type,
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
| **type** | [**&#39;municipality&#39; | &#39;city-hall&#39;**]**Array<&#39;municipality&#39; &#124; &#39;city-hall&#39;>** | Filter by group of types of the municipal authorities. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filters all results with older updated_at than this parameter | (optional) defaults to undefined|


### Return type

**GETAllMunicipalAuthorities200Response**

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

# **gETAllMunicipalAuthorityWaitingQueues**
> MunicipalAuthorityQueues gETAllMunicipalAuthorityWaitingQueues()



### Example

```typescript
import {
    MunicipalAuthoritiesV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MunicipalAuthoritiesV2Api(configuration);

let id: string; //Identifier of the municipality. (default to undefined)

const { status, data } = await apiInstance.gETAllMunicipalAuthorityWaitingQueues(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the municipality. | defaults to undefined|


### Return type

**MunicipalAuthorityQueues**

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

# **gETMunicipalAuthority**
> MunicipalAuthority gETMunicipalAuthority()



### Example

```typescript
import {
    MunicipalAuthoritiesV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MunicipalAuthoritiesV2Api(configuration);

let id: string; //Identifier of the municipal authority. (default to undefined)

const { status, data } = await apiInstance.gETMunicipalAuthority(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the municipal authority. | defaults to undefined|


### Return type

**MunicipalAuthority**

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

