
export enum EnvTypes {
	PROD = 'production',
	DEV = 'development',
	TEST = 'test',
	REBUILD = 'rebuild'
}

export type ConfigEnvironment = {
	mode: EnvTypes
}

export type WebpackOptionPaths = {
	bundlePath:string;
	entryPath:string;
	srcPath:string;
	aliasPath:string;
}

export type WebpackOptions = {
	mode:EnvTypes;
	excludedRegex:RegExp;
	paths: WebpackOptionPaths;
	zipName:string;
}
