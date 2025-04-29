# VehiclepositionTrip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agency_name** | [**VehiclepositionTripAgencyName**](VehiclepositionTripAgencyName.md) |  | [optional] [default to undefined]
**cis** | [**VehiclepositionTripCis**](VehiclepositionTripCis.md) |  | [optional] [default to undefined]
**sequence_id** | **number** | Identifier of trip sequence operated by a single vehicle | [default to undefined]
**origin_route_name** | **string** | Name of the route from which the vehicle originates | [default to undefined]
**gtfs** | [**VehiclepositionTripGtfs**](VehiclepositionTripGtfs.md) |  | [optional] [default to undefined]
**start_timestamp** | **string** | Timestamp of arrival time in first stop (UTC) | [default to undefined]
**vehicle_type** | [**VehiclepositionVehicleType**](VehiclepositionVehicleType.md) |  | [optional] [default to undefined]
**vehicle_registration_number** | **number** | Four-digit identifier of the vehicle in the system | [default to undefined]
**wheelchair_accessible** | **boolean** | Determines whether the vehicle has wheelchair access | [default to undefined]
**air_conditioned** | **boolean** | Determines whether the vehicle has air conditioning. If &#x60;null&#x60;, the information is not available or the vehicle\&#39;s registration number is not known. | [default to undefined]
**usb_chargers** | **boolean** | Determines whether the vehicle has USB chargers. If &#x60;null&#x60;, the information is not available or the vehicle\&#39;s registration number is not known. | [optional] [default to undefined]

## Example

```typescript
import { VehiclepositionTrip } from 'golemio-public-transport-api';

const instance: VehiclepositionTrip = {
    agency_name,
    cis,
    sequence_id,
    origin_route_name,
    gtfs,
    start_timestamp,
    vehicle_type,
    vehicle_registration_number,
    wheelchair_accessible,
    air_conditioned,
    usb_chargers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
