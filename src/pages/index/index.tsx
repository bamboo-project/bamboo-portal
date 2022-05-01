import styles from './index.scss'
import Neighbors from './components/neighbors'
import StarPets from './components/star_pets'
import Warp7 from './components/wrap7'
import './index.scss'

function Index() {
  return (
    <div className="">
      <div
        className="warp-1 h-screen bg-contain flex flex-col justify-center items-center w-full relative"
        style={{
          backgroundImage: 'url(https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_bg.png)',
        }}
      >
        <div className="container flex flex-col justify-center items-center mx-auto mb-200px">
          <div>
            <img
              className="h-44 mx-auto mb-1"
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_title_big.png"
            />
          </div>
          <div className="text-white font-game text-3xl w-6/12 mx-auto text-center">
            New STYLE to explore the Web3.0 social network
          </div>
          <div className="absolute bottom-10 mb-100px">
            <img className="h-28 mt-20" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_egg.png" />
          </div>
          <div className="absolute bottom-10">
            <img
              className="h-10 mt-16 animate-bounce"
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_arrow.png"
            />
          </div>
        </div>
      </div>
      <div className="wrap-2 flex flex-row container mx-auto py-20 h-screen items-center relative">
        <div>
          <div className="font-game text-white text-3xl">
            Come here to find the <span className="text-primary">social value</span> that Belongs to you already !
          </div>
          <div className="font-px text-white mt-8">
            The Web2.0 is to help people expand the social network from offline to online. What can the social
            networking of Web3.0 bring us?
          </div>
          <div className="font-px text-white mt-8">
            It is the social information can bring the value to you! We hope to link traditional social network with the
            blockchain, so that the value of social information can be returned to everyone, instead of being limited to
            any one platform.
          </div>
        </div>
        <div className="ml-28 flex flex-col justify-start">
          <div className="font-game text-white text-3xl">
            Get a special friend who can help you <span className="text-primary">dig more value in web3.0</span> !
          </div>
          <div className="font-px text-white mt-8 ">
            At the same time, we are thinking about how to provide a more fun mode to guide and help more friends to
            connect in the world of Web3.0 and gain more value.
          </div>
          <div className="font-px text-white mt-8">
            Whether socializing in the real world or in the virtual world, we all need a friend. Here we need a friend
            who can help us explore the metaverse together! What we need is except a pile of cold data, an interesting
            soul which is the starting point for joining Web3.0 social network!
          </div>
        </div>
        <div className="absolute mr-0 ml-0 bottom-10 m-auto w-full flex flex-row justify-center">
          <img
            className="h-10 animate-bounce"
            src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_arrow.png"
          />
        </div>
      </div>

      <div className="wrap-3 container mx-auto">
        <div
          className="font-game uppercase text-6xl leading-snug		"
          style={{ color: '#B974FF', textShadow: '1px 10px 3px black' }}
        >
          Connect social account TO Mint A Blockchain Pet in Web3.0 !
        </div>
        <div className="flex flex-row justify-center">
          <div>
            <div className="font-px text-white text-lg mt-8">
              Bamboo,A Web3.0 community that allows you to create a blockchain pet! Come to Bamboo to connect your
              social accounts, and you will create your own growable NFT pet based on your own social graph!
            </div>
            <div className="font-px text-white text-lg mt-8">
              A unique NFT pet is a good friend who can always accompany you in the world of Bamboo! It can make your
              experience simple and interesting, and explore the social world of Web3.0 in the future.
            </div>
            <div className="font-px text-white text-lg mt-8">
              When you take pets to participate in social activities, they are constantly learning and recording your
              social behavior in the Web3.0 world, and building your social graph in Web3.0.
            </div>
          </div>
          <div>
            <img src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_egg_effect.png" />
            <div className="relative flex flex-row justify-center">
              <div className="text-white ml-20 bg-primary py-3 px-14 flex justify-center items-center rounded-md cursor-pointer text-lg font-game mr-4">
                Mint a pet
              </div>
              <img
                className="w-16"
                src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pink_right.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="warp-4 grid-row-7 grid-flow-col grid mt-20 gap-4 w-screen overflow-x-scroll">
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet1.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet2.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet3.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet4.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet5.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet6.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet7.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet8.png" />
        </div>
        <div className="w-52 h-52">
          <img className="w-52 h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_pet9.png" />
        </div>
      </div>
      <Neighbors />
      <StarPets />
      <div
        className=" h-96 bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_jb_1.png)' }}
      >
        <div className="container mx-auto flex justify-center items-center">
          <img
            className="h-12 mt-16 animate-bounce"
            src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_arrow.png"
          />
        </div>
      </div>
      <Warp7 />
      <div className="pt-20" style={{ backgroundColor: '#453559' }}>
        <div className="container mx-auto">
          <div className="flex flex-row items-center">
            <img className="h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/icon_5.png" />
            <div className="w-1 h-24 mt-4 ml-4 bg-yellow-300 rounded-lg" />
            <div className="text-primary mt-4 text-3xl font-game ml-4">
              Through data analysis <br /> BAMboo pet can help you obtain interesting content
              <br /> and new friends
            </div>
          </div>
          <div className="flex flex-row space-x-8 justify-center items-center">
            <div className="text-white font-px">
              Pets can bring back collectibles and news that match your preferences every day.
              <br /> Your pet's favorite thing every day is to go to the Bamboo community to explore, and it is very
              interested in everything about web 3.0
              <br />
              As pet gets along with you day and night, it will understand your preferences, and you can easily learn
              from it the information you may be interested in, such as which project has released a new NFT that you
              are interested in, and where is it.
            </div>
            <div className="flex justify-center items-center">
              <img className="w-2/3" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/image_100.png" />
            </div>
          </div>
          <div className="flex flex-row space-x-8 mt-20 justify-center items-center">
            <div className="text-white font-px">
              Pets will bring back friends who best match your social attributes and recommend them to you.
              <br />
              Your pet will find community friends that best match you based on your preferences for various
              information. Building on a shared interest in the Metaverse, you and your new friends are no longer
              awkward and socially terrified to start conversations.
            </div>
            <div className="flex justify-center items-center">
              <img className=" w-2/3" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/image_271.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ backgroundColor: '#453559' }}>
        <div
          className="w-full h-96 bg-bottom bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_bg_3.png)',
          }}
        >
          <div className="container mx-auto flex justify-center items-center">
            <img
              className="h-12 mt-16 animate-bounce"
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_arrow.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-black pt-28">
        <div className="container mx-auto">
          <div className="font-game uppercase text-4xl" style={{ color: '#B974FF' }}>
            maximize the value of social information
          </div>
          <div className="flex flex-row items-center mt-28 space-x-28">
            <div className="text-white font-px w-2/3 text-base">
              Every pet is not just a NFT. When you take pets to participate in social activities, they are constantly
              learning and recording your social behavior in the Web3.0 world, and building your social graph in Web3.0
              <br />
              <br />
              Each pet will increase its level according to your more data in the community. Behind the level value is
              the rich data accumulation of your social graph. Link more social accounts, browsing more information, and
              more social behaviors in the community... will allow us to record more of your on-chain behaviors. <br />
              So the higher the pet level, the higher the value you have on the chain.
            </div>
            <div>
              <img className="h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/image_266.png" />
            </div>
          </div>
          <div className="flex flex-row items-center mt-28 space-x-28">
            <div className="text-white font-px w-2/3 text-base">
              Higher social value allows your pet to bring back more suitable and better items and community benefits
              every day.
            </div>
            <div>
              <img className="h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/image_101.png" />
            </div>
          </div>
          <div className="flex flex-row items-center mt-28 space-x-28">
            <div className="text-white font-px w-2/3 text-base">
              Based on personal social data behind pets，other projects can quickly find people who match the user
              profile of the project, and can also provide users with DID-based credit value through the data
            </div>
            <div>
              <img className=" h-52" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/image_267.png" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-32 pb-32">
            <img className="h-20" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/btn_10.png" />
          </div>
        </div>
      </div>
      <div className=" border-b" />
    </div>
  )
}

export default Index
