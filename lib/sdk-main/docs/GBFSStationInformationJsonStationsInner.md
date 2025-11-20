# GBFSStationInformationJsonStationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**station_id** | **string** | Identifier of a station. | [default to undefined]
**name** | **string** | Public name of the station. | [default to undefined]
**short_name** | **string** | Short name or other type of identifier. | [optional] [default to undefined]
**lat** | **number** | The latitude of the station. | [default to undefined]
**lon** | **number** | The longitude fo the station. | [default to undefined]
**address** | **string** | Address where station is located. | [optional] [default to undefined]
**cross_street** | **string** | Cross street or landmark where the station is located. | [optional] [default to undefined]
**region_id** | **string** | Identifier of the region where the station is located. | [optional] [default to undefined]
**post_code** | **string** | Postal code where station is located. | [optional] [default to undefined]
**rental_methods** | **Array&lt;string&gt;** | Payment methods accepted at this station. | [optional] [default to undefined]
**is_virtual_station** | **boolean** | Is this station a location with or without physical infrastructure? (added in v2.1-RC) | [optional] [default to undefined]
**station_area** | [**GBFSStationInformationJsonStationsInnerStationArea**](GBFSStationInformationJsonStationsInnerStationArea.md) |  | [optional] [default to undefined]
**capacity** | **number** | Number of total docking points installed at this station, both available and unavailable. | [optional] [default to undefined]
**vehicle_capacity** | **{ [key: string]: number; }** | An object where each key is a vehicle_type_id and the value is a number presenting the total number of vehicles of this type that can park within the station_area (added in v2.1-RC). | [optional] [default to undefined]
**is_valet_station** | **boolean** | Are valet services provided at this station? (added in v2.1-RC) | [optional] [default to undefined]
**rental_uris** | [**GBFSStationInformationJsonStationsInnerRentalUris**](GBFSStationInformationJsonStationsInnerRentalUris.md) |  | [optional] [default to undefined]
**vehicle_type_capacity** | **{ [key: string]: number; }** | An object where each key is a vehicle_type_id and the value is a number representing the total docking points installed at this station for each vehicle type (added in v2.1-RC). | [optional] [default to undefined]

## Example

```typescript
import { GBFSStationInformationJsonStationsInner } from 'golemio-api';

const instance: GBFSStationInformationJsonStationsInner = {
    station_id,
    name,
    short_name,
    lat,
    lon,
    address,
    cross_street,
    region_id,
    post_code,
    rental_methods,
    is_virtual_station,
    station_area,
    capacity,
    vehicle_capacity,
    is_valet_station,
    rental_uris,
    vehicle_type_capacity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
