import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    extensionsToTreatAsEsm: [".ts"],
    verbose: true,
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "node",
    transform: {
        "^.+\\.(ts|tsx)?$": ["ts-jest", { useESM: true }],
    },
    setupFiles: ["./setup.jest.ts"],
    coveragePathIgnorePatterns: ["/node_modules"],
    testPathIgnorePatterns: ["./dist"],
};

export default config;