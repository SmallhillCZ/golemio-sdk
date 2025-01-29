import { SDK } from "./sdk";

export interface GolemioClientOptions {
	token: string;
	server?: string;
}

export class GolemioClient extends SDK {
	constructor(options: GolemioClientOptions) {
		super({
			basePath: options.server || "https://api.golemio.cz",
			apiKey: options.token,
		});
	}
}
