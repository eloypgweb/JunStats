// Temporary diagnostic endpoint to verify server env visibility.
// Returns presence and a redacted preview of SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from both
// import.meta.env and process.env. DO NOT deploy publicly without restricting or removing it.

function readImportMeta(name: string): string | undefined {
  try {
    // @ts-ignore
    return (import.meta as any)?.env?.[name];
  } catch {
    return undefined;
  }
}

function mask(value: string | undefined, keep: number = 6): string | undefined {
  if (!value) return undefined;
  const head = value.slice(0, keep);
  const tail = value.length > keep ? `…(${value.length} chars)` : '';
  return `${head}${tail}`;
}

export async function GET() {
  const names = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_KEY'] as const;

  const report = names.map((name) => {
    const fromImport = readImportMeta(name);
    const fromProcess = typeof process !== 'undefined' ? process.env[name] : undefined;
    return {
      name,
      importMetaPresent: Boolean(fromImport),
      processEnvPresent: Boolean(fromProcess),
      importMetaPreview: mask(fromImport),
      processEnvPreview: mask(fromProcess),
    };
  });

  return new Response(JSON.stringify({ report }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}
