# PIDDepartureBoardInfotextsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_from** | **string** | Intended time of infotext publishing in ISO String. | [default to undefined]
**valid_to** | **string** | Intended time of infotext removal in ISO String. If &#x60;null&#x60;, the infotext is valid indefinitely | [default to undefined]
**text** | **string** | Information text in Czech. | [default to undefined]
**text_en** | **string** | Information text in English. | [default to undefined]
**display_type** | **string** | Type of display on board by the intended form of presentation (where applicable). Enumerating &#x60;inline&#x60; (to be presented along with departures, usually in a marquee), &#x60;general&#x60; (to be displayed full screen instead of departures). | [default to undefined]
**related_stops** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { PIDDepartureBoardInfotextsInner } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardInfotextsInner = {
    valid_from,
    valid_to,
    text,
    text_en,
    display_type,
    related_stops,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
