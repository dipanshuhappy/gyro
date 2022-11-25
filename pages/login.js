import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import Image from 'next/image';

import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { WEB3_CONNECT_MODAL_ID } from "web3modal";

const provider_options = {
	// walletconnect: {
	// 	package:WalletConnectProvider,
	// 	options: {
	// 		infuraId
	// 	}
	// }

}
if(typeof window !== "undefined")
{
	const web3modal = new Web3Modal(
		{
		network : 'testnet',
		cacheProvider: true,
		provider_options,
})
}

const Login = () => {
	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				router.push("/");
			}
		});
	}, []);

	return (
		<Wrapper>
			<UberLogo src={"/logo.png"} alt="gyro logo" />

			<Title>Login with metamask</Title>

			<HeadImage src="/head.png" />

			<SignInButton onClick={async () => {
				const provider = await web3modal.connect();
				const web3 = new Web3(provider);
			}}>
				Sign in with metamask
			</SignInButton>
		</Wrapper>
	);
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-white-200  p-4 
	
`;

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`;

const Title = tw.div`
    text-5xl  pt-4 text-white-500
	
`;

const HeadImage = tw.img`
    object-contain w-full h-1/2
`;

const SignInButton = tw.button`
    // bg-black text-white text-center py-4 mt-8  w-full rounded-full self-center
	bg-transparent hover:bg-purple-500 text-blue-400 font-bold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded
`;


{/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button> */}
