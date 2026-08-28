# EnergeticsEnoGasInstallation

The installation (odběrné místo) the invoice bills, as recorded on it. The PPAS-internal place id is deliberately not exposed; it only scopes `devices` and `prices` server-side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_class** | **string** |  | [optional] [default to undefined]
**measurement_type** | **string** |  | [optional] [default to undefined]
**contract_contract_id** | **string** |  | [optional] [default to undefined]
**contract_move_in_date** | **string** |  | [optional] [default to undefined]
**contract_move_out_date** | **string** |  | [optional] [default to undefined]
**tdd_class** | **string** | Type-day-diagram class used for the allocation of unmetered consumption. | [optional] [default to undefined]
**address_street** | **string** |  | [optional] [default to undefined]
**address_house_number** | **string** |  | [optional] [default to undefined]
**address_house_org_number** | **string** |  | [optional] [default to undefined]
**address_city** | **string** |  | [optional] [default to undefined]
**address_city_part** | **string** |  | [optional] [default to undefined]
**address_post_code** | **string** |  | [optional] [default to undefined]
**address_country** | **string** |  | [optional] [default to undefined]
**address_ruian_id** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoGasInstallation } from 'golemio-api';

const instance: EnergeticsEnoGasInstallation = {
    billing_class,
    measurement_type,
    contract_contract_id,
    contract_move_in_date,
    contract_move_out_date,
    tdd_class,
    address_street,
    address_house_number,
    address_house_org_number,
    address_city,
    address_city_part,
    address_post_code,
    address_country,
    address_ruian_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
