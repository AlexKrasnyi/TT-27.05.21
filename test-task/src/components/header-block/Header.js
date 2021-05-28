import React from 'react'
import {Title} from './components/Title'
import {Card} from './components/Card'
import './header.css'
// import img1 from '../../img/BuildManageAnalyzeCreate2.png'
// import img2 from '../../img/BuildManageAnalyzeCreate1.png'
// import img3 from '../../img/BuildManageAnalyzeCreate.png'
// import img4 from '../../img/BuildManageAnalyzeCreate2.png'

export const Header = () => {
    return (
        <div className='header'>
            <Title text='Why Our Directory' />
            <div className='header__cards'>
                <Card 
                    img='../../img/BuildManageAnalyzeCreate2.png'
                    title='Offer coupons'
                    text='Grow your customer base by offering free coupons that are advertised on social media and discoverable through Google search. No hidden or upfront fees
                     and you get a free professional profile.  Engage your customers and leads while expanding your business.'
                />
                <Card 
                    img='../../img/Build ManageAnalyzeCreate1.png'
                    title='Search and discover'
                    text='Our directory is accessed by families across US and Canada to find local service providers and facilities by profession, 
                    services offered, or ratings and rankings We match families based on their needs.'
                />
                <Card 
                    img='../../img/BuildManageAnalyzeCreate.png'
                    title='Improve satisfaction'
                    text='Get higher ratings and better reviews through transparency, media-rich profiles, engaging social blog, professional articles, 
                    and accreditation.Create events to promote your business and advertise them on social media.'
                />
                <Card 
                    img='../../img/Manage.png'
                    title='Profile boosting'
                    text='Get more referrals through improved ratings and reviews, performance monitoring, recommendations from other professionals, 
                    and profile search boosting. Your profiles are discoverable on Google search.'
                />
            </div>
        </div>
    )
}