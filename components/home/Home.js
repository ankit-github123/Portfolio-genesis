"use client";
import { signIn, getProviders, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const initializeProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    if (!providers) {
      initializeProviders();
    }
  }, [providers]);
  const { data: session } = useSession();
  console.log(providers, "providers1");
  return (
    <div className="relative">
      <div className="h-20 flex items-center w-full justify-between">
        <div className="flex gap-1.5 w-max items-center">
          <img
            src="/images/common/logo.svg"
            className="w-14"
            alt="Protfolio genesis"
          />
          <div className="w-full text-lg font-medium tracking-wide font-opensans">
            Portfolio Genesis
          </div>
        </div>
        {session?.user?.email ? (
          <div className="flex items-center gap-3">
            <Image
              src={session.user.image}
              width={26}
              height={26}
              className="rounded-full"
              alt="Protfolio genesis"
            />
            <span className="font-thin text-[15px]">{session.user.name}</span>
          </div>
        ) : (
          <div className="">
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    key={provider.id}
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/newportfolio/myprofile",
                      })
                    }
                    className="btn btn-primary"
                  >
                    Sign in
                  </button>
                );
              })}
          </div>
        )}
      </div>
      <div className="h-[82vh] flex flex-col justify-center">
        <div className="grid grid-cols-9">
          <div className="col-span-5">
            <div className="pr-[6%] text-center">
              <div className="text-4xl md:leading-snug md:text-[50px] md:font-semibold">
                Build your own
                <br />{" "}
                <span className="home-title-gradient text-[54px] font-bold font-opensans">
                  Personalised portfolio
                </span>
              </div>
              {/* <div className='text-home text-start'>-No Code Required</div> */}
              <div className="md:leading-relaxed text-[17px] my-6 opacity-70">
                Welcome to Portfolio Genesis, your gateway to effortlessly craft
                a stunning personal portfolio website without the need for a
                single line of code.
              </div>
              <div className="my-7">
                {session?.user && (
                  <button onClick={signOut} className="pulse-button">
                    Get started
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-8 md:col-span-4">
            <div className="my-3">
              <video
                height="800"
                className="w-full border border-[rgba(255,255,255,0.05)] rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="/videos/portfolio2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
