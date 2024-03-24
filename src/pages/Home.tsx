// import { useLogin, usePrivy, useWallets } from '@privy-io/react-auth';
// import { useEffect } from 'react';

const Home = () => {
  // const { wallets } = useWallets();
  // const { signMessage } = usePrivy();

  // const { login } = useLogin({
  //   onComplete: async () => {
  //     console.log('wallet is connected');
  //   },
  // });

  // useEffect(() => {
  //   console.log('wallets', wallets);
  // }, []);

  // const onClick = async () => {
  //   // await login();
  //   await signMessage(`scholarize users nonce: 111`, {});

  //   console.log(wallets);
  // };
  return (
    <section className="section">
      <div>Home</div>
      {/* <button onClick={onClick}>Connect</button> */}
    </section>
  );
};

export default Home;
