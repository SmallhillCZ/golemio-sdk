# PublicGTFSStaticLookupV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2PublicGtfsTripsGtfsTripIdGet**](#v2publicgtfstripsgtfstripidget) | **GET** /v2/public/gtfs/trips/{gtfsTripId} | GET GTFS Trip|

# **v2PublicGtfsTripsGtfsTripIdGet**
> V2PublicGtfsTripsGtfsTripIdGet200Response v2PublicGtfsTripsGtfsTripIdGet()

Get GTFS static trip info by trip ID, including associated stop times (without no stop waypoints) and shapes.  ℹ️ Note: This endpoint is optimized for client applications serving many users simultaneously. It provides streamlined data structures and caching strategies suitable for client-side consumption. Rate limits can be adjusted upon request - contact us if you need higher limits. Note: Despite the \'public\' prefix, this endpoint requires an API key for access control and usage monitoring. 

### Example

```typescript
import {
    PublicGTFSStaticLookupV2Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new PublicGTFSStaticLookupV2Api(configuration);

let gtfsTripId: string; //Filter result by GTFS trip ID. (default to undefined)
let scopes: Array<'info' | 'stop_times' | 'shapes' | 'vehicle_descriptor'>; //Choose which scopes to include in response. (default to undefined)
let acceptEncoding: 'gzip' | 'identity'; //Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the `identity` value can be used to opt out of the default compression). (optional) (default to undefined)

const { status, data } = await apiInstance.v2PublicGtfsTripsGtfsTripIdGet(
    gtfsTripId,
    scopes,
    acceptEncoding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gtfsTripId** | [**string**] | Filter result by GTFS trip ID. | defaults to undefined|
| **scopes** | **Array<&#39;info&#39; &#124; &#39;stop_times&#39; &#124; &#39;shapes&#39; &#124; &#39;vehicle_descriptor&#39;>** | Choose which scopes to include in response. | defaults to undefined|
| **acceptEncoding** | [**&#39;gzip&#39; | &#39;identity&#39;**]**Array<&#39;gzip&#39; &#124; &#39;identity&#39;>** | Indicate the content encoding (usually a compression algorithm) that the client can understand. See [mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) for more details. Note that for this endpoint, if no value is given, gzip compression will be used by default (the &#x60;identity&#x60; value can be used to opt out of the default compression). | (optional) defaults to undefined|


### Return type

**V2PublicGtfsTripsGtfsTripIdGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

