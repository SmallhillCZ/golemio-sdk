import * as GolemioApi from "./sdk-main";
import * as GolemioPublicTransportApi from "./sdk-vp";

export * as GolemioApi from "./sdk-main";
export * as GolemioPublicTransportApi from "./sdk-vp";

export interface GolemioClientOptions {
	token: string;
	server?: string;
}

export class GolemioClient extends GolemioApi.SDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}

export class GolemioPublicTransportClient extends GolemioPublicTransportApi.SDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}
