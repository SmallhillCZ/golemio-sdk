# EnergeticsDeDV2Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**v2EnergeticsDedBuildingsGet**](#v2energeticsdedbuildingsget) | **GET** /v2/energetics/ded/buildings | Search buildings by name, address, GID, EAN, EIC or OM identifier|
|[**v2EnergeticsDedBuildingsGidGet**](#v2energeticsdedbuildingsgidget) | **GET** /v2/energetics/ded/buildings/{gid} | ENO building detail with consumption points (OM) and technical parameters|

# **v2EnergeticsDedBuildingsGet**
> EnergeticsDedBuildingSearch v2EnergeticsDedBuildingsGet()

Suggestion endpoint for the DeD map. A single free-text query `q` is matched against the building name, its addresses, the GID and the identifiers of every consumption point mapped to the building. Matching runs in two tiers. An exact match on an EAN, EIC, OM identifier or GID is returned on its own — fuzzy candidates are dropped entirely and `matched_exactly` is `true`. Note that one identifier can be mapped to several buildings, so an exact match may still return more than one result; the map should zoom automatically only when exactly one result is returned. Otherwise results are ranked by a weighted full-text and trigram score over the name (highest weight), the main address, the secondary addresses and the identifiers. Queries typed without Czech diacritics match normally. Every result carries the building outline as GeoJSON together with its bounding box and centroid, all in WGS84 (EPSG:4326), so the map can zoom to a hit. They are `null` when the building has no usable geometry, signalled by `geometry_source: null`.

### Example

```typescript
import {
    EnergeticsDeDV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsDeDV2Api(configuration);

let q: string; //Search text — name, address, GID, EAN, EIC or OM identifier. (default to undefined)
let limit: number; //Maximum number of suggestions returned. (optional) (default to 10)

const { status, data } = await apiInstance.v2EnergeticsDedBuildingsGet(
    q,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search text — name, address, GID, EAN, EIC or OM identifier. | defaults to undefined|
| **limit** | [**number**] | Maximum number of suggestions returned. | (optional) defaults to 10|


### Return type

**EnergeticsDedBuildingSearch**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**400** | Bad request |  -  |
|**401** | API key is missing or invalid |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2EnergeticsDedBuildingsGidGet**
> EnergeticsEnoBuildingDetail v2EnergeticsDedBuildingsGidGet()

Returns the ENO building (eno_budova) identified by GID together with its addresses and all consumption points mapped to it.

### Example

```typescript
import {
    EnergeticsDeDV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsDeDV2Api(configuration);

let gid: string; // (default to undefined)
let months: number; //Months of consumption history to return, counted back from the last **complete** month. The current, partial month is always excluded: it is mid-accumulation and on a trend chart reads as a collapse rather than as incomplete data. The maximum matches the window the underlying index is built over. (optional) (default to 36)

const { status, data } = await apiInstance.v2EnergeticsDedBuildingsGidGet(
    gid,
    months
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gid** | [**string**] |  | defaults to undefined|
| **months** | [**number**] | Months of consumption history to return, counted back from the last **complete** month. The current, partial month is always excluded: it is mid-accumulation and on a trend chart reads as a collapse rather than as incomplete data. The maximum matches the window the underlying index is built over. | (optional) defaults to 36|


### Return type

**EnergeticsEnoBuildingDetail**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Cache-Control - Cache control directive for caching proxies <br>  |
|**401** | API key is missing or invalid |  -  |
|**404** | Record not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

