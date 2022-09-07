import * as React from 'react';
import MainHeader from '../Header/MainHeader';
import css from './layout.module.css';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <React.Fragment>
            <MainHeader />
            <main className={css.main}>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
