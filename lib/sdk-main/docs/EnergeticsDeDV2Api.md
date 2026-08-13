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

Returns the ENO building (eno_budova) identified by GID together with its addresses and all consumption points mapped to it. Commodity-specific data is nested under the `electricity`/`gas`/`heat`/`water` keys of each consumption point; only the key matching the `commodity` field is present, the others are omitted entirely. Consumption points come from two independent sources: the energobroker mapping (EAN/EIC, enriched with PRE metadata and PPAS invoices) and Porsenna e-manazer devices (`link_source: porsenna`) — heat and water meters, plus any EAN/EIC the mapping lacks. An OM known to both sources is returned once, with the Porsenna data nested as a `porsenna` sub-block (device, sub-meters, yearly consumption) inside its commodity block. Buildings tracked in Porsenna also carry an `energy_management` summary. The endpoint returns whatever data exists for the GID: if there is any building record, address, or consumption point, the response is 200 with the missing parts as `null` or empty arrays (e.g. `building: null` when only consumption points or addresses are known). 404 is returned only when no source holds any data for the GID.

### Example

```typescript
import {
    EnergeticsDeDV2Api,
    Configuration
} from 'golemio-api';

const configuration = new Configuration();
const apiInstance = new EnergeticsDeDV2Api(configuration);

let gid: string; // (default to undefined)

const { status, data } = await apiInstance.v2EnergeticsDedBuildingsGidGet(
    gid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gid** | [**string**] |  | defaults to undefined|


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

