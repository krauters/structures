export enum Env {
	Alpha = 'Alpha',
	Beta = 'Beta',
	Development = 'Development',
	Gamma = 'Gamma',
	Pipeline = 'Pipeline',
	Production = 'Production',
	Unknown = 'Unknown',
}

export enum HttpStatus {
	Accepted = 202,
	BadGateway = 502,
	BadRequest = 400,
	Conflict = 409,
	Created = 201,
	Forbidden = 403,
	GatewayTimeout = 504,
	Gone = 410,
	HttpVersionNotSupported = 505,
	InternalServerError = 500,
	MethodNotAllowed = 405,
	NoContent = 204,
	NotAcceptable = 406,
	NotFound = 404,
	NotImplemented = 501,
	Ok = 200,
	PartialContent = 206,
	PaymentRequired = 402,
	ResetContent = 205,
	ServiceUnavailable = 503,
	TooManyRequests = 429,
	Unauthorized = 401,
	UnavailableForLegalReasons = 451,
}

export enum HttpMethod {
	DELETE = 'DELETE',
	GET = 'GET',
	HEAD = 'HEAD',
	OPTIONS = 'OPTIONS',
	PATCH = 'PATCH',
	POST = 'POST',
	PUT = 'PUT',
}

export enum HttpContentType {
	Css = 'text/css',
	FormUrlEncoded = 'application/x-www-form-urlencoded',
	Html = 'text/html',
	Javascript = 'application/javascript',
	Json = 'application/json',
	MultipartFormData = 'multipart/form-data',
	TextPlain = 'text/plain',
	Xml = 'application/xml',
}

export enum FileExtension {
	CSS = 'css',
	CSV = 'csv',
	DLL = 'dll',
	DOCX = 'docx',
	EXE = 'exe',
	HTML = 'html',
	JPG = 'jpg',
	JS = 'js',
	JSON = 'json',
	MKV = 'mkv',
	MP3 = 'mp3',
	MP4 = 'mp4',
	PDF = 'pdf',
	PNG = 'png',
	RAR = 'rar',
	TS = 'ts',
	TXT = 'txt',
	XML = 'xml',
	ZIP = 'zip',
}

export enum FileEncoding {
	ASCII = 'ascii',
	Base64 = 'base64',
	Binary = 'binary',
	Hex = 'hex',
	ISO88591 = 'iso-8859-1',
	ISO88592 = 'iso-8859-2',
	UCS2 = 'ucs2',
	UTF16LE = 'utf16le',
	UTF32 = 'utf32',
	UTF8 = 'utf8',
	Windows1252 = 'windows-1252',
}

export enum LanguageCode {
	Chinese = 'zh',
	English = 'en',
	French = 'fr',
	German = 'de',
	Hindi = 'hi',
	Spanish = 'es',
}

export enum Status {
	Active = 'Active',
	Canceled = 'Canceled',
	Completed = 'Completed',
	Failed = 'Failed',
	Inactive = 'Inactive',
	Pending = 'Pending',
	Suspended = 'Suspended',
}

export enum ResponseType {
	ArrayBuffer = 'arraybuffer',
	Blob = 'blob',
	Document = 'document',
	FormData = 'formdata',
	Json = 'json',
	Stream = 'stream',
	Text = 'text',
}
