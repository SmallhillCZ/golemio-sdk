# TransferboardsDepartureTrip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headsign** | **string** | If more than one trips are available, the first one is taken. Trips are grouped by direction_id. | [default to undefined]
**id** | **string** | If more than one trips are available, the first one is taken. Trips are grouped by direction_id. | [default to undefined]
**is_wheelchair_accessible** | **boolean** | True if the vehicle being used on this trip is wheelchair accessible. Metro trips are deemed accessible if the station is accessible. | [default to undefined]
**is_guaranteed_transfer** | **boolean** | True if the transfer is marked as guaranteed and it can be waiting for current arriving trip identified in request query parameters. | [default to undefined]

## Example

```typescript
import { TransferboardsDepartureTrip } from 'golemio-public-transport-api';

const instance: TransferboardsDepartureTrip = {
    headsign,
    id,
    is_wheelchair_accessible,
    is_guaranteed_transfer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
