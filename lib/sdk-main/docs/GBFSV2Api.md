# GBFSV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gETGBFS**](#getgbfs) | **GET** /v2/vehiclesharing/gbfs/{system_id}/gbfs | GET GBFS|
|[**gETGBFSFreeBikeStatus**](#getgbfsfreebikestatus) | **GET** /v2/vehiclesharing/gbfs/{system_id}/free_bike_status | GET GBFS Free Bike Status|
|[**gETGBFSGeofencingZones**](#getgbfsgeofencingzones) | **GET** /v2/vehiclesharing/gbfs/{system_id}/geofencing_zones | GET GBFS Geofencing Zones|
|[**gETGBFSStationInformation**](#getgbfsstationinformation) | **GET** /v2/vehiclesharing/gbfs/{system_id}/station_information | GET GBFS Station Information|
|[**gETGBFSStationStatus**](#getgbfsstationstatus) | **GET** /v2/vehiclesharing/gbfs/{system_id}/station_status | GET GBFS Station Status|
|[**gETGBFSSystemInformation**](#getgbfssysteminformation) | **GET** /v2/vehiclesharing/gbfs/{system_id}/system_information | GET GBFS System Information|
|[**gETGBFSSystemPricingPlans**](#getgbfssystempricingplans) | **GET** /v2/vehiclesharing/gbfs/{system_id}/system_pricing_plans | GET GBFS System Pricing Plans|
|[**gETGBFSSystemsList**](#getgbfssystemslist) | **GET** /v2/vehiclesharing/gbfs/systems_list | GET GBFS Systems List|
|[**gETGBFSVehicleTypes**](#getgbfsvehicletypes) | **GET** /v2/vehiclesharing/gbfs/{system_id}/vehicle_types | GET GBFS Vehicle Types|
|[**gETGBFSVersions**](#getgbfsversions) | **GET** /v2/vehiclesharing/gbfs/{system_id}/gbfs_versions | GET GBFS Versions|
|[**gETSYSTEMregions**](#getsystemregions) | **GET** /v2/vehiclesharing/gbfs/{system_id}/system_regions | GET System regions|

# **gETGBFS**
> GBFSWrapper gETGBFS()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFS(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSFreeBikeStatus**
> GBFSWrapper gETGBFSFreeBikeStatus()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSFreeBikeStatus(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSGeofencingZones**
> GBFSWrapper gETGBFSGeofencingZones()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSGeofencingZones(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSStationInformation**
> GBFSWrapper gETGBFSStationInformation()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSStationInformation(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSStationStatus**
> GBFSWrapper gETGBFSStationStatus()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSStationStatus(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSSystemInformation**
> GBFSWrapper gETGBFSSystemInformation()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSSystemInformation(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSSystemPricingPlans**
> GBFSWrapper gETGBFSSystemPricingPlans()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSSystemPricingPlans(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSSystemsList**
> GBFSSystemsList gETGBFSSystemsList()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

const { status, data } = await apiInstance.gETGBFSSystemsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GBFSSystemsList**

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

# **gETGBFSVehicleTypes**
> GBFSWrapper gETGBFSVehicleTypes()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSVehicleTypes(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETGBFSVersions**
> GBFSWrapper gETGBFSVersions()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETGBFSVersions(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

# **gETSYSTEMregions**
> GBFSWrapper gETSYSTEMregions()



### Example

```typescript
import {
    GBFSV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new GBFSV2Api(configuration);

let systemId: string; //Identifier of the system. (default to undefined)

const { status, data } = await apiInstance.gETSYSTEMregions(
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemId** | [**string**] | Identifier of the system. | defaults to undefined|


### Return type

**GBFSWrapper**

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

