import "./App.css";
import DetailSection from "./components/common/DetailSection/DetailSection";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import CourseSection from "./components/common/CourseSection/CourseSection";
function App() {
    return (
        <div className="App">
            <Navbar />
            <DetailSection />
            <CourseSection />
            <Footer />
        </div>
    );
}

export default App;
