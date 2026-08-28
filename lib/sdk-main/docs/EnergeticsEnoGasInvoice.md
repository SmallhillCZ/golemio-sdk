# EnergeticsEnoGasInvoice

PPAS invoice header. The distribution and commercial invoices carry the same properties; only their sources differ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**preceding_id** | **string** | The invoice this one supersedes, when the two are linked upstream. | [optional] [default to undefined]
**customer_id** | **string** |  | [optional] [default to undefined]
**customer_company_id** | **string** |  | [optional] [default to undefined]
**customer_name** | **string** |  | [optional] [default to undefined]
**customer_contract_account_id** | **string** |  | [optional] [default to undefined]
**customer_address_street** | **string** |  | [optional] [default to undefined]
**customer_address_house_number** | **string** |  | [optional] [default to undefined]
**customer_address_house_org_number** | **string** |  | [optional] [default to undefined]
**customer_address_city** | **string** |  | [optional] [default to undefined]
**customer_address_city_part** | **string** |  | [optional] [default to undefined]
**customer_address_post_code** | **string** |  | [optional] [default to undefined]
**customer_address_country** | **string** |  | [optional] [default to undefined]
**customer_address_ruian_id** | **number** |  | [optional] [default to undefined]
**facts_doc_date** | **string** |  | [optional] [default to undefined]
**facts_net_date** | **string** |  | [optional] [default to undefined]
**facts_billing_transaction** | **string** |  | [optional] [default to undefined]
**facts_to_pay_amount** | **number** |  | [optional] [default to undefined]
**facts_currency** | **string** |  | [optional] [default to undefined]
**facts_price_brutto** | **number** |  | [optional] [default to undefined]
**is_canceled** | **boolean** | Always false here — canceled invoices are not served. | [optional] [default to undefined]
**canceled_reason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoGasInvoice } from 'golemio-api';

const instance: EnergeticsEnoGasInvoice = {
    id,
    preceding_id,
    customer_id,
    customer_company_id,
    customer_name,
    customer_contract_account_id,
    customer_address_street,
    customer_address_house_number,
    customer_address_house_org_number,
    customer_address_city,
    customer_address_city_part,
    customer_address_post_code,
    customer_address_country,
    customer_address_ruian_id,
    facts_doc_date,
    facts_net_date,
    facts_billing_transaction,
    facts_to_pay_amount,
    facts_currency,
    facts_price_brutto,
    is_canceled,
    canceled_reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
