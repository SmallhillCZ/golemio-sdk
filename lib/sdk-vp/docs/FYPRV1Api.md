# FYPRV1Api

All URIs are relative to *https://api.golemio.cz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFyprElementDetail**](#getfyprelementdetail) | **GET** /v1/fypr/elements/{kind}/{id} | GET FYPR element by kind and id|
|[**getFyprMetadata**](#getfyprmetadata) | **GET** /v1/fypr/metadata | GET FYPR metadata and field translations per kind|
|[**listDisplayCases**](#listdisplaycases) | **GET** /v1/fypr/elements/display-cases | GET Display Cases|
|[**listFyprElementsKinds**](#listfyprelementskinds) | **GET** /v1/fypr/elements | GET FYPR links to elements kinds|
|[**listInformationPanels**](#listinformationpanels) | **GET** /v1/fypr/elements/information-panels | GET Information Panels|
|[**listObelisks**](#listobelisks) | **GET** /v1/fypr/elements/obelisks | GET Obelisks|
|[**listSignposts**](#listsignposts) | **GET** /v1/fypr/elements/signposts | GET Signposts|
|[**listTotems**](#listtotems) | **GET** /v1/fypr/elements/totems | GET Totems|

# **getFyprElementDetail**
> GetFyprElementDetail200Response getFyprElementDetail()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

let kind: 'display-cases' | 'information-panels' | 'obelisks' | 'signposts' | 'totems'; //Kind of the FYPR element. (default to undefined)
let id: string; //UUID of the element to retrieve. (default to undefined)

const { status, data } = await apiInstance.getFyprElementDetail(
    kind,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kind** | [**&#39;display-cases&#39; | &#39;information-panels&#39; | &#39;obelisks&#39; | &#39;signposts&#39; | &#39;totems&#39;**]**Array<&#39;display-cases&#39; &#124; &#39;information-panels&#39; &#124; &#39;obelisks&#39; &#124; &#39;signposts&#39; &#124; &#39;totems&#39;>** | Kind of the FYPR element. | defaults to undefined|
| **id** | [**string**] | UUID of the element to retrieve. | defaults to undefined|


### Return type

**GetFyprElementDetail200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Last-Modified -  <br>  * Cache-Control -  <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**404** | Not found - the requested resource does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFyprMetadata**
> GetFyprMetadata200Response getFyprMetadata()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

const { status, data } = await apiInstance.getFyprMetadata();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetFyprMetadata200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDisplayCases**
> Array<DisplayCase> listDisplayCases()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

let limit: number; //Limits number of retrieved items. (optional) (default to 100)
let offset: number; //Offset for pagination. The default value is 0. (optional) (default to 0)

const { status, data } = await apiInstance.listDisplayCases(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to 100|
| **offset** | [**number**] | Offset for pagination. The default value is 0. | (optional) defaults to 0|


### Return type

**Array<DisplayCase>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Last-Modified -  <br>  * Cache-Control -  <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**413** | Content too large - limit query parameter exceeds maximum (10000) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFyprElementsKinds**
> ListFyprElementsKinds200Response listFyprElementsKinds()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

const { status, data } = await apiInstance.listFyprElementsKinds();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListFyprElementsKinds200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listInformationPanels**
> Array<InformationPanel> listInformationPanels()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

let limit: number; //Limits number of retrieved items. (optional) (default to 100)
let offset: number; //Offset for pagination. The default value is 0. (optional) (default to 0)
let jis: boolean; //Filter by JIS graphic flag. When true, returns only JIS panels; when false, returns only non-JIS panels. Panels with a null jis_graphic value are excluded when this parameter is provided. Omit to return all panels regardless of JIS status. (optional) (default to undefined)

const { status, data } = await apiInstance.listInformationPanels(
    limit,
    offset,
    jis
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to 100|
| **offset** | [**number**] | Offset for pagination. The default value is 0. | (optional) defaults to 0|
| **jis** | [**boolean**] | Filter by JIS graphic flag. When true, returns only JIS panels; when false, returns only non-JIS panels. Panels with a null jis_graphic value are excluded when this parameter is provided. Omit to return all panels regardless of JIS status. | (optional) defaults to undefined|


### Return type

**Array<InformationPanel>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Last-Modified -  <br>  * Cache-Control -  <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**413** | Content too large - limit query parameter exceeds maximum (10000) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listObelisks**
> Array<Obelisk> listObelisks()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

let limit: number; //Limits number of retrieved items. (optional) (default to 100)
let offset: number; //Offset for pagination. The default value is 0. (optional) (default to 0)

const { status, data } = await apiInstance.listObelisks(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to 100|
| **offset** | [**number**] | Offset for pagination. The default value is 0. | (optional) defaults to 0|


### Return type

**Array<Obelisk>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Last-Modified -  <br>  * Cache-Control -  <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**413** | Content too large - limit query parameter exceeds maximum (10000) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSignposts**
> Array<Signpost> listSignposts()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

let limit: number; //Limits number of retrieved items. (optional) (default to 100)
let offset: number; //Offset for pagination. The default value is 0. (optional) (default to 0)

const { status, data } = await apiInstance.listSignposts(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to 100|
| **offset** | [**number**] | Offset for pagination. The default value is 0. | (optional) defaults to 0|


### Return type

**Array<Signpost>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Last-Modified -  <br>  * Cache-Control -  <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**413** | Content too large - limit query parameter exceeds maximum (10000) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTotems**
> Array<Totem> listTotems()


### Example

```typescript
import {
    FYPRV1Api,
    Configuration
} from 'golemio-public-transport-api';

const configuration = new Configuration();
const apiInstance = new FYPRV1Api(configuration);

let limit: number; //Limits number of retrieved items. (optional) (default to 100)
let offset: number; //Offset for pagination. The default value is 0. (optional) (default to 0)

const { status, data } = await apiInstance.listTotems(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limits number of retrieved items. | (optional) defaults to 100|
| **offset** | [**number**] | Offset for pagination. The default value is 0. | (optional) defaults to 0|


### Return type

**Array<Totem>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Last-Modified -  <br>  * Cache-Control -  <br>  |
|**400** | Bad request - invalid query parameters |  -  |
|**413** | Content too large - limit query parameter exceeds maximum (10000) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

