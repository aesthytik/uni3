const config = {
  contractAddress: {
    lendingContractAddress: '0xbEa85b5f9D8108530aAD1a4a32e534BBfE4534eB',
    usdtContractAddress: '0x6949e4802d1a44477de8dc2afceda92b03b2022c',
    noOfUSDTokenApproval: '100000000000000000000000000000',
  },
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  ethereumWallet: {
    chainId: '0x1',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  ropstenWallet: {
    chainId: '0x3',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://ropsten.etherscan.io'],
  },
  rinkebyWallet: {
    chainId: '0x4',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
  },
  polygonWallet: {
    chainId: '0x89',
    chainName: 'MATIC',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
    blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
  },
};

export default config;
