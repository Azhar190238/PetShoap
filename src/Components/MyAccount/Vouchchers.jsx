import React from 'react';
import Banner from '../Shared/Banner/Banner';
import { useNavigate } from 'react-router-dom';
import BillingHistory from './BillingHistory';
import BillINformation from './BillINformation';
import AvailableBalance from './AvailableBalance';


const Vouchers = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url)
    }
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto'>
                <div role="tablist" className="tabs border-b border-[#FF5C2C] ">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C] font-bold border-b border-[#FF5C2C] " aria-label="Billing History" defaultChecked />
                    <div role="tabpanel" className="tab-content  "> 
                        <BillingHistory></BillingHistory> 
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C] font-bold border-b border-[#FF5C2C]" aria-label="Billing Information"  />
                    <div role="tabpanel" className="tab-content ">
                        <BillINformation></BillINformation>
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C] font-bold border-b border-[#FF5C2C]" aria-label="Available Blanca"  />
                    <div role="tabpanel" className="tab-content">
                        <AvailableBalance></AvailableBalance>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Vouchers;