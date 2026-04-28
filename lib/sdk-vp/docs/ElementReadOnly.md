# ElementReadOnly

Server-set fields that clients can only read. All properties carry readOnly: true. Composed via allOf into each typed element schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Server-generated UUID primary key. Immutable after creation. | [optional] [readonly] [default to undefined]
**source_created_at** | **string** | Timestamp when the record was first created in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]
**source_updated_at** | **string** | Timestamp of the most recent update in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]
**source_published_at** | **string** | Timestamp when the record was published in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ElementReadOnly } from 'golemio-public-transport-api';

const instance: ElementReadOnly = {
    id,
    source_created_at,
    source_updated_at,
    source_published_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
