import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import './App.css';
import Header from './components/Header';
// import LendingTokens from './components/LendingTokens';
import BorrowingTokens from './components/BorrowingTokens';

function getLibrary(provider: any): Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <div className="App">
      <Header />
      <section className="text-gray-600 body-font overflow-hidden mx-auto max-w-screen-xl">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <BorrowingTokens />
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              {/* <BorrowingTokens /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const AppContainer = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
};

export default AppContainer;
