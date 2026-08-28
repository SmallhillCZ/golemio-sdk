# EnergeticsEnoElectricityMetadata

Latest available month of PRE metadata for the EAN, i.e. the technical parameters of the delivery point as PRE last reported them. Null when PRE has never reported it. Every property is always present; `additionalProperties` stays open so an upstream PRE addition is not breaking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**year** | **number** | Year and month of the metadata row these values come from. | [optional] [default to undefined]
**month** | **number** |  | [optional] [default to undefined]
**month_name** | **string** |  | [optional] [default to undefined]
**days_in_stored_month** | **number** |  | [optional] [default to undefined]
**consumption_point** | **string** |  | [optional] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**location_type** | **string** |  | [optional] [default to undefined]
**company_name** | **string** |  | [optional] [default to undefined]
**company_id** | **string** |  | [optional] [default to undefined]
**tarif_type** | **string** |  | [optional] [default to undefined]
**tarif_1t2t** | **string** |  | [optional] [default to undefined]
**phases** | **string** |  | [optional] [default to undefined]
**circuit_breaker** | **string** |  | [optional] [default to undefined]
**type_b_meter** | **string** |  | [optional] [default to undefined]
**meter_replaced** | **string** | Meter number, or a pipe-separated &#x60;date|old|new&#x60; triple for the month the meter was replaced. Free text as PRE supplies it, not a parsed structure. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoElectricityMetadata } from 'golemio-api';

const instance: EnergeticsEnoElectricityMetadata = {
    year,
    month,
    month_name,
    days_in_stored_month,
    consumption_point,
    address,
    location_type,
    company_name,
    company_id,
    tarif_type,
    tarif_1t2t,
    phases,
    circuit_breaker,
    type_b_meter,
    meter_replaced,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
