import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import SelectStore from "../selectStore";
import Search from "../search";
import "./css.css";

export default function Header(props) {
    const { active,
        setActive,
    } = props

    const [toggle, setToggle] = useState(false);
    return (
        <header className="w-100 center-middle">
            <Col xs={2} md={2}>
                <span className="humburger"
                    onClick={() => {
                        const newValue = active === "active" ? "inactive" : "active";
                        setActive(newValue)
                    }}><i></i></span>
            </Col>
            <Col xs={8} md={5} className={`${!toggle ? "" : "d-none"}`}>
                <Search />
            </Col>

            <Col xs={8} md={5} className={`${toggle ? "" : "d-none d-md-block"} `}>{<SelectStore />}
            </Col>

            <Col xs={2} className="center-middle d-md-none" >
                <span className={`font-size-30 center-middle ${toggle ? "active-store" : ""}`} onClick={() => setToggle(prev => !prev)}>
                    <i className="fa fa-store-alt"></i>
                </span>
            </Col>
        </header>
    )
}
