export default function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Blog Post ID: {params.id}</h1>;
}