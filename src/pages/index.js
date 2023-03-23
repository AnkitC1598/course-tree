import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment } from "react";

const routes = [
	{
		name: "Tree",
		href: "/tree",
	},
];

const Home = () => {
	return (
		<div className="p-8">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						Components
						<ChevronDownIcon
							className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							{routes.map((route) => (
								<Menu.Item key={route.name}>
									{({ active }) => (
										<Link
											href={route.href}
											className={`${
												active
													? "bg-violet-500 text-white"
													: "text-gray-900"
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{route.name}
										</Link>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default Home;
