import { Header } from "../common/Header";

const Default = ({ children }) => (
  <>
    <Header />
    <main>
      <div className="container-fluid">
        <div className="row my-5 mx-4">
          {children}
        </div>
      </div>
    </main>
  </>
)

export default Default