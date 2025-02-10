import { GolemioApi } from "./sdk-main";
import { GolemioPublicTransportApi } from "./sdk-vp";

export type { GolemioApi } from "./sdk-main";
export type { GolemioPublicTransportApi } from "./sdk-vp";

export interface GolemioClientOptions {
	token: string;
	server?: string;
}

export class GolemioClient extends GolemioApi {
	PublicTransport: GolemioPublicTransportApi;

	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});

		this.PublicTransport = new GolemioPublicTransportApi({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}
