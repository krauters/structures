import { describe, it, expect } from '@jest/globals'
import { PackageJson, Person, Repository, Bugs, PublishConfig, Dependencies } from '../src/package-json'

describe('PackageJson Structure', () => {
	it('should define correct structure for author field', () => {
		const author: Person = {
			name: 'John Doe',
			email: 'johndoe@example.com',
			url: 'https://example.com',
		}
		expect(author).toEqual({
			name: 'John Doe',
			email: 'johndoe@example.com',
			url: 'https://example.com',
		})
	})

	it('should define correct structure for repository field', () => {
		const repository: Repository = {
			type: 'git',
			url: 'https://github.com/example/repo.git',
		}
		expect(repository).toEqual({
			type: 'git',
			url: 'https://github.com/example/repo.git',
		})
	})

	it('should define correct structure for bugs field', () => {
		const bugs: Bugs = {
			url: 'https://github.com/example/repo/issues',
			email: 'support@example.com',
		}
		expect(bugs).toEqual({
			url: 'https://github.com/example/repo/issues',
			email: 'support@example.com',
		})
	})

	it('should define correct structure for publishConfig field', () => {
		const publishConfig: PublishConfig = {
			access: 'public',
			registry: 'https://registry.npmjs.org/',
		}
		expect(publishConfig).toEqual({
			access: 'public',
			registry: 'https://registry.npmjs.org/',
		})
	})

	it('should define correct structure for dependencies', () => {
		const dependencies: Dependencies = {
			typescript: '^4.0.0',
			jest: '^26.6.0',
		}
		expect(dependencies).toEqual({
			typescript: '^4.0.0',
			jest: '^26.6.0',
		})
	})

	it('should define correct structure for PackageJsonType', () => {
		const packageJson: PackageJson = {
			name: '@example/package',
			version: '1.0.0',
			description: 'An example package',
			author: {
				name: 'John Doe',
				email: 'johndoe@example.com',
			},
			repository: {
				type: 'git',
				url: 'https://github.com/example/repo.git',
			},
			license: 'MIT',
			scripts: {
				build: 'tsc',
				test: 'jest',
			},
			dependencies: {
				typescript: '^4.0.0',
			},
			devDependencies: {
				jest: '^26.6.0',
			},
		}
		expect(packageJson).toEqual({
			name: '@example/package',
			version: '1.0.0',
			description: 'An example package',
			author: {
				name: 'John Doe',
				email: 'johndoe@example.com',
			},
			repository: {
				type: 'git',
				url: 'https://github.com/example/repo.git',
			},
			license: 'MIT',
			scripts: {
				build: 'tsc',
				test: 'jest',
			},
			dependencies: {
				typescript: '^4.0.0',
			},
			devDependencies: {
				jest: '^26.6.0',
			},
		})
	})
})
