export default function LineDetailPage({
  params,
}: {
  params: { line_id: string };
}) {
  return (
    <div>
      <h1>Line Detail Page</h1>
      <p>Line ID: {params.line_id}</p>
    </div>
  );
}