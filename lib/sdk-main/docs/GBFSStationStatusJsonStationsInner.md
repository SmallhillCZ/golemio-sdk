# GBFSStationStatusJsonStationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**station_id** | **string** | Identifier of a station. | [default to undefined]
**num_bikes_available** | **number** | Number of vehicles of any type physically available for rental at the station. | [default to undefined]
**vehicle_types_available** | [**Array&lt;GBFSStationStatusJsonStationsInnerVehicleTypesAvailableInner&gt;**](GBFSStationStatusJsonStationsInnerVehicleTypesAvailableInner.md) | Array of objects displaying the total number of each vehicle type at the station (added in v2.1-RC). | [optional] [default to undefined]
**num_bikes_disabled** | **number** | Number of disabled vehicles of any type at the station. | [optional] [default to undefined]
**num_docks_available** | **number** | Number of functional docks physically at the station. | [optional] [default to undefined]
**num_docks_disabled** | **number** | Number of empty but disabled docks at the station. | [optional] [default to undefined]
**is_installed** | **boolean** | Is the station currently on the street? | [default to undefined]
**is_renting** | **boolean** | Is the station currently renting vehicles? | [default to undefined]
**is_returning** | **boolean** | Is the station accepting vehicle returns? | [default to undefined]
**last_reported** | **number** | The last time this station reported its status to the operator\&#39;s backend in POSIX time. | [default to undefined]
**vehicle_docks_available** | [**Array&lt;GBFSStationStatusJsonStationsInnerVehicleDocksAvailableInner&gt;**](GBFSStationStatusJsonStationsInnerVehicleDocksAvailableInner.md) | Object displaying available docks by vehicle type (added in v2.1-RC). | [optional] [default to undefined]

## Example

```typescript
import { GBFSStationStatusJsonStationsInner } from 'golemio-api';

const instance: GBFSStationStatusJsonStationsInner = {
    station_id,
    num_bikes_available,
    vehicle_types_available,
    num_bikes_disabled,
    num_docks_available,
    num_docks_disabled,
    is_installed,
    is_renting,
    is_returning,
    last_reported,
    vehicle_docks_available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
