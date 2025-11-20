# PotholesProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | incident unique ID according to Waze | [optional] [default to undefined]
**city** | **string** | city | [optional] [default to undefined]
**street** | **string** | street | [optional] [default to undefined]
**road_type** | **string** | road type/class/level | [optional] [default to undefined]
**event_direction** | **number** | driving angle in degrees according to the reporting driver; 0-359, 0&#x3D;North | [optional] [default to undefined]
**published_at** | **string** | uuid publication date and time from Waze | [optional] [default to undefined]
**valid_from** | **string** | recording date and time to database | [optional] [default to undefined]
**last_reported_at** | **string** | date and time of last received incident to database | [optional] [default to undefined]
**reliability** | **number** | reliability score based on other user’s reactions (\&#39;Thumbs up\&#39; etc.) and the level of the reporter; range 0-10, 10&#x3D;max. | [optional] [default to undefined]
**confidence** | **number** | confidence score based only on other user’s reactions (\&#39;Thumbs up\&#39; etc.); range 0-10, 10&#x3D;max. | [optional] [default to undefined]
**duplicate_count** | **number** | how many of one, two or more identical incidents with the same \&#39;uuid\&#39; was dumped; 0&#x3D;origin, 1&#x3D;the first duplicate appeared | [optional] [default to undefined]

## Example

```typescript
import { PotholesProperties } from 'golemio-api';

const instance: PotholesProperties = {
    uuid,
    city,
    street,
    road_type,
    event_direction,
    published_at,
    valid_from,
    last_reported_at,
    reliability,
    confidence,
    duplicate_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
