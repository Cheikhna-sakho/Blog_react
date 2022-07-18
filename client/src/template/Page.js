import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ main }) => {
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                {main}
            </div>
            <Footer />
        </div>
    )
}
export default Page;