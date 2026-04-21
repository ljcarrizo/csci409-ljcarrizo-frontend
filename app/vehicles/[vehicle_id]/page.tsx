export default function VehicleDetailPage({
  params,
}: {
  params: { vehicle_id: string };
}) {
  return (
    <div>
      <h1>Vehicle Detail Page</h1>
      <p>Vehicle ID: {params.vehicle_id}</p>
    </div>
  );
}