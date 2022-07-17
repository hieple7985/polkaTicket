import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountData'

interface Props {
  totalPrice: number,
}

const AddFundsContent: React.FC<Props> = ({totalPrice}: Props): React.ReactElement => {
  const userData = useContext(AccountContext)

  return (
    <>
      {/* Introduction */}
      <article className='mt-8 text-center'>
        <h6 className='text-lg font-semibold'>
          You need <span className='text-primaryColor'>{totalPrice} DEV</span> to buy ticket
        </h6>
        <div className='text-sm mt-3'>
          <p>Please transfer money to your wallet.</p>
          <p>It can take up to a minute for your balance to update.</p>
        </div>
      </article>

      {/* Wallet Input */}
      <article className='mt-8'>
        <div className='flex justify-between text-sm'>
          <div className='font-semibold'>Your MetaMask wallet:</div>
          <div>
            Balance: <span>{Number(userData.account.balance).toFixed(3)} DEV</span>
          </div>
        </div>
        <div className='flex border border-solid rounded-3xl w-full pl-6 pr-2 mt-4
        border-whiteSmoke bg-inputBgColor select-none'
        >
          <input 
            type="text" 
            className='py-2 bg-transparent flex-1 min-w-0 text-gray-400 font-semibold' 
            value={userData.account.user}
            readOnly
          />
        </div>
      </article>
    </>
  )
}

export default AddFundsContent