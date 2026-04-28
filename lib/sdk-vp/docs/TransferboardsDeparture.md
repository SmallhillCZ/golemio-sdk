# TransferboardsDeparture


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departure_timestamp** | [**TransferboardsDepartureDepartureTimestamp**](TransferboardsDepartureDepartureTimestamp.md) |  | [default to undefined]
**route** | [**TransferboardsDepartureRoute**](TransferboardsDepartureRoute.md) |  | [default to undefined]
**stop** | [**V3PidTransferboardsGet200ResponseDeparturesInnerStop**](V3PidTransferboardsGet200ResponseDeparturesInnerStop.md) |  | [default to undefined]
**trip** | [**TransferboardsDepartureTrip**](TransferboardsDepartureTrip.md) |  | [default to undefined]
**icons** | **Array&lt;string&gt;** |  | [default to undefined]
**substitution_text** | [**TransferboardsDepartureSubstitutionText**](TransferboardsDepartureSubstitutionText.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransferboardsDeparture } from 'golemio-public-transport-api';

const instance: TransferboardsDeparture = {
    departure_timestamp,
    route,
    stop,
    trip,
    icons,
    substitution_text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
