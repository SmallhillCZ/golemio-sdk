import * as MainApi from "./sdk-main";
import * as PublicTransportApi from "./sdk-vp";

export * as MainApi from "./sdk-main";
export * as PublicTransportApi from "./sdk-vp";

export interface GolemioClientOptions {
	token: string;
	server?: string;
}

export class GolemioClient extends MainApi.SDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}

export class GolemioPublicTransportClient extends PublicTransportApi.SDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}
