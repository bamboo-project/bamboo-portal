import styles from './index.scss';
import classnames from 'classnames';
function Market() {
  return (
    <div className={classnames(styles.marketWrap, 'h-screen w-screen flex items-center')}>
      <div className='flex flex-row items-center container mx-auto mb-24'>
        <div className='w-2/3 pr-20'>
          <div className="text-primary text-8xl flex items-center flex-row font-extrabold">
            <div className="font-px ">BAMBOO Market</div>
            <img
              className="w-20 ml-4"
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/market_car.png"
            />
          </div>
          <div>
            <div className="font-px text-lg text-white mt-4">
              When you are more active in the Bamboo community, you have a
              greater chance of getting BambooCoin rewards.
            </div>
            <div className="font-px text-lg text-white mt-4">
              BambooCoin is the official currency of the community. You can use
              BambooCoin to exchange for your favorite items in the community
              store, such as pet clothing sets, home decorations, NFT gallery
              decorations, etc.
            </div>
          </div>
          <img className='w-60 mt-10' src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/market_btn.png" />
        </div>
        <div className='w-1/3'>
          <img className='w-80' src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/market_icon.png" />
        </div>
      </div>
    </div>
  );
}

export default Market;
