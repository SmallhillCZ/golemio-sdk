# GBFSStationStatusJsonStationsInnerVehicleDocksAvailableInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vehicle_type_ids** | **Array&lt;string&gt;** | An array of strings where each string represents a vehicle_type_id that is able to use a particular type of dock at the station (added in v2.1-RC). | [default to undefined]
**count** | **number** | A number representing the total number of available docks for the defined vehicle type (added in v2.1-RC). | [default to undefined]

## Example

```typescript
import { GBFSStationStatusJsonStationsInnerVehicleDocksAvailableInner } from 'golemio-api';

const instance: GBFSStationStatusJsonStationsInnerVehicleDocksAvailableInner = {
    vehicle_type_ids,
    count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
