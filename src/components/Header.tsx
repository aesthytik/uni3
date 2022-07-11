import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/connections';
import { minifyAddress } from '../utils/helpers';
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ethIcon from '../assets/images/ethereum_icon.svg';
import polygonIcon from '../assets/images/polygon_icon.svg';
import config from '../utils/config';
import { AiOutlineDown } from 'react-icons/ai';

const chainArray = [
  {
    id: 1,
    name: 'Ethereum',
    icon: ethIcon,
    chainId: 1,
    wallet: config.ethereumWallet,
  },
  {
    id: 2,
    name: 'Ropsten',
    icon: ethIcon,
    chainId: 3,
    wallet: config.ropstenWallet,
  },
  {
    id: 3,
    name: 'Rinkeby',
    icon: ethIcon,
    chainId: 4,
    wallet: config.rinkebyWallet,
  },

  {
    id: 4,
    name: 'Polygon network',
    icon: polygonIcon,
    chainId: 137,
    wallet: config.polygonWallet,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const { active, activate, deactivate, account, chainId } = useWeb3React();
  const [currentChain, setCurrentChain] = useState(
    active
      ? chainArray.filter((item) => item.chainId === chainId)[0]
      : chainArray[0],
  );

  useEffect(() => {
    if (active) {
      setCurrentChain(chainArray.filter((item) => item.chainId === chainId)[0]);
    }
  }, [chainId, active]);

  const switchNetwork = async (chain: any) => {
    const { ethereum }: any = window;
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chain.wallet.chainId }],
      });
      setCurrentChain(chain);
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [chain.wallet],
          });
          setCurrentChain(chain);
        } catch (addError) {
          console.log('addError', addError);
        }
      }
    }
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Uni3
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {active ? (
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      {currentChain.name}
                      <AiOutlineDown
                        className="-mr-1 ml-2 h-5 w-5"
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {chainArray.map((chain, index) => (
                          <Menu.Item key={index}>
                            {({ active: activeValue }: any) => (
                              <a
                                onClick={async () => {
                                  switchNetwork(chain);
                                }}
                                className={classNames(
                                  activeValue
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm',
                                )}
                              >
                                {chain.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active: activeValue }: any) => (
                              <button
                                type="submit"
                                className={classNames(
                                  activeValue
                                    ? 'bg-gray-100 text-red-500'
                                    : 'text-red-700',
                                  'block w-full text-left px-4 py-2 text-sm',
                                )}
                                onClick={() => deactivate()}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="col ml-3">
                  <p className="pt-2">{minifyAddress(account || '')}</p>
                </div>
              </div>
            ) : (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => activate(injected)}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
