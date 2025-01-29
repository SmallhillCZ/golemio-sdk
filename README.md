# Golemio SDK

This is an **unofficial** TypeScript/Javascript SDK for the [API of the Prague data platform Golemio](https://api.golemio.cz/docs/openapi/). It is automatically generated from the OpenAPI specification at [https://api.golemio.cz/docs/static/output-gateway/openapi.json](https://api.golemio.cz/docs/static/output-gateway/openapi.json) using [OpenAPI Generator](https://openapi-generator.tech/).

## Installation

```bash
npm install golemio-sdk
```

## Usage

```typescript
import { GolemioClient } from 'golemio-sdk';

const client = new GolemioClient("YOUR GOLEMIO TOKEN", { environment: "main" });

// airQualityStations is type FeaturePoint[] (as defined in the Golemio API specification)
const airQualityStations = await client.AirQualityV2Api.v2AirqualitystationsGet().then((res) => res.data);

// wasteContainers is type WasteCollectionStationFeatureCollection (as defined in the Golemio API specification)
const wasteContainers = await client.WasteCollectionV2Api.getWCStations().then((res) => res.data);
```

## Options

| Option | Description |
| --- | --- |
|`environment`| The environment to use. Possible values are `main` (uses [api.golemio.cz](https://api.golemio.cz)) and `test` (uses [rabin.golemio.cz](https://rabin.golemio.cz)).<br><br>Default is `main`.|