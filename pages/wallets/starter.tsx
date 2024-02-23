// applies the styling to the components which are rendered on the browser
require('@solana/wallet-adapter-react-ui/styles.css');
// react library
import { useEffect, useState } from 'react';
// solana json rpc api library
import * as web3 from '@solana/web3.js';
// imports a component which can be rendered in the browser
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const Starter = () => {
    const [balance, setBalance] = useState<number | null>(0);
    const endpoint = web3.clusterApiUrl('devnet');

    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        if (connection && publicKey) {
            connection.getAccountInfo(publicKey).then((walletInfo) => {
                if (walletInfo) {
                    setBalance(walletInfo?.lamports / web3.LAMPORTS_PER_SOL);
                }
            });
        }
    }, [publicKey, connection]);

    return (
        <>
            <WalletModalProvider>
                <main className="min-h-screen text-white">
                    <div className="grid gap-4 p-4">
                        <div className="flex justify-center pt-4">
                            <h2>How much Solana do you have?</h2>
                        </div>
                        <div className="my-8 mx-80 bg-[#222524] border-2 border-gray-500 rounded-lg p-8">
                            {publicKey ? (
                                <ul className="p-2">
                                    <li className="text-sm flex justify-between">
                                        <p className="tracking-wider">
                                            SOL Balance
                                        </p>
                                        <p className="text-helius-orange italic font-semibold">
                                            {balance}
                                        </p>
                                    </li>
                                </ul>
                            ) : (
                                <div className="text-center">
                                    <p>Please connect your wallet</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </WalletModalProvider>
        </>
    );
};

export default Starter;
