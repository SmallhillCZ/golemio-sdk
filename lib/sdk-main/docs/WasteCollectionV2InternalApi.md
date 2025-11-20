# WasteCollectionV2InternalApi

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWCMeasurements**](#getwcmeasurements) | **GET** /v2/sortedwastestations/measurements | GET All Waste Collection Measurements|
|[**getWCPickDays**](#getwcpickdays) | **GET** /v2/sortedwastestations/pickdays | GET Waste Collection Pick Days|
|[**getWCPicks**](#getwcpicks) | **GET** /v2/sortedwastestations/picks | GET All Waste Collection Picks|

# **getWCMeasurements**
> Array<WasteCollectionMeasurement> getWCMeasurements()



### Example

```typescript
import {
    WasteCollectionV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new WasteCollectionV2InternalApi(configuration);

let containerId: string; //Lists only measurements from container with this ID (now is used KSNKO ID as main identifier) (default to undefined)
let ksnkoId: string; //Lists only measurements from container with this KSNKO ID (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value) (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime (optional) (default to undefined)

const { status, data } = await apiInstance.getWCMeasurements(
    containerId,
    ksnkoId,
    limit,
    offset,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **containerId** | [**string**] | Lists only measurements from container with this ID (now is used KSNKO ID as main identifier) | defaults to undefined|
| **ksnkoId** | [**string**] | Lists only measurements from container with this KSNKO ID | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value) | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime | (optional) defaults to undefined|


### Return type

**Array<WasteCollectionMeasurement>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWCPickDays**
> Array<WasteCollectionPickDay> getWCPickDays()

Provides information about planed pick dates for specific container.

### Example

```typescript
import {
    WasteCollectionV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new WasteCollectionV2InternalApi(configuration);

let sensoneoCode: string; //Lists only pick days for container with this ID (now is used KSNKO ID as main identifier) (optional) (default to undefined)
let ksnkoId: string; //Lists only pick days for container with this KSNKO ID (optional) (default to undefined)

const { status, data } = await apiInstance.getWCPickDays(
    sensoneoCode,
    ksnkoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sensoneoCode** | [**string**] | Lists only pick days for container with this ID (now is used KSNKO ID as main identifier) | (optional) defaults to undefined|
| **ksnkoId** | [**string**] | Lists only pick days for container with this KSNKO ID | (optional) defaults to undefined|


### Return type

**Array<WasteCollectionPickDay>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWCPicks**
> Array<WasteCollectionPick> getWCPicks()



### Example

```typescript
import {
    WasteCollectionV2InternalApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new WasteCollectionV2InternalApi(configuration);

let containerId: string; //Lists only measurements from container with this ID (now is used KSNKO ID as main identifier) (default to undefined)
let ksnkoId: string; //Lists only measurements from container with this KSNKO ID (optional) (default to undefined)
let limit: number; //Limits number of retrieved items. The maximum is 10000 (default value) (optional) (default to undefined)
let offset: number; //Number of the first items that are skipped (optional) (default to undefined)
let from: string; //Date in ISO8601, limits data measured from this datetime (optional) (default to undefined)
let to: string; //Date in ISO8601, limits data measured up until this datetime (optional) (default to undefined)

const { status, data } = await apiInstance.getWCPicks(
    containerId,
    ksnkoId,
    limit,
    offset,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **containerId** | [**string**] | Lists only measurements from container with this ID (now is used KSNKO ID as main identifier) | defaults to undefined|
| **ksnkoId** | [**string**] | Lists only measurements from container with this KSNKO ID | (optional) defaults to undefined|
| **limit** | [**number**] | Limits number of retrieved items. The maximum is 10000 (default value) | (optional) defaults to undefined|
| **offset** | [**number**] | Number of the first items that are skipped | (optional) defaults to undefined|
| **from** | [**string**] | Date in ISO8601, limits data measured from this datetime | (optional) defaults to undefined|
| **to** | [**string**] | Date in ISO8601, limits data measured up until this datetime | (optional) defaults to undefined|


### Return type

**Array<WasteCollectionPick>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

