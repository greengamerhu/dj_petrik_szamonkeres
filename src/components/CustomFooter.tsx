import { Component, ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends Component {
    render(): ReactNode {
        return <footer className="text-center" style={{borderTop : "1px solid black"} }>
            <p>Készitette: Rimoczi Daniel</p>
        </footer>
    }
}