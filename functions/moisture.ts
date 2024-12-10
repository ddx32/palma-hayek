export const onRequest: PagesFunction<Env> = async (context) => {
  const kv = context.env.PALMA_HAYEK_KV;
  const value = await kv.get("MOISTURE");
  return Response.json({ value });
};
