/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/disable-enable-pair */

interface Props {
  // define props here
}

interface Employee {
  id: number;
  image: string;
  name: string;
  role: string;
  time: string;
}

// create an Employees array
const employees: Employee[] = [
  {
    id: 1,
    image: 'https://placehold.co/100',
    name: 'Jean Marc',
    role: 'Developer',
    time: '6:00 AM',
  },
  {
    id: 2,
    image: 'https://placehold.co/100',
    name: 'John',
    role: 'Programmer',
    time: '8:00 AM',
  },
  {
    id: 3,
    image: 'https://placehold.co/100',
    name: 'Stanley',
    role: 'Producer',
    time: '2:00 AM',
  },
  {
    id: 4,
    image: 'https://placehold.co/100',
    name: 'Clark',
    role: 'SuperMan',
    time: '12:00 AM',
  },
];

export default function (props: Props) {
  return (
    <div className="container flex flex-col items-center justify-center w-full mx-auto">
      <ul className="flex flex-col">
        {employees.map((employee) => (
          <EmpRow {...employee} key={employee.id} />
        ))}
      </ul>
    </div>
  );
}


export function EmpRow( employee: Employee) {
  return (
    <li key="employee.id" className="flex flex-row mb-2 border-gray-400">
      <div className="flex items-center flex-1 p-4 bg-white border rounded-md shadow cursor-pointer select-none dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
          <a href="htttp://www.google.com" className="relative block">
            <img
              alt="profil"
              src={employee.image}
              className="object-cover w-10 h-10 mx-auto rounded-full "
            />
          </a>
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white">{employee.name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-200">
            {employee.role}
          </div>
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-200">
          {employee.time}
        </div>
        <button className="flex justify-end w-24 text-right">
          <svg
            width="12"
            fill="currentColor"
            height="12"
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
}
