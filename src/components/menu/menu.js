import style from './style/menu.module.scss'
import {useState} from "react";



function Menu() {
const {ele} = useState(document.getElementById('container'))
    let pos = {top: 0, left: 0, x: 0, y: 0};
    const mouseDownHandler = function (e) {
        pos = {
            // The current scroll
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };
    }
    return (
        <>
            <div id={'container'}
                 onMouseMove={mouseDownHandler}
                 onMouseUp={mouseDownHandler}
                 className={style.menuContent}>
                <div className={style.menuContainer}>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>
                    <div className={style.subMenu}>
                        menu1
                    </div>

                </div>
            </div>
        </>
    )
}

export default Menu