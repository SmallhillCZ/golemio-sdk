import { AxiosInstance } from "axios";
import { GolemioApi } from "./sdk-main";
import { GolemioPublicTransportApi } from "./sdk-vp";

export type { GolemioApi } from "./sdk-main";
export type { GolemioPublicTransportApi } from "./sdk-vp";

export interface GolemioClientOptions {
	token: string;
	server?: string;
	axios?: AxiosInstance;
}

export class GolemioClient extends GolemioApi {
	PublicTransport: GolemioPublicTransportApi;

	constructor(options: GolemioClientOptions) {
		super(
			{
				basePath: options.server || "https://api.golemio.cz",
				apiKey: options.token,
			},
			options.axios
		);

		this.PublicTransport = new GolemioPublicTransportApi(
			{
				basePath: options.server || "https://api.golemio.cz",
				apiKey: options.token,
			},
			options.axios
		);
	}
}
