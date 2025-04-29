# PIDDepartureBoard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stops** | [**Array&lt;PIDDepartureBoardStop&gt;**](PIDDepartureBoardStop.md) | List of stops in the requested set and their properties. | [optional] [default to undefined]
**departures** | [**Array&lt;PIDDepartureBoardDeparture&gt;**](PIDDepartureBoardDeparture.md) | List of departures. | [optional] [default to undefined]
**infotexts** | [**Array&lt;PIDDepartureBoardInfotextsInner&gt;**](PIDDepartureBoardInfotextsInner.md) | List of active infotexts for selected stops. | [optional] [default to undefined]

## Example

```typescript
import { PIDDepartureBoard } from 'golemio-public-transport-api';

const instance: PIDDepartureBoard = {
    stops,
    departures,
    infotexts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
