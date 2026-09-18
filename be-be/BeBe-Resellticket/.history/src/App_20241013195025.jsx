import React from "react";

const App = () => {
  const NotFound = () => {
    return (
      <div className="container px-4 py-3 mx-auto my-4 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
        404. Not found data with current URL
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/user/login" element={<LoginModal />} />
          <Route path="/user/register" element={<RegisterModal />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
