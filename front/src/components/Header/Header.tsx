import React, { ReactElement } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { RiWallet3Fill } from 'react-icons/ri'
import { RiQrScan2Line } from 'react-icons/ri'
import { IoSettingsSharp } from 'react-icons/io5';

import IMG_LOGO from '../../assets/images/polka.png'

import IMG_AVATAR from '../../assets/images/user-avatar.png';

import './Header.css'


interface Props {
  isUserPage?: boolean;
  setWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = (props: Props): ReactElement => { 
  const navigate: NavigateFunction = useNavigate();
  const handleNavigateToUserSetting = (): void => {
    navigate('settings');
  }
  return (
    <div className='home-header flex justify-between h-8 items-center'>
      <div className='header-left-items h-full flex items-center'>
        <article id="logo">
          <button className='flex items-center'>
            <img src={IMG_LOGO} alt="Polka Ticket" className='h-12 w-12' />
            <p className='text-lg text-primaryColor font-bold select-none leading-5 w-1/3 ml-2'>
              POLKA TICKET
            </p>
          </button>
        </article>
      </div>
      {props.isUserPage 
      ? 
      <div className="header-right-items">
        <article id="header-user-setting" className='h-5/6'>
          <button onClick={handleNavigateToUserSetting}>
            <i className='text-primaryColor text-xl'><IoSettingsSharp /></i>
          </button>
        </article>
      </div>
      :
      <div className="header-right-items">
        <article>
          <button className='header-scan'>
            <i><RiQrScan2Line /></i>
          </button>
        </article>
        <article>
          <button 
            className='header-wallet-overview'
            onClick={() => props.setWalletModal(true)}
          >
            <i><RiWallet3Fill /></i>
          </button>
        </article>
        <article id="header-user-overview">
          <button className='user-avt-btn' onClick={() => props.setUserModal(true)}>
            <img src={IMG_AVATAR} alt="User"/>
          </button>
        </article>
      </div>
    }
    </div>
  )
}

export default Header