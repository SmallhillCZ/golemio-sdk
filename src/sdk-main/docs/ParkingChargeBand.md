# ParkingChargeBand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_source** | **string** | The primary source of the charge band. | [default to undefined]
**primary_source_id** | **string** | The ID defines by the primary source. | [optional] [default to undefined]
**maximum_duration** | **number** | Maximum duration for charging (in seconds). | [optional] [default to undefined]
**valid_from** | **string** | Valid from date. | [default to undefined]
**valid_to** | **string** | Valid to date. | [optional] [default to undefined]
**last_updated_at** | **string** | The date and time when info about the tariff category was last checked and updated. | [optional] [default to undefined]
**last_modified_at_source** | **string** | The date and time when the tariff category was last modified at the source. | [optional] [default to undefined]
**charges** | [**Array&lt;ParkingCharge&gt;**](ParkingCharge.md) | Array of Charge objects. Items are sorted by charge_order_index. | [optional] [default to undefined]
**free_of_charge** | **boolean** | Free charging, no need to calculate the price from Charges. | [optional] [default to undefined]
**payment_methods** | **Array&lt;string&gt;** | Payment methods for charging. * &#x60;card_online&#x60; - payment through an online card transaction (e.g., on website) * &#x60;card_offline&#x60; - payment using a card (using a parking machine, terminal etc.) * &#x60;litacka&#x60; - payment via a PID Lítačka mobile app * &#x60;cash&#x60; - payment with physical cash * &#x60;coins_only&#x60; - payment using coins only * &#x60;mobile_app&#x60; - payment through a dedicated mobile app (no PID Lítačka) * &#x60;sms_payment&#x60; - payment made via SMS * &#x60;apple_pay&#x60; - payment using Apple Pay * &#x60;google_pay&#x60; - payment using Google Pay  | [optional] [default to undefined]
**payment_mode** | **string** | Whether payment occurs prior to parking or after. | [optional] [default to undefined]
**url** | **string** | URL for the charge band. | [optional] [default to undefined]

## Example

```typescript
import { ParkingChargeBand } from 'golemio-api';

const instance: ParkingChargeBand = {
    primary_source,
    primary_source_id,
    maximum_duration,
    valid_from,
    valid_to,
    last_updated_at,
    last_modified_at_source,
    charges,
    free_of_charge,
    payment_methods,
    payment_mode,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
