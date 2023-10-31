
// import * as ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import OurService from "../our-service/OurService";
import Blog from "../blog/Blog";
import Portfolio from "../portfolio/Portfolio";
import ContactUs from "../contact-us/ContactUs";
const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />}>
                <Route path="job" element={<>heloo job</>} />
                <Route path="jab" element={<>heloo jab</>} />
            </Route>
            <Route path="/our-service" element={<OurService></OurService>} />
            <Route path="/blog" element={<Blog></Blog>} />
            <Route path="/portfolio" element={<Portfolio></Portfolio>} />
            <Route path="/contact-us" element={<ContactUs></ContactUs>} />
            <Route path="*" element={<><h1>not Found</h1></>} state="404" />
        </Routes>
    )
}


export default RouteList;
