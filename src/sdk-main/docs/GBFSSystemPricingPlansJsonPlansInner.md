# GBFSSystemPricingPlansJsonPlansInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **string** | Identifier of a pricing plan in the system. | [default to undefined]
**system_id** | **string** | Link to system. | [optional] [default to undefined]
**url** | **string** | URL where the customer can learn more about this pricing plan. | [optional] [default to undefined]
**name** | **string** | Name of this pricing plan. | [default to undefined]
**last_updated** | **number** |  | [optional] [default to undefined]
**currency** | **string** | Currency used to pay the fare in ISO 4217 code. | [default to undefined]
**price** | **number** | Fare price. | [default to undefined]
**is_taxable** | **boolean** | Will additional tax be added to the base price? | [default to undefined]
**description** | **string** | Customer-readable description of the pricing plan. | [default to undefined]
**per_km_pricing** | [**Array&lt;GBFSSystemPricingPlansJsonPlansInnerPerKmPricingInner&gt;**](GBFSSystemPricingPlansJsonPlansInnerPerKmPricingInner.md) | Array of segments when the price is a function of distance travelled, displayed in kilometers (added in v2.1-RC2). | [optional] [default to undefined]
**per_min_pricing** | [**Array&lt;GBFSSystemPricingPlansJsonPlansInnerPerMinPricingInner&gt;**](GBFSSystemPricingPlansJsonPlansInnerPerMinPricingInner.md) | Array of segments when the price is a function of time travelled, displayed in minutes (added in v2.1-RC2). | [optional] [default to undefined]
**per_min_reservation_pricing** | [**Array&lt;GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner&gt;**](GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner.md) | Array of segments when the price is a function of time travelled, displayed in minutes (added in v2.1-RC2). | [optional] [default to undefined]
**per_min_parking_pricing** | [**Array&lt;GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner&gt;**](GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner.md) | Array of segments when the price is a function of time travelled, displayed in minutes (added in v2.1-RC2). | [optional] [default to undefined]
**off_station_parking** | [**Array&lt;GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner&gt;**](GBFSSystemPricingPlansJsonPlansInnerPerMinReservationPricingInner.md) | Pokuta za zaparkovani mimo stanici pokud ma provozoval nejake stanice. If this array is not provided, there are no variable prices based on time. | [optional] [default to undefined]
**surge_pricing** | **boolean** | Is there currently an increase in price in response to increased demand in this pricing plan? (added in v2.1-RC2) | [optional] [default to undefined]

## Example

```typescript
import { GBFSSystemPricingPlansJsonPlansInner } from 'golemio-api';

const instance: GBFSSystemPricingPlansJsonPlansInner = {
    plan_id,
    system_id,
    url,
    name,
    last_updated,
    currency,
    price,
    is_taxable,
    description,
    per_km_pricing,
    per_min_pricing,
    per_min_reservation_pricing,
    per_min_parking_pricing,
    off_station_parking,
    surge_pricing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
