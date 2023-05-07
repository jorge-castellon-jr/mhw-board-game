
// Note: this assumes that every document that has a id field
// have it on the `id` field at the root
export async function isUniqueAcrossAllDocuments(id, context) {
  const {document, getClient} = context
  const client = getClient({apiVersion: '2022-12-07'})
  const docId = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${docId}`,
    published: id,
    id,
  }
  const query = `!defined(*[!(_id in [$draft, $published]) && id.current == $id][0]._id)`
  const result = await client.fetch(query, params)
  return result
}