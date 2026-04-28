# Obelisk

Fully composed obelisk schema for list responses. Combines all writable obelisk-specific fields (ObeliskBase, which itself includes ElementBase) with server-set read-only fields (ElementReadOnly). The id and source_updated_at fields are required on every record returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Server-generated UUID primary key. Immutable after creation. | [readonly] [default to undefined]
**source_created_at** | **string** | Timestamp when the record was first created in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]
**source_updated_at** | **string** | Timestamp of the most recent update in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [readonly] [default to undefined]
**source_published_at** | **string** | Timestamp when the record was published in the upstream CMS (Strapi). ISO 8601 UTC. Server-set, not writable by clients. | [optional] [readonly] [default to undefined]
**document_id** | **string** | Unique document identifier sourced from the upstream CMS (Strapi). Used as the stable external reference for deduplication. | [default to undefined]
**uid** | **string** | Optional external UUID assigned to the physical element by the field operations team. May be null for elements not yet assigned. | [optional] [default to undefined]
**kind** | **string** | Discriminator field identifying the element type. Determines which typed schema applies (Totem, InformationPanel, DisplayCase, Obelisk, Signpost). | [default to undefined]
**name** | **string** | Human-readable name of the element. May be null. | [optional] [default to undefined]
**state** | **string** | Lifecycle state of the element (e.g. PLANNED, IN_PROGRESS, REALIZED). Sourced from CMS. May be null. | [optional] [default to undefined]
**owner** | **string** | Organization or entity that owns the element. May be null. | [optional] [default to undefined]
**manager** | **string** | Organization or entity that manages the element. May be null. | [optional] [default to undefined]
**city_district** | **string** | Prague city district where the element is physically located. May be null. | [optional] [default to undefined]
**lat** | **number** | WGS-84 latitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**lon** | **number** | WGS-84 longitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**map_link** | **string** | URL to an external map view showing the element location. May be null. | [optional] [default to undefined]
**planned_year_of_realization** | **string** | Year in which the element is planned to be realized or installed. Stored as string to accommodate partial or estimated values. May be null. | [optional] [default to undefined]
**note** | **string** | Free-text operational note attached to the element by field staff. May be null. | [optional] [default to undefined]
**handover** | **boolean** | Indicates whether the element has been handed over to the maintenance team. May be null if handover status is unknown. | [optional] [default to undefined]
**handover_date** | **string** | Date on which the element was formally handed over to the maintenance team. ISO 8601 date. May be null. | [optional] [default to undefined]
**street_name** | **string** | Name of the street where the obelisk is physically located. May be null if the street name is not recorded. | [optional] [default to undefined]
**location_description** | **string** | Free-text description of the obelisk\&#39;s exact placement within its location. May be null. | [optional] [default to undefined]
**land_parcel_number** | **string** | Cadastral land parcel number identifying the plot on which the obelisk stands. May be null. | [optional] [default to undefined]
**land_owner** | **string** | Name of the entity that owns the land parcel where the obelisk is installed. May be null. | [optional] [default to undefined]
**priority** | **string** | Operational priority assigned to the obelisk for maintenance scheduling purposes. May be null. | [optional] [default to undefined]
**asset_registered** | **boolean** | Indicates whether the obelisk is formally registered in the asset management system. May be null if the status is unknown. | [optional] [default to undefined]
**asset_number** | **string** | Asset inventory number assigned when the obelisk is registered in the asset management system. May be null. | [optional] [default to undefined]
**insurance** | **boolean** | Indicates whether the obelisk is covered by an insurance policy. May be null if insurance status is not recorded. | [optional] [default to undefined]
**insurance_state** | **string** | Current state of the insurance policy for the obelisk (e.g. ACTIVE, EXPIRED). May be null. | [optional] [default to undefined]
**handed_over_to_ozp** | **boolean** | Indicates whether the obelisk has been formally handed over to the OZP (Odbor zelene a prostredi) department for ongoing management. May be null. | [optional] [default to undefined]
**comments** | **string** | Free-text comments or operational notes associated with the obelisk. May be null. | [optional] [default to undefined]
**ropid_element_id** | **string** | Identifier assigned to this element within the ROPID external registry. May be null for elements not yet registered with ROPID. | [optional] [default to undefined]
**construction_type** | **string** | Type of construction used for the obelisk (e.g. STEEL_FRAME, CONCRETE, COMPOSITE). May be null. | [optional] [default to undefined]
**price_without_vat** | **number** | Procurement or installation cost of the obelisk excluding VAT, expressed in the local currency (CZK). May be null if the cost is not recorded. | [optional] [default to undefined]

## Example

```typescript
import { Obelisk } from 'golemio-public-transport-api';

const instance: Obelisk = {
    id,
    source_created_at,
    source_updated_at,
    source_published_at,
    document_id,
    uid,
    kind,
    name,
    state,
    owner,
    manager,
    city_district,
    lat,
    lon,
    map_link,
    planned_year_of_realization,
    note,
    handover,
    handover_date,
    street_name,
    location_description,
    land_parcel_number,
    land_owner,
    priority,
    asset_registered,
    asset_number,
    insurance,
    insurance_state,
    handed_over_to_ozp,
    comments,
    ropid_element_id,
    construction_type,
    price_without_vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
