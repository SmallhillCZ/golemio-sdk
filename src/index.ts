import { SDK as MainSDK } from "./sdk-main";
import { SDK as PublicTransportSDK } from "./sdk-vp";

export interface GolemioClientOptions {
	token: string;
	server?: string;
}

export class GolemioClient extends MainSDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}

export class GolemioPublicTransportClient extends PublicTransportSDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}
