import { SDK } from "./sdk";

export type GolemioEnvironment = "main" | "test";

export const GolemioServers: Record<GolemioEnvironment, string> = {
	["main"]: "https://api.golemio.cz",
	["test"]: "https://rabin.golemio.cz",
};

export interface GolemioClientOptions {
	environment?: GolemioEnvironment;
}

export class GolemioClient extends SDK {
	constructor(token: string, options: GolemioClientOptions = {}) {
		super({
			basePath: GolemioServers[options.environment || "main"],
			apiKey: token,
		});
	}
}
