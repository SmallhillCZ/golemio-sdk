# EnergeticsEnoConsumptionPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_id** | **string** |  | [optional] [default to undefined]
**id_type** | **string** |  | [optional] [default to undefined]
**commodity** | **string** |  | [optional] [default to undefined]
**is_first_gid** | **boolean** | Whether this building is the primary holder of the point in the mapping. It says nothing about the other side — see &#x60;shared_with&#x60;, which lists the buildings the point is shared with whether this one is primary or not. | [optional] [default to undefined]
**shared_with** | [**Array&lt;EnergeticsEnoConsumptionPointSharedWithInner&gt;**](EnergeticsEnoConsumptionPointSharedWithInner.md) | Other buildings the same consumption point is mapped to. Empty when the point belongs to this building alone, which is the common case. The totals still count the point in full — that is what its meters measured — so this is how a client learns the figure is not exclusive to this building, and which building it is shared with. | [optional] [default to undefined]
**is_active** | **boolean** | Derived from valid_to (null or in the future means the mapping is active) | [optional] [default to undefined]
**link_source** | **string** |  | [optional] [default to undefined]
**valid_from** | **string** |  | [optional] [default to undefined]
**valid_to** | **string** |  | [optional] [default to undefined]
**address** | **string** | Consumption point address from the best available source | [optional] [default to undefined]
**electricity** | [**EnergeticsEnoConsumptionPointElectricity**](EnergeticsEnoConsumptionPointElectricity.md) |  | [optional] [default to undefined]
**gas** | [**EnergeticsEnoConsumptionPointGas**](EnergeticsEnoConsumptionPointGas.md) |  | [optional] [default to undefined]
**heat** | [**EnergeticsEnoConsumptionPointHeat**](EnergeticsEnoConsumptionPointHeat.md) |  | [optional] [default to undefined]
**water** | [**EnergeticsEnoConsumptionPointWater**](EnergeticsEnoConsumptionPointWater.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionPoint } from 'golemio-api';

const instance: EnergeticsEnoConsumptionPoint = {
    place_id,
    id_type,
    commodity,
    is_first_gid,
    shared_with,
    is_active,
    link_source,
    valid_from,
    valid_to,
    address,
    electricity,
    gas,
    heat,
    water,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
