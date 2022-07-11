/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import * as Constants from './constants';

declare let window: any;

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 89, 137],
});

export const switchNetwork = async (chain: any) => {
  const { ethereum } = window;
  try {
    await ethereum.request({
      method: Constants.walletSwitchEthereumChain,
      params: [{ chainId: chain.wallet.chainId }],
    });
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        await ethereum.request({
          method: Constants.walletAddEthereumChain,
          params: [chain.wallet],
        });
        // eslint-disable-next-line no-empty
      } catch (addError) {}
    }
  }
};

export function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return Constants.errorMessage.noEthereumProvider;
  }
  if (error instanceof UnsupportedChainIdError) {
    return Constants.errorMessage.unsupportedChainId;
  }
  if (error instanceof UserRejectedRequestErrorInjected) {
    return Constants.errorMessage.userRejectedRequest;
  }
  return Constants.errorMessage.unknownError;
}

export function useEagerConnect() {
  const { activate, active } = useWeb3React();
  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();
  // eslint-disable-next-line consistent-return
  useEffect((): any => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(injected);
      };
      const handleChainChanged = (chainId: string | number) => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(injected);
      };
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      const handleNetworkChanged = (networkId: string | number) => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(injected);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}

export const signMessage = async (
  provider: any,
  account: string,
  message: string,
): Promise<string> => provider.getSigner(account).signMessage(message);
