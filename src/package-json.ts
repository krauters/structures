export interface PackageJsonType {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
	author?: Person | string
	bin?: Bin | string
	browser?: Browser | string
	bugs?: Bugs | string
	bundledDependencies?: string[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	config?: Record<string, any>
	contributors?: Person[] | string[]
	cpu?: string[]
	dependencies?: Dependencies
	description?: string
	devDependencies?: Dependencies
	directories?: Directories
	engines?: Engines
	files?: string[]
	homepage?: string
	keywords?: string[]
	license?: string
	main?: string
	man?: string | string[]
	module?: string
	name: string
	optionalDependencies?: Dependencies
	os?: string[]
	peerDependencies?: Dependencies
	private?: boolean
	publishConfig?: PublishConfig
	repository?: Repository | string
	scripts?: Scripts
	type?: 'commonjs' | 'module'
	types?: string
	version: string
}

export interface Bugs {
	email?: string
	url?: string
}

export interface Person {
	email?: string
	name?: string
	url?: string
}

export interface Repository {
	type: string
	url: string
}

export type Scripts = Record<string, string>

export type Dependencies = Record<string, string>

export type Browser = Record<string, string>

export type Bin = Record<string, string>

export interface Directories {
	bin?: string
	doc?: string
	example?: string
	lib?: string
	man?: string
}

export interface Engines {
	[engine: string]: string | undefined
	node?: string
	npm?: string
	yarn?: string
}

export interface PublishConfig {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
	access?: 'public' | 'restricted'
	registry?: string
}
