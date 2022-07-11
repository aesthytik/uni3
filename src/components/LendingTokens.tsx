import ethIcon from '../../node_modules/cryptocurrency-icons/svg/color/eth.svg';
import manaIcon from '../../node_modules/cryptocurrency-icons/svg/color/mana.svg';
import yearnIcon from '../../node_modules/cryptocurrency-icons/svg/color/yfi.svg';
import daiIcon from '../../node_modules/cryptocurrency-icons/svg/color/dai.svg';
import uniIcon from '../../node_modules/cryptocurrency-icons/svg/color/uni.svg';

import Item from './Item';

const tokens = [
  { id: 0, icon: ethIcon, name: 'Ethereum', apy: '10%' },
  { id: 1, icon: manaIcon, name: 'Mana', apy: '10%' },
  {
    id: 2,
    icon: yearnIcon,
    name: 'Yearn Finance',
    apy: '10%',
  },
  {
    id: 3,
    icon: daiIcon,
    name: 'DAI stablecoin',
    apy: '10%',
  },
  { id: 4, icon: uniIcon, name: 'Uniswap', apy: '10%' },
];

const LendingTokens = () => {
  return (
    <div className="flow-root w-full">
      <div className="text-lg text-black">Assets to Lend</div>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {tokens.map((token: any) => (
          <Item token={token} key={token.id} />
        ))}
      </ul>
    </div>
  );
};

export default LendingTokens;
