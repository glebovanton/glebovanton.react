import Header from '@/app/components/Header';
// import Footer from '../components/Footer';
// import ThemeSwitch from '../components/ThemeSwitch';

// @ts-ignore
const Layout = ({ children }) => {
    return (
        <main className="flex flex-col items-center px-4">
            <Header />
            {children} {/* This will render the page content */}
            {/*<Footer />*/}
            {/*<ThemeSwitch />*/}
        </main>
    );
};

export default Layout;
