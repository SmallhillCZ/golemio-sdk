# GTFSTransfer

See GTFS Schedule Reference for [transfers.txt](https://gtfs.org/documentation/schedule/reference/#transferstxt).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_stop_id** | **string** |  | [default to undefined]
**to_stop_id** | **string** |  | [default to undefined]
**from_trip_id** | **string** |  | [default to undefined]
**to_trip_id** | **string** |  | [default to undefined]
**transfer_type** | **number** | 0 &#x3D; recommended transfer point, 1 &#x3D; timed transfer point, 2 &#x3D; transfer requires &#x60;min_transfer_time&#x60;, 3 &#x3D; transfer not possible, 4 &#x3D; in-seat transfer, 5 &#x3D; in-seat transfer not allowed | [default to undefined]
**min_transfer_time** | **number** | Minimum time in seconds needed for the transfer. | [default to undefined]
**max_waiting_time** | **number** | Maximum time in seconds the connecting vehicle waits. A PID extension of GTFS. | [default to undefined]

## Example

```typescript
import { GTFSTransfer } from 'golemio-public-transport-api';

const instance: GTFSTransfer = {
    from_stop_id,
    to_stop_id,
    from_trip_id,
    to_trip_id,
    transfer_type,
    min_transfer_time,
    max_waiting_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
