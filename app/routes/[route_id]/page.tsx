export default function RouteDetailPage({
  params,
}: {
  params: { route_id: string };
}) {
  return (
    <div>
      <h1>Route Detail Page</h1>
      <p>Route ID: {params.route_id}</p>
    </div>
  );
}