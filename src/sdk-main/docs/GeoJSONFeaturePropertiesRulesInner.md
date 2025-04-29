# GeoJSONFeaturePropertiesRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **Array&lt;string&gt;** | Array of vehicle type IDs for which these restrictions apply. | [optional] [default to undefined]
**ride_allowed** | **boolean** | Is the undocked ride allowed to stat and end in this zone? | [default to undefined]
**ride_through_allowed** | **boolean** | Is the ride allowed to travel through this zone? | [default to undefined]
**parking_allowed** | **boolean** | Povoleni parkovani v ramci jedné jízdy. | [optional] [default to undefined]
**maximum_speed_kph** | **number** | What is the maximum speed allowed, in kilometers per hour? | [optional] [default to undefined]
**price** | **number** | Cena za vrácení v polygonu, resp. parkování za minutu v polygonu. | [optional] [default to undefined]

## Example

```typescript
import { GeoJSONFeaturePropertiesRulesInner } from 'golemio-api';

const instance: GeoJSONFeaturePropertiesRulesInner = {
    system_id,
    ride_allowed,
    ride_through_allowed,
    parking_allowed,
    maximum_speed_kph,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
