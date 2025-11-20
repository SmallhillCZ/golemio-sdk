# ParkingSpaceFeatureProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**source** | **string** |  | [default to undefined]
**source_id** | **string** |  | [default to undefined]
**data_provider** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**date_modified** | **string** |  | [default to undefined]
**address_formatted** | **string** |  | [optional] [default to undefined]
**address** | [**ParkingSpaceFeaturePropertiesAddress**](ParkingSpaceFeaturePropertiesAddress.md) |  | [optional] [default to undefined]
**area_served** | **string** |  | [optional] [default to undefined]
**web_app_payment_url** | **string** |  | [optional] [default to undefined]
**android_app_payment_url** | **string** |  | [optional] [default to undefined]
**ios_app_payment_url** | **string** |  | [optional] [default to undefined]
**total_spot_number** | **number** |  | [optional] [default to undefined]
**tariff_id** | **string** |  | [optional] [default to undefined]
**valid_from** | **string** |  | [optional] [default to undefined]
**valid_to** | **string** |  | [optional] [default to undefined]
**parking_type** | **string** |  | [default to undefined]
**zone_type** | **string** |  | [optional] [default to undefined]
**centroid** | [**ParkingSpacePropertiesCentroid**](ParkingSpacePropertiesCentroid.md) |  | [default to undefined]
**available_spots_last_updated** | **number** |  | [default to undefined]
**available_spots_number** | **number** |  | [default to undefined]

## Example

```typescript
import { ParkingSpaceFeatureProperties } from 'golemio-api';

const instance: ParkingSpaceFeatureProperties = {
    id,
    source,
    source_id,
    data_provider,
    name,
    category,
    date_modified,
    address_formatted,
    address,
    area_served,
    web_app_payment_url,
    android_app_payment_url,
    ios_app_payment_url,
    total_spot_number,
    tariff_id,
    valid_from,
    valid_to,
    parking_type,
    zone_type,
    centroid,
    available_spots_last_updated,
    available_spots_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
