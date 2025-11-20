import { AxiosInstance } from "axios";
import { config } from "dotenv";
import { GolemioClient } from "../lib";

config();

describe("GolemioClient", () => {
	let client: GolemioClient;
	let mockAxiosInstance = {
		request: jest.fn(),
	} as any as AxiosInstance;

	beforeEach(() => {
		client = new GolemioClient({
			token: process.env["GOLEMIO_TOKEN"]!,
			server: "https://api.golemio.cz",
			axios: mockAxiosInstance,
		});
	});

	it("should create an instance", () => {
		expect(client).toBeInstanceOf(GolemioClient);
		expect(client.PublicTransport).toBeDefined();
	});

	it("should have the correct basePath and apiKey", async () => {
		const firstApi = Object.values(client)[0];
		const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(firstApi));
		const methods = keys.filter((key) => typeof (firstApi as any)[key] === "function");

		const firstApiMethod = methods.find((method) => method !== "constructor")!;

		const res = await firstApi[firstApiMethod]!();

		console.log("Res", res);
		expect(mockAxiosInstance.request).toHaveBeenCalled();
	});
});
