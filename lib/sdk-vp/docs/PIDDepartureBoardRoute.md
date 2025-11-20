# PIDDepartureBoardRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short_name** | **string** | Route designation used by PID. | [default to undefined]
**type** | **number** | GTFS route type. &#x60;0&#x60; – tram, &#x60;1&#x60; – metro, &#x60;2&#x60; – train, &#x60;3&#x60; – bus, &#x60;4&#x60; – ferry, &#x60;7&#x60; – funicular, &#x60;11&#x60; – trolleybus | [default to undefined]
**is_night** | **boolean** | True if route is a designated night route. | [default to undefined]
**is_regional** | **boolean** | True if route serves areas outside Prague boundaries. | [default to undefined]
**is_substitute_transport** | **boolean** | True if route provides substitute service for another route. | [default to undefined]

## Example

```typescript
import { PIDDepartureBoardRoute } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardRoute = {
    short_name,
    type,
    is_night,
    is_regional,
    is_substitute_transport,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
