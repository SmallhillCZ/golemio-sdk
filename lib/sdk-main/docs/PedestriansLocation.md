# PedestriansLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Location id | [default to undefined]
**location_name** | **string** |  | [default to undefined]
**lat** | **string** |  | [default to undefined]
**lng** | **string** |  | [default to undefined]
**address** | **string** |  | [default to undefined]
**city_district** | **string** |  | [default to undefined]
**tech** | **string** |  | [default to undefined]
**map_url** | **string** |  | [default to undefined]
**photo_url** | **string** |  | [default to undefined]
**measurement_start** | **string** |  | [default to undefined]
**measurement_end** | **string** |  | [optional] [default to undefined]
**directions** | [**Array&lt;PedestriansDirection&gt;**](PedestriansDirection.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PedestriansLocation } from 'golemio-api';

const instance: PedestriansLocation = {
    id,
    location_name,
    lat,
    lng,
    address,
    city_district,
    tech,
    map_url,
    photo_url,
    measurement_start,
    measurement_end,
    directions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
