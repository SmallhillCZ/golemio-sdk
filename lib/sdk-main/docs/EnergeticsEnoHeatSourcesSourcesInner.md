# EnergeticsEnoHeatSourcesSourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_name** | **string** | Free-text appliance name from the snapshot. | [optional] [default to undefined]
**note** | **string** | Note from the snapshot, e.g. where the figure came from. | [optional] [default to undefined]
**rated_output_kw** | **number** | Rated output in kW. &#x60;0&#x60; means the snapshot states no output | [optional] [default to undefined]
**fuel_code** | **number** | Fuel/energy-source code | [optional] [default to undefined]
**is_monitored** | **boolean** | Monitoring flag from the source system. Its exact meaning in the source is not documented in the snapshot. | [optional] [default to undefined]
**appliance_type** | **string** | Appliance type from the source system. Every row of the current snapshot is &#x60;boiler&#x60;. | [optional] [default to undefined]
**operating_since** | **string** | Date the appliance has been in operation since. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoHeatSourcesSourcesInner } from 'golemio-api';

const instance: EnergeticsEnoHeatSourcesSourcesInner = {
    appliance_name,
    note,
    rated_output_kw,
    fuel_code,
    is_monitored,
    appliance_type,
    operating_since,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
