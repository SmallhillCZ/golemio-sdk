# V2PidInfotextsGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_from** | **string** | Intended time of infotext publishing in ISO String. | [default to undefined]
**valid_to** | **string** | Intended time of infotext removal in ISO String. If &#x60;null&#x60;, the infotext is valid indefinitely | [default to undefined]
**text** | **string** | Information text in Czech. | [default to undefined]
**text_en** | **string** | Information text in English. | [default to undefined]
**display_type** | **string** | Type of display on board by the intended form of presentation (where applicable). Enumerating &#x60;inline&#x60; (to be presented along with departures, usually in a marquee), &#x60;general&#x60; (to be displayed full screen instead of departures), &#x60;general-alternate&#x60; (full screen alternates with departures). | [default to undefined]
**related_stops** | [**Array&lt;V2PidInfotextsGet200ResponseInnerAllOfRelatedStopsInner&gt;**](V2PidInfotextsGet200ResponseInnerAllOfRelatedStopsInner.md) |  | [optional] [default to undefined]
**related_routes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**vymi_id** | **number** | Legacy VYMI event identifier. | [optional] [default to undefined]
**vymi_id_dtb** | **number** | Legacy VYMI database identifier. | [optional] [default to undefined]
**expiration_date** | **string** |  | [optional] [default to undefined]
**last_updated** | **string** |  | [optional] [default to undefined]
**last_updated_user** | **string** | Legacy ROPID VYMI user. | [optional] [default to undefined]

## Example

```typescript
import { V2PidInfotextsGet200ResponseInner } from 'golemio-public-transport-api';

const instance: V2PidInfotextsGet200ResponseInner = {
    valid_from,
    valid_to,
    text,
    text_en,
    display_type,
    related_stops,
    related_routes,
    vymi_id,
    vymi_id_dtb,
    expiration_date,
    last_updated,
    last_updated_user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
