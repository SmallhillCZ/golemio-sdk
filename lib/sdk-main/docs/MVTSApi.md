# MVTSApi

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2VehiclesharingMvtsFreeVehicleStatusGet**](#v2vehiclesharingmvtsfreevehiclestatusget) | **GET** /v2/vehiclesharing/mvts/free_vehicle_status | GET MVTS geojson of free vehicle status|

# **v2VehiclesharingMvtsFreeVehicleStatusGet**
> File v2VehiclesharingMvtsFreeVehicleStatusGet()

Mapbox vector tileset of free vehicles for sharing; Provides result as json or mapbox-vector-tile depending on accept header.

### Example

```typescript
import {
    MVTSApi,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MVTSApi(configuration);

let tileX: number; //Tile\'s column (default to undefined)
let tileY: number; //Tile\'s row (default to undefined)
let zoom: number; //Tile\'s zoom level (default to undefined)
let systemId: Array<string>; //Identifier for the vehicle share system. (optional) (default to undefined)

const { status, data } = await apiInstance.v2VehiclesharingMvtsFreeVehicleStatusGet(
    tileX,
    tileY,
    zoom,
    systemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tileX** | [**number**] | Tile\&#39;s column | defaults to undefined|
| **tileY** | [**number**] | Tile\&#39;s row | defaults to undefined|
| **zoom** | [**number**] | Tile\&#39;s zoom level | defaults to undefined|
| **systemId** | **Array&lt;string&gt;** | Identifier for the vehicle share system. | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.mapbox-vector-tile, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**401** | API key is missing or invalid |  * WWW_Authenticate -  <br>  |
|**406** | Accept Header should be application/vnd.mapbox-vector-tile or application/json. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

