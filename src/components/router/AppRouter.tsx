import { Route, Routes } from 'react-router-dom';
import { OverviewLayout } from '../layout/OverviewLayout/OverviewLayout';

import { BranchDetails } from '../BranchDetails/BranchDetails';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<OverviewLayout />}>
        <Route path="/*" element={<BranchDetails />} />
      </Route>
    </Routes>
  );
};
