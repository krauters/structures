import { describe, it, expect } from '@jest/globals'
import { Env, HttpStatus, HttpMethod, HttpContentType, FileExtension, FileEncoding, LanguageCode, Status, ResponseType } from '../src/index'

describe('Enums', () => {

	it('should define all values for Env enum', () => {
		expect(Env).toEqual({
			Alpha: 'Alpha',
			Beta: 'Beta',
			Development: 'Development',
			Gamma: 'Gamma',
			Pipeline: 'Pipeline',
			Production: 'Production',
			Unknown: 'Unknown',
		})
	})

	it('should define all values for HttpStatus enum', () => {
		const filteredHttpStatus = Object.fromEntries(
			Object.entries(HttpStatus).filter(([key]) => isNaN(Number(key)))
		)
		expect(filteredHttpStatus).toEqual({
			Accepted: 202,
			BadGateway: 502,
			BadRequest: 400,
			Conflict: 409,
			Created: 201,
			Forbidden: 403,
			GatewayTimeout: 504,
			Gone: 410,
			HttpVersionNotSupported: 505,
			InternalServerError: 500,
			MethodNotAllowed: 405,
			NoContent: 204,
			NotAcceptable: 406,
			NotFound: 404,
			NotImplemented: 501,
			Ok: 200,
			PartialContent: 206,
			PaymentRequired: 402,
			ResetContent: 205,
			ServiceUnavailable: 503,
			TooManyRequests: 429,
			Unauthorized: 401,
			UnavailableForLegalReasons: 451,
		})
	})

	it('should define all values for HttpMethod enum', () => {
		expect(HttpMethod).toEqual({
			GET: 'GET',
			POST: 'POST',
			PUT: 'PUT',
			DELETE: 'DELETE',
			PATCH: 'PATCH',
			OPTIONS: 'OPTIONS',
			HEAD: 'HEAD',
		})
	})

	it('should define all values for HttpContentType enum', () => {
		expect(HttpContentType).toEqual({
			Json: 'application/json',
			Xml: 'application/xml',
			FormUrlEncoded: 'application/x-www-form-urlencoded',
			MultipartFormData: 'multipart/form-data',
			TextPlain: 'text/plain',
			Html: 'text/html',
			Css: 'text/css',
			Javascript: 'application/javascript',
		})
	})

	it('should define all values for FileExtension enum', () => {
		expect(FileExtension).toEqual({
			CSV: 'csv',
			JSON: 'json',
			XML: 'xml',
			PDF: 'pdf',
			DOCX: 'docx',
			PNG: 'png',
			JPG: 'jpg',
			TXT: 'txt',
			HTML: 'html',
			CSS: 'css',
			JS: 'js',
			TS: 'ts',
			MP3: 'mp3',
			MP4: 'mp4',
			MKV: 'mkv',
			ZIP: 'zip',
			RAR: 'rar',
			EXE: 'exe',
			DLL: 'dll',
		})
	})

	it('should define all values for FileEncoding enum', () => {
		expect(FileEncoding).toEqual({
			UTF8: 'utf-8',
			ASCII: 'ascii',
			Base64: 'base64',
			Hex: 'hex',
			Binary: 'binary',
			UCS2: 'ucs2',
			UTF16LE: 'utf16le',
			UTF32: 'utf32',
			ISO88591: 'iso-8859-1',
			ISO88592: 'iso-8859-2',
			Windows1252: 'windows-1252',
		})
	})

	it('should define all values for LanguageCode enum', () => {
		expect(LanguageCode).toEqual({
			English: 'en',
			Spanish: 'es',
			French: 'fr',
			German: 'de',
			Chinese: 'zh',
			Hindi: 'hi',
		})
	})

	it('should define all values for Status enum', () => {
		expect(Status).toEqual({
			Active: 'Active',
			Inactive: 'Inactive',
			Pending: 'Pending',
			Completed: 'Completed',
			Failed: 'Failed',
			Canceled: 'Canceled',
			Suspended: 'Suspended',
		})
	})

	it('should define all values for ResponseType enum', () => {
		expect(ResponseType).toEqual({
			Json: 'json',
			Text: 'text',
			Blob: 'blob',
			ArrayBuffer: 'arraybuffer',
			Stream: 'stream',
			Document: 'document',
			FormData: 'formdata',
		})
	})

})
