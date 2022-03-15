import React from 'react';
import PageWrapper from 'components/styled/PageWrapper';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'helpers/contexts/auth-context';

function PageLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const auth = useAuth();

  const showSidebar = React.useMemo(() => {
    return !location.pathname.includes('complete-profile');
  }, [location.pathname]);

  if (!auth.user) return <Outlet />;

  return (
    <PageWrapper
      className={`${!isSidebarOpen ? 'withMinimized' : ''} ${
        !showSidebar ? 'no-sidebar' : ''
      }`}
    >
      {showSidebar && <SideBar show={isSidebarOpen} toggle={toggleSidebar} />}
      <div className={`container-f`}>
        <section className="p-3">
          <Outlet />
        </section>
      </div>
    </PageWrapper>
  );
}

const SideBar = ({ show, toggle }: { show: boolean; toggle: () => void }) => {
  return <div>Sidebar</div>;
};

export default PageLayout;
