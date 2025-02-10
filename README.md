# Golemio SDK

[![NPM Version](https://img.shields.io/npm/v/golemio-sdk)](https://www.npmjs.com/package/golemio-sdk) [![GitHub License](https://img.shields.io/github/license/smallhillcz/golemio-sdk)](./LICENSE)

This is an **unofficial** TypeScript/Javascript SDK for the [API of the Prague data platform Golemio](https://api.golemio.cz/docs/openapi/).

The SDK is automatically generated from the OpenAPI specification at [https://api.golemio.cz/docs/static/output-gateway/openapi.json](https://api.golemio.cz/docs/static/output-gateway/openapi.json) using [OpenAPI Generator](https://openapi-generator.tech/) and [axios](https://axios-http.com/). Checks are made at midnight.

## Installation

```bash
npm install golemio-sdk
```

## Usage

```typescript
import { GolemioClient } from "golemio-sdk";

const client = new GolemioClient({
	token: "YOUR GOLEMIO TOKEN",
});

const wasteContainers = await client.WasteCollectionV2Api.getWCStations();
// wasteContainers is of type AxiosResponse<GolemioApi.WasteCollectionStationFeatureCollection>

const departureBoard = await client.PublicTransport.PIDDepartureBoardsV2Api.v2PidDepartureboardsGet({
	airCondition: true,
	names: "Karlovo náměstí",
});
// departureBoard is of type AxiosResponse<GolemioPublicTransportApi.PIDDepartureBoard>
```

## Options

| Option   |          | Description                                                                                               |
| -------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `token`  | required | The Golemio API token. Generate your token at [api.golemio.cz/api-keys](https://api.golemio.cz/api-keys). |
| `server` |          | The API server to use. Default value is `https://api.golemio.cz`.                                         |
