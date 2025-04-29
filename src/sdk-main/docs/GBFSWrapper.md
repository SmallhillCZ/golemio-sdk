# GBFSWrapper


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **number** | Last time the data in the feed was updated in POSIX time. | [default to undefined]
**ttl** | **number** | Number of seconds before the data in the feed will be updated again (0 if the data should always be refreshed). | [default to undefined]
**version** | **string** | GBFS version number to which the feed conforms, according to the versioning framework (added in v1.1). | [default to undefined]
**data** | **object** | Response data in the form of name:value pairs. | [default to undefined]

## Example

```typescript
import { GBFSWrapper } from 'golemio-api';

const instance: GBFSWrapper = {
    last_updated,
    ttl,
    version,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
