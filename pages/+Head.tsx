import favicon from "../assets/favicon.svg";

const cspDirectives = {
	"default-src": ["'self'"],
	"script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
	"style-src": ["'self'", "'unsafe-inline'"],
	"img-src": ["'self'", "data:"],
	"font-src": ["'self'"],
	"connect-src": ["'self'"],
	"base-uri": ["'self'"],
	"form-action": ["'self'"],
	"upgrade-insecure-requests": [],
};

const generateCsp = (directives: Record<string, string[]>): string => {
	return Object.entries(directives)
		.map(([key, value]) => `${key} ${value.join(" ")}`)
		.join("; ");
};

const cspString = generateCsp(cspDirectives);

export default function Head() {
	return (
		<>
			<meta charset="utf-8" />
			<meta name="description" content="This is a great project about..." />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta http-equiv="Content-Security-Policy" content={cspString} />
			<meta
				http-equiv="Strict-Transport-Security"
				content="max-age=31536000; includeSubDomains"
			/>
			<meta http-equiv="X-Content-Type-Options" content="nosniff" />
			<meta name="referrer" content="strict-origin-when-cross-origin" />
			<meta
				http-equiv="Permissions-Policy"
				content="geolocation=(), microphone=(), camera=()"
			/>
			<link rel="icon" href={favicon} />
		</>
	);
}
