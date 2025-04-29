# GeoJSONFeatureProperties

Describing travel allowances and limitations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Public name of the geofencing zone. | [optional] [default to undefined]
**start** | **number** | Start time of the geofencing zone in POSIX time. | [optional] [default to undefined]
**end** | **number** | End time of the geofencing zone in POSIX time. | [optional] [default to undefined]
**priority** | **number** | Priorita: 0 je nejnižší priorita. Vyšší priorita přepisuje nižší prioritu. | [optional] [default to undefined]
**rules** | [**Array&lt;GeoJSONFeaturePropertiesRulesInner&gt;**](GeoJSONFeaturePropertiesRulesInner.md) | Array that contains one object per rule. | [optional] [default to undefined]

## Example

```typescript
import { GeoJSONFeatureProperties } from 'golemio-api';

const instance: GeoJSONFeatureProperties = {
    name,
    start,
    end,
    priority,
    rules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
