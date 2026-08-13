# EnergeticsEnoConsumptionPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_id** | **string** |  | [optional] [default to undefined]
**id_type** | **string** |  | [optional] [default to undefined]
**commodity** | **string** |  | [optional] [default to undefined]
**is_first_gid** | **boolean** |  | [optional] [default to undefined]
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
