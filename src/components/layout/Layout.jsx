import Header from './Header';
import BottomNav from './BottomNav';

const Layout = ({ children, headerProps = {}, showNav = true }) => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Header {...headerProps} />
            <main className="pb-24 lg:pb-8 lg:max-w-7xl lg:mx-auto lg:px-8">
                {children}
            </main>
            {showNav && <BottomNav />}
        </div>
    );
};

export default Layout;
