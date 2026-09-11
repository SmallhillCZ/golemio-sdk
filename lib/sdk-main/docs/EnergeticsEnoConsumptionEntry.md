# EnergeticsEnoConsumptionEntry

One period of one series. `value: null` means the source has no data for that period - missing periods are always null, never an error and never a zero.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **string** | &#x60;YYYY-MM&#x60; for monthly entries, &#x60;YYYY&#x60; for yearly ones. | [optional] [default to undefined]
**value** | **number** |  | [optional] [default to undefined]
**value_kwh** | **number** | Comparable energy. For gas this is derived (normometers_nm3 * combustion_heat) and is null whenever the conversion inputs are missing; | [optional] [default to undefined]
**coverage_count** | **number** | Days of the period carrying data. | [optional] [default to undefined]
**expected_count** | **number** | Days in the period, so a partial period is recognisable as one. | [optional] [default to undefined]
**is_estimated** | **boolean** | True when the value was allocated pro rata from a billing period spanning more than one month, rather than read for the period itself. | [optional] [default to undefined]
**points_total** | **number** | Consumption points that contributed this period at all. &#x60;0&#x60; for a period no point reported — never null, so a gap is a number a client can compare. | [optional] [default to undefined]
**points_with_data** | **number** | Of those, how many carried a value. A shortfall against the series\&#39; &#x60;points&#x60; is how a client learns a building summary is missing an OM for this period rather than being genuinely lower — at point grain the counts are 1/1 or 0/0. | [optional] [default to undefined]
**invoice_ids** | **Array&lt;string&gt;** | Billing documents this period was allocated from, sorted. Empty for metered readings, for Porsenna and for periods with no value. An allocated month is a number the platform computed rather than one anyone read, so naming the invoice is what makes it auditable. At building level a period can be allocated from several invoices (one per point), and a yearly entry usually is; at point grain a month is normally one. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoConsumptionEntry } from 'golemio-api';

const instance: EnergeticsEnoConsumptionEntry = {
    period,
    value,
    value_kwh,
    coverage_count,
    expected_count,
    is_estimated,
    points_total,
    points_with_data,
    invoice_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
