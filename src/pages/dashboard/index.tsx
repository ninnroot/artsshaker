import InsightPanel from '@/components/dashboard/InsightPanel';
import React from 'react';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <div className="flex h-[100vh] flex-row justify-center">
        <div className="w-[100%] sm:w-[80%]">
          <InsightPanel></InsightPanel>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
