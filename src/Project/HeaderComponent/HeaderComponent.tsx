import React from 'react';
import s from './HeaderComponent.module.scss'
import kaspi_logo from "./HeaderComponentImages/kaspi_logo.png"

export type HeaderComponentPropsType = {
    headerDate: Array<headerDatePropsType>
    removeTitle: (id: string) => void
}


export type headerDatePropsType = {
    id: string
    title: string
}


export const HeaderComponent: React.FC<HeaderComponentPropsType> = (props) => {

    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <div className={s.header_logo}><img src={kaspi_logo} alt="logo" width={"141px"} height={"33px"}/></div>
                <nav className={s.header_nav}>
                    {props.headerDate.map((m, index)=>{
                        const onClickHandler = () => {
                            props.removeTitle(m.id)
                        }
                        return (
                                <li key={m.id} className={s.header_nav_link} onClick={onClickHandler}>{m.title}</li>
                            // <div key={m.id}></div>
                        )
                    })}
                </nav>
            </div>
        </div>
    );
};

