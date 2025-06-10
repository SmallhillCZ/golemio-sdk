# V3PidInfotextsGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_from** | **string** | Intended time of infotext publishing in ISO String. | [default to undefined]
**valid_to** | **string** | Intended time of infotext removal in ISO String. If &#x60;null&#x60;, the infotext is valid indefinitely | [default to undefined]
**text** | **string** | Information text in Czech. | [default to undefined]
**text_en** | **string** | Information text in English. | [default to undefined]
**display_type** | **string** | Type of display on board by the intended form of presentation (where applicable). Enumerating &#x60;inline&#x60; (to be presented along with departures, usually in a marquee), &#x60;general&#x60; (to be displayed full screen instead of departures). | [default to undefined]
**priority** | **string** | Priority of the infotext. If multiple infotexts are active for the same stop, the ones with higher priority will be displayed. Mapped from the VYMI (JIS) system\&#39;s severity level in the following way: - \&quot;INFO\&quot; -&gt; \&quot;low\&quot; - \&quot;WARNING\&quot; -&gt; \&quot;normal\&quot; - \&quot;SEVERE\&quot; -&gt; \&quot;high\&quot;  | [default to undefined]
**related_stops** | [**Array&lt;V3PidInfotextsGet200ResponseInnerAllOfRelatedStopsInner&gt;**](V3PidInfotextsGet200ResponseInnerAllOfRelatedStopsInner.md) |  | [default to undefined]
**id** | **string** | VYMI (JIS) Infotexts identifier. | [default to undefined]

## Example

```typescript
import { V3PidInfotextsGet200ResponseInner } from 'golemio-public-transport-api';

const instance: V3PidInfotextsGet200ResponseInner = {
    valid_from,
    valid_to,
    text,
    text_en,
    display_type,
    priority,
    related_stops,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
