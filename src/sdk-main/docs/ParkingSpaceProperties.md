# ParkingSpaceProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier for the parking space. | [default to undefined]
**capacity** | **number** | The capacity of the parking space. | [optional] [default to undefined]
**access_dedicated_to** | **Array&lt;string&gt;** | Array of dedicated access types for the parking space, where empty array means no restriction &#x3D; open for all vehicles: * &#x60;disabled&#x60; - reserved for disabled individuals * &#x60;charging&#x60; - intended for electric vehicle charging * &#x60;parent&#x60; - designated for parents with children * &#x60;delivery&#x60; - exclusively for delivery purposes * &#x60;customer&#x60; -  exclusive for customers * &#x60;resident&#x60; - reserved for residents * &#x60;bus&#x60; - reserved for buses * &#x60;designated&#x60; - specific purpose (e.g., school, embassy) * &#x60;truck&#x60; - reserved for trucks * &#x60;motorcycle&#x60; - for motorcycles only * &#x60;RV&#x60; - reserved for recreational vehicles  | [optional] [default to undefined]
**address** | [**ParkingAddress**](ParkingAddress.md) |  | [optional] [default to undefined]
**centroid** | [**ParkingSpaceFeaturePropertiesCentroid**](ParkingSpaceFeaturePropertiesCentroid.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingSpaceProperties } from 'golemio-api';

const instance: ParkingSpaceProperties = {
    id,
    capacity,
    access_dedicated_to,
    address,
    centroid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
