# ParkingProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier for the parking location. | [default to undefined]
**primary_source** | **string** | The primary source of the parking location. Assigned by us. | [default to undefined]
**primary_source_id** | **string** | The ID defined by the primary source. As in the source data. | [optional] [default to undefined]
**name** | **string** | The name of the parking location. | [optional] [default to undefined]
**valid_from** | **string** | The start date and time when the parking location is opened from. Or date of implementation. | [default to undefined]
**centroid** | [**ParkingPropertiesCentroid**](ParkingPropertiesCentroid.md) |  | [default to undefined]
**last_updated_at** | **string** | The date and time when info about the parking location was last checked and updated. | [default to undefined]
**last_modified_at_source** | **string** | The date and time when the parking location was last modified at the source. In case data source provides it. | [optional] [default to undefined]
**security** | **boolean** | Whether the parking location has security. | [optional] [default to undefined]
**dimensions** | [**ParkingDimension**](ParkingDimension.md) |  | [optional] [default to undefined]
**parking_prohibitions** | [**ParkingProhibitions**](ParkingProhibitions.md) |  | [optional] [default to undefined]
**covered** | **boolean** |  | [optional] [default to undefined]
**capacity** | **number** | The capacity of the parking location. | [optional] [default to undefined]
**parking_policy** | **string** | The parking policy of the parking location. * &#x60;park_and_ride&#x60; - parking for transit users * &#x60;kiss_and_ride&#x60; - short-term passenger drop-off * &#x60;commercial&#x60; - paid parking for public * &#x60;zone&#x60; - parking restricted by area (e.g., blue, violet, orange) * &#x60;park_sharing&#x60; - shared parking spaces * &#x60;customer_only&#x60; - exclusive for customers  | [optional] [default to undefined]
**contact** | [**ParkingPropertiesContact**](ParkingPropertiesContact.md) |  | [optional] [default to undefined]
**filter** | **string** | Specific marking of parking space (blue zone, A zone etc.). | [optional] [default to undefined]
**parking_type** | **string** | The parking type of the parking location. * &#x60;on_street&#x60; - parking on the street * &#x60;underground&#x60; - subterranean parking facility * &#x60;multi_storey&#x60; - multi-level parking garage * &#x60;surface&#x60; - open-air parking lot * &#x60;rooftop&#x60; - parking on building roof * &#x60;other&#x60; - other type of parking  | [optional] [default to undefined]
**space** | [**ParkingPropertiesSpace**](ParkingPropertiesSpace.md) |  | [optional] [default to undefined]
**entrances** | [**ParkingPropertiesEntrances**](ParkingPropertiesEntrances.md) |  | [optional] [default to undefined]
**payment** | [**ParkingPayment**](ParkingPayment.md) |  | [optional] [default to undefined]
**reservation** | [**ParkingReservation**](ParkingReservation.md) |  | [optional] [default to undefined]
**tariff** | **string** | UUID of related parking tariff. | [optional] [default to undefined]
**opening_hours** | [**Array&lt;OpeningHours&gt;**](OpeningHours.md) | Array is sorted by valid_from. | [optional] [default to undefined]
**has_occupancy_info** | **boolean** | True if average occupancy info calculated from measurements is available | [optional] [default to undefined]

## Example

```typescript
import { ParkingProperties } from 'golemio-api';

const instance: ParkingProperties = {
    id,
    primary_source,
    primary_source_id,
    name,
    valid_from,
    centroid,
    last_updated_at,
    last_modified_at_source,
    security,
    dimensions,
    parking_prohibitions,
    covered,
    capacity,
    parking_policy,
    contact,
    filter,
    parking_type,
    space,
    entrances,
    payment,
    reservation,
    tariff,
    opening_hours,
    has_occupancy_info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
