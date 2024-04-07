import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { HamburgerMenuIcon, Cross1Icon, } from '@radix-ui/react-icons';
import { Avatar, Button, Table } from '@radix-ui/themes';
import { EyeIcon } from 'lucide-react';
import CreateUserPopUp from '@/ui/CreateUserPopup';
import { useUsers } from '../AdminAuth/useUsers';
import Spinner from '@/ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../authentication/useLogout';
import OTPPopup from '../authentication/Admin/OTPPopup';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Admin() {
  const { logout, isLoading: isLoggingOff } = useLogout();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: users, isLoading } = useUsers();
  if (isLoading || isLoggingOff) return <Spinner />;

  const allowedUser = users.users.filter(user => user.user_metadata.owner === 'futon');
  console.log(allowedUser);
  return (
    <div className=" bg-blue-50 py-8">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <div onClick={() => navigate('/')} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className=' font-bold text-xl tracking-widest font-serif text-blue-600 uppercase'>Futon MFB</p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </div>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span onClick={logout} className="text-sm font-semibold leading-6 text-gray-900">
              Log out <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div onClick={() => navigate('/')} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className=' font-bold text-xl tracking-widest font-serif text-blue-600 uppercase'>Futon MFB</p>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <Cross1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}

                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <span
                    onClick={logout}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-900 hover:bg-blue-50"
                  >
                    Log out
                  </span>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="grid grid-cols-2 gap-2 text-neutral-100 ">
            <div className=" text-neutral-700">Hi, Admin</div>
            <div className=" text-right">
              <Avatar fallback="A" radius='full' />
            </div>
            <div className=" flex items-center gap-3">
              <CreateUserPopUp />
              <OTPPopup />
            </div>

            <div className=" col-span-2 mt-4">
              <Table.Root variant='surface'>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Users</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell >
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                {allowedUser?.map(user => <Table.Body key={user.id}>
                  <Table.Row>
                    <Table.RowHeaderCell>
                      {user.email}
                    </Table.RowHeaderCell>
                    <Table.Cell className=' text-right '>
                      <Button variant='soft' onClick={() => navigate(`/admin/${user.id}`)}><EyeIcon />View</Button>
                    </Table.Cell>
                  </Table.Row>

                </Table.Body>)}
              </Table.Root>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
