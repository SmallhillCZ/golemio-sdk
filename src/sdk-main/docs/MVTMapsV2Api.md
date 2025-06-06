# MVTMapsV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2MvtZXYGet**](#v2mvtzxyget) | **GET** /v2/mvt/{z}/{x}/{y} | Get vector tile data for a specific map tile|

# **v2MvtZXYGet**
> File v2MvtZXYGet()

Returns a Mapbox Vector Tile (MVT) containing features from the specified table and geometry column. Useful for rendering geospatial data on interactive maps at the specified zoom, x, and y tile coordinates. 

### Example

```typescript
import {
    MVTMapsV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new MVTMapsV2Api(configuration);

let z: number; //Zoom level of the tile. (default to undefined)
let x: number; //X coordinate of the tile. (default to undefined)
let y: number; //Y coordinate of the tile. (default to undefined)
let table: string; //Fully qualified table name (e.g. `schema.table`) to fetch data from. (default to undefined)
let geometry: string; //Name of the geometry column in the table. (default to undefined)
let attributes: Array<string>; //List of attribute columns to include in the tile features. (default to undefined)
let maxZoom: number; //Maximum zoom level at which data from this table should be rendered. (default to undefined)
let radius: number; //Buffer radius in pixels around the tile to include features near edges. (optional) (default to 15)
let clusterPoint: string; //Name of the column that will be used for clustering, use only if it differs from geometry. (e.g. calculating clustering for polygons can take longer and result in bigger clusters.) (optional) (default to undefined)

const { status, data } = await apiInstance.v2MvtZXYGet(
    z,
    x,
    y,
    table,
    geometry,
    attributes,
    maxZoom,
    radius,
    clusterPoint
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **z** | [**number**] | Zoom level of the tile. | defaults to undefined|
| **x** | [**number**] | X coordinate of the tile. | defaults to undefined|
| **y** | [**number**] | Y coordinate of the tile. | defaults to undefined|
| **table** | [**string**] | Fully qualified table name (e.g. &#x60;schema.table&#x60;) to fetch data from. | defaults to undefined|
| **geometry** | [**string**] | Name of the geometry column in the table. | defaults to undefined|
| **attributes** | **Array&lt;string&gt;** | List of attribute columns to include in the tile features. | defaults to undefined|
| **maxZoom** | [**number**] | Maximum zoom level at which data from this table should be rendered. | defaults to undefined|
| **radius** | [**number**] | Buffer radius in pixels around the tile to include features near edges. | (optional) defaults to 15|
| **clusterPoint** | [**string**] | Name of the column that will be used for clustering, use only if it differs from geometry. (e.g. calculating clustering for polygons can take longer and result in bigger clusters.) | (optional) defaults to undefined|


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
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  * Content-Type - The MIME type of the response. <br>  |
|**401** | Access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

