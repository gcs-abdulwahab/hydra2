import {json, useLoaderData} from '@remix-run/react';

interface IStat {
  title: string;
  value: string;
}

//  write loader
export const loader = async () => {
  const stats: IStat[] = [
    {
      title: 'Total Subscriber',
      value: '71897',
    },
    {
      title: 'Average Open Rate',
      value: '71%',
    },
    {
      title: 'Average Click Rate',
      value: '25.4%',
    },
  ];
  return json(stats);
};
const Stats = () => {
  const stats = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-row flex-wrap w-full gap-2 p-10 rounded-md bg-zinc-200">
      <h1 className="w-full p-4 text-3xl font-bold text-gray-800 text-balance">
        Last 30 days
      </h1>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
export default Stats;

const StatCard = (stat: IStat) => {
  const {title, value} = stat;
  return (
    <div className="flex-auto p-8 bg-white rounded-lg ">
      <h2 className="text-3xl font-medium text-gray-800 ">{title}</h2>
      <span className="text-8xl">{value}</span>
    </div>
  );
};
