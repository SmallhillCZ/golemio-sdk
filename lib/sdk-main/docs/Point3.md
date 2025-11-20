# Point3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**point_id** | **number** |  | [default to undefined]
**location_id** | **number** |  | [default to undefined]
**point_named** | **string** |  | [optional] [default to undefined]
**location** | **string** |  | [optional] [default to undefined]
**loc_description** | **string** |  | [optional] [default to undefined]
**loc_orientation** | **string** |  | [optional] [default to undefined]
**loc_surface** | **string** |  | [optional] [default to undefined]
**lat** | **number** |  | [optional] [default to undefined]
**lng** | **number** |  | [optional] [default to undefined]
**x_jtsk** | **number** |  | [optional] [default to undefined]
**y_jtsk** | **number** |  | [optional] [default to undefined]
**elevation_m** | **number** |  | [optional] [default to undefined]
**measures** | [**Array&lt;Point3MeasuresInner&gt;**](Point3MeasuresInner.md) |  | [optional] [default to undefined]
**sensor_position** | **string** |  | [optional] [default to undefined]
**sensor_position_detail** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Point3 } from 'golemio-api';

const instance: Point3 = {
    point_id,
    location_id,
    point_named,
    location,
    loc_description,
    loc_orientation,
    loc_surface,
    lat,
    lng,
    x_jtsk,
    y_jtsk,
    elevation_m,
    measures,
    sensor_position,
    sensor_position_detail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
