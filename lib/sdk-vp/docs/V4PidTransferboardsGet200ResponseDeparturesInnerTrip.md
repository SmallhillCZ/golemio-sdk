# V4PidTransferboardsGet200ResponseDeparturesInnerTrip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headsign** | **string** | If more then one trips are available, the first one is taken. Trips are grouped by direction_id. | [default to undefined]
**id** | **string** | If more then one trips are available, the first one is taken. Trips are grouped by direction_id. | [default to undefined]
**is_wheelchair_accessible** | **boolean** | True if the vehicle being used on this trip is wheelchair accessible. Metro trips are deemed accessible if the station is accessible. | [default to undefined]

## Example

```typescript
import { V4PidTransferboardsGet200ResponseDeparturesInnerTrip } from 'golemio-public-transport-api';

const instance: V4PidTransferboardsGet200ResponseDeparturesInnerTrip = {
    headsign,
    id,
    is_wheelchair_accessible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
