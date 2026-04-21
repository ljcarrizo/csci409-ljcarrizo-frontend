export default function AlertDetailPage({
  params,
}: {
  params: { alert_id: string };
}) {
  return (
    <div>
      <h1>Alert Detail Page</h1>
      <p>Alert ID: {params.alert_id}</p>
    </div>
  );
}