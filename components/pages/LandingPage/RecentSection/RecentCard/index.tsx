interface Props {
  title: string;
  issue: number;
  volume: number;
  date: string;
}

const RecentCard = ({ title, issue, volume, date }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start bg-white shadow-md w-full h-full p-4">
      <h1 className="text-lg font-semibold">{title.normalize()}</h1>
      <div className="flex items-center w-full h-full gap-4 text-gray-700">
        <span className="">Volume - {volume}</span>
        <span>Issue - {issue}</span>
        <span className="italic text-yellow-600">{date}</span>
      </div>
    </div>
  );
};

export default RecentCard;
