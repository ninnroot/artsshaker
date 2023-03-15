import InsightPanel from '@/components/dashboard/InsightPanel';
import SideBar from '@/components/dashboard/SideBar';
import TopBar from '@/components/dashboard/TopBar';
import React, { useState } from 'react';

const Dashboard: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true)
  return (
    <>
      <div className="flex h-[100vh] flex-row justify-center bg-gradient-to-r from-gradient-asteroidFrom to-gradient-asteroidTo">
        <div className="w-[100%]">
          <TopBar onMenuClick={()=>setMenuIsOpen(true)}></TopBar>
          <SideBar menuIsOpen={menuIsOpen} onChevronClick={() => setMenuIsOpen(false)} ></SideBar>
          <InsightPanel></InsightPanel>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
