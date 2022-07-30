import Header from "../Header";
import Footer from "../Footer";
import { GlobalStyle } from '../../styles/gobal.style';


function App() {
    return (
      <>
      <GlobalStyle />
        <Header title="My Application" />
        <main>
          Our Amazing App ...
        </main>
        <Footer />
      </>
    );
  }
  export default App;