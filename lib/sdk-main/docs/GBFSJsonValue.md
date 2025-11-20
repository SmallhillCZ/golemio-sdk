# GBFSJsonValue

property names pattern ^[a-z]{2,3}(-[A-Z]{2})?$

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeds** | [**Array&lt;GBFSJsonValueFeedsInner&gt;**](GBFSJsonValueFeedsInner.md) | An array of all of the feeds that are published by the auto-discovery file. Each element in the array is an object with the keys below. | [default to undefined]

## Example

```typescript
import { GBFSJsonValue } from 'golemio-api';

const instance: GBFSJsonValue = {
    feeds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
