import { SDK } from "./sdk";

export enum GolemioEnvironment {
    MAIN = 'main',
    TEST = 'test'
}

export const GolemioServers: Record<GolemioEnvironment, string> = {
    [GolemioEnvironment.MAIN]: 'https://api.golemio.cz',
    [GolemioEnvironment.TEST]: 'https://rabin.golemio.cz'
}

export interface GolemioClientOptions {
    environment?: GolemioEnvironment;
}

export class GolemioClient extends SDK {
    constructor(token: string,options: GolemioClientOptions = {}) {
        super({
            basePath: GolemioServers[options.environment || GolemioEnvironment.MAIN],
            apiKey: token
        });
    }

}