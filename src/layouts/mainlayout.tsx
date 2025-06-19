import { Outlet, useLocation } from "react-router-dom";
import SectionsProvider, { SectionsContext } from "@/context/sectionContext";
import { useContext, useEffect } from "react";
import Loading from "@/components/loading";

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-svh">
      <SectionsProvider>
        <ContentWrapper>
          <div className="flex flex-col gap-1 flex-1">
            <Outlet />
          </div>
        </ContentWrapper>
      </SectionsProvider>
    </div>
  );
}

function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { loading, error } = useContext(SectionsContext);
  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  return children;
}
