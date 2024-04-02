type StudentDetailItemProps = {
  label: string;
  data: string;
};
export default function StudentDetailItem({
  label,
  data,
}: StudentDetailItemProps) {
  return (
    <p className="font-bold  text-gray-700 uppercase mb-3">
      {label}: {""}
      <span className="font-normal normal-case">{data}</span>
    </p>
  );
}
