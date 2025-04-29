# MedicalInstitutionsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gETAllMedicalInstitutionTypes**](#getallmedicalinstitutiontypes) | **GET** /v2/medicalinstitutions/types | GET All Medical Institution Types|
|[**gETAllMedicalInstitutions**](#getallmedicalinstitutions) | **GET** /v2/medicalinstitutions | GET All Medical Institutions|
|[**gETMedicalInstitution**](#getmedicalinstitution) | **GET** /v2/medicalinstitutions/{id} | GET Medical Institution|

# **gETAllMedicalInstitutionTypes**
> MedicalInstitutionType gETAllMedicalInstitutionTypes()



### Example

```typescript
import {
    MedicalInstitutionsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MedicalInstitutionsV2Api(configuration);

const { status, data } = await apiInstance.gETAllMedicalInstitutionTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MedicalInstitutionType**

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

# **gETAllMedicalInstitutions**
> GETAllMedicalInstitutions200Response gETAllMedicalInstitutions()



### Example

```typescript
import {
    MedicalInstitutionsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MedicalInstitutionsV2Api(configuration);

let latlng: string; //Sorting by location (Latitude and Longitude separated by comma, latitude first). (optional) (default to undefined)
let range: number; //Filter by distance from latlng in meters (range query). Depends on the latlng parameter. (optional) (default to undefined)
let districts: Array<any>; //Filter by Prague city districts (slug) separated by comma. (optional) (default to undefined)
let group: 'pharmacies' | 'health_care'; //Filter by group of types of the medical institution. (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value). (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped. (optional) (default to undefined)
let updatedSince: string; //Filters all results with older updated_at than this parameter (optional) (default to undefined)

const { status, data } = await apiInstance.gETAllMedicalInstitutions(
    latlng,
    range,
    districts,
    group,
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
| **group** | [**&#39;pharmacies&#39; | &#39;health_care&#39;**]**Array<&#39;pharmacies&#39; &#124; &#39;health_care&#39;>** | Filter by group of types of the medical institution. | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value). | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Filters all results with older updated_at than this parameter | (optional) defaults to undefined|


### Return type

**GETAllMedicalInstitutions200Response**

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

# **gETMedicalInstitution**
> MedicalInstitution gETMedicalInstitution()



### Example

```typescript
import {
    MedicalInstitutionsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MedicalInstitutionsV2Api(configuration);

let id: string; //Identifier of the Medical Institution. (default to undefined)

const { status, data } = await apiInstance.gETMedicalInstitution(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the Medical Institution. | defaults to undefined|


### Return type

**MedicalInstitution**

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

