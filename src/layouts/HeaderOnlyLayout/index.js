import Header from '~/layouts/components/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
