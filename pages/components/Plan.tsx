import React, { useId } from 'react'
import stylesTickets from '../../styles/Tickets.module.css'
import stylesBtn from '../../styles/Buttons.module.css'
import { useRouter } from 'next/router';

type planProps = {
    price: string
    intro: string
    icon: string
    benefits: string[]
    style: string
}

const Plan = ({ price, intro, benefits, style, icon }: planProps) => {
    const router = useRouter()
    const id = useId()

    return (
        <div className={`${stylesTickets.plan} ${style}`}>
            <div className={stylesTickets.planPrice}><span>{price}</span></div>
            <div className={stylesTickets.planIntro}>{intro}<hr /></div>
            <div><img className={stylesTickets.icon} src={icon} alt={`icon for ${intro}`} width={'90px'} /></div>
            <div className={stylesTickets.planBenefits}>
                <ul>
                    {(benefits as string[])?.map((benefit, index) => <li className={stylesTickets.planBenefit} key={`${id}-${index}`}>{benefit}</li>)}
                </ul>
            </div>
            {router.pathname === '/subscribe' ? <button className={`${stylesBtn.btn} ${stylesBtn.loginLogout}`}>{'Buy'}</button> : null}
        </div >
    )
}

export default Plan