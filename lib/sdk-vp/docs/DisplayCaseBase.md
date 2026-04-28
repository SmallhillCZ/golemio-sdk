# DisplayCaseBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**stop_name** | **string** | Name of the public transport stop where the display case is installed. May be null if not yet associated with a stop. | [optional] [default to undefined]
**stop_direction** | **string** | Direction indicator for the stop (e.g. towards a terminal station). May be null. | [optional] [default to undefined]
**platform_code** | **string** | Platform or stand code at the stop where the display case is located. May be null. | [optional] [default to undefined]
**stop_type** | **Array&lt;string&gt;** | List of transport mode types served by the associated stop (e.g. bus, tram, metro). May be null if stop type is unknown. | [optional] [default to undefined]
**thmp_stop_id** | **string** | Stop identifier from the THMP (Prague Transport Information System). May be null if not linked to a THMP stop. | [optional] [default to undefined]
**shelter_type** | **string** | Type classification of the shelter or enclosure housing the display case. May be null. | [optional] [default to undefined]
**shelter_id** | **string** | Identifier of the shelter unit that contains this display case. May be null if not housed in a tracked shelter. | [optional] [default to undefined]
**qr_code** | **string** | QR code value or URL associated with the display case for passenger information access. May be null. | [optional] [default to undefined]
**supplier** | **string** | Name of the company or contractor that supplied or installed the display case. May be null. | [optional] [default to undefined]
**comments** | **string** | Free-text operational comments or notes about the display case entered by field staff. May be null. | [optional] [default to undefined]
**asw_node_id** | **string** | Node identifier from the ASW (Automated Stop Management) system linking the display case to a stop node. May be null. | [optional] [default to undefined]
**asw_stop_id** | **string** | Stop identifier from the ASW (Automated Stop Management) system. May be null. | [optional] [default to undefined]
**location_description** | **string** | Human-readable description of the exact physical placement of the display case at the stop. May be null. | [optional] [default to undefined]
**street_name** | **string** | Name of the street or square where the display case is located. May be null. | [optional] [default to undefined]
**ropid_element_id** | **string** | Element identifier assigned by ROPID (Prague Integrated Transport organizer). May be null if not yet registered with ROPID. | [optional] [default to undefined]
**price_without_vat** | **number** | Acquisition or installation price of the display case excluding VAT, in Czech crowns (CZK). May be null if cost data is unavailable. | [optional] [default to undefined]
**serial_number** | **string** | Manufacturer serial number of the display case unit. Used for asset tracking and warranty management. May be null. | [optional] [default to undefined]
**thmp_element_number** | **string** | Element number assigned by the THMP (Prague Transport Information System). May be null if not registered in THMP. | [optional] [default to undefined]
**cleaning_frequency** | **string** | Scheduled cleaning frequency for the display case (e.g. daily, weekly, monthly). May be null if no cleaning schedule is set. | [optional] [default to undefined]

## Example

```typescript
import { DisplayCaseBase } from 'golemio-public-transport-api';

const instance: DisplayCaseBase = {
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
    stop_name,
    stop_direction,
    platform_code,
    stop_type,
    thmp_stop_id,
    shelter_type,
    shelter_id,
    qr_code,
    supplier,
    comments,
    asw_node_id,
    asw_stop_id,
    location_description,
    street_name,
    ropid_element_id,
    price_without_vat,
    serial_number,
    thmp_element_number,
    cleaning_frequency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
